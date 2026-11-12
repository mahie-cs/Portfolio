import { cn } from '@/lib/utils';
import { Reveal } from '@/components/motion/reveal';

/** Standard page-width section used on the home page. */
export function Section({
  id,
  title,
  description,
  action,
  className,
  children,
}: {
  id?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn('border-b border-grid py-16 md:py-24', className)}>
      <div className="container">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
            {description && <p className="mt-3 text-base text-muted-foreground sm:text-lg">{description}</p>}
          </div>
          {action}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
