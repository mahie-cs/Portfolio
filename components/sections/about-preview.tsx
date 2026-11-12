import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/section';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';

export function AboutPreview() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <p className="font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
            {siteConfig.bio[0]}
          </p>
          <p className="mt-6 max-w-2xl text-muted-foreground">{siteConfig.bio[1]}</p>
          <Link
            href="/about"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            More about me
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
        <Stagger className="grid content-start gap-px overflow-hidden rounded-xl border bg-border">
          {siteConfig.highlights.map((h) => (
            <StaggerItem key={h.label} className="bg-card/80 p-5">
              <div className="font-display text-2xl font-semibold">{h.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{h.label}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
