import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

const logoImageClassName = "h-36 w-auto opacity-70 object-contain";

import { Section } from "../../ui/section";

interface LogoItemProps {
  logo: ReactNode;
}

interface LogosProps {
  title?: string;
  logoItems?: LogoItemProps[];
  className?: string;
}

export default function Logos({
  title = "Trusted by world's leading companies",
  logoItems = [
    {
      logo: (
        <>
          <img 
            src="/Customers Logos/Caffeine Army.svg" 
            alt="Caffeine Army" 
            className="h-12 w-auto max-w-[120px] opacity-70 object-contain dark:hidden"
          />
          <img 
            src="/clients_logo_dark/Caffeine Army.svg" 
            alt="Caffeine Army" 
            className="h-12 w-auto max-w-[120px] opacity-70 object-contain hidden dark:block"
          />
        </>
      ),
    },
    {
      logo: (
        <>
          <img 
            src="/Customers Logos/Insider.svg" 
            alt="Insider" 
            className="h-12 w-auto max-w-[120px] opacity-70 object-contain dark:hidden"
          />
          <img 
            src="/clients_logo_dark/Insider.svg" 
            alt="Insider" 
            className="h-12 w-auto max-w-[120px] opacity-70 object-contain hidden dark:block"
          />
        </>
      ),
    },
    {
      logo: (
        <>
          <img 
            src="/Customers Logos/Linus.svg" 
            alt="Linus" 
            className="h-12 w-auto max-w-[120px] opacity-70 object-contain dark:hidden"
          />
          <img 
            src="/clients_logo_dark/Linus.svg" 
            alt="Linus" 
            className="h-12 w-auto max-w-[120px] opacity-70 object-contain hidden dark:block"
          />
        </>
      ),
    },
    {
      logo: (
        <>
          <img 
            src="/Customers Logos/Minimal Club.svg" 
            alt="Minimal Club" 
            className="h-12 w-auto max-w-[120px] opacity-70 object-contain dark:hidden"
          />
          <img 
            src="/clients_logo_dark/Minimal Club.svg" 
            alt="Minimal Club" 
            className="h-12 w-auto max-w-[120px] opacity-70 object-contain hidden dark:block"
          />
        </>
      ),
    },
    {
      logo: (
        <>
          <img 
            src="/Customers Logos/Robbin.svg" 
            alt="Robbin" 
            className="h-12 w-auto max-w-[120px] opacity-70 object-contain dark:hidden"
          />
          <img 
            src="/clients_logo_dark/Robbin.svg" 
            alt="Robbin" 
            className="h-12 w-auto max-w-[120px] opacity-70 object-contain hidden dark:block"
          />
        </>
      ),
    },
    {
      logo: (
        <>
          <img 
            src="/Customers Logos/hubii.svg" 
            alt="Hubii" 
            className="h-12 w-auto max-w-[120px] opacity-70 object-contain dark:hidden"
          />
          <img 
            src="/clients_logo_dark/hubii.svg" 
            alt="Hubii" 
            className="h-12 w-auto max-w-[120px] opacity-70 object-contain hidden dark:block"
          />
        </>
      ),
    },
  ],
  className,
}: LogosProps) {
  return (
    <Section className={cn(className)}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <h2 className="text-md text-muted-foreground font-semibold">{title}</h2>
        <div className="bg-border dark:bg-border/20 relative grid w-full auto-rows-fr grid-cols-2 gap-[1px] text-center md:grid-cols-3">
          {logoItems.map((item, index) => (
            <div
              key={index}
              className="bg-background flex aspect-2/1 items-center justify-center p-6 md:p-8 lg:p-10"
            >
              {item.logo}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
