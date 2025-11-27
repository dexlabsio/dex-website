'use client'

import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

interface AcquisitionAnnouncementBannerProps {
  onVisibilityChange?: (isVisible: boolean) => void
}

export default function AcquisitionAnnouncementBanner({ onVisibilityChange }: AcquisitionAnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true)


  // notify parent of visibility changes
  useEffect(() => {
    onVisibilityChange?.(isVisible)
  }, [isVisible, onVisibilityChange])

  // persist on dismiss
  const handleDismiss = () => {
    setIsVisible(false)
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('acquisitionBannerDismissed', 'true')
      }
    } catch {
      // ignore storage errors
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-x-0 top-0 z-[60] flex items-center gap-x-6 bg-primary px-6 py-2.5 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm/6 text-white">
        <a href="/blog/nubank-acquires-dex" className="hover:opacity-90 transition-opacity">
          <strong className="font-semibold">Big News!</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          Nubank acquires dex. Read the announcement&nbsp;<span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
        >
          <span className="sr-only">Dismiss</span>
          <X aria-hidden="true" className="size-5 text-white" />
        </button>
      </div>
    </div>
  )
}
