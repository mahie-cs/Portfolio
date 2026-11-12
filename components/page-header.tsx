import { cn } from '@/lib/utils';

export function PageHeader({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <section className={cn('flex flex-col items-start gap-3', className)} {...props} />;
}

export function PageHeaderHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn('font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl', className)}
      {...props}
    />
  );
}

export function PageHeaderDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg', className)} {...props} />;
}

export function PageActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-wrap items-center gap-3 pt-2', className)} {...props} />;
}
