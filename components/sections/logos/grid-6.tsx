import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

const logoImageClassName = "h-26 w-auto max-w-[250px] opacity-70 object-contain";

import { Section } from "../../ui/section";

interface LogoImageProps {
  name: string;
  alt: string;
}

function LogoImage({ name, alt }: LogoImageProps) {
  return (
    <>
      <Image 
        src={`/Customers Logos/${name}.svg`} 
        alt={alt} 
        width={720}
        height={180}
        className={`${logoImageClassName} dark:hidden`}
      />
      <Image 
        src={`/clients_logo_dark/${name}.svg`} 
        alt={alt} 
        width={720}
        height={180}
        className={`${logoImageClassName} hidden dark:block`}
      />
    </>
  );
}

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
    { logo: <LogoImage name="Caffeine Army" alt="Caffeine Army" /> },
    { logo: <LogoImage name="Insider" alt="Insider" /> },
    { logo: <LogoImage name="Linus" alt="Linus" /> },
    { logo: (
      <>
        <Image 
          src="/Customers Logos/Moon Ventures (3).svg" 
          alt="Moon Ventures" 
          width={720}
          height={180}
          className={`${logoImageClassName} dark:hidden`}
        />
        <Image 
          src="/clients_logo_dark/Moon Ventures_dark mode.svg" 
          alt="Moon Ventures" 
          width={720}
          height={180}
          className={`${logoImageClassName} hidden dark:block`}
        />
      </>
    ) },
    { logo: <LogoImage name="Robbin" alt="Robbin" /> },
    { logo: <LogoImage name="hubii" alt="Hubii" /> },
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
