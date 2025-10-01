type NavLink = {
  title: string;
  href: string;
  isExternal?: boolean;
  hasDropdown?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { title: "Product", href: "/#product", hasDropdown: true },
  { title: "Solution", href: "/#solution" },
  { title: "Pricing", href: "/pricing" },
  { title: "Documentation", href: "https://docs.dexlabs.io/", isExternal: true },
];


