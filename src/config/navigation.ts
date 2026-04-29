export type NavigationItem = {
  href: string;
  labelKey: string;
};

export const navigationItems: NavigationItem[] = [
  { href: "/", labelKey: "nav.studio" },
  { href: "/projects", labelKey: "nav.projects" },
  { href: "/services", labelKey: "nav.services" },
  { href: "/contact", labelKey: "nav.contact" },
];
