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
    'group flex flex-1 flex-col gap-1 border-[3px] border-foreground bg-card p-4 shadow-hard-sm hover-hard hover:bg-primary hover:text-primary-foreground';
  return (
    <nav aria-label="Pagination" className="mt-16 flex gap-4">
      {prev ? (
        <Link href={prev.href} className={base}>
          <span className="flex items-center gap-1 font-sans text-xs font-bold ">
            <ArrowLeft className="size-3 transition-transform group-hover:-translate-x-0.5" /> Previous
          </span>
          <span className="font-display text-xl ">{prev.title}</span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link href={next.href} className={`${base} items-end text-right`}>
          <span className="flex items-center gap-1 font-sans text-xs font-bold ">
            Next <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="font-display text-xl ">{next.title}</span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
