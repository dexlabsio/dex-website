type NavLink = {
  title: string;
  href: string;
  isExternal?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { title: "Product", href: "https://www.dexlabs.io/#product" },
  { title: "Solution", href: "https://www.dexlabs.io/#solution" },
  { title: "Documentation", href: "https://docs.dexlabs.io/", isExternal: true },
];


