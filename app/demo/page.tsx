"use client";

import { Zap, TrendingUp, Users } from 'lucide-react';
import FooterSection from "@/components/sections/footer/minimal";
import DexNavbar from "@/components/sections/navbar/dex-navbar";
import { Button } from "@/components/ui/button";
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

        setTimeout(() => {
          window.open('https://app.reclaim.ai/m/gustavo-beltrami/intro', '_blank', 'noopener,noreferrer');
        }, 1500);
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
      <DexNavbar />
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pt-12 pb-20 sm:pt-16 lg:static lg:px-8 lg:py-24">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
                >
                  <defs>
                    <pattern
                      x="100%"
                      y={-1}
                      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                      width={200}
                      height={200}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" strokeWidth={0} className="fill-white" />
                  <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
                </svg>
                <div
                  aria-hidden="true"
                  className="absolute top-[calc(100%-13rem)] -left-56 hidden transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
                >
                  <div
                    style={{
                      clipPath:
                        'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                    }}
                    className="aspect-1155/678 w-288.75 bg-linear-to-br from-[#80caff] to-[#4f46e5] opacity-10"
                  />
                </div>
              </div>
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Talk to a dex expert
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                Get your questions answered directly by a dex expert. You&apos;ll get a live demo on how dex works, why it&apos;s the unified data platform teams choose, and what it can do for your data workflows.
              </p>
              <dl className="mt-10 space-y-8 text-base/7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none mt-1">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <Zap className="h-4 w-4" />
                    </span>
                  </dt>
                  <dd>
                    <div className="font-semibold text-gray-900 mb-1">Ship trusted data faster</div>
                    <div>End-to-end platform covering ingestion, transformation, orchestration, and governance.</div>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none mt-1">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <TrendingUp className="h-4 w-4" />
                    </span>
                  </dt>
                  <dd>
                    <div className="font-semibold text-gray-900 mb-1">Build data quality and trust</div>
                    <div>Automated testing, lineage tracking, and complete transparency across your pipeline.</div>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none mt-1">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <Users className="h-4 w-4" />
                    </span>
                  </dt>
                  <dd>
                    <div className="font-semibold text-gray-900 mb-1">Unite your team</div>
                    <div>Collaborative development for analysts, data engineers, and business users.</div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="px-6 pt-10 pb-24 sm:pb-32 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              {/* Status Messages */}
              {submitStatus.type && (
                <div className={`p-4 rounded-lg mb-6 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-900">
                    Full Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                
                {/* Business Email */}
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                    Business Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                    Company Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      required
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>

                {/* Job Role */}
                <div className="sm:col-span-2">
                  <label htmlFor="jobRole" className="block text-sm/6 font-semibold text-gray-900">
                    What best describes your job?
                  </label>
                  <div className="mt-2.5">
                    <select
                      id="jobRole"
                      name="jobRole"
                      value={formData.jobRole}
                      onChange={(e) => handleChange("jobRole", e.target.value)}
                      required
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
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
                </div>

                {/* Cloud Provider */}
                <div className="sm:col-span-2">
                  <label htmlFor="cloud" className="block text-sm/6 font-semibold text-gray-900">
                    Cloud Provider
                  </label>
                  <div className="mt-2.5">
                    <select
                      id="cloud"
                      name="cloud"
                      value={formData.cloud}
                      onChange={(e) => handleChange("cloud", e.target.value)}
                      required
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    >
                      <option value="">Select your cloud provider</option>
                      <option value="aws">Amazon Web Services (AWS)</option>
                      <option value="gcp">Google Cloud Platform (GCP)</option>
                      <option value="azure">Microsoft Azure</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us more about your data challenges or what you&apos;d like to see in the demo..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Book Demo'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <FooterSection />
    </>
  );
}