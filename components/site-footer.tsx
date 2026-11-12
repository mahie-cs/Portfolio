import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="container-wrapper">
        <div className="container flex flex-col gap-2 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p>
            Built with Next.js, Tailwind CSS and Framer Motion.{' '}
            <Link href="/stats" className="underline-offset-4 transition-colors hover:text-foreground hover:underline">
              Site stats
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
