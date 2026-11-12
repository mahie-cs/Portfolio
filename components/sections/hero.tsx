'use client';

import Link from 'next/link';
import { ArrowDown, Download, MapPin } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { ease } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { SplitText } from '@/components/motion/split-text';
import { LocalClock } from '@/components/local-clock';

export function Hero() {
  // Soft glow that trails the cursor. Starts upper-right on touch devices.
  const x = useMotionValue(70);
  const y = useMotionValue(25);
  const sx = useSpring(x, { stiffness: 90, damping: 22 });
  const sy = useSpring(y, { stiffness: 90, damping: 22 });
  const glow = useMotionTemplate`radial-gradient(600px circle at ${sx}% ${sy}%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 65%)`;

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay },
  });

  return (
    <section
      className="relative isolate overflow-hidden border-b border-grid"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(((e.clientX - r.left) / r.width) * 100);
        y.set(((e.clientY - r.top) / r.height) * 100);
      }}
    >
      <motion.div aria-hidden className="absolute inset-0 -z-10" style={{ background: glow }} />
      <div
        aria-hidden
        className="bg-dots absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_70%_at_30%_40%,black,transparent)]"
      />

      <div className="container flex min-h-[calc(100svh-3.5rem)] flex-col justify-between gap-12 py-8 md:py-14">
        <motion.div {...fade(0.1)}>
          {siteConfig.availability && (
            <span className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1.5 text-sm backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {siteConfig.availability}
            </span>
          )}
        </motion.div>

        <h1 className="font-display text-[clamp(3.5rem,19vw,14rem)] md:text-[clamp(5rem,15.5vw,14rem)] font-semibold leading-[0.86] tracking-[-0.045em]">
          <SplitText text={siteConfig.firstName} delay={0.15} className="block" />
          <SplitText text={siteConfig.lastName} delay={0.3} className="block" />
        </h1>

        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <motion.div {...fade(0.7)} className="max-w-xl">
            <p className="font-display text-xl font-medium sm:text-2xl">{siteConfig.role}</p>
            <p className="mt-2 text-base text-muted-foreground sm:text-lg">{siteConfig.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/projects">View projects</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/contact">Get in touch</Link>
              </Button>
              {siteConfig.links.resume && (
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link href={siteConfig.links.resume} target="_blank">
                    <Download className="size-4" />
                    Resume
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>

          <motion.dl {...fade(0.85)} className="flex gap-8 text-sm md:justify-end">
            <div>
              <dt className="mb-1 flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="size-3.5" /> Based in
              </dt>
              <dd className="font-medium">{siteConfig.location}</dd>
            </div>
            <div>
              <dt className="mb-1 text-muted-foreground">Local time</dt>
              <dd className="font-medium">
                <LocalClock />
              </dd>
            </div>
          </motion.dl>
        </div>

        <motion.a
          {...fade(1)}
          href="#about"
          className="hidden w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:flex"
        >
          <ArrowDown className="size-4 animate-bounce motion-reduce:animate-none" />
          Scroll
        </motion.a>
      </div>
    </section>
  );
}
