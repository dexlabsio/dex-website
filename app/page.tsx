import { Share2 } from "lucide-react";
import Navbar from "@/components/sections/navbar/default";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Article Container */}
      <article className="mx-auto max-w-4xl px-6 lg:px-8 pt-16 sm:pt-20">
        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
            Announcements
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-200">
            Company
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl">
          dex team is joining Nubank to accelerate data and AI strategy
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          We&apos;re excited to announce that the dex team is joining Nubank. Here&apos;s what comes next
        </p>

        {/* Author & Meta Info */}
        <div className="mt-8 flex items-center justify-between border-b border-gray-200 pb-8">
          <div className="flex items-center gap-4">
            {/* Author Avatar */}
            <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
              <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-gray-600">
                GB
              </div>
            </div>

            {/* Author Info */}
            <div className="flex flex-col">
              <span className="text-base font-semibold text-gray-900">
                Gustavo Beltrami, CEO
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  October 15, 2025
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  3 min read
                </span>
              </div>
            </div>
          </div>

          {/* Social Share Icons */}
          <div className="flex items-center gap-3">
            <button
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              aria-label="Share"
            >
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Banner Image */}
        <div className="mt-12">
          <img
            src="/Nu_dex_acquistion_banner (1).svg"
            alt="Nubank acquires dex"
            className="aspect-video rounded-xl shadow-2xl ring-1 ring-gray-900/10 w-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="mt-12 pb-20">
          <div className="space-y-6 text-base/7 text-gray-700">
            <p>
              Today we&apos;re excited to announce that the dex team is joining Nubank. This is an important step for dex&apos;s talented engineers, who will be able to bring their knowledge and expertise to a company of Nubank&apos;s scale and relevance, serving more than 127 million customers across Latin America. Our arrival complements Nubank&apos;s ongoing investments in data and AI capabilities, with the goal of continuing to drive global disruption in financial services enabled by advances in artificial intelligence.
            </p>
          </div>

          {/* Section: Our Mission and Journey */}
          <h2 className="mt-16 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Our Mission and Journey
          </h2>
          <div className="mt-6 space-y-6 text-base/7 text-gray-700">
            <p>
              When we started dex, our mission was to make modern data engineering accessible to every company. We built dex as an all-in-one platform that combined data collection, transformation, orchestration, and monitoring in a way that eliminated complexity and empowered teams to focus on building what makes their business special. To deliver on this promise, we architected dex from the ground up for scale—leveraging distributed systems, cloud-native infrastructure, and modern data processing paradigms to handle massive data volumes while maintaining performance and reliability.
            </p>

            <p>
              Over the past years, dex has processed hundreds of petabytes of data across hundreds of environments, helping companies transform their data operations. We&apos;ve seen teams reduce pipeline delivery time by 60-80%, eliminate platform maintenance overhead entirely, and achieve 4-8x cost savings compared to traditional approaches.
            </p>

            <p>
              We&apos;ve been longtime admirers of Nubank and their mission to fight complexity and empower people through technology. The opportunity to bring our expertise in building scalable data platforms alongside Nubank&apos;s team is incredibly exciting.
            </p>
          </div>

          {/* Section: What Will Happen to dex */}
          <h2 className="mt-16 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            What Will Happen to dex
          </h2>
          <div className="mt-6 space-y-6 text-base/7 text-gray-700">
            <p>
              The dex platform will continue to operate until February 1st, 2026, giving everyone time to plan and execute their transition. During this period, support will be limited to stability issues only. Development of new connectors will be suspended, and new sign-ups are disabled starting today.
            </p>
          </div>

          {/* Section: How to transition */}
          <h2 className="mt-16 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            How to Transition from dex
          </h2>
          <div className="mt-6 space-y-6 text-base/7 text-gray-700">
            <p>
              We understand transitions take time and planning. We&apos;re committed to making this as smooth as possible for all our customers.
            </p>

            <p>
              We&apos;ve prepared a comprehensive migration guide that outlines two recommended paths: <strong className="text-gray-900">dbt Cloud + Fivetran</strong> (best for teams preferring specialized tools) and <strong className="text-gray-900">Databricks</strong> (best for all-in-one platform needs). The guide includes detailed feature comparisons, pricing information, and step-by-step instructions.
            </p>

            <p>
              <a
                href="https://docs.dexlabs.io/migration/migrating-from-dex"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:text-primary/80 underline"
              >
                Read the full migration guide →
              </a>
            </p>

            <p>
              Our team will be in contact with each customer individually to discuss your specific needs and help plan your migration path.
            </p>
          </div>

          {/* Section: Thank you */}
          <h2 className="mt-16 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Thank you
          </h2>
          <div className="mt-6 space-y-6 text-base/7 text-gray-700">
            <p>
              To every team and data engineer who trusted dex: thank you. Building alongside you has been the greatest part of this journey. Watching you scale your companies, build incredible data products, and empower your teams with insights that drive real business impact—these stories have been our greatest reward.
            </p>

            <p>
              We&apos;re incredibly proud of what we built together and extremely excited to be part of Nubank&apos;s future achievements.
            </p>
          </div>

          {/* Author Bio */}
          <div className="mt-16 border-t border-gray-200 pt-10">
            <h3 className="text-xl font-semibold text-gray-900">Written by Gustavo Beltrami</h3>
            <p className="mt-2 text-base font-medium text-gray-600">Founder &amp; CEO</p>
          </div>
        </div>
      </article>
    </div>
  );
}
