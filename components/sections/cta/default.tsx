import { cn } from "@/lib/utils";

import Glow from "@/components/ui/glow";
import { ActionButton, type ActionButtonProps } from "../../ui/action-button";
import { Section } from "../../ui/section";

interface CTAProps {
  title?: string;
  description?: string;
  buttons?: ActionButtonProps[] | false;
  className?: string;
}

export default function CTA({
  title = "Start developing with dex",
  description = "Ship trusted data models faster with a powerful data platform",
  buttons = [
    {
      href: "/demo",
      text: "Book a Demo",
      variant: "default",
    },
  ],
  className,
}: CTAProps) {
  return (
    <Section className={cn("group relative overflow-hidden", className)}>
      <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="max-w-[640px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        <p className="text-md text-muted-foreground max-w-[600px] font-medium text-balance sm:text-xl">
          {description}
        </p>
        {buttons !== false && buttons.length > 0 && (
          <div className="flex justify-center gap-4">
            {buttons.map((button, index) => (
              <ActionButton
                key={index}
                {...button}
                size="lg"
              />
            ))}
          </div>
        )}
      </div>
      <div className="absolute top-0 left-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}
