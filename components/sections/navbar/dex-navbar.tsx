'use client'

import {
  CpuChipIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline'
import AdvancedNavbar from '@/components/ui/advanced-navbar'

// dex Product features for the flyout menu
const productFeatures = [
  {
    name: 'Extract & Load',
    href: '/product/extract-load',
    icon: FunnelIcon,
    description: 'High-performance connectors for all your data sources'
  },
  {
    name: 'Transformation',
    href: '/#product',
    icon: Cog6ToothIcon,
    description: 'AI-assisted workflows with Git integration'
  },
  {
    name: 'Orchestration',
    href: '/#product',
    icon: CpuChipIcon,
    description: 'Auto-DAGs with built-in retries and observability'
  },
  {
    name: 'Business Intelligence',
    href: '/#product',
    icon: ChartBarIcon,
    description: 'End-to-end analytics solutions'
  },
]

// Platform features for the second column
const platformFeatures = [
  {
    name: 'Analytics Dashboard',
    href: '/#platform',
    icon: ChartBarIcon,
    description: 'Real-time insights and monitoring'
  },
  {
    name: 'AI-Powered Processing',
    href: '/#platform',
    icon: CpuChipIcon,
    description: 'Intelligent data processing and optimization'
  }
]

// Summer 2025 Release featured post
const featuredRelease = [
  {
    id: 1,
    title: 'Summer 2025 Release',
    href: '/blog/summer-2025-release',
    date: 'September 2025',
    datetime: '2025-09',
    imageUrl: '/q3-2025-launch-week-banner.png',
    description: 'Discover our latest features and improvements designed to enhance your data workflows.',
    category: {
      title: 'Release',
      href: '/blog/releases'
    }
  }
]

// dex navbar configuration
const dexMenuItems = [
  {
    key: 'product',
    label: 'Product',
    leftColumn: {
      title: 'Product',
      items: productFeatures
    },
    rightColumn: {
      title: 'Platform',
      items: platformFeatures
    },
    featuredPosts: featuredRelease
  }
]

// Additional navigation links
const additionalLinks = [
  {
    key: 'solution',
    label: 'Solution',
    href: '/#solution'
  },
  {
    key: 'pricing',
    label: 'Pricing',
    href: '/pricing'
  },
  {
    key: 'documentation',
    label: 'Documentation',
    href: 'https://docs.dexlabs.io/',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
]

interface DexNavbarProps {
  className?: string
}

export default function DexNavbar({ className }: DexNavbarProps) {
  return (
    <AdvancedNavbar
      // Logo configuration
      logoSrc="/dex-logo-full-light.svg"
      logoAlt="dex"
      logoHref="/"
      logoClassName="h-10 w-auto"

      // dex brand colors
      primaryColor="oklch(0.518 0.187 271.9)" // dex primary color
      hoverColor="oklch(0.518 0.187 271.9)"

      // Navigation configuration
      menuItems={dexMenuItems}
      additionalLinks={additionalLinks}

      // CTA button
      ctaText="Book a Demo"
      ctaHref="/demo"
      ctaTarget="_self"

      // Additional props
      className={`sticky top-0 z-50 ${className || ''}`}

      // Analytics tracking
      onCtaClick={() => {
        // Add analytics tracking here if needed
        console.log('Book a Demo clicked')
      }}
    />
  )
}