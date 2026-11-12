import { cn } from '@/lib/utils';

/** Pure-CSS infinite marquee (no JS, pauses on hover). */
export function Marquee({
  children,
  reverse,
  className,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('marquee-mask group flex overflow-hidden', className)}>
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            'flex shrink-0 items-center gap-3 pr-3 group-hover:[animation-play-state:paused]',
            reverse ? 'animate-marquee-reverse' : 'animate-marquee'
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
