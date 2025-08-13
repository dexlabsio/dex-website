import { ReactNode } from "react";
import IntegrationLogo from "../../ui/integration-logo";
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
    <IntegrationLogo key="aws" name="aws" alt="AWS" lightExt="png" />,
    <IntegrationLogo key="gcp" name="gcp" alt="Google Cloud" showLabel />,
    <IntegrationLogo key="bigquery" name="bigquery" alt="BigQuery" showLabel />,
    <IntegrationLogo key="powerbi" name="power_bi" alt="Power BI" lightExt="png" showLabel />,
    <IntegrationLogo key="tableau" name="tableau" alt="Tableau" showLabel />,
    <IntegrationLogo key="looker" name="looker" alt="Looker" showLabel />,
    <IntegrationLogo key="metabase" name="metabase" alt="Metabase" showLabel />,
    <IntegrationLogo key="jupyter" name="jupyter" alt="Jupyter" lightExt="png" showLabel />,
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
