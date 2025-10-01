"use client";

import { NAV_LINKS } from "./navigation-links";
import ProductFlyout from "./product-flyout";

export default function Navigation() {
  return (
    <div className="hidden md:flex md:items-center md:space-x-8">
      {NAV_LINKS.map((link) => {
        if (link.title === "Product" && link.hasDropdown) {
          return <ProductFlyout key={link.title} />
        }

        return (
          <a
            key={link.title}
            href={link.href}
            {...(link.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 transition-colors"
          >
            {link.title}
          </a>
        )
      })}
    </div>
  );
}
