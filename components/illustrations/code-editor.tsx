import * as React from "react";
import Image from "next/image";
import Glow from "../ui/glow";

function CodeEditorIllustration() {
  return (
    <div data-slot="code-editor-illustration" className="h-full w-full">
      <div className="relative h-full w-full">
        <div className="absolute top-0 left-[50%] z-10 w-full -translate-x-[50%] translate-y-0">
          <div className="relative flex items-center justify-center">
            <Image
              src="/platform_screenshots/develop_closeup_v2_light.svg"
              alt="Dex development platform interface"
              width={600}
              height={400}
              className="w-full max-w-[600px] h-auto object-contain dark:hidden"
            />
            <Image
              src="/platform_screenshots/develop_closeup_v2_dark.svg"
              alt="Dex development platform interface"
              width={600}
              height={400}
              className="w-full max-w-[600px] h-auto object-contain hidden dark:block"
            />
          </div>
        </div>
        <Glow
          variant="below"
          className="translate-y-32 scale-150 opacity-40 transition-all duration-1000 group-hover:scale-200 group-hover:opacity-60"
        />
      </div>
    </div>
  );
}

export default CodeEditorIllustration;
