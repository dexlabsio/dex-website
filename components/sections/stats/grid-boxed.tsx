import { cn } from "@/lib/utils";

interface StatItemProps {
  id: number;
  name: string;
  value: string | number;
}

interface StatsProps {
  title?: string;
  description?: string;
  stats?: StatItemProps[];
  className?: string;
}

const defaultStats = [
  { id: 1, name: 'Faster data workflows', value: '30x' },
  { id: 2, name: 'ROI in under 6 months', value: '194%' },
  { id: 3, name: 'Infra maintenance overhead', value: 'Zero' },
  { id: 4, name: 'Data always stored in your cloud', value: 'Secure' },
];

export default function StatsGridBoxed({
  title = "Why teams choose dex",
  description = "Join thousands of data teams who trust dex to power their most critical analytics workflows.",
  stats = defaultStats,
  className,
}: StatsProps) {
  return (
    <div className={cn("bg-white py-12 sm:py-16", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-lg/8 text-gray-600">{description}</p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm/6 font-semibold text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
