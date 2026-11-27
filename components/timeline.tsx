'use client';

import { motion } from 'framer-motion';
import { ease } from '@/lib/motion';
import type { TimelineViewerData } from '@/types/TimelineViewer.types';

export function Timeline({ data }: { data: TimelineViewerData[] }) {
  return (
    <ol className="relative ml-3 border-s-8 border-foreground">
      {data.map((item, i) => (
        <motion.li
          key={item.title + item.date}
          className="relative mb-10 ms-8 last:mb-0"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.25, ease, delay: i * 0.04 }}
        >
          <span
            className={`absolute -start-[3.1rem] top-2 size-6 border-[3px] border-foreground ${
              item.latest ? 'bg-primary' : 'bg-background'
            }`}
          />
          <div className="border-[3px] border-foreground bg-card p-5 shadow-hard">
            <time className="inline-block border-2 border-foreground bg-secondary px-2 py-0.5 font-sans text-xs font-bold text-secondary-foreground">
              {item.date}
            </time>
            <h3 className="mt-3 flex flex-wrap items-center gap-3 text-2xl leading-none">
              {item.title}
              {item.latest && (
                <span className="border-2 border-foreground bg-primary px-2 py-0.5 font-sans text-xs font-bold text-primary-foreground">NOW</span>
              )}
            </h3>
            {item.place && <p className="mt-2 font-sans text-sm font-bold ">{item.place}</p>}
            <p className="mt-3 max-w-2xl leading-relaxed">{item.description}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
