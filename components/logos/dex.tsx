import * as React from "react";
import DualThemeLogo from "../ui/dual-theme-logo";

interface DexLogoProps {
  className?: string;
}

export default function DexLogo({ className, ...props }: DexLogoProps) {
  return (
    <DualThemeLogo
      {...props}
      lightSrc="/dex-logo-light.png"
      darkSrc="/dex-logo-dark.png"
      alt="Dex"
      width={80}
      height={28}
      className={className}
    />
  );
}