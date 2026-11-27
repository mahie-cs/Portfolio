import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/motion/reveal';
import { CopyEmail } from '@/components/copy-email';
import { SocialLinks } from '@/components/social-links';
import { Button } from '@/components/ui/button';

export function ContactCta() {
  const email = siteConfig.links.email.replace('mailto:', '');
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <Reveal className="relative rounded-[28px] border-[3px] border-foreground bg-accent p-6 text-black shadow-hard-lg sm:p-12">
          <h2 className="text-5xl leading-[0.9] sm:text-7xl md:text-[8rem]">
            Let's work<br />together.
          </h2>
          <p className="mt-8 max-w-xl pl-0 text-base font-bold sm:text-lg">
            I am looking for a junior developer or internship role. If you have an opening, or a project that could use another pair of hands, send me a message.
          </p>
          <Link
            data-shake
            href={siteConfig.links.email}
            className="mt-8 block w-fit max-w-full break-all rounded-2xl border-[3px] border-black bg-primary px-4 py-3 font-display text-lg text-black shadow-[6px_6px_0_0_#111] hover-hard hover:bg-white sm:text-3xl md:text-4xl"
          >
            {email}
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" variant="outline" className="!border-black !bg-white !text-black !shadow-[3px_3px_0_0_#111]">
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
