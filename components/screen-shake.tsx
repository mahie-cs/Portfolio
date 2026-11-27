'use client';

import { useEffect } from 'react';

/**
 * Shakes the whole screen when a button is clicked.
 * Anything rendered by <Button> qualifies, plus elements with a data-shake attribute.
 */
export function ScreenShake() {
  useEffect(() => {
    const body = document.body;
    const root = document.documentElement;
    let timer: ReturnType<typeof setTimeout>;

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target?.closest('[data-slot="button"], [data-shake]')) return;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const angle = Math.random() * Math.PI * 2;
      const power = 10 + Math.random() * 4;
      root.style.setProperty('--sx', `${(Math.cos(angle) * power).toFixed(1)}px`);
      root.style.setProperty('--sy', `${(Math.sin(angle) * power).toFixed(1)}px`);

      body.classList.remove('shake');
      void body.offsetWidth; // restart the animation on rapid clicks
      body.classList.add('shake');
      clearTimeout(timer);
      timer = setTimeout(() => body.classList.remove('shake'), 420);
      navigator.vibrate?.(25);
    };

    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      clearTimeout(timer);
    };
  }, []);

  return null;
}
