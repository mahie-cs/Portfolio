import { Geist, Geist_Mono, Bricolage_Grotesque } from 'next/font/google';

export const fontSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
export const fontMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

/** Display face for headlines. Swap it for any Google font. */
export const fontDisplay = Bricolage_Grotesque({
  variable: '--font-display',
  subsets: ['latin'],
});
