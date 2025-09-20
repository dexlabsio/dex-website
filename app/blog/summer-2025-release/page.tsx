import Navbar from '@/components/sections/navbar/default';
import FooterSection from '@/components/sections/footer/minimal';
import { Settings, Bell, Zap, BarChart3, Bot } from 'lucide-react';

const features = [
  {
    name: 'New Orchestration UI',
    description:
      'Revolutionary Flow experience built for enterprise scale. Orchestrate hundreds of tasks with auto-DAG creation, dependency management, and seamless monitoring integration.',
    icon: Settings,
  },
  {
    name: 'Notification Center',
    description: 'Enterprise-grade monitoring with real-time alerts, Slack integration, and comprehensive observability for every pipeline execution at scale.',
    icon: Bell,
  },
  {
    name: 'dex Connectors Ultra',
    description: 'Rust-powered ultra-high performance connectors for large volumes of data. Seamless CDC integration enables real-time data synchronization at enterprise scale.',
    icon: Zap,
  },
  {
    name: 'BI Module',
    description: 'Complete the data journey with integrated self-service analytics. Democratize insights with intuitive dashboards and collaborative business intelligence.',
    icon: BarChart3,
  },
  {
    name: 'Improvements in dex AI Copilot',
    description: 'Context-aware AI assistance with specialized agents, drag-and-drop model integration, and intelligent SQL generation for enhanced productivity.',
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
                <a href="#features" className="font-semibold text-primary">
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
              Five game-changing features that transform how you build, monitor, and scale your data operations. From lightning-fast connectors to intelligent AI assistance, every enhancement is designed to handle enterprise-scale workloads with unprecedented efficiency.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <a
                href="/demo"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="overflow-hidden bg-white py-12 sm:py-16">
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
            <h2 className="text-base/7 font-semibold text-primary">Summer 2025 Release</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Five game-changing features
            </p>
            <p className="mt-6 text-lg/8 text-gray-700 mx-auto max-w-2xl">
              Built for enterprise scale, this comprehensive release delivers revolutionary orchestration, intelligent monitoring, ultra-fast connectors, integrated business intelligence, and enhanced AI assistance — completing your end-to-end data platform.
            </p>
          </div>

          {/* Features List */}
          <div className="mx-auto max-w-5xl mt-16">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt className="flex items-center text-base font-semibold text-gray-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary mr-4">
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
            <div className="flex items-center gap-3">
              <p className="text-base/7 font-semibold text-primary">New Orchestration UI</p>
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                Coming Soon
              </span>
            </div>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Redesigned Flow Experience
            </h1>
            <div className="mt-10 max-w-4xl text-base/7 text-gray-700">
              <p>
                Built for scale from the ground up, our new Orchestration UI revolutionizes how you manage complex data workflows at enterprise scale. Building on dex&apos;s proven auto-DAG creation concepts, this declarative orchestration experience eliminates the friction of managing hundreds or thousands of tasks simultaneously.
              </p>
              <p className="mt-8">
                Select any combination of workloads — from data ingestion and SQL transformations to custom Python scripts — and orchestrate them with unprecedented efficiency. Choose specific models or model tags from your development work, or select upstream and downstream dependencies to instantly add entire pipeline chains to your task list. dex automatically designs optimal execution order and dependencies, creating a seamless, error-proof experience. Chain multiple pipelines together to define custom execution sequences that match your exact requirements.
              </p>
              <p className="mt-8">
                This transforms how teams work at scale: orchestrate enterprise-scale workflows in minutes instead of days, with complete transparency into upstream and downstream lineage. Enhanced by our native Notification Center, every orchestrated workflow benefits from real-time alerts and comprehensive observability. Maximum reliability meets maximum efficiency, finally delivering the orchestration experience that scales with your ambitions.
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
              <source src="/Summer 2025 Launch Week/orchestration_ux_summer_release.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
            <p className="text-base/7 font-semibold text-primary">Notification Center</p>
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
                You shouldn&apos;t have to dig through logs or jump between tools to know what&apos;s happening with your data. With our new Notification Center, you can now monitor and track every pipeline execution in real time — right from dex.
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
            <p className="text-base/7 font-semibold text-primary">dex Connectors Ultra</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Lightning-fast data ingestion
            </h1>
            <div className="mt-10 max-w-4xl text-base/7 text-gray-700">
              <p>
                We&apos;re excited to introduce dex Connectors Ultra, our new Rust-based connectors for high-performance data replication and CDC. This feature emerged from direct customer needs, and our team delivered it rapidly. What made this possible wasn&apos;t just the development sprint, but the years we&apos;ve invested building a solid foundation for performance, extensibility, and cloud efficiency.
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
            <div className="flex items-center gap-3">
              <p className="text-base/7 font-semibold text-primary">BI Module</p>
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                Coming Soon
              </span>
            </div>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Native business intelligence
            </h1>
            <div className="mt-10 max-w-4xl text-base/7 text-gray-700">
              <p>
                Complete your data journey with a comprehensive BI module integrated directly into the dex platform. Create dynamic charts and analysis, build and share interactive dashboards, explore data with self-service analytics, and collaborate seamlessly across teams — all designed to democratize data insights and extract maximum value without ever leaving dex.
              </p>
              <p className="mt-8">
                This represents a significant step toward our vision of an integrated data platform that spans the entire data lifecycle. Now dex users can derive real business value from data processed by dex, with intuitive drag-and-drop visualization tools that make complex data accessible to everyone — from data analysts to business stakeholders. The complete data journey — ingestion, transformation, orchestration, and self-service business intelligence — unified in a single platform.
              </p>
              <p className="mt-8">
                Currently in internal testing, the BI module will be available to all dex users in the coming weeks, delivering enterprise-grade business intelligence capabilities with the ease-of-use that empowers every team member to become data-driven.
              </p>
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
            <p className="text-base/7 font-semibold text-primary">Improvements in dex AI Copilot</p>
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
            <video
              className="aspect-video rounded-xl shadow-2xl ring-1 ring-gray-900/10 w-full"
              controls
              preload="metadata"
            >
              <source src="/Summer 2025 Launch Week/ai_assistance_summer_release.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}