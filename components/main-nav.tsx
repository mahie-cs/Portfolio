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
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-8 flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
        <Icons.logo className="size-6" />
        <span className="hidden font-display text-base font-semibold tracking-tight lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-1 text-sm">
        {mainNav.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative rounded-md px-3 py-1.5 transition-colors',
                active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.title}
              {active && (
                <motion.span
                  layoutId="main-nav-underline"
                  className="absolute inset-x-3 -bottom-[13px] h-px bg-primary"
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
