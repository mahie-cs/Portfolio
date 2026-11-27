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
    <header className="sticky top-0 z-50 w-full bg-background/90 pt-3 pb-3 backdrop-blur-sm">
      <div className="container-wrapper">
        <div className="container">
         <div className="flex h-14 items-center rounded-full border-[3px] border-foreground bg-card pl-4 pr-2 shadow-hard-sm">
          <MainNav />
          <MobileNav />
          <Link href="/" className="ml-3 font-display text-base leading-none md:hidden">
            {siteConfig.firstName}
            <span className="text-primary">.</span>
          </Link>
          <div className="ml-auto flex items-center gap-2 md:gap-3">
            <div className="hidden md:block">
              <CommandMenu />
            </div>
            <div className="hidden items-center gap-2 rounded-full border-2 border-foreground bg-secondary px-3 py-1.5 font-sans text-xs font-bold text-secondary-foreground lg:flex">
              <span className="size-2.5 animate-pulse rounded-full bg-foreground motion-reduce:animate-none" />
              <LocalClock />
            </div>
            <ModeSwitcher className="size-[18px]" />
            <Button variant="ghost" size="icon" asChild>
              <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                <Icons.gitHub className="size-[18px]" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
         </div>
        </div>
      </div>
    </header>
  );
}
