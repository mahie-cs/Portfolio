'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarNav } from '@/config/docs';
import { cn } from '@/lib/utils';

export function SideNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Sections" className="flex flex-col gap-6">
      {sidebarNav.map((group) => (
        <div key={group.title} className="flex flex-col gap-2">
          <h4 className="bg-foreground px-3 py-1 font-sans text-xs font-bold text-background">{group.title}</h4>
          {group.items.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'flex h-9 items-center border-2 px-3 font-sans text-sm font-bold ',
                  active
                    ? 'translate-x-1 border-foreground bg-primary text-primary-foreground shadow-hard-sm'
                    : 'border-transparent hover:border-foreground hover:bg-secondary hover:text-secondary-foreground'
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
