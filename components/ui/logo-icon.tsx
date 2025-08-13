import Image from "next/image";
import * as React from "react";

interface LogoIconProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const LogoIcon = ({ 
  src, 
  alt, 
  width = 24, 
  height = 24, 
  ...props 
}: LogoIconProps) => (
  <div {...props}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  </div>
);

export default LogoIcon;