"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface ScreenshotProps {
  srcLight: string;
  srcDark?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function Screenshot({
  srcLight,
  srcDark,
  alt,
  width,
  height,
  className,
  priority = false,
}: ScreenshotProps) {
  const { resolvedTheme } = useTheme();
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (resolvedTheme) {
      setSrc(resolvedTheme === "light" ? srcLight : srcDark || srcLight);
    }
  }, [resolvedTheme, srcLight, srcDark]);

  if (!src) {
    return (
      <div
        style={{ width, height }}
        className={cn("bg-muted", className)}
        aria-label={alt}
      />
    );
  }

  // Check if this is a WebP source and create PNG fallback
  const isWebP = src.endsWith('.webp');
  const webpSrc = isWebP ? src : src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const pngSrc = isWebP ? src.replace(/\.webp$/i, '.png') : src;
  
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <Image
        src={pngSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
      />
    </picture>
  );
}
