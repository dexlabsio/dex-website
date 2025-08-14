import Image from "next/image";
import * as React from "react";

interface DualThemeLogoProps extends Omit<React.ComponentProps<typeof Image>, 'src'> {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function DualThemeLogo({ 
  lightSrc, 
  darkSrc, 
  alt, 
  width = 80, 
  height = 28, 
  className, 
  ...props 
}: DualThemeLogoProps) {
  return (
    <>
      <Image
        {...props}
        src={lightSrc}
        alt={alt}
        width={width}
        height={height}
        className={`dark:hidden ${className || ""}`}
        style={{ width: 'auto', height: 'auto' }}
      />
      <Image
        {...props}
        src={darkSrc}
        alt={alt}
        width={width}
        height={height}
        className={`hidden dark:block ${className || ""}`}
        style={{ width: 'auto', height: 'auto' }}
      />
    </>
  );
}