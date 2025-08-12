import Image from "next/image";
import * as React from "react";

interface DexLogoProps extends React.ComponentProps<typeof Image> {
  className?: string;
}

export default function DexLogo({ className, ...props }: DexLogoProps) {
  return (
    <>
      {/* Light mode logo */}
      <Image
        {...props}
        src="/dex-logo-light.png"
        alt="Dex"
        width={80}
        height={28}
        className={`dark:hidden ${className || ""}`}
      />
      {/* Dark mode logo */}
      <Image
        {...props}

        src="/dex-logo-dark.png"
        alt="Dex"
        width={80}
        height={28}
        className={`hidden dark:block ${className || ""}`}
      />
    </>
  );
}