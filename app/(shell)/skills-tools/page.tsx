import type { Metadata } from 'next';
import { mySkills, skillGroups } from '@/constants';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { Stagger, StaggerItem, Reveal } from '@/components/motion/reveal';
import { SkillChip } from '@/components/skill-chip';
import Pager from '@/components/pager';

export const metadata: Metadata = { title: 'Skills & tools' };

export default function SkillsPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Skills and tools</PageHeaderHeading>
        <PageHeaderDescription>What I use to design, build and ship.</PageHeaderDescription>
      </PageHeader>

      <Stagger delay={0.04} className="mt-10 flex flex-wrap gap-2">
        {mySkills.map((s) => (
          <StaggerItem key={s.title}>
            <SkillChip {...s} />
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((g) => (
          <Reveal key={g.title} className="rounded-xl border bg-card/50 p-5">
            <h2 className="mb-3 font-display text-lg font-semibold">{g.title}</h2>
            <ul className="space-y-1.5 text-muted-foreground">
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <Pager />
    </>
  );
}
