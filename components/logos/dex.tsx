import Image from "next/image";
import * as React from "react";

interface DexLogoProps extends React.ComponentProps<typeof Image> {
  className?: string;
}

export default function DexLogo({ className, ...props }: DexLogoProps) {
  return (
    <Image
      {...props}
      width={50}
      height={28}
      className={className}
    />
  );
}