import type { Metadata } from 'next';
import { career } from '@/constants/career';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { Timeline } from '@/components/timeline';
import Pager from '@/components/pager';

export const metadata: Metadata = { title: 'Career' };

export default function Page() {
  return (
    <>
      <PageHeader className="mb-12">
        <PageHeaderHeading>Career</PageHeaderHeading>
        <PageHeaderDescription>Where I have worked and what I have built.</PageHeaderDescription>
      </PageHeader>
      <Timeline data={career} />
      <Pager />
    </>
  );
}
