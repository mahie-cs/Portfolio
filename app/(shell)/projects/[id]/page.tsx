import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '@/constants/projects';
import { siteConfig } from '@/config/site';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';

type Params = { params: Promise<{ id: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ id: p.slug }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const p = projects.find((x) => x.slug === id);
  return p ? { title: p.title, description: p.tagline } : {};
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <h2 className="mb-3 font-display text-xl font-semibold">{title}</h2>
      <ul className="space-y-2 text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default async function ProjectPage({ params }: Params) {
  const { id } = await params;
  const project = projects.find((p) => p.slug === id);
  if (!project) notFound();

  return (
    <article>
      <Link href="/projects" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
        <ArrowLeft className="size-4" /> All projects
      </Link>

      <PageHeader>
        <div className="flex items-center gap-3">
          <span className="rounded-md border bg-muted px-2.5 py-0.5 font-mono text-xs font-semibold text-muted-foreground">
            Project #{project.number}
          </span>
          <span className="text-sm tabular-nums text-muted-foreground">{project.year}</span>
        </div>
        <PageHeaderHeading>{project.title}</PageHeaderHeading>
        <PageHeaderDescription>{project.tagline}</PageHeaderDescription>
        <div className="flex flex-wrap gap-3 pt-2">
          {project.links.live && (
            <Button asChild className="rounded-full">
              <Link href={project.links.live} target="_blank" rel="noreferrer">
                Live site <ExternalLink className="size-4" />
              </Link>
            </Button>
          )}
          {project.links.github && (
            <Button asChild variant="outline" className="rounded-full">
              <Link href={project.links.github} target="_blank" rel="noreferrer">
                Source code <ExternalLink className="size-4" />
              </Link>
            </Button>
          )}
        </div>
      </PageHeader>

      <Reveal className="mt-10 max-w-2xl text-lg leading-relaxed">{project.overview}</Reveal>

      <Reveal className="mt-8 flex flex-wrap gap-2">
        {project.techStack.map((t) => (
          <Badge key={t} variant="outline" className="px-3 py-1 text-sm">
            {t}
          </Badge>
        ))}
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <List title="Features" items={project.features} />
        <List title="Challenges" items={project.challenges} />
        <List title="What I learned" items={project.learnings} />
      </div>

      <Reveal className="mt-14 rounded-xl border bg-card/50 p-6">
        <p className="text-muted-foreground">
          Questions or feedback about this project?{' '}
          <Link href={siteConfig.links.email} className="font-medium text-primary underline-offset-4 hover:underline">
            Email me
          </Link>
          .
        </p>
      </Reveal>
    </article>
  );
}
