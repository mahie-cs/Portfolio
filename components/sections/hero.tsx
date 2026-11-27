'use client';

import Link from 'next/link';
import { ArrowDown, Download, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { ease } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { SplitText } from '@/components/motion/split-text';
import { LocalClock } from '@/components/local-clock';
import { Marquee } from '@/components/motion/marquee';

const ticker = ['Open to work', 'Junior dev', 'Web apps', 'Games', 'TypeScript', 'Next.js', 'Dhaka, BD'];

export function Hero() {
  const pop = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.25, ease, delay },
  });

  return (
    <section className="relative isolate overflow-hidden ">

      <div className="container flex min-h-[calc(100svh-4rem-3.5rem)] flex-col justify-between gap-10 py-8 md:py-12">
        <motion.div {...pop(0.05)} className="flex flex-wrap items-center gap-3">
          {siteConfig.availability && (
            <span className="inline-flex items-center gap-2 rounded-full border-[3px] border-foreground bg-secondary px-4 py-1.5 font-sans text-xs font-bold text-secondary-foreground shadow-hard-sm sm:text-sm">
              <span className="size-3 animate-pulse rounded-full bg-black motion-reduce:animate-none" />
              {siteConfig.availability}
            </span>
          )}
          <span className="hidden rounded-full border-[3px] border-foreground bg-card px-4 py-1.5 font-sans text-xs font-bold sm:inline-block sm:text-sm">
            Portfolio / {new Date().getFullYear()}
          </span>
        </motion.div>

        <h1 className="font-display text-[clamp(3rem,13.5vw,12rem)] leading-[0.82] tracking-[-0.03em]">
          <span className="block w-fit -rotate-2 rounded-[22px] border-[3px] border-foreground bg-primary px-[0.14em] pb-[0.04em] text-primary-foreground shadow-hard-lg">
            <SplitText text={siteConfig.firstName} delay={0.1} className="block" />
          </span>
          <span className="mt-[0.1em] block w-fit rotate-1 rounded-[22px] border-[3px] border-foreground bg-accent px-[0.14em] pb-[0.04em] text-accent-foreground shadow-hard-lg">
            <SplitText text={siteConfig.lastName} delay={0.25} className="block" />
          </span>
        </h1>

        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-stretch">
          <motion.div {...pop(0.5)} className="border-[3px] border-foreground bg-blue p-5 text-black shadow-hard sm:p-6">
            <p className="font-display text-2xl leading-none sm:text-4xl">{siteConfig.role}</p>
            <p className="mt-3 max-w-xl text-base font-medium sm:text-lg">{siteConfig.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/projects">View projects</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get in touch</Link>
              </Button>
              {siteConfig.links.resume && (
                <Button asChild size="lg" variant="outline">
                  <Link href={siteConfig.links.resume} target="_blank">
                    <Download className="size-4" />
                    Resume
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>

          <motion.dl {...pop(0.6)} className="grid grid-cols-2 gap-5 md:grid-cols-1">
            <div className="border-[3px] border-foreground bg-lilac p-4 text-black shadow-hard">
              <dt className="mb-1 flex items-center gap-1.5 font-sans text-xs font-bold">
                <MapPin className="size-3.5" /> Based in
              </dt>
              <dd className="font-display text-lg leading-tight sm:text-xl">{siteConfig.location}</dd>
            </div>
            <div className="border-[3px] border-foreground bg-orange p-4 text-black shadow-hard">
              <dt className="mb-1 font-sans text-xs font-bold">Local time</dt>
              <dd className="font-display text-3xl leading-none sm:text-4xl">
                <LocalClock />
              </dd>
            </div>
          </motion.dl>
        </div>

        <motion.a
          {...pop(0.7)}
          href="#about"
          className="hidden w-fit items-center gap-2 rounded-full border-[3px] border-foreground bg-card px-4 py-1.5 font-sans text-sm font-bold transition-colors hover:bg-secondary hover:text-secondary-foreground md:flex"
        >
          <ArrowDown className="size-4 animate-bounce motion-reduce:animate-none" />
          Scroll
        </motion.a>
      </div>

      {/* Ticker strip */}
      <div className="-mx-2 -rotate-1 border-y-[3px] border-foreground bg-primary py-3 text-primary-foreground">
        <Marquee>
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-4 whitespace-nowrap font-display text-xl sm:text-2xl">
              {t}
              <span aria-hidden className="text-black">&#9679;</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
