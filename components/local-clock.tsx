'use client';

import { useSyncExternalStore } from 'react';
import { siteConfig } from '@/config/site';

/** Live local time for the site owner (timezone set in config/site.ts). */
export function LocalClock({ seconds = false }: { seconds?: boolean }) {
  const step = seconds ? 1000 : 15000;
  const tick = useSyncExternalStore(
    (cb) => {
      const id = setInterval(cb, step);
      return () => clearInterval(id);
    },
    () => Math.floor(Date.now() / step) * step,
    () => 0
  );
  if (!tick) return <span className="tabular-nums opacity-0">00:00</span>;
  return (
    <span className="tabular-nums">
      {new Date(tick).toLocaleTimeString('en-GB', {
        timeZone: siteConfig.timezone,
        hour: '2-digit',
        minute: '2-digit',
        ...(seconds ? { second: '2-digit' } : {}),
        hour12: false,
      })}
    </span>
  );
}
