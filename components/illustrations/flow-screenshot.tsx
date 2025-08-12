import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

function FlowScreenshotIllustration({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("relative", className)} {...props}>
      <Image
        src="/flow-screenshot.svg"
        alt="Flow Screenshot"
        fill
        sizes="100vw"
        className="h-auto w-full object-contain"
        priority={false}
      />
    </div>
  );
}

export default FlowScreenshotIllustration;