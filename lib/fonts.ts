import { DM_Sans, Space_Mono, Bricolage_Grotesque } from 'next/font/google';

/** Body copy. Friendly and very readable. */
export const fontSans = DM_Sans({ variable: '--font-geist-sans', subsets: ['latin'], weight: ['400', '500', '700'] });

/** Only used by the ASCII background canvas. */
export const fontMono = Space_Mono({ variable: '--font-geist-mono', subsets: ['latin'], weight: ['700'] });

/** Headlines. Chunky and a little quirky. Swap it for any Google font. */
export const fontDisplay = Bricolage_Grotesque({ variable: '--font-display', subsets: ['latin'] });
