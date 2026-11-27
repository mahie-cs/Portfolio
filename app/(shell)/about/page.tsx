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

      <Stagger className="mt-8 max-w-2xl space-y-6">
        <StaggerItem>
          <p className="font-sans text-xl font-normal leading-relaxed text-foreground sm:text-2xl sm:leading-relaxed">
            I am a <span className="font-semibold text-foreground">first-year Computer Science &amp; Engineering student</span> in Dhaka who enjoys building things for the web, from the interface down to the database.
          </p>
        </StaggerItem>
        <StaggerItem>
          <p className="font-sans text-base font-normal leading-relaxed text-muted-foreground sm:text-lg">
            My main stack is <span className="font-semibold text-foreground">TypeScript</span>, <span className="font-semibold text-foreground">React</span>, <span className="font-semibold text-foreground">Next.js</span>, and <span className="font-semibold text-foreground">Node.js</span>, with <span className="font-semibold text-foreground">MongoDB</span> and <span className="font-semibold text-foreground">Supabase</span> for data. I also make small games in <span className="font-semibold text-foreground">Godot 4</span> and <span className="font-semibold text-foreground">Ren'Py</span>, and I am most at home in a terminal with Linux, Bash, and Vim.
          </p>
        </StaggerItem>
        <StaggerItem>
          <p className="font-sans text-base font-normal leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.bio[2]}
          </p>
        </StaggerItem>
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
