import Navbar from '@/components/sections/navbar/default';
import FooterSection from '@/components/sections/footer/minimal';
import { Settings, Bell, Zap, BarChart3, Bot } from 'lucide-react';

const features = [
  {
    name: 'New Orchestration UI',
    description:
      'Redesigned interface for managing data workflows with enhanced visibility, simplified scheduling, and intuitive pipeline monitoring.',
    icon: Settings,
  },
  {
    name: 'Notification Center',
    description: 'Stay informed with real-time alerts for pipeline status, data quality issues, and system updates across all your workflows.',
    icon: Bell,
  },
  {
    name: 'dex Connectors Ultra',
    description: 'High-performance connectors with 50x faster data ingestion, advanced error handling, and support for complex data transformations.',
    icon: Zap,
  },
  {
    name: 'BI Module',
    description: 'Native business intelligence capabilities with pre-built dashboards, custom visualizations, and automated reporting features.',
    icon: BarChart3,
  },
  {
    name: 'Improvements in dex AI Copilot',
    description: 'Enhanced natural language processing for SQL generation, smarter data recommendations, and context-aware assistance.',
    icon: Bot,
  },
]

export default function SummerReleasePage() {
  return (
    <div className="bg-white">
      <Navbar />

      <div className="relative isolate px-6 pt-10 lg:px-8">
        <div className="mx-auto max-w-2xl pb-12 sm:pb-16 lg:pb-20">
          <div className="mt-8 sm:mt-12 lg:mt-0">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Summer 2025 Release{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Efficiency Meets Scale
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <a
                href="/demo"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="overflow-hidden bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-container px-6 lg:px-8">
          {/* Centered Image at Top */}
          <div className="mx-auto max-w-4xl mb-16 lg:mb-20">
            <div className="aspect-video rounded-xl shadow-2xl ring-1 ring-gray-900/10 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-16 w-16 text-gray-400">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <p className="mt-3 text-base text-gray-500">16:9 Illustration Placeholder - Five Game-Changing Features</p>
              </div>
            </div>
          </div>

          {/* Text Content Below */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">Summer 2025 Release</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Five game-changing features
            </p>
            <p className="mt-6 text-lg/8 text-gray-700 mx-auto max-w-2xl">
              Our biggest release yet brings powerful new capabilities to streamline your data operations, enhance collaboration, and accelerate insights across your entire data lifecycle.
            </p>
          </div>

          {/* Features List */}
          <div className="mx-auto max-w-5xl mt-16">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt className="flex items-center text-base font-semibold text-gray-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 mr-4">
                      <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base text-gray-600 ml-14">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Feature Detail Section 1: New Orchestration UI */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-container px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base/7 font-semibold text-indigo-600">New Orchestration UI</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Redesigned workflow management
            </h1>
            <div className="mt-10 max-w-4xl text-base/7 text-gray-700">
              <p>
                Experience a completely redesigned interface for managing your data workflows with unprecedented clarity and control. Our new Orchestration UI transforms complex pipeline management into an intuitive, visual experience that puts you in command of your entire data ecosystem.
              </p>
              <p className="mt-8">
                Enhanced visibility means you can monitor pipeline status, track data lineage, and identify bottlenecks at a glance. Simplified scheduling with drag-and-drop functionality makes it effortless to orchestrate complex workflows across multiple data sources. Real-time monitoring provides instant insights into pipeline performance and health metrics.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16 lg:pt-20">
          <div className="mx-auto max-w-container px-6 lg:px-8">
            <div className="aspect-video rounded-xl shadow-2xl ring-1 ring-gray-900/10 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-12 w-12 text-gray-400">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h6m-3-3v6m-3 3l3-3 3 3" />
                  </svg>
                </div>
                <p className="mt-2 text-sm text-gray-500">16:9 Video Placeholder - New Orchestration UI Demo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Feature Detail Section 2: Notification Center */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-container px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base/7 font-semibold text-indigo-600">Notification Center</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Monitor every pipeline execution
            </h1>
            <div className="mt-8">
              <img
                src="/Summer 2025 Launch Week/slack_notification_screenshot.png"
                alt="Slack notification screenshot"
                className="rounded-lg shadow-lg ring-1 ring-gray-900/10 max-w-md"
              />
            </div>
            <div className="mt-10 max-w-4xl text-base/7 text-gray-700">
              <p>
                You shouldn't have to dig through logs or jump between tools to know what's happening with your data. With our new Notification Center, you can now monitor and track every pipeline execution in real time — right from dex.
              </p>
              <p className="mt-8">
                Built for scale, the Notification Center lets you configure alerts for specific Flows, choose severity levels and trigger points (start, success, failure), and get messages sent directly to Slack channels. Bulk configuration capabilities mean you can start monitoring one or several pipelines with zero friction, while detailed end-to-end error descriptions enable faster troubleshooting across your entire data infrastructure.
              </p>
              <p className="mt-8">
                Stay on top of your data operations without breaking your flow. The Notification Center is generally available for all users on dex, delivering enterprise-grade monitoring that scales with your growing data needs.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16 lg:pt-20">
          <div className="mx-auto max-w-container px-6 lg:px-8">
            <video
              className="aspect-video rounded-xl shadow-2xl ring-1 ring-gray-900/10 w-full"
              controls
              preload="metadata"
            >
              <source src="/Summer 2025 Launch Week/Notification Center_SummerRelease.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Feature Detail Section 3: dex Connectors Ultra */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-container px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base/7 font-semibold text-indigo-600">dex Connectors Ultra</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Lightning-fast data ingestion
            </h1>
            <div className="mt-10 max-w-4xl text-base/7 text-gray-700">
              <p>
                We're excited to introduce dex Connectors Ultra, our new Rust-based connectors for high-performance data replication and CDC. This feature emerged from direct customer needs, and our team delivered it rapidly. What made this possible wasn't just the development sprint, but the years we've invested building a solid foundation for performance, extensibility, and cloud efficiency.
              </p>
              <p className="mt-8">
                dex Connectors Ultra delivers ultra-high performance when handling large volumes of data. In real-world testing, we replicated 230GB / 2.3B records in just 22 minutes, with minimal infrastructure requirements. Our Rust-based technology handles historical snapshots and large volume ingestion for Postgres, MySQL, and SQL Server databases, seamlessly integrating with CDC for incremental data collection based on logs.
              </p>
              <p className="mt-8">
                Available to all users on the dex data platform, Connectors Ultra provides a seamless experience from initial bulk data replication to ongoing incremental updates. After the initial snapshot using Ultra Connectors, users transition automatically to log-based CDC for efficient, real-time data synchronization - all within a single, integrated workflow.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16 lg:pt-20">
          <div className="mx-auto max-w-container px-6 lg:px-8">
            <img
              src="/Summer 2025 Launch Week/dex Connectors Ultra.png"
              alt="dex Connectors Ultra performance comparison"
              className="aspect-video rounded-xl shadow-2xl ring-1 ring-gray-900/10 w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Feature Detail Section 4: BI Module */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-container px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base/7 font-semibold text-indigo-600">BI Module</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Native business intelligence
            </h1>
            <div className="mt-10 max-w-4xl text-base/7 text-gray-700">
              <p>
                Transform your data into actionable insights with our built-in Business Intelligence module. Create stunning dashboards, generate automated reports, and build custom visualizations without leaving the dex platform. Pre-built templates for common business metrics get you started instantly.
              </p>
              <p className="mt-8">
                Drag-and-drop dashboard builder makes it easy for non-technical users to create powerful visualizations. Automated report scheduling ensures stakeholders receive critical insights when they need them. Advanced analytics capabilities including trend analysis, forecasting, and anomaly detection help you stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16 lg:pt-20">
          <div className="mx-auto max-w-container px-6 lg:px-8">
            <div className="aspect-video rounded-xl shadow-2xl ring-1 ring-gray-900/10 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-12 w-12 text-gray-400">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="mt-2 text-sm text-gray-500">16:9 Video Placeholder - BI Module Demo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Feature Detail Section 5: Improvements in dex AI Copilot */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-container px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base/7 font-semibold text-indigo-600">Improvements in dex AI Copilot</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Smarter AI assistance
            </h1>
            <div className="mt-10 max-w-4xl text-base/7 text-gray-700">
              <p>
                Data engineering remains one of the most complex disciplines in modern technology. Beyond modeling and coding, data teams juggle compute optimization, ingestion pipelines, orchestration workflows, dependency management, monitoring systems, testing frameworks, and comprehensive documentation - all firing on all cylinders across distributed environments. The challenge of delivering clean, reliable data at scale has never been greater. Our AI advancements are transforming how teams approach the modeling and coding aspects of this complexity.
              </p>
              <p className="mt-8">
                Our enhanced AI Copilot now features specialized agents programmed directly into the dex interface to execute specific tasks: write context-aware queries, format and clean up your code, fix SQL syntax errors, add helpful comments, and explain complex queries. Beyond these specialized agents, our generalized model helps users write SQL queries from natural language requests, with full context-awareness of dex platform technologies, frameworks, and capabilities.
              </p>
              <p className="mt-8">
                The game-changer? Users can now drag and drop specific data models directly into our AI chatbox for context. This allows the copilot to work within the specific context of your data model, helping you build high-quality data tables using targeted upstream models instead of guessing from the entire data universe. The result is more precise assistance and higher-quality outputs tailored to your exact data architecture.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16 lg:pt-20">
          <div className="mx-auto max-w-container px-6 lg:px-8">
            <div className="aspect-video rounded-xl shadow-2xl ring-1 ring-gray-900/10 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-12 w-12 text-gray-400">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="mt-2 text-sm text-gray-500">16:9 Video Placeholder - dex AI Copilot Demo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}