import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/constants/projects';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Stagger, StaggerItem } from '@/components/motion/reveal';
import { ProjectRow } from '@/components/project-row';

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  return (
    <Section
      id="projects"
      title="Selected work"
      description="A few things I have designed and built recently."
      action={
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/projects">
            All projects <ArrowRight className="size-4" />
          </Link>
        </Button>
      }
    >
      <Stagger delay={0.1} className="rounded-xl border">
        {featured.map((p) => (
          <StaggerItem key={p.slug}>
            <ProjectRow project={p} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
