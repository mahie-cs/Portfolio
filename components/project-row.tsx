import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/constants/projects';

/** One line in the featured-projects list. The whole row is a link. */
export function ProjectRow({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative grid gap-3 border-t-[3px] border-foreground bg-card py-7 transition-colors first:border-t-0 hover:bg-primary hover:text-primary-foreground md:grid-cols-[6rem_1fr_auto] md:items-baseline md:gap-8 md:px-6"
    >
      <span className="font-sans text-lg font-bold tabular-nums">{project.year}</span>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="border-2 border-foreground bg-secondary px-2 py-0.5 font-sans text-xs font-bold text-secondary-foreground">
            #{project.number}
          </span>
          <h3 className="text-3xl leading-none transition-transform duration-100 group-hover:translate-x-2 md:text-5xl">
            {project.title}
          </h3>
        </div>
        <p className="mt-3 max-w-xl font-medium">{project.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((t) => (
            <li key={t} className="border-2 border-foreground bg-background px-2 py-0.5 font-sans text-xs font-bold text-foreground">
              {t}
            </li>
          ))}
        </ul>
      </div>
      <ArrowUpRight className="hidden size-12 stroke-[3] transition-transform duration-100 group-hover:-translate-y-1 group-hover:translate-x-1 md:block" />
    </Link>
  );
}
