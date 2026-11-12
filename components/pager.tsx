'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { pagerOrder } from '@/config/docs';

/** Previous / next links, derived from the order in config/docs.ts. */
export default function Pager() {
  const pathname = usePathname();
  const i = pagerOrder.findIndex((p) => p.href === pathname);
  if (i === -1) return null;
  const prev = pagerOrder[i - 1];
  const next = pagerOrder[i + 1];

  const base =
    'group flex flex-1 flex-col gap-1 rounded-xl border bg-card/40 p-4 transition-colors hover:border-primary/40 hover:bg-card';
  return (
    <nav aria-label="Pagination" className="mt-16 flex gap-3">
      {prev ? (
        <Link href={prev.href} className={base}>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <ArrowLeft className="size-3 transition-transform group-hover:-translate-x-0.5" /> Previous
          </span>
          <span className="font-medium">{prev.title}</span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link href={next.href} className={`${base} items-end text-right`}>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            Next <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="font-medium">{next.title}</span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
