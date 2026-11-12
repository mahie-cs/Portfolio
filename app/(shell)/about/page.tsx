import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { SocialLinks } from '@/components/social-links';
import Pager from '@/components/pager';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About me</PageHeaderHeading>
      </PageHeader>

      <Stagger className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed">
        {siteConfig.bio.map((p, i) => (
          <StaggerItem key={i}>
            <p className={i === 0 ? 'font-display text-2xl font-medium leading-snug sm:text-3xl' : 'text-muted-foreground'}>
              {p}
            </p>
          </StaggerItem>
        ))}
      </Stagger>

      <Stagger className="mt-12 grid max-w-2xl gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-3">
        {siteConfig.highlights.map((h) => (
          <StaggerItem key={h.label} className="bg-card/80 p-5">
            <div className="font-display text-xl font-semibold">{h.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{h.label}</div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-12">
        <h2 className="mb-4 font-display text-xl font-semibold">Find me online</h2>
        <SocialLinks />
      </Reveal>
      <Pager />
    </>
  );
}
