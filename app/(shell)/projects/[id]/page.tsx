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
      <h2 className="mb-4 inline-block bg-foreground px-3 py-1 text-2xl text-background">{title}</h2>
      <ul className="space-y-3 font-medium">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1.5 size-3 shrink-0 border-2 border-foreground bg-primary" />
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
      <Link href="/projects" className="mb-8 inline-flex items-center gap-2 border-2 border-foreground bg-background px-3 py-1.5 font-sans text-sm font-bold hover:bg-secondary hover:text-secondary-foreground">
        <ArrowLeft className="size-4" /> All projects
      </Link>

      <PageHeader>
        <div className="flex items-center gap-3">
          <span className="border-2 border-foreground bg-primary px-2.5 py-0.5 font-sans text-xs font-bold text-primary-foreground">
            Project #{project.number}
          </span>
          <span className="font-sans text-base font-bold tabular-nums">{project.year}</span>
        </div>
        <PageHeaderHeading>{project.title}</PageHeaderHeading>
        <PageHeaderDescription>{project.tagline}</PageHeaderDescription>
        <div className="flex flex-wrap gap-4 pt-3">
          {project.links.live && (
            <Button asChild size="lg">
              <Link href={project.links.live} target="_blank" rel="noreferrer">
                Live site <ExternalLink className="size-4" />
              </Link>
            </Button>
          )}
          {project.links.github && (
            <Button asChild size="lg" variant="outline">
              <Link href={project.links.github} target="_blank" rel="noreferrer">
                Source code <ExternalLink className="size-4" />
              </Link>
            </Button>
          )}
        </div>
      </PageHeader>

      <Reveal className="mt-10 max-w-2xl border-l-8 border-foreground pl-5 text-lg font-medium leading-relaxed">{project.overview}</Reveal>

      <Reveal className="mt-8 flex flex-wrap gap-2">
        {project.techStack.map((t) => (
          <Badge key={t} variant="secondary" className="px-3 py-1 text-sm">
            {t}
          </Badge>
        ))}
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <List title="Features" items={project.features} />
        <List title="Challenges" items={project.challenges} />
        <List title="What I learned" items={project.learnings} />
      </div>

      <Reveal className="mt-14 border-[3px] border-foreground bg-secondary p-6 text-secondary-foreground shadow-hard">
        <p className="font-bold">
          Questions or feedback about this project?{' '}
          <Link href={siteConfig.links.email} className="underline decoration-4 underline-offset-4 hover:bg-foreground hover:text-background">
            Email me
          </Link>
          .
        </p>
      </Reveal>
    </article>
  );
}
