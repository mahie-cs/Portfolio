import type { Metadata } from 'next';
import { getGitHubStats } from '@/app/actions/stats';
import { siteConfig } from '@/config/site';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { Stagger, StaggerItem, Reveal } from '@/components/motion/reveal';
import { SpotlightCard } from '@/components/motion/spotlight-card';
import { AnimatedNumber } from '@/components/motion/animated-number';
import Pager from '@/components/pager';
import GitHubGraphs from './GitHubGraphs';

export const metadata: Metadata = { title: 'Stats' };
export const revalidate = 60;

export default async function StatsPage() {
  const gh = await getGitHubStats();

  const githubCards: { title: string; value: string | number | null | undefined }[] = [
    { title: 'Public repositories', value: gh?.public_repos },
    { title: 'Followers', value: gh?.followers },
    { title: 'Following', value: gh?.following },
    { title: 'Company', value: gh?.company },
    { title: 'Location', value: gh?.location },
    { title: 'Open to work', value: gh ? (gh.hireable ? 'Yes' : 'Not listed') : null },
  ];

  return (
    <>
      <PageHeader>
        <PageHeaderHeading>GitHub stats</PageHeaderHeading>
        <PageHeaderDescription>Live numbers from my GitHub profile.</PageHeaderDescription>
      </PageHeader>

      <Reveal className="mt-10">
        <h2 className="font-display text-2xl font-semibold">Contribution activity</h2>
        <p className="mt-1 text-muted-foreground">@{siteConfig.links.githubUsername}</p>
      </Reveal>

      <Reveal className="mt-6 flex justify-center overflow-x-auto rounded-xl border p-4">
        <GitHubGraphs />
      </Reveal>

      <Stagger delay={0.05} className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {githubCards.map((c) => (
          <StaggerItem key={c.title}>
            <SpotlightCard className="h-full min-h-[115px] p-5">
              <div className="flex h-full flex-col justify-between gap-3">
                <p className="text-sm font-medium text-muted-foreground">{c.title}</p>
                <div className="font-display text-2xl font-semibold leading-tight tracking-tight break-words line-clamp-2">
                  {typeof c.value === 'number' ? (
                    <AnimatedNumber value={c.value} />
                  ) : (
                    (c.value && String(c.value).trim()) ? c.value : 'Not available'
                  )}
                </div>
              </div>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>
      <Pager />
    </>
  );
}
