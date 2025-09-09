import { cn } from "@/lib/utils";
import { ReactNode } from "react";

import { Button, type ButtonProps } from "../../ui/button";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface CTAProps {
  title?: string;
  description?: string;
  buttons?: CTAButtonProps[] | false;
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
    {
      href: "/demo",
      text: "Learn more",
      variant: "ghost",
    },
  ],
  className,
}: CTAProps) {
  return (
    <div className={cn("bg-white", className)}>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          {title}
        </h2>
        <div className="mt-10 flex items-center gap-x-6">
          {buttons !== false && buttons.length > 0 && (
            <>
              <Button asChild>
                <a href={buttons[0].href}>
                  {buttons[0].text}
                </a>
              </Button>
              {buttons[1] && (
                <a href={buttons[1].href} className="text-sm/6 font-semibold text-gray-900">
                  {buttons[1].text} <span aria-hidden="true">→</span>
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
