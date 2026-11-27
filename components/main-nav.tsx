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
    <div className="hidden md:flex min-w-0 flex-1 items-center gap-2 lg:gap-4">
      {/* Brand Logo & Name */}
      <Link
        href="/"
        className="flex shrink-0 items-center gap-2 hover:opacity-90"
        aria-label={`${siteConfig.name} home`}
      >
        <div className="flex size-8 lg:size-9 items-center justify-center rounded-full border-2 border-foreground bg-primary text-primary-foreground shadow-hard-sm">
          <Icons.logo className="size-3.5 lg:size-4" />
        </div>
        <span className="hidden font-display text-base leading-none tracking-tight 2xl:inline-block">
          {siteConfig.firstName} {siteConfig.lastName}
        </span>
      </Link>

      {/* Navigation Links */}
      <nav className="flex min-w-0 flex-1 items-center gap-0.5 sm:gap-1 lg:gap-1.5 overflow-x-auto no-scrollbar py-0.5">
        {mainNav.map((item) => {
          const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

          // Education and Stats are secondary links shown on xl+ screens to prevent overlap on medium/laptop screens
          const isSecondary = item.href === '/education' || item.href === '/stats';

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative shrink-0 whitespace-nowrap rounded-full border-2 px-2 py-0.5 font-sans text-xs font-bold lg:px-3 lg:py-1 lg:text-sm',
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
