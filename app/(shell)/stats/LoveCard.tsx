'use client';

import { useState, useSyncExternalStore } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { addLove } from '@/app/actions/stats';
import { AnimatedNumber } from '@/components/motion/animated-number';
import { Button } from '@/components/ui/button';

export default function LoveCard({ initial }: { initial: number }) {
  const [count, setCount] = useState(initial);
  const [likedNow, setLiked] = useState(false);
  const [busy, setBusy] = useState(false);
  const likedBefore = useSyncExternalStore(
    () => () => {},
    () => {
      try {
        return sessionStorage.getItem('hasLiked') === 'true';
      } catch {
        return false;
      }
    },
    () => false
  );
  const liked = likedNow || likedBefore;

  return (
    <div className="flex flex-col items-center gap-5 py-4">
      <AnimatedNumber value={count} className="font-display text-6xl font-semibold text-rose-500" />
      <Button
        variant={liked ? 'secondary' : 'default'}
        size="lg"
        className="rounded-full"
        disabled={liked || busy}
        onClick={async () => {
          setBusy(true);
          const res = await addLove();
          setBusy(false);
          if (res.success) {
            setCount(res.count);
            setLiked(true);
            try {
              sessionStorage.setItem('hasLiked', 'true');
            } catch {}
          }
        }}
      >
        <motion.span
          key={String(liked)}
          initial={{ scale: liked ? 0.4 : 1 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 12 }}
          className="flex"
        >
          <Heart className={liked ? 'size-4 fill-rose-500 text-rose-500' : 'size-4'} />
        </motion.span>
        {liked ? 'Thank you!' : 'Like this site'}
      </Button>
    </div>
  );
}
