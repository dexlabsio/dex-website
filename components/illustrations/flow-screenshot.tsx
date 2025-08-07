import * as React from "react";

function FlowScreenshotIllustration({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={className} {...props}>
      <img 
        src="/flow-screenshot.svg" 
        alt="Flow Screenshot"
        className="w-full h-auto"
      />
    </div>
  );
}

export default FlowScreenshotIllustration;