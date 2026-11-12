import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/constants/projects';

/** One line in the featured-projects list. The whole row is a link. */
export function ProjectRow({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative grid gap-3 border-t py-7 transition-colors first:border-t-0 hover:bg-accent/40 md:grid-cols-[6rem_1fr_auto] md:items-baseline md:gap-8 md:px-4"
    >
      <span className="text-sm tabular-nums text-muted-foreground">{project.year}</span>
      <div>
        <div className="flex items-center gap-3">
          <span className="rounded-md border bg-muted px-2 py-0.5 font-mono text-xs font-semibold text-muted-foreground">
            #{project.number}
          </span>
          <h3 className="font-display text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
            {project.title}
          </h3>
        </div>
        <p className="mt-2 max-w-xl text-muted-foreground">{project.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((t) => (
            <li key={t} className="rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground">
              {t}
            </li>
          ))}
        </ul>
      </div>
      <ArrowUpRight className="hidden size-6 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary md:block" />
    </Link>
  );
}
