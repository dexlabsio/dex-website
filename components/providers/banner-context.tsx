'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

interface BannerContextType {
  isBannerVisible: boolean
  setBannerVisible: (visible: boolean) => void
}

const BannerContext = createContext<BannerContextType | undefined>(undefined)

export function BannerProvider({ children }: { children: ReactNode }) {
  const [isBannerVisible, setIsBannerVisible] = useState(true)

  return (
    <BannerContext.Provider value={{ isBannerVisible, setBannerVisible: setIsBannerVisible }}>
      {children}
    </BannerContext.Provider>
  )
}

export function useBanner() {
  const context = useContext(BannerContext)
  if (context === undefined) {
    throw new Error('useBanner must be used within a BannerProvider')
  }
  return context
}
