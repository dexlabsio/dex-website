"use client";

import FooterSection from "@/components/sections/footer/minimal";
import Navbar from "@/components/sections/navbar/default";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { useState } from "react";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobRole: "",
    cloud: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your demo request has been submitted successfully. We\'ll get in touch with you soon.'
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          jobRole: "",
          cloud: "",
          message: "",
        });

        // Open scheduling link in a new tab on successful submission
        window.open('https://app.reclaim.ai/m/gustavo-beltrami/intro', '_blank', 'noopener,noreferrer');
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again. ' + error
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Navbar />
      <Section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col items-center gap-12">
            {/* Header */}
            <div className="text-center max-w-2xl">
              <h1 className="from-foreground to-foreground dark:to-muted-foreground bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-transparent drop-shadow-2xl sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight mb-6">
                Book a Demo
              </h1>
              <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
                Ready to see how dex can transform your data workflows? 
                Fill out the form below and we`ll get in touch to schedule your personalized demo.
              </p>
            </div>

            {/* Form */}
            <div className="glass-1 hover:glass-2 w-full max-w-2xl p-8 rounded-xl shadow-xl transition-all">
              {/* Status Messages */}
              {submitStatus.type && (
                <div className={`p-4 rounded-lg mb-6 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800'
                    : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
                }`}>
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                {/* Business Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Business Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company Name *
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                {/* Job Role */}
                <div className="space-y-2">
                  <label htmlFor="jobRole" className="text-sm font-medium text-foreground">
                    What best describes your job? *
                  </label>
                  <select
                    id="jobRole"
                    value={formData.jobRole}
                    onChange={(e) => handleChange("jobRole", e.target.value)}
                    required
                    className="w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  >
                    <option value="">Select your role</option>
                    <option value="data-engineer">Data Engineer</option>
                    <option value="data-scientist">Data Scientist</option>
                    <option value="analytics-engineer">Analytics Engineer</option>
                    <option value="engineering-manager">Engineering Manager</option>
                    <option value="cto">CTO</option>
                    <option value="data-team-lead">Data Team Lead</option>
                    <option value="software-engineer">Software Engineer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Cloud Provider */}
                <div className="space-y-2">
                  <label htmlFor="cloud" className="text-sm font-medium text-foreground">
                    Cloud Provider *
                  </label>
                  <select
                    id="cloud"
                    value={formData.cloud}
                    onChange={(e) => handleChange("cloud", e.target.value)}
                    required
                    className="w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  >
                    <option value="">Select your cloud provider</option>
                    <option value="aws">Amazon Web Services (AWS)</option>
                    <option value="gcp">Google Cloud Platform (GCP)</option>
                    <option value="azure">Microsoft Azure</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Optional Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us more about your data challenges or what you'd like to see in the demo..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="px-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Book Demo'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>
      <FooterSection />
    </>
  );
}