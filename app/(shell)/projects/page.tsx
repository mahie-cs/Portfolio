import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/constants/projects';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { Stagger, StaggerItem } from '@/components/motion/reveal';
import { SpotlightCard } from '@/components/motion/spotlight-card';
import Pager from '@/components/pager';

export const metadata: Metadata = { title: 'Projects' };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Projects</PageHeaderHeading>
        <PageHeaderDescription>Selected work, from event trackers to digital utilities.</PageHeaderDescription>
      </PageHeader>

      <Stagger className="mt-10 grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <StaggerItem key={p.slug}>
            <SpotlightCard className="h-full">
              <Link href={`/projects/${p.slug}`} className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-md border bg-muted px-2 py-0.5 font-mono text-xs font-semibold text-muted-foreground">
                      #{p.number}
                    </span>
                    <h2 className="font-display text-xl font-semibold tracking-tight">{p.title}</h2>
                  </div>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="text-muted-foreground">{p.tagline}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {p.techStack.map((t) => (
                    <li key={t} className="rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
              </Link>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>
      <Pager />
    </>
  );
}
