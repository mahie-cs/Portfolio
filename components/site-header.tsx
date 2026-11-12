import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Button } from './ui/button';
import { ModeSwitcher } from './mode-switcher';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';
import { CommandMenu } from './command-menu';
import { LocalClock } from './local-clock';
import { Icons } from './icons';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <MainNav />
          <MobileNav />
          <Link href="/" className="ml-3 font-display font-semibold md:hidden">
            {siteConfig.name}
          </Link>
          <div className="ml-auto flex items-center gap-2 md:gap-3">
            <div className="hidden md:block">
              <CommandMenu />
            </div>
            <div className="hidden items-center gap-2 rounded-full border bg-muted/30 px-3 py-1.5 text-xs font-medium lg:flex">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <LocalClock />
            </div>
            <ModeSwitcher className="size-[18px]" />
            <Button variant="ghost" size="icon" className="size-9 rounded-full" asChild>
              <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                <Icons.gitHub className="size-[18px]" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
