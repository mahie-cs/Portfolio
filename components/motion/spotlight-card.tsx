import { cn } from '@/lib/utils';

/**
 * A boxed card with a hard offset shadow that snaps on hover.
 * (Name kept so existing imports keep working.)
 */
export function SpotlightCard({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('group relative border-[3px] border-foreground bg-card shadow-hard hover-hard', className)}
      {...props}
    >
      {children}
    </div>
  );
}
