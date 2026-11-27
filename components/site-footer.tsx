import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="border-t-[3px] border-foreground bg-foreground text-background">
      <div className="container-wrapper !border-background">
        <div className="container flex flex-col gap-3 py-8 font-sans text-sm font-bold sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p>
            Next.js / Tailwind / Framer Motion{' '}
            <Link href="/stats" className="ml-2 bg-secondary px-2 py-1 text-secondary-foreground hover:bg-primary">
              Site stats &rarr;
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
