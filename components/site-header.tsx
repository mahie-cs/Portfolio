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
    <header className="sticky top-0 z-50 w-full bg-background/90 py-3 backdrop-blur-sm">
      <div className="container-wrapper">
        <div className="container">
          <div className="flex h-14 w-full flex-nowrap items-center justify-between gap-2 lg:gap-3 overflow-hidden rounded-full border-[3px] border-foreground bg-card px-3.5 sm:px-5 shadow-hard-sm">
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <MobileNav />
              <MainNav />
              <Link href="/" className="font-display text-base leading-none md:hidden">
                {siteConfig.firstName}
                <span className="text-primary">.</span>
              </Link>
            </div>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <div className="hidden md:block">
                <CommandMenu />
              </div>
              <div className="hidden items-center gap-2 rounded-full border-2 border-foreground bg-secondary px-3 py-1.5 font-sans text-xs font-bold text-secondary-foreground 2xl:flex">
                <span className="size-2.5 animate-pulse rounded-full bg-foreground motion-reduce:animate-none" />
                <LocalClock />
              </div>
              <ModeSwitcher className="size-[18px]" />
              <Button variant="ghost" size="icon" asChild className="size-9">
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
