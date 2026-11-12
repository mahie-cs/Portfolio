'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { sidebarNav } from '@/config/docs';
import { siteConfig } from '@/config/site';
import { Button } from './ui/button';
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="size-9 rounded-full md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[85vh]">
        <DrawerTitle className="sr-only">Navigation</DrawerTitle>
        <div data-lenis-prevent className="overflow-y-auto px-5 pb-8 pt-2">
          <p className="mb-3 font-display text-lg font-semibold">{siteConfig.name}</p>
          <nav className="flex flex-col gap-1">
            {sidebarNav[0]!.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base transition-colors hover:bg-accent"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
