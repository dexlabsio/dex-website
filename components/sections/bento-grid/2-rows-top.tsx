import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Section } from "../../ui/section";

import Glow from "@/components/ui/glow";
import { Tile, TileContent, TileDescription, TileTitle, TileVisual } from "@/components/ui/tile";
import CodeEditorIllustration from "../../illustrations/code-editor";
import PipelineIllustration from "../../illustrations/pipeline";
import RippleIllustration from "../../illustrations/ripple";
import TilesIllustration from "../../illustrations/tiles";

interface TileProps {
  title: string;
  description: ReactNode;
  visual: ReactNode;
  size?: string;
}

interface BentoGridProps {
  title?: string;
  description?: string;
  tiles?: TileProps[] | false;
  className?: string;
}

export default function BentoGrid({
  title = "Finally, a data platform for the entire journey",
  description = "Features designed to make data engineering simple, efficient, and AI-native",
  tiles = [
    {
      title: "Extract & Load",
      description: (
        <p className="max-w-[460px]">
          High-performance connectors for transactional databases, business tools, and spreadsheets, all natively integrated with the rest of your data lifecycle.
        </p>
      ),
      visual: (
        <div className="-mr-32 -ml-40">
          <TilesIllustration />
        </div>
      ),
      size: "col-span-12 md:col-span-5",
    },
    {
      title: "Develop",
      description: (
        <p className="max-w-[320px] lg:max-w-[460px]">
          Define, test, and document your transformations with a modern, AI-assisted workflow. Build in minutes with native Git integration, automated lineage tracking, and built-in linting.
        </p>
      ),
      visual: (
        <div className="min-h-[200px] w-full grow items-center self-center p-4 lg:px-12">
          <CodeEditorIllustration />
        </div>
      ),
      size: "col-span-12 md:col-span-7",
    },
    {
      title: "Orchestrate",
      description: (
        <p>
          Auto-DAGs, built-in retries, and full observability. Automation and scheduling that just works, out of the box.
        </p>
      ),
      visual: (
        <div className="w-full flex items-center justify-center relative">
          <img 
            src="/bento_icons/orchestrate_light.svg" 
            alt="Dex orchestration platform" 
            className="w-full h-auto max-w-[400px] object-contain dark:hidden relative z-10"
          />
          <img 
            src="/bento_icons/orchestrate_Dark.svg" 
            alt="Dex orchestration platform" 
            className="w-full h-auto max-w-[400px] object-contain hidden dark:block relative z-10"
          />
          <Glow variant="center" className="scale-75 opacity-60" />
        </div>
      ),
      size: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
      title: "AI Copilot",
      description:
        "Generate SQL from everyday language — with full awareness of your models, metadata, and lineage. Not just AI, but AI that knows your data.",
      visual: (
        <div className="flex items-center justify-center scale-[0.85] mt-4">
          <PipelineIllustration />
        </div>
      ),
      size: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
      title: "Minimal Costs",
      description: (
        <p className="max-w-[460px]">
          Fixed, predictable pricing. dex is 4–8x more cost-effective than building your own data platform or stitching together multiple tools
        </p>
      ),
      visual: (
        <div className="flex items-center justify-center mt-4">
          <div className="scale-50">
            <RippleIllustration />
          </div>
        </div>
      ),
      size: "col-span-12 md:col-span-6 lg:col-span-4",
    },
  ],
  className,
}: BentoGridProps) {
  return (
    <Section id="product" className={cn("py-8 sm:py-12 md:py-20", className)}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-4 sm:gap-8">
        <h2 className="text-center text-3xl font-semibold text-balance sm:text-5xl">
          {title}
        </h2>
        <p className="text-md text-muted-foreground max-w-[840px] text-center font-medium text-balance sm:text-xl">
          {description}
        </p>
        {tiles !== false && tiles.length > 0 && (
          <div className="grid grid-cols-12 gap-4">
            {tiles.map((tile, index) => (
              <Tile 
                key={index} 
                className={cn(tile.size)}
              >
                <TileContent>
                  <TileTitle>{tile.title}</TileTitle>
                  <TileDescription>{tile.description}</TileDescription>
                </TileContent>
                <TileVisual className={cn(
                  index >= 2 ? "items-center" : ""
                )}>
                  {tile.visual}
                </TileVisual>
              </Tile>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
