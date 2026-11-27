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

      <Stagger className="mt-8 max-w-2xl space-y-6 text-lg leading-relaxed">
        {siteConfig.bio.map((p, i) => (
          <StaggerItem key={i}>
            <p className={i === 0 ? 'font-display text-2xl leading-[1.1] sm:text-4xl' : 'font-medium'}>
              {p}
            </p>
          </StaggerItem>
        ))}
      </Stagger>

      <Stagger className="mt-12 grid max-w-2xl border-[3px] border-foreground bg-foreground shadow-hard-lg sm:grid-cols-3">
        {siteConfig.highlights.map((h) => (
          <StaggerItem key={h.label} className="border-b-[3px] border-foreground bg-card p-5 last:border-b-0 sm:border-b-0 sm:border-r-[3px] sm:last:border-r-0 odd:bg-secondary odd:text-secondary-foreground">
            <div className="font-display text-2xl leading-none">{h.value}</div>
            <div className="mt-2 font-sans text-xs font-bold ">{h.label}</div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-12">
        <h2 className="mb-4 inline-block bg-foreground px-3 py-1 text-2xl text-background">Find me online</h2>
        <SocialLinks />
      </Reveal>
      <Pager />
    </>
  );
}
