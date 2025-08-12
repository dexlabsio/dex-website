export type NavLink = {
  title: string;
  href: string;
  isExternal?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { title: "Product", href: "#product" },
  { title: "Solution", href: "#solution" },
  { title: "Documentation", href: "https://docs.dexlabs.io/", isExternal: true },
];


