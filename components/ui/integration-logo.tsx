import Image from "next/image";

interface IntegrationLogoProps {
  name: string;
  alt: string;
  showLabel?: boolean;
  lightExt?: string;
  darkExt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const IntegrationLogo = ({
  name,
  alt,
  showLabel = false,
  lightExt = "svg",
  darkExt = "svg",
  width = 720,
  height = 180,
  className = "",
}: IntegrationLogoProps) => (
  <div className={`flex items-center gap-2 text-sm font-medium ${className}`}>
    <Image
      src={`/Integration_Logos_light/${name}_light.${lightExt}`}
      alt={alt}
      width={width}
      height={height}
      className="h-6 w-auto opacity-70 dark:hidden"
    />
    <Image
      src={`/Integration_Logos_dark/${name}_dark.${darkExt}`}
      alt={alt}
      width={width}
      height={height}
      className="h-6 w-auto opacity-70 hidden dark:block"
    />
    {showLabel && <span>{alt}</span>}
  </div>
);

export default IntegrationLogo;