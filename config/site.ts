/**
 * ──────────────────────────────────────────────────────────────
 *  EDIT ME FIRST.
 *  Everything personal on the site is read from this file and
 *  from /constants (projects, skills, education, career).
 * ──────────────────────────────────────────────────────────────
 */
export const siteConfig = {
  // Identity
  name: 'MD. Montasir Rahman Mahie',
  // The hero shows these two lines in very large type, so keep them short.
  firstName: 'Montasir',
  lastName: 'Mahie',
  role: 'Junior software developer',
  tagline: 'First-year CSE student building web apps and games.',
  description:
    'Portfolio of MD. Montasir Rahman Mahie, a Computer Science and Engineering student in Dhaka building web apps with TypeScript, React and Next.js, and games with Godot 4 and Ren\'Py.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://your-domain.com',

  // Header clock + hero facts. Any IANA timezone, e.g. "Europe/London".
  location: 'Mirpur, Dhaka, Bangladesh',
  timezone: 'Asia/Dhaka',

  // Shown as a status pill in the hero. Set to null to hide it.
  availability: 'Open to internships and junior roles' as string | null,

  // About section. One string per paragraph.
  bio: [
    'I am a first-year Computer Science and Engineering student in Dhaka who enjoys building things for the web, from the interface down to the database.',
    'My main stack is TypeScript, React, Next.js and Node.js, with MongoDB and Supabase for data. I also make small games in Godot 4 and Ren\'Py, and I am most at home in a terminal with Linux, Bash and Vim.',
    'I am looking for a junior developer or software engineering internship where I can learn from a team and ship real work.',
  ],

  // Short, scannable facts shown beside the bio.
  highlights: [
    { label: 'Studying', value: 'B.Sc. in CSE' },
    { label: 'Based in', value: 'Dhaka' },
    { label: 'Looking for', value: 'Internships' },
  ],

  keywords: [
    'MD. Montasir Rahman Mahie',
    'Montasir Mahie',
    'junior software developer',
    'software engineering intern',
    'Next.js',
    'React',
    'TypeScript',
    'Dhaka',
  ],

  links: {
    github: 'https://github.com/mahie-cs',
    githubUsername: 'mahie-cs', // powers the GitHub stats on /stats
    twitter: '', // optional: leave empty to hide
    linkedin: '', // optional: leave empty to hide
    resume: '', // optional: e.g. '/resume.pdf' after adding public/resume.pdf
    email: 'mailto:mahie.edu@gmail.com',
  },
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: '#fafafa',
  dark: '#0d1117',
};
