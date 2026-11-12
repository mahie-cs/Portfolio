'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { META_THEME_COLORS } from '@/config/site';
import { useMetaColor } from '@/hooks/use-meta-color';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export function ModeSwitcher({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const { setMetaColor } = useMetaColor();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-9 rounded-full"
      onClick={() => {
        const next = resolvedTheme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        setMetaColor(META_THEME_COLORS[next]);
      }}
    >
      <SunIcon className={cn('hidden [html.dark_&]:block', className)} />
      <MoonIcon className={cn('hidden [html.light_&]:block', className)} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
