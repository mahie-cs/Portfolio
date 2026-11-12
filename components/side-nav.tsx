'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { sidebarNav } from '@/config/docs';
import { cn } from '@/lib/utils';

export function SideNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Sections" className="flex flex-col gap-6">
      {sidebarNav.map((group) => (
        <div key={group.title} className="flex flex-col gap-1">
          <h4 className="px-3 pb-1 text-sm font-semibold">{group.title}</h4>
          {group.items.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative flex h-8 items-center rounded-lg px-3 text-sm transition-colors',
                  active ? 'font-medium text-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {active && (
                  <motion.span
                    layoutId="sidebar-active"
                    className="absolute inset-0 -z-10 rounded-lg bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {item.title}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
