'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner, ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();

  // fallback to "system" if undefined
  const resolvedTheme: ToasterProps['theme'] =
    theme === 'light' || theme === 'dark' ? theme : 'system';

  return (
    <Sonner
      theme={resolvedTheme}
      className="toaster group"
      toastOptions={{ classNames: { toast: '!rounded-xl !border-[3px] !border-foreground !shadow-[6px_6px_0_0_var(--shadow-color)] !font-sans !font-bold !' } }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
