import Image from "next/image";
import { ReactNode } from "react";

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
      <Image src="/Integration_Logos_light/aws_light.png" alt="AWS" width={720} height={180} className="h-6 w-auto opacity-70 dark:hidden" />
      <Image src="/Integration_Logos_dark/aws_dark.svg" alt="AWS" width={720} height={180} className="h-6 w-auto opacity-70 hidden dark:block" />
    </div>,
    <div key="gcp" className="flex items-center gap-2 text-sm font-medium">
      <img src="/Integration_Logos_light/gcp_light.svg" alt="Google Cloud" className="h-6 w-auto opacity-70 dark:hidden" />
      <img src="/Integration_Logos_dark/gcp_dark.svg" alt="Google Cloud" className="h-6 w-auto opacity-70 hidden dark:block" />
      <span>Google Cloud</span>
    </div>,
    <div key="bigquery" className="flex items-center gap-2 text-sm font-medium">
      <img src="/Integration_Logos_light/bigquery_light.svg" alt="BigQuery" className="h-6 w-auto opacity-70 dark:hidden" />
      <img src="/Integration_Logos_dark/bigquery_dark.svg" alt="BigQuery" className="h-6 w-auto opacity-70 hidden dark:block" />
      <span>BigQuery</span>
    </div>,
    <div key="powerbi" className="flex items-center gap-2 text-sm font-medium">
      <img src="/Integration_Logos_light/power_bi_light.png" alt="Power BI" className="h-6 w-auto opacity-70 dark:hidden" />
      <img src="/Integration_Logos_dark/power_bi_dark.svg" alt="Power BI" className="h-6 w-auto opacity-70 hidden dark:block" />
      <span>Power BI</span>
    </div>,
    <div key="tableau" className="flex items-center gap-2 text-sm font-medium">
      <img src="/Integration_Logos_light/tableau_light.svg" alt="Tableau" className="h-6 w-auto opacity-70 dark:hidden" />
      <img src="/Integration_Logos_dark/tableau_dark.svg" alt="Tableau" className="h-6 w-auto opacity-70 hidden dark:block" />
      <span>Tableau</span>
    </div>,
    <div key="looker" className="flex items-center gap-2 text-sm font-medium">
      <img src="/Integration_Logos_light/looker_light.svg" alt="Looker" className="h-6 w-auto opacity-70 dark:hidden" />
      <img src="/Integration_Logos_dark/looker_dark.svg" alt="Looker" className="h-6 w-auto opacity-70 hidden dark:block" />
      <span>Looker</span>
    </div>,
    <div key="metabase" className="flex items-center gap-2 text-sm font-medium">
      <img src="/Integration_Logos_light/metabase_light.svg" alt="Metabase" className="h-6 w-auto opacity-70 dark:hidden" />
      <img src="/Integration_Logos_dark/metabase_dark.svg" alt="Metabase" className="h-6 w-auto opacity-70 hidden dark:block" />
      <span>Metabase</span>
    </div>,
    <div key="jupyter" className="flex items-center gap-2 text-sm font-medium">
      <img src="/Integration_Logos_light/jupyter_light.png" alt="Jupyter" className="h-6 w-auto opacity-70 dark:hidden" />
      <img src="/Integration_Logos_dark/jupyter_dark.svg" alt="Jupyter" className="h-6 w-auto opacity-70 hidden dark:block" />
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
