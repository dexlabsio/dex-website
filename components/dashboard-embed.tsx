import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { SectionCards } from "@/components/section-cards"

export function DashboardEmbed() {
  return (
    <div className="flex flex-col gap-4 p-4 bg-background rounded-lg border border-border min-h-[400px] w-full">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div>
          <h3 className="text-lg font-semibold">Analytics Dashboard</h3>
          <p className="text-sm text-muted-foreground">Real-time data insights</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-xs text-muted-foreground">Live</span>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="flex flex-col gap-4 flex-1">
        {/* Cards Section */}
        <div className="scale-75 origin-top-left w-[133%]">
          <SectionCards />
        </div>
        
        {/* Chart Section */}
        <div className="scale-75 origin-top-left w-[133%] -mt-4">
          <ChartAreaInteractive />
        </div>
      </div>
    </div>
  )
}