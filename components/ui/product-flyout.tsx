'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  CpuChipIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'

const productFeatures = [
  {
    name: 'Data Collection',
    href: '/#product',
    icon: FunnelIcon,
    description: 'High-performance connectors for all your data sources',
  },
  {
    name: 'Transformation',
    href: '/#product',
    icon: Cog6ToothIcon,
    description: 'AI-assisted workflows with Git integration',
  },
  {
    name: 'Orchestration',
    href: '/#product',
    icon: CpuChipIcon,
    description: 'Auto-DAGs with built-in retries and observability',
  },
  {
    name: 'Business Intelligence',
    href: '/#product',
    icon: ChartBarIcon,
    description: 'End-to-end analytics solutions',
  },
]

interface ProductFlyoutProps {
  className?: string
}

export default function ProductFlyout({ className }: ProductFlyoutProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`relative ${className || ''}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 transition-colors">
        Product
        <ChevronDownIcon
          aria-hidden="true"
          className={`size-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 top-20 z-50 bg-white shadow-lg">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">

              {/* Column 1: Product Features */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Product
                </h3>
                <div className="space-y-4">
                  {productFeatures.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-start gap-x-4 rounded-lg p-3 hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex-shrink-0">
                        <item.icon
                          aria-hidden="true"
                          className="size-6 text-gray-400 group-hover:text-gray-600"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-primary">
                          {item.name}
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          {item.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Column 2: Platform */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Platform
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-x-4 rounded-lg p-3 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex-shrink-0">
                      <ChartBarIcon className="size-6 text-gray-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Analytics Dashboard
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        Real-time insights and monitoring
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-x-4 rounded-lg p-3 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex-shrink-0">
                      <CpuChipIcon className="size-6 text-gray-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        AI-Powered Processing
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        Intelligent data processing and optimization
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: Winter 2025 Release */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  New release
                </h3>
                <div className="rounded-2xl bg-white border border-gray-200 p-6">
                  <div className="aspect-video w-full rounded-lg bg-gray-100 mb-4 overflow-hidden relative">
                    <Image
                      src="/q3-2025-launch-week-banner.png"
                      alt="Q3 2025 Launch Week Banner"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      Winter 2025 Release
                    </h4>
                    <p className="text-gray-600 mb-3">September 2025</p>
                    <p className="text-sm text-gray-700 mb-4">
                      Discover our latest features and improvements designed to enhance your data workflows.
                    </p>
                    <Button className="w-full" asChild>
                      <a href="/demo">Book a Demo</a>
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}