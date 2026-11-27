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

      <Stagger delay={0.04} className="mt-12 flex flex-wrap gap-4">
        {mySkills.map((s) => (
          <StaggerItem key={s.title}>
            <SkillChip {...s} />
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((g) => (
          <Reveal key={g.title} className="border-[3px] border-foreground bg-card p-5 shadow-hard">
            <h2 className="mb-3 inline-block bg-primary px-2 py-1 text-xl text-primary-foreground">{g.title}</h2>
            <ul className="space-y-1.5 font-sans text-sm font-bold ">
              {g.items.map((i) => (
                <li key={i} className="border-b-2 border-foreground pb-1.5 last:border-b-0">{i}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <Pager />
    </>
  );
}
