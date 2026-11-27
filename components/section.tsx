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
    <section id={id} className={cn('py-14 md:py-20', className)}>
      <div className="container">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-3xl">
            <h2 className="inline-block -rotate-1 border-[3px] border-foreground bg-card px-5 py-2 text-4xl leading-none text-foreground shadow-hard sm:text-5xl md:text-7xl">
              {title}
            </h2>
            {description && <p className="mt-5 max-w-xl border-l-8 border-accent pl-4 text-base font-medium sm:text-lg">{description}</p>}
          </div>
          {action}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
