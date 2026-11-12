'use client';

import { motion } from 'framer-motion';
import { ease } from '@/lib/motion';
import type { TimelineViewerData } from '@/types/TimelineViewer.types';

export function Timeline({ data }: { data: TimelineViewerData[] }) {
  return (
    <ol className="relative ml-2 border-s border-border">
      {data.map((item, i) => (
        <motion.li
          key={item.title + item.date}
          className="relative mb-10 ms-6 last:mb-0"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.5, ease, delay: i * 0.05 }}
        >
          <span
            className={`absolute -start-[1.9rem] top-1.5 size-2.5 rounded-full ring-4 ring-background ${
              item.latest ? 'bg-primary' : 'bg-muted-foreground/50'
            }`}
          />
          <time className="text-sm text-muted-foreground">{item.date}</time>
          <h3 className="mt-1 flex flex-wrap items-center gap-2 text-lg font-semibold">
            {item.title}
            {item.latest && (
              <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary">Current</span>
            )}
          </h3>
          {item.place && <p className="text-sm font-medium text-foreground/80">{item.place}</p>}
          <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">{item.description}</p>
        </motion.li>
      ))}
    </ol>
  );
}
