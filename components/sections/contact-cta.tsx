import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/motion/reveal';
import { CopyEmail } from '@/components/copy-email';
import { SocialLinks } from '@/components/social-links';
import { Button } from '@/components/ui/button';

export function ContactCta() {
  const email = siteConfig.links.email.replace('mailto:', '');
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Let's work together.
          </h2>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            I am looking for a junior developer or internship role. If you have an opening, or a project that could use another pair of hands, send me a message.
          </p>
          <Link
            href={siteConfig.links.email}
            className="mt-8 block w-fit max-w-full break-all font-display text-xl font-medium underline decoration-border decoration-2 underline-offset-8 transition-colors hover:decoration-primary sm:text-3xl md:text-4xl"
          >
            {email}
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Send a message</Link>
            </Button>
            <CopyEmail email={email} />
          </div>
          <div className="mt-12">
            <SocialLinks />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
