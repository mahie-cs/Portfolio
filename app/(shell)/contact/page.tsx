import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { Reveal } from '@/components/motion/reveal';
import { SocialLinks } from '@/components/social-links';
import { CopyEmail } from '@/components/copy-email';
import Pager from '@/components/pager';
import ContactForm from './ContactForm';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  const email = siteConfig.links.email.replace('mailto:', '');
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Contact</PageHeaderHeading>
        <PageHeaderDescription>
          Have an opening, a project or a question? Send me a message and I will reply as soon as I can.
        </PageHeaderDescription>
      </PageHeader>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <ContactForm />
        </Reveal>
        <Reveal className="space-y-6">
          <div>
            <h2 className="mb-2 font-display text-lg font-semibold">Email</h2>
            <p className="mb-3 break-all text-muted-foreground">{email}</p>
            <CopyEmail email={email} />
          </div>
          <div>
            <h2 className="mb-3 font-display text-lg font-semibold">Elsewhere</h2>
            <SocialLinks />
          </div>
        </Reveal>
      </div>
      <Pager />
    </>
  );
}
