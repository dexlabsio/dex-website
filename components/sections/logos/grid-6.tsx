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
        <Image src="/Customers Logos/Caffeine Army.svg" alt="Caffeine Army" width={720} height={180} className={logoImageClassName} />
      ),
    },
    {
      logo: (
        <Image src="/Customers Logos/Insider.svg" alt="Insider" width={720} height={180} className={logoImageClassName} />
      ),
    },
    {
      logo: (
        <Image src="/Customers Logos/Linus.svg" alt="Linus" width={720} height={180} className={logoImageClassName} />
      ),
    },
    {
      logo: (
        <Image src="/Customers Logos/Minimal Club.svg" alt="Minimal Club" width={720} height={180} className={logoImageClassName} />
      ),
    },
    {
      logo: (
        <Image src="/Customers Logos/Robbin.svg" alt="Robbin" width={720} height={180} className={logoImageClassName} />
      ),
    },
    {
      logo: (
        <Image src="/Customers Logos/hubii.svg" alt="Hubii" width={720} height={180} className={logoImageClassName} />
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
