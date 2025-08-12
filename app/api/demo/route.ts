import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Database interface
interface DemoRequest {
  id?: string;
  name: string;
  email: string;
  company: string;
  job_role: string;
  cloud: string;
  message?: string;
  submitted_at?: string;
}

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY!);

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
            <div class="value">${data.job_role}</div>
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
            <div class="value">${data.submitted_at}</div>
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
      name,
      email,
      company,
      job_role: jobRole,
      cloud,
      message: message || '',
    };

    // Store in Supabase database
    const { data: insertedData, error: dbError } = await supabase
      .from('demo_requests')
      .insert([demoRequest])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save demo request' },
        { status: 500 }
      );
    }

    console.log('Demo request stored:', insertedData);

    // Send email notifications with Resend
    try {
      await resend.emails.send({
        from: 'noreply@dexlabs.io',
        to: ['gustavo.beltrami@dexlabs.io', 'support@dexlabs.io'],
        subject: `New Demo Request from ${name} at ${company}`,
        html: createEmailHTML({
          ...demoRequest,
          submitted_at: insertedData.submitted_at
        }),
      });
      console.log('Email sent successfully');
      
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Demo request submitted successfully',
        id: insertedData.id 
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

    const { data: demoRequests, error } = await supabase
      .from('demo_requests')
      .select('*')
      .order('submitted_at', { ascending: false });

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch demo requests' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: demoRequests,
      total: demoRequests?.length || 0
    });
    
  } catch (error) {
    console.error('Error fetching demo requests:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}