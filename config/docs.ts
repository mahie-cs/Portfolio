export type NavItem = { title: string; href: string };

/** Top-level navigation, used by the header, mobile menu and command menu. */
export const mainNav: NavItem[] = [
  { title: 'Projects', href: '/projects' },
  { title: 'About', href: '/about' },
  { title: 'Skills', href: '/skills-tools' },
  { title: 'Contact', href: '/contact' },
];

/** Sidebar shown on every inner page. Add a page = add a line here. */
export const sidebarNav: { title: string; items: NavItem[] }[] = [
  {
    title: 'Sections',
    items: [
      { title: 'Home', href: '/' },
      { title: 'About', href: '/about' },
      { title: 'Projects', href: '/projects' },
      { title: 'Skills & tools', href: '/skills-tools' },
      { title: 'Education', href: '/education' },
      { title: 'Career', href: '/career' },
      { title: 'Contact', href: '/contact' },
      { title: 'GitHub stats', href: '/stats' },
    ],
  },
];

/** Order used by the previous / next pager at the bottom of inner pages. */
export const pagerOrder = sidebarNav[0]!.items;
