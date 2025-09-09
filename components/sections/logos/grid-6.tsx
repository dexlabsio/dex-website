import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface LogosProps {
  className?: string;
}

export default function Logos({ className }: LogosProps) {
  return (
    <div className={cn("bg-white py-12 sm:py-16", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Trusted by the most innovative teams
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Join thousands of data teams who trust dex to power their most critical analytics workflows. From startups to enterprises, teams choose dex for reliable data engineering solutions.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <Button asChild>
                <a href="/demo">
                  Book a Demo
                </a>
              </Button>
              <a href="https://app.dexlabs.io" className="text-sm font-semibold text-gray-900 hover:text-gray-700">
                Sign in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-xl lg:pl-8">
            <Image
              alt="Caffeine Army"
              src="/Customers Logos/Caffeine Army.svg"
              width={105}
              height={48}
              className="max-h-20 w-full object-contain object-center"
            />
            <Image
              alt="Insider"
              src="/Customers Logos/Insider.svg"
              width={104}
              height={48}
              className="max-h-20 w-full object-contain object-center"
            />
            <Image
              alt="Linus"
              src="/Customers Logos/Linus.svg"
              width={140}
              height={48}
              className="max-h-20 w-full object-contain object-center"
            />
            <Image
              alt="Moon Ventures"
              src="/Customers Logos/Moon Ventures (3).svg"
              width={136}
              height={48}
              className="max-h-20 w-full object-contain object-center"
            />
            <Image
              alt="Robbin"
              src="/Customers Logos/Robbin.svg"
              width={158}
              height={48}
              className="max-h-20 w-full object-contain object-center"
            />
            <Image
              alt="Hubii"
              src="/Customers Logos/hubii.svg"
              width={147}
              height={48}
              className="max-h-20 w-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
