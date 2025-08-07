import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Database interface (you can replace this with your preferred database)
interface DemoRequest {
  id?: string;
  name: string;
  email: string;
  company: string;
  jobRole: string;
  cloud: string;
  message?: string;
  submittedAt: Date;
}

// Simple in-memory storage (replace with your database)
const demoRequests: DemoRequest[] = [];

// Email transporter setup
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Email template
const createEmailHTML = (data: DemoRequest) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Demo Request - dex</title>
      <style>
        body { font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif; margin: 0; padding: 20px; background-color: #f8f9fa; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #365A9C 0%, #6098FF 100%); color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: 600; color: #374151; margin-bottom: 5px; display: block; }
        .value { color: #6b7280; background: #f9fafb; padding: 12px; border-radius: 8px; border: 1px solid #e5e7eb; }
        .footer { background: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 24px;">New Demo Request</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone wants to book a demo with dex</p>
        </div>
        
        <div class="content">
          <div class="field">
            <span class="label">Name</span>
            <div class="value">${data.name}</div>
          </div>
          
          <div class="field">
            <span class="label">Business Email</span>
            <div class="value">${data.email}</div>
          </div>
          
          <div class="field">
            <span class="label">Company</span>
            <div class="value">${data.company}</div>
          </div>
          
          <div class="field">
            <span class="label">Job Role</span>
            <div class="value">${data.jobRole}</div>
          </div>
          
          <div class="field">
            <span class="label">Cloud Provider</span>
            <div class="value">${data.cloud}</div>
          </div>
          
          ${data.message ? `
          <div class="field">
            <span class="label">Message</span>
            <div class="value">${data.message}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <span class="label">Submitted At</span>
            <div class="value">${data.submittedAt.toLocaleString()}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This demo request was submitted through the dex website.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, company, jobRole, cloud, message } = body;
    
    if (!name || !email || !company || !jobRole || !cloud) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create demo request object
    const demoRequest: DemoRequest = {
      id: Date.now().toString(),
      name,
      email,
      company,
      jobRole,
      cloud,
      message: message || '',
      submittedAt: new Date(),
    };

    // Store in database (currently in-memory, replace with your database)
    demoRequests.push(demoRequest);
    console.log('Demo request stored:', demoRequest);

    // Send email notifications
    try {
      const transporter = createTransporter();
      
      const mailOptions = {
        from: process.env.SMTP_FROM || 'noreply@dexlabs.io',
        to: ['gustavo.beltrami@dexlabs.io', 'support@dexlabs.io'],
        subject: `New Demo Request from ${name} at ${company}`,
        html: createEmailHTML(demoRequest),
        text: `
New Demo Request

Name: ${name}
Email: ${email}
Company: ${company}
Job Role: ${jobRole}
Cloud Provider: ${cloud}
Message: ${message || 'None'}
Submitted: ${demoRequest.submittedAt.toLocaleString()}
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Demo request submitted successfully',
        id: demoRequest.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Demo submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve demo requests (for admin use)
export async function GET(request: NextRequest) {
  try {
    // Add authentication here in production
    const url = new URL(request.url);
    const adminKey = url.searchParams.get('key');
    
    if (adminKey !== process.env.ADMIN_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    return NextResponse.json({
      success: true,
      data: demoRequests,
      total: demoRequests.length
    });
    
  } catch (error) {
    console.error('Error fetching demo requests:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}