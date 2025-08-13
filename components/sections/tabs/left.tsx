"use client";

import { BlocksIcon, PaletteIcon, SquarePenIcon } from "lucide-react";
import { ReactNode } from "react";

import Glow from "@/components/ui/glow";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import Screenshot from "@/components/ui/screenshot";
import { Section } from "../../ui/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

interface TabProps {
  value: string;
  title: string;
  description: string;
  icon: ReactNode;
  content: ReactNode;
}

interface TabsLeftProps {
  title?: string;
  description?: string;
  tabs?: TabProps[] | false;
  defaultTab?: string;
  className?: string;
}

export default function TabsLeft({
  title = "Choose dex for speed, trust, and delivering real results",
  description = "Join industry-leading companies using dex to accelerate analytics, lower costs, and achieve extraordinary outcomes",
  defaultTab = "choose-sections",
  tabs = [
    {
      value: "choose-sections",
      title: "Sales",
      description:
        "Track revenue, orders, and product performance with high-quality, reliable data",
      icon: <BlocksIcon className="size-4 shrink-0 stroke-1 md:h-5 md:w-5" />,
      content: (
        <MockupFrame size="small">
          <Mockup type="responsive">
            <Screenshot
              srcLight="/develop_light.webp"
              srcDark="/develop_light.webp"
              alt="Dex development platform"
              width={1248}
              height={765}
              priority={true}
            />
          </Mockup>
        </MockupFrame>
      ),
    },
    {
      value: "add-content",
      title: "Finance",
      description:
        "Track payments, transactions, payables, receivables, and cash flow with accurate, real-time financial data",
      icon: (
        <SquarePenIcon className="size-4 shrink-0 stroke-1 md:h-5 md:w-5" />
      ),
      content: (
        <MockupFrame size="small">
          <Mockup type="responsive">
          <Screenshot
              srcLight="/develop_light.webp"
              srcDark="/develop_light.webp"
              alt="Dex development platform"
              width={1248}
              height={765}
            />
          </Mockup>
        </MockupFrame>
      ),
    },
    {
      value: "customize",
      title: "Operations",
      description:
        "Optimize inventory, supply chain, logistics, and customer support with comprehensive operational insights and performance data",
      icon: <PaletteIcon className="size-4 shrink-0 stroke-1 md:h-5 md:w-5" />,
      content: (
        <MockupFrame size="small">
          <Mockup type="responsive">
          <Screenshot
              srcLight="/develop_light.webp"
              srcDark="/develop_light.webp"
              alt="Dex development platform"
              width={1248}
              height={765}
            />
          </Mockup>
        </MockupFrame>
      ),
    },
    {
      value: "marketing",
      title: "Marketing",
      description:
        "Track campaign performance, ROI, growth metrics, and attribution with marketing data that optimizes media spend and performance",
      icon: <PaletteIcon className="size-4 shrink-0 stroke-1 md:h-5 md:w-5" />,
      content: (
        <MockupFrame size="small">
          <Mockup type="responsive">
          <Screenshot
              srcLight="/develop_light.webp"
              srcDark="/develop_light.webp"
              alt="Dex development platform"
              width={1248}
              height={765}
            />
          </Mockup>
        </MockupFrame>
      ),
    },
  ],
  className,
}: TabsLeftProps) {
  return (
    <Section id="solution" className={className}>
      <div className="max-w-container mx-auto flex flex-col gap-8 sm:gap-16">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-8">
          <h2 className="text-center text-3xl font-semibold text-balance sm:text-5xl">
            {title}
          </h2>
          <p className="text-md text-muted-foreground max-w-[720px] text-center font-medium text-balance sm:text-xl">
            {description}
          </p>
        </div>
        <div className="w-full">
          {tabs !== false && tabs.length > 0 && (
            <Tabs
              defaultValue={defaultTab}
              className="flex flex-col items-start gap-4 lg:grid lg:grid-cols-3"
            >
              <TabsList className="grid grid-cols-1 items-stretch gap-2 sm:grid-cols-3 md:gap-4 lg:grid-cols-1">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex w-full flex-row gap-2 p-3"
                  >
                    <div className="p-1">{tab.icon}</div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold md:text-lg">{tab.title}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm">
                        {tab.description}
                      </p>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
              {tabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="aspect-16/9 p-8 lg:col-span-2"
                >
                  {tab.content}
                  <Glow variant="center" />
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </div>
    </Section>
  );
}
