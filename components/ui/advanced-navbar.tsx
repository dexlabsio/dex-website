import React, { useState, useEffect } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

/**
 * Advanced Navbar with Hover Flyout Menus
 *
 * A professional navbar component with:
 * - Responsive design (mobile hamburger menu)
 * - Hover-activated flyout menus with 150ms delay
 * - Smooth transitions and animations
 * - Customizable content and styling
 *
 * Dependencies required:
 * - @headlessui/react
 * - @heroicons/react
 * - tailwindcss
 */

// Flyout Menu Component
function FlyoutMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
  leftColumn,
  rightColumn,
  featuredPosts = [],
  className = ""
}) {
  if (!isOpen) return null

  return (
    <div
      className={`absolute inset-x-0 top-full bg-white shadow-lg ring-1 ring-gray-900/5 z-50 ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-3 lg:px-8">
          {leftColumn && (
            <div>
              <h3 className="text-sm leading-6 font-medium text-gray-500">{leftColumn.title}</h3>
              <div className="mt-6 flow-root">
                <div className="-my-2">
                  {leftColumn.items.map((item, index) => {
                    const ItemComponent = item.isRouter ? 'div' : 'a'
                    return (
                      <ItemComponent
                        key={item.name || index}
                        href={!item.isRouter ? item.href : undefined}
                        onClick={() => {
                          if (item.onClick) item.onClick()
                          onClose()
                        }}
                        target={item.target}
                        rel={item.rel}
                        className="flex gap-x-4 py-2 text-sm leading-6 font-semibold text-gray-900 hover:text-primary transition-colors cursor-pointer"
                      >
                        {item.icon && <item.icon aria-hidden="true" className="size-6 flex-none text-gray-400" />}
                        {item.name}
                      </ItemComponent>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {rightColumn && (
            <div>
              <h3 className="text-sm leading-6 font-medium text-gray-500">{rightColumn.title}</h3>
              <div className="mt-6 flow-root">
                <div className="-my-2">
                  {rightColumn.items.map((item, index) => (
                    <a
                      key={item.name || index}
                      href={item.href}
                      onClick={() => {
                        if (item.onClick) item.onClick()
                        onClose()
                      }}
                      target={item.target}
                      rel={item.rel}
                      className="flex gap-x-4 py-2 text-sm leading-6 font-semibold text-gray-900 hover:text-primary transition-colors"
                    >
                      {item.icon && <item.icon aria-hidden="true" className="size-6 flex-none text-gray-400" />}
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {featuredPosts.length > 0 && (
            <div>
              <h3 className="sr-only">Featured Posts</h3>
              {featuredPosts.map((post, index) => (
                <article
                  key={post.id || index}
                  className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
                >
                  <div className="relative flex-none">
                    <img
                      alt=""
                      src={post.imageUrl}
                      className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4">
                      <time dateTime={post.datetime} className="text-sm leading-6 text-gray-600">
                        {post.date}
                      </time>
                      <a
                        href={post.category?.href}
                        onClick={onClose}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category?.title}
                      </a>
                    </div>
                    <h4 className="mt-2 text-sm leading-6 font-semibold text-gray-900">
                      <a href={post.href} onClick={onClose}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface MenuItemType {
  key?: string
  label: string
  leftColumn?: {
    title: string
    items: Array<{
      name: string
      href: string
      icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
      description?: string
      isRouter?: boolean
      onClick?: () => void
      target?: string
      rel?: string
    }>
  }
  rightColumn?: {
    title: string
    items: Array<{
      name: string
      href: string
      icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
      description?: string
      isRouter?: boolean
      onClick?: () => void
      target?: string
      rel?: string
    }>
  }
  featuredPosts?: Array<{
    id?: number | string
    title: string
    href: string
    date: string
    datetime?: string
    imageUrl: string
    description: string
    category?: {
      title: string
      href: string
    }
  }>
  className?: string
}

interface LinkType {
  key?: string
  label: string
  href: string
  target?: string
  rel?: string
  onClick?: () => void
}

// Main Navbar Component
export default function AdvancedNavbar({
  // Logo configuration
  logoSrc = "/logo.svg",
  logoAlt = "Company Logo",
  logoHref = "/",
  logoClassName = "h-16 w-auto",

  // Brand colors (supports gradient or solid colors)
  primaryColor = "#3b82f6",
  hoverColor = "#2563eb",

  // Navigation items
  homeHref = "/",
  homeLabel = "Home",
  menuItems = [] as MenuItemType[], // Array of menu items with dropdowns
  additionalLinks = [] as LinkType[], // Simple links without dropdowns

  // CTA button
  ctaText = "Get Started",
  ctaHref = "#",
  ctaTarget = "_self",

  // Mobile menu config
  mobileMenuClassName = "",

  // Custom class names
  className = "",

  // Navigation type (if using React Router, pass Link component)
  LinkComponent = 'a' as any,

  // Callbacks
  onMenuItemClick,
  onCtaClick,
}: {
  logoSrc?: string
  logoAlt?: string
  logoHref?: string
  logoClassName?: string
  primaryColor?: string
  hoverColor?: string
  homeHref?: string
  homeLabel?: string
  menuItems?: MenuItemType[]
  additionalLinks?: LinkType[]
  ctaText?: string
  ctaHref?: string
  ctaTarget?: string
  mobileMenuClassName?: string
  className?: string
  LinkComponent?: any
  onMenuItemClick?: () => void
  onCtaClick?: () => void
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMenus, setOpenMenus] = useState({})
  const [menuTimeouts, setMenuTimeouts] = useState({})

  // Handle mouse enter/leave for flyout menus with proper cleanup
  const handleMenuEnter = (menuKey) => {
    if (menuTimeouts[menuKey]) {
      clearTimeout(menuTimeouts[menuKey])
      setMenuTimeouts(prev => ({ ...prev, [menuKey]: null }))
    }
    setOpenMenus(prev => ({ ...prev, [menuKey]: true }))
  }

  const handleMenuLeave = (menuKey) => {
    const timeout = setTimeout(() => {
      setOpenMenus(prev => ({ ...prev, [menuKey]: false }))
      setMenuTimeouts(prev => ({ ...prev, [menuKey]: null }))
    }, 150)
    setMenuTimeouts(prev => ({ ...prev, [menuKey]: timeout }))
  }

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(menuTimeouts).forEach(timeout => {
        if (timeout) clearTimeout(timeout)
      })
    }
  }, [menuTimeouts])

  const isPrimaryColorGradient = primaryColor.includes('gradient')

  return (
    <header className={`bg-white relative z-50 ${className}`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1 items-center">
          <LinkComponent to={logoHref} href={logoHref} className="-m-1.5 p-1.5">
            <span className="sr-only">{logoAlt}</span>
            <img
              alt={logoAlt}
              src={logoSrc}
              className={logoClassName}
            />
          </LinkComponent>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8 lg:items-center lg:justify-center">
          {/* Menu items with dropdowns */}
          {menuItems.map((menu, index) => (
            <div
              key={menu.key || index}
              onMouseEnter={() => handleMenuEnter(menu.key || index)}
              onMouseLeave={() => handleMenuLeave(menu.key || index)}
              className="relative"
            >
              <button
                className={`flex items-center gap-x-1 text-sm font-semibold leading-6 transition-all duration-200 px-3 py-2 rounded-lg border ${
                  openMenus[menu.key || index]
                    ? 'text-gray-900 border-gray-300 hover:text-primary'
                    : 'text-gray-900 border-transparent hover:text-primary'
                }`}
              >
                {menu.label}
                <ChevronDownIcon
                  aria-hidden="true"
                  className={`size-5 flex-none transition-transform duration-200 ${
                    openMenus[menu.key || index] ? 'text-gray-600 rotate-180' : 'text-gray-400'
                  }`}
                />
              </button>
            </div>
          ))}

          {/* Additional simple links */}
          {additionalLinks.map((link, index) => (
            <LinkComponent
              key={link.key || index}
              to={link.href}
              href={link.href}
              target={link.target}
              rel={link.rel}
              className="flex items-center text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors px-3 py-2"
              onClick={link.onClick}
            >
              {link.label}
            </LinkComponent>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4">
          {/* Sign in link */}
          <LinkComponent
            to="https://app.dexlabs.io/"
            href="https://app.dexlabs.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-semibold text-gray-900 hover:text-primary transition-colors px-3 py-2"
          >
            Sign in
          </LinkComponent>

          {/* Primary CTA Button */}
          <LinkComponent
            to={ctaHref}
            href={ctaHref}
            target={ctaTarget}
            rel={ctaTarget === "_blank" ? "noopener noreferrer" : undefined}
            className="flex items-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              background: isPrimaryColorGradient ? primaryColor : primaryColor,
              focusVisibleOutlineColor: hoverColor
            }}
            onClick={onCtaClick}
          >
            {ctaText} <span aria-hidden="true">&rarr;</span>
          </LinkComponent>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${mobileMenuClassName}`}>
          <div className="flex items-center justify-between">
            <LinkComponent to={logoHref} href={logoHref} className="-m-1.5 p-1.5">
              <span className="sr-only">{logoAlt}</span>
              <img
                alt={logoAlt}
                src={logoSrc}
                className="h-12 w-auto"
              />
            </LinkComponent>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* Mobile dropdowns */}
                {menuItems.map((menu, index) => (
                  <Disclosure key={menu.key || index} as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      {menu.label}
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {/* Combine left and right column items for mobile */}
                      {[
                        ...(menu.leftColumn?.items || []),
                        ...(menu.rightColumn?.items || [])
                      ].map((item, itemIndex) => (
                        <DisclosureButton
                          key={item.name || itemIndex}
                          as={item.isRouter ? LinkComponent : 'a'}
                          to={item.isRouter ? item.href : undefined}
                          href={!item.isRouter ? item.href : item.href}
                          target={item.target}
                          rel={item.rel}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => {
                            if (item.onClick) item.onClick()
                            setMobileMenuOpen(false)
                          }}
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                ))}

                {/* Mobile additional links */}
                {additionalLinks.map((link, index) => (
                  <LinkComponent
                    key={link.key || index}
                    to={link.href}
                    href={link.href}
                    target={link.target}
                    rel={link.rel}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => {
                      if (link.onClick) link.onClick()
                      setMobileMenuOpen(false)
                    }}
                  >
                    {link.label}
                  </LinkComponent>
                ))}
              </div>
              <div className="py-6 space-y-2">
                {/* Sign in link */}
                <LinkComponent
                  to="https://app.dexlabs.io/"
                  href="https://app.dexlabs.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign in
                </LinkComponent>

                {/* Primary CTA */}
                <LinkComponent
                  to={ctaHref}
                  href={ctaHref}
                  target={ctaTarget}
                  rel={ctaTarget === "_blank" ? "noopener noreferrer" : undefined}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => {
                    if (onCtaClick) onCtaClick()
                    setMobileMenuOpen(false)
                  }}
                >
                  {ctaText}
                </LinkComponent>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Flyout menus */}
      {menuItems.map((menu, index) => (
        <FlyoutMenu
          key={menu.key || index}
          isOpen={openMenus[menu.key || index]}
          onClose={() => setOpenMenus(prev => ({ ...prev, [menu.key || index]: false }))}
          onMouseEnter={() => handleMenuEnter(menu.key || index)}
          onMouseLeave={() => handleMenuLeave(menu.key || index)}
          leftColumn={menu.leftColumn}
          rightColumn={menu.rightColumn}
          featuredPosts={menu.featuredPosts}
          className={menu.className}
        />
      ))}
    </header>
  )
}

// Export additional components for advanced usage
export { FlyoutMenu }