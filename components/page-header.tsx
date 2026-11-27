import { cn } from '@/lib/utils';

export function PageHeader({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <section className={cn('flex flex-col items-start gap-4', className)} {...props} />;
}

export function PageHeaderHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'inline-block -rotate-1 border-[3px] border-foreground bg-card px-5 py-2 text-4xl leading-[0.95] text-foreground shadow-hard sm:text-5xl md:text-7xl',
        className
      )}
      {...props}
    />
  );
}

export function PageHeaderDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('max-w-2xl border-l-8 border-accent pl-4 text-base font-medium leading-relaxed sm:text-lg', className)} {...props} />;
}

export function PageActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-wrap items-center gap-4 pt-2', className)} {...props} />;
}
