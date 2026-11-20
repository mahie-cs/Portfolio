'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
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
        className="mr-6 flex items-center gap-2.5 transition-opacity hover:opacity-90"
        aria-label={`${siteConfig.name} home`}
      >
        <div className="flex size-7 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary shadow-xs">
          <Icons.logo className="size-4" />
        </div>
        <span className="hidden font-display text-sm font-bold tracking-tight lg:inline-block">
          {siteConfig.firstName} {siteConfig.lastName}
        </span>
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center gap-0.5 text-sm font-medium">
        {mainNav.map((item) => {
          const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          
          // Keep navigation cleanly fitting on smaller desktop screens (md) while showing full list on lg+
          const isSecondary = item.href === '/education' || item.href === '/stats';

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative rounded-md px-2.5 py-1.5 text-xs lg:text-sm transition-colors',
                isSecondary ? 'hidden xl:inline-block' : 'inline-block',
                active
                  ? 'text-foreground font-semibold'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              )}
            >
              {item.title}
              {active && (
                <motion.span
                  layoutId="main-nav-underline"
                  className="absolute inset-x-2 -bottom-[15px] h-0.5 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
