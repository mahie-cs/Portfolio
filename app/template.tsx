'use client';

import { motion } from 'framer-motion';
import { ease } from '@/lib/motion';

/** Re-mounts on every navigation, giving each page a quick snap-in. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex flex-1 flex-col"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.18, ease }}
    >
      {children}
    </motion.div>
  );
}
