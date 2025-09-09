import { ChevronRightIcon } from 'lucide-react';
import FlowScreenshotIllustration from "@/components/illustrations/flow-screenshot";
import { Button } from "@/components/ui/button";

interface HeroProps {
  className?: string;
}

export default function Hero({ }: HeroProps) {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-12 sm:pb-16 lg:flex lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0">
          <div className="mt-8 sm:mt-12 lg:mt-0">
            <div className="inline-flex space-x-6">
              <a href="https://dex-labs-1.gitbook.io/dex/major-releases/q1-2025-spring-release" target="_blank" rel="noopener noreferrer">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm/6 font-semibold text-indigo-600 ring-1 ring-indigo-600/20 ring-inset">
                  What&apos;s new
                </span>
              </a>
              <a href="#product" className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600 hover:text-gray-900 transition-colors">
                <span>Unified data platform</span>
                <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-400" />
              </a>
            </div>
          </div>
          <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
            The simplest path to reliable data
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            dex is a unified data platform that makes it easy to get answers, make decisions and automate processes.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button asChild>
              <a href="/demo">
                Book a Demo
              </a>
            </Button>
            <a href="https://app.dexlabs.io" className="text-sm/6 font-semibold text-gray-900">
              Sign in <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="w-304 rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10">
                <FlowScreenshotIllustration className="w-full rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
