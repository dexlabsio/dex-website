'use client'

import { useBanner } from '@/components/providers/banner-context'
import AcquisitionAnnouncementBanner from './acquisition-announcement'

export default function BannerWithSpacer() {
  const { isBannerVisible, setBannerVisible } = useBanner()

  return (
    <>
      <AcquisitionAnnouncementBanner onVisibilityChange={setBannerVisible} />
      {/* Dynamic spacer that adjusts based on banner visibility */}
      {isBannerVisible && (
        <div aria-hidden="true" className="h-[44px]" />
      )}
    </>
  )
}
