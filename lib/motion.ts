import type { Transition, Variants } from 'framer-motion';

/** One easing curve + duration set so motion feels consistent everywhere. */
export const ease = [0.2, 0.9, 0.2, 1] as const;

export const spring: Transition = { type: 'spring', stiffness: 260, damping: 28 };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease } },
};

export const stagger = (delay = 0.05): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});
