import { cn } from "@/lib/utils";
import IntegrationLogo from "./integration-logo";

export interface LogoMarqueeItemProps {
  name: string;
  alt: string;
  lightExt?: string;
  darkExt?: string;
  showLabel?: boolean;
  className?: string;
}

const commonClasses =
  "flex min-w-[200px] flex-col items-center justify-center rounded-lg border bg-card/30 p-6 text-center shadow-sm transition-colors hover:bg-card/50";

export default function LogoMarqueeItem({
  name,
  alt,
  lightExt = "svg",
  darkExt = "svg", 
  showLabel = true,
  className,
}: LogoMarqueeItemProps) {
  return (
    <div className={cn(commonClasses, className)}>
      <div className="mb-3">
        <IntegrationLogo
          name={name}
          alt={alt}
          lightExt={lightExt}
          darkExt={darkExt}
          showLabel={false}
          className="scale-125"
        />
      </div>
      {showLabel && (
        <p className="text-sm font-medium text-muted-foreground">{alt}</p>
      )}
    </div>
  );
}