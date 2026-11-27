'use client';

import { useEffect, useRef } from 'react';

const GLYPHS = ' .:+*#';
const CELL_H = 18;

/**
 * A fixed field of ASCII glyphs that ripples slowly.
 * Colours come from the theme tokens, so it follows light and dark.
 * Reduced motion renders a single static frame.
 */
export function AsciiBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const root = document.documentElement;
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0, h = 0, cols = 0, rows = 0, cellW = 10, t = 0, raf = 0;
    let ink = '#111';

    const family = () => getComputedStyle(document.body).getPropertyValue('--font-geist-mono').trim() || 'monospace';

    const readColors = () => {
      const cs = getComputedStyle(root);
      ink = cs.getPropertyValue('--foreground').trim() || ink;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = ink;
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const v = (Math.sin(i * 0.09 + t) + Math.sin(j * 0.13 - t * 1.3) + Math.sin((i + j) * 0.05 + t * 0.7) + 3) / 6;
          const k = Math.min(GLYPHS.length - 1, Math.floor(v * v * v * (GLYPHS.length - 1) * 1.2));
          if (!k) continue;
          ctx.fillText(GLYPHS[k]!, i * cellW, j * CELL_H);
        }
      }
      ctx.globalAlpha = 1;
    };

    const resize = () => {
      // Whole-pixel sizing at the real device density keeps glyph edges crisp.
      const d = Math.max(1, Math.ceil(devicePixelRatio || 1));
      w = root.clientWidth;
      h = innerHeight;
      canvas.width = w * d;
      canvas.height = h * d;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      ctx.font = `700 16px ${family()}`;
      ctx.textBaseline = 'top';
      cellW = Math.max(8, Math.round(ctx.measureText('M').width));
      cols = Math.ceil(w / cellW);
      rows = Math.ceil(h / CELL_H);
      readColors();
      if (still) draw();
    };

    const loop = () => {
      t += 0.015;
      readColors();
      draw();
      raf = requestAnimationFrame(loop);
    };

    resize();
    document.fonts?.load(`700 16px ${family()}`).then(resize);
    addEventListener('resize', resize);
    const themeObserver = new MutationObserver(() => { readColors(); if (still) draw(); });
    themeObserver.observe(root, { attributes: true, attributeFilter: ['class'] });
    if (!still) raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener('resize', resize);
      themeObserver.disconnect();
    };
  }, []);

  return <canvas ref={ref} id="ascii-bg" aria-hidden className="pointer-events-none fixed inset-0 -z-10" />;
}
