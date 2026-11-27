import type { Metadata } from 'next';
import { education } from '@/constants/education';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { Timeline } from '@/components/timeline';
import Pager from '@/components/pager';

export const metadata: Metadata = { title: 'Education' };

export default function Page() {
  return (
    <>
      <PageHeader className="mb-12">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderDescription>Where I studied and what I focused on.</PageHeaderDescription>
      </PageHeader>
      <Timeline data={education} />
      <Pager />
    </>
  );
}
