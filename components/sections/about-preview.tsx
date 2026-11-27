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
          <p className="font-sans text-xl font-normal leading-relaxed text-foreground sm:text-2xl sm:leading-relaxed">
            I am a <span className="font-semibold text-foreground">first-year Computer Science &amp; Engineering student</span> in Dhaka who enjoys building things for the web, from the interface down to the database.
          </p>
          <p className="mt-5 max-w-2xl font-sans text-base font-normal leading-relaxed text-muted-foreground sm:text-lg">
            My main stack is <span className="font-semibold text-foreground">TypeScript</span>, <span className="font-semibold text-foreground">React</span>, <span className="font-semibold text-foreground">Next.js</span>, and <span className="font-semibold text-foreground">Node.js</span>, with <span className="font-semibold text-foreground">MongoDB</span> and <span className="font-semibold text-foreground">Supabase</span> for data. I also make small games in <span className="font-semibold text-foreground">Godot 4</span> and <span className="font-semibold text-foreground">Ren'Py</span>, and I am most at home in a terminal with Linux, Bash, and Vim.
          </p>
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
