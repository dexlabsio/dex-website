import { ReactNode } from "react";
import Image from "next/image";

import { Section } from "../../ui/section";

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Logos({
  title = "Seamless integrations with your favorite data science and analytics tools",
  badge = false,
  logos = [
    <div key="aws" className="flex items-center gap-2 text-sm font-medium">
      <Image src="/Amazon_Web_Services_Logo.svg.png" alt="AWS" width={24} height={24} className="h-6 w-auto opacity-70" />
    </div>,
    <div key="gcp" className="flex items-center gap-2 text-sm font-medium">
      <Image src="/gcp.svg" alt="Google Cloud" width={24} height={24} className="h-6 w-auto opacity-70" />
      <span>Google Cloud</span>
    </div>,
    <div key="bigquery" className="flex items-center gap-2 text-sm font-medium">
      <Image src="/google-bigquery-logo-1.svg" alt="BigQuery" width={24} height={24} className="h-6 w-auto opacity-70" />
      <span>BigQuery</span>
    </div>,
    <div key="powerbi" className="flex items-center gap-2 text-sm font-medium">
      <Image src="/New_Power_BI_Logo.svg.png" alt="Power BI" width={24} height={24} className="h-6 w-auto opacity-70" />
      <span>Power BI</span>
    </div>,
    <div key="tableau" className="flex items-center gap-2 text-sm font-medium">
      <Image src="/tableau-software.svg" alt="Tableau" width={24} height={24} className="h-6 w-auto opacity-70" />
      <span>Tableau</span>
    </div>,
    <div key="looker" className="flex items-center gap-2 text-sm font-medium">
      <Image src="/looker-icon.svg" alt="Looker" width={24} height={24} className="h-6 w-auto opacity-70" />
      <span>Looker</span>
    </div>,
    <div key="metabase" className="flex items-center gap-2 text-sm font-medium">
      <Image src="/metabase.svg" alt="Metabase" width={24} height={24} className="h-6 w-auto opacity-70" />
      <span>Metabase</span>
    </div>,
    <div key="jupyter" className="flex items-center gap-2 text-sm font-medium">
      <Image src="/Jupyter_logo.svg.png" alt="Jupyter" width={24} height={24} className="h-6 w-auto opacity-70" />
      <span>Jupyter</span>
    </div>,
  ],
  className,
}: LogosProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          {badge !== false && badge}
          <h2 className="text-md font-semibold sm:text-2xl">{title}</h2>
        </div>
        {logos !== false && logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos}
          </div>
        )}
      </div>
    </Section>
  );
}
