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
    <ul className="flex flex-wrap gap-2">
      {items.filter((i) => i.href).map(({ label, href, Icon }) => (
        <li key={label}>
          <Link
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:bg-accent"
          >
            <Icon className="size-4" />
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
