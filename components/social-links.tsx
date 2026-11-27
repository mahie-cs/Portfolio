import Link from 'next/link';
import { Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';

const items = [
  { label: 'GitHub', href: siteConfig.links.github, Icon: Icons.gitHub },
  { label: 'LinkedIn', href: siteConfig.links.linkedin, Icon: Linkedin },
  { label: 'X / Twitter', href: siteConfig.links.twitter, Icon: Icons.twitter },
  { label: 'Email', href: siteConfig.links.email, Icon: Mail },
];

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.filter((i) => i.href).map(({ label, href, Icon }) => (
        <li key={label}>
          <Link
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="flex items-center gap-2 border-2 border-foreground bg-background px-4 py-2 font-sans text-sm font-bold text-foreground shadow-hard-sm hover-hard hover:bg-secondary hover:text-secondary-foreground"
          >
            <Icon className="size-4" />
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
