import type { Metadata } from "next";
import DexNavbar from "@/components/sections/navbar/dex-navbar";
import FooterSection from "@/components/sections/footer/minimal";
import { Button } from "@/components/ui/button";
import { FunnelIcon, CpuChipIcon, CloudArrowDownIcon, ShieldCheckIcon, BoltIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "Extract & Load - dex",
  description: "High-performance connectors for all your data sources. Extract and load data efficiently with dex's unified data platform.",
};

// Hero Section Component
function HeroSection() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-10 pb-12 sm:pb-16 lg:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              New in dex: Real-time CDC connectors.{' '}
              <a href="#" className="font-semibold text-primary">
                <span aria-hidden="true" className="absolute inset-0" />
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-6xl">
              Extract & Load
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Modernize your data infrastructure with dex's high-speed data replication.
              Move large volumes of data with best-in-class CDC methods and replicate
              large databases within minutes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild>
                <a href="/demo">
                  Learn more
                </a>
              </Button>
              <a href="https://app.dexlabs.io" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-6 text-gray-900 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50 transition-colors">
                Try it now <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Features Section Component
function FeaturesSection() {
  const features = [
    {
      name: 'High-Performance Connectors',
      description:
        'Connect to databases, SaaS applications, spreadsheets and files with our pre-built connectors. Extract data efficiently with minimal configuration.',
      href: '#',
      icon: FunnelIcon,
    },
    {
      name: 'Real-Time CDC',
      description:
        'Capture data changes in real-time using Change Data Capture technology. Keep your data warehouse synchronized with source systems automatically.',
      href: '#',
      icon: BoltIcon,
    },
    {
      name: 'Scalable Architecture',
      description:
        'Built to handle enterprise-scale data volumes. Our distributed architecture ensures reliable data movement even for the largest datasets.',
      href: '#',
      icon: CloudArrowDownIcon,
    },
  ];

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Easy to configure
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Low code and no code connector builders make pipeline configuration easy - it just works.
            Reduce roadblocks and unlock insights with dex's user-friendly interface.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-primary hover:text-primary/80">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

// Stats Section Component
function StatsSection() {
  const stats = [
    { id: 1, name: 'Data sources supported', value: '200+' },
    { id: 2, name: 'Setup time reduction', value: '90%' },
    { id: 3, name: 'Data freshness', value: '<1min' },
    { id: 4, name: 'Uptime guarantee', value: '99.9%' },
  ];

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-gray-900 sm:text-4xl">
              Trusted by data teams worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Enterprise-grade reliability and performance for your data infrastructure.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

// Additional Resources Section Component
function AdditionalResourcesSection() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with dex Connectors',
      href: '#',
      description:
        'Learn how to set up your first data connector and start moving data in minutes. Complete guide with examples and best practices.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80',
      date: 'Dec 15, 2024',
      datetime: '2024-12-15',
      category: { title: 'Documentation', href: '#' },
      author: {
        name: 'dex Team',
        role: 'Engineering',
        href: '#',
        imageUrl: '/dex-logo-symbol-light.svg',
      },
    },
    {
      id: 2,
      title: 'Real-time Data Pipelines with CDC',
      href: '#',
      description:
        'Deep dive into Change Data Capture technology and how to implement real-time data synchronization with dex platform.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2915&q=80',
      date: 'Dec 10, 2024',
      datetime: '2024-12-10',
      category: { title: 'Documentation', href: '#' },
      author: {
        name: 'dex Team',
        role: 'Engineering',
        href: '#',
        imageUrl: '/dex-logo-symbol-light.svg',
      },
    },
    {
      id: 3,
      title: 'Enterprise Data Integration Patterns',
      href: '#',
      description:
        'Best practices for implementing data integration at enterprise scale. Architecture patterns, security considerations, and performance optimization.',
      imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80',
      date: 'Dec 5, 2024',
      datetime: '2024-12-05',
      category: { title: 'Documentation', href: '#' },
      author: {
        name: 'dex Team',
        role: 'Engineering',
        href: '#',
        imageUrl: '/dex-logo-symbol-light.svg',
      },
    },
  ];

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance text-gray-900 sm:text-4xl">
            Additional resources
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to develop faster with dex.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  alt=""
                  src={post.imageUrl}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

// CTA Section Component
function CTASection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
              Ready to modernize your data infrastructure?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Start building reliable data pipelines today. Connect your data sources and destinations with dex's powerful Extract & Load capabilities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/demo"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book a Demo
              </a>
              <a href="https://app.dexlabs.io" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-6 text-white hover:text-gray-100">
                Try it now <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="dex Extract & Load interface"
              src="/platform_screenshots/Connectors.png"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExtractLoadPage() {
  return (
    <>
      <DexNavbar />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <AdditionalResourcesSection />
      <CTASection />
      <FooterSection />
    </>
  );
}