import type { Metadata, Viewport } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import 'lenis/dist/lenis.css';
import './globals.css';

import { siteConfig, META_THEME_COLORS } from '@/config/site';
import { fontDisplay, fontMono, fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { LenisProvider } from '@/components/providers/lenis-provider';
import { MotionProvider } from '@/components/providers/motion-provider';
import { ScrollProgress } from '@/components/motion/scroll-progress';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} · ${siteConfig.role}`, template: `%s · ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: { card: 'summary_large_image', title: siteConfig.name, description: siteConfig.description },
  icons: { icon: '/favicon.ico', shortcut: '/favicon-16x16.png', apple: '/apple-touch-icon.png' },
};

export const viewport: Viewport = { themeColor: META_THEME_COLORS.dark };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-svh bg-background font-sans antialiased', fontSans.variable, fontMono.variable, fontDisplay.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange enableColorScheme>
          <MotionProvider>
            <LenisProvider>
              <ScrollProgress />
              <div vaul-drawer-wrapper="" className="relative flex min-h-svh flex-col bg-background">
                <SiteHeader />
                <main className="flex flex-1 flex-col">{children}</main>
                <SiteFooter />
              </div>
            </LenisProvider>
          </MotionProvider>
          <Toaster richColors position="top-center" />
        </ThemeProvider>
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
