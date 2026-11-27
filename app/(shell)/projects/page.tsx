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

      <Stagger className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <StaggerItem key={p.slug}>
            <SpotlightCard className="h-full">
              <Link href={`/projects/${p.slug}`} className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="border-2 border-foreground bg-secondary px-2 py-0.5 font-sans text-xs font-bold text-secondary-foreground group-hover:bg-background">
                      #{p.number}
                    </span>
                    <h2 className="text-2xl leading-none">{p.title}</h2>
                  </div>
                  <ArrowUpRight className="size-8 shrink-0 stroke-[3] transition-transform duration-100 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <p className="font-medium">{p.tagline}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {p.techStack.map((t) => (
                    <li key={t} className="border-2 border-foreground bg-background px-2 py-0.5 font-sans text-xs font-bold text-foreground">
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
