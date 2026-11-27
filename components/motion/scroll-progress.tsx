'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/** Chunky reading-progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-2 origin-left border-b-2 border-foreground bg-primary"
      style={{ scaleX }}
    />
  );
}
