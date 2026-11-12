import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { mySkills } from '@/constants';
import { Section } from '@/components/section';
import { Marquee } from '@/components/motion/marquee';
import { SkillChip } from '@/components/skill-chip';
import { Button } from '@/components/ui/button';

export function SkillsMarquee() {
  const half = Math.ceil(mySkills.length / 2);
  // Repeat each row so a single loop is always wider than the screen.
  const row = (items: typeof mySkills[number][]) => [...items, ...items].map((s, i) => <SkillChip key={`${s.title}-${i}`} {...s} />);
  return (
    <Section
      id="skills"
      title="Skills and tools"
      description="The tools I reach for most often."
      action={
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/skills-tools">
            Details <ArrowRight className="size-4" />
          </Link>
        </Button>
      }
    >
      <div className="-mx-4 flex flex-col gap-3 sm:-mx-6 xl:-mx-8">
        <Marquee>
          {row(mySkills.slice(0, half))}
        </Marquee>
        <Marquee reverse>
          {row(mySkills.slice(half))}
        </Marquee>
      </div>
    </Section>
  );
}
