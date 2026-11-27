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
          <p className="font-display text-2xl leading-[1.1] sm:text-4xl">
            {siteConfig.bio[0]}
          </p>
          <p className="mt-6 max-w-2xl text-lg font-medium">{siteConfig.bio[1]}</p>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 border-2 border-foreground bg-primary px-4 py-2 font-sans text-sm font-bold text-primary-foreground shadow-hard-sm hover-hard"
          >
            More about me
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
        <Stagger className="grid content-start gap-0 border-[3px] border-foreground bg-foreground shadow-hard-lg">
          {siteConfig.highlights.map((h) => (
            <StaggerItem key={h.label} className="border-b-[3px] border-foreground bg-card p-5 last:border-b-0 odd:bg-secondary odd:text-secondary-foreground">
              <div className="font-display text-3xl leading-none">{h.value}</div>
              <div className="mt-2 font-sans text-xs font-bold ">{h.label}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
