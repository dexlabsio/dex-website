import { cn } from "@/lib/utils";
import Image from "next/image";

import { Section } from "@/components/ui/section";
import LogoMarqueeItem from "@/components/ui/logo-marquee-item";
import Marquee from "@/components/ui/marquee";

interface LogoMarqueeItemProps {
  name: string;
  alt: string;
  lightExt?: string;
  darkExt?: string;
  showLabel?: boolean;
  customPath?: string; // New prop for logos with non-standard naming
}

// Custom logo item component for the third row
function CustomLogoMarqueeItem({ alt, customPath, className }: { alt: string; customPath: string; className?: string }) {
  const commonClasses = "flex min-w-[200px] flex-col items-center justify-center rounded-lg border bg-card/30 p-6 text-center shadow-sm transition-colors hover:bg-card/50";
  
  return (
    <div className={cn(commonClasses, className)}>
      <div className="mb-3">
        <Image
          src={customPath}
          alt={alt}
          width={720}
          height={180}
          className="h-6 w-auto opacity-90 scale-125"
        />
      </div>
      <p className="text-sm font-medium text-muted-foreground">{alt}</p>
    </div>
  );
}

interface LogosMarqueeProps {
  title?: string;
  description?: string;
  logos?: LogoMarqueeItemProps[] | false;
  className?: string;
}

export default function LogosMarquee({
  title = "Seamless integrations with your favorite data tools",
  description = "Connect dex with the tools your team already uses to streamline your data workflows.",
  logos = [
    // Row 1 - Cloud Platforms
    { name: "aws", alt: "AWS", lightExt: "png" },
    { name: "gcp", alt: "Google Cloud", showLabel: true },
    { name: "bigquery", alt: "BigQuery", showLabel: true },
    
    // Row 2 - Analytics Tools
    { name: "power_bi", alt: "Power BI", lightExt: "png", showLabel: true },
    { name: "tableau", alt: "Tableau", showLabel: true },
    { name: "looker", alt: "Looker", showLabel: true },
    { name: "metabase", alt: "Metabase", showLabel: true },
    { name: "jupyter", alt: "Jupyter", lightExt: "png", showLabel: true },
  ],
  className,
}: LogosMarqueeProps) {
  
  // Second row - Custom analytics logos 
  const secondRowCustomLogos = [
    { name: "googlesheets", alt: "Google Sheets", customPath: "/Integration_Logos_light/Google_Sheets_logo_(2014-2020).svg.png" },
  ];
  
  // Third row - Custom logos with non-standard naming
  const thirdRowLogos = [
    { name: "s3", alt: "Amazon S3", customPath: "/Integration_Logos_light/Amazon-S3-Logo.svg.png" },
    { name: "dynamodb", alt: "DynamoDB", customPath: "/Integration_Logos_light/DynamoDB.png" },
    { name: "github", alt: "GitHub", customPath: "/Integration_Logos_light/Github.png" },
    { name: "mongodb", alt: "MongoDB", customPath: "/Integration_Logos_light/mongodb-icon-1.svg" },
    { name: "excel", alt: "Microsoft Excel", customPath: "/Integration_Logos_light/Microsoft_Office_Excel_(2019–present).svg.png" },
    { name: "slack", alt: "Slack", customPath: "/Integration_Logos_light/Slack.png" },
  ];
  if (!logos || logos.length === 0) {
    return null;
  }

  const firstRow = logos.slice(0, 3);  // Cloud Platforms
  const secondRow = logos.slice(3);  // Analytics Tools

  return (
    <Section className={cn("w-full overflow-hidden px-0", className)}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
            {description}
          </p>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((logo) => (
              <LogoMarqueeItem key={logo.name} {...logo} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:25s]">
            {secondRow.map((logo) => (
              <LogoMarqueeItem key={logo.name} {...logo} />
            ))}
            {secondRowCustomLogos.map((logo) => (
              <CustomLogoMarqueeItem key={logo.name} {...logo} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:35s]">
            {thirdRowLogos.map((logo) => (
              <CustomLogoMarqueeItem key={logo.name} {...logo} />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-linear-to-r sm:block"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-linear-to-l sm:block"></div>
        </div>
      </div>
    </Section>
  );
}