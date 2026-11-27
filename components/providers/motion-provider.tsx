'use client';

import { MotionConfig } from 'framer-motion';

/** Makes every Framer Motion animation respect "reduce motion" OS settings. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
