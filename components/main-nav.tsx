'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNav } from '@/config/docs';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from './icons';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex items-center">
      {/* Brand Logo & Name */}
      <Link
        href="/"
        className="mr-6 flex items-center gap-2.5 hover:opacity-90"
        aria-label={`${siteConfig.name} home`}
      >
        <div className="flex size-9 items-center justify-center rounded-full border-2 border-foreground bg-primary text-primary-foreground shadow-hard-sm">
          <Icons.logo className="size-4" />
        </div>
        <span className="hidden font-display text-base leading-none tracking-tight lg:inline-block">
          {siteConfig.firstName} {siteConfig.lastName}
        </span>
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center gap-1.5">
        {mainNav.map((item) => {
          const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          
          // Keep navigation cleanly fitting on smaller desktop screens (md) while showing full list on lg+
          const isSecondary = item.href === '/education' || item.href === '/stats';

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative rounded-full border-2 px-3 py-1 font-sans text-xs font-bold lg:text-sm',
                isSecondary ? 'hidden xl:inline-block' : 'inline-block',
                active
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-transparent hover:border-foreground hover:bg-secondary hover:text-secondary-foreground'
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
