export type Project = {
  title: string;
  slug: string;
  tagline: string;
  overview: string;
  year: string;
  number: number;
  /** Featured projects appear on the home page. */
  featured?: boolean;
  features: string[];
  techStack: string[];
  challenges: string[];
  learnings: string[];
  links: { live?: string; github?: string };
};

const rawProjects: Project[] = [
  {
    title: 'Momentum',
    slug: 'momentum',
    tagline: 'A clean minimalist event tracker for the CSE department.',
    overview:
      'Momentum is a clean, minimalist event tracker designed for the CSE department to easily manage, organize, and view upcoming department events, deadlines, and schedules.',
    year: '2026',
    number: 3,
    featured: true,
    features: [
      'Clean and minimalist event tracking dashboard',
      'Department-wide schedule and deadline management',
      'Automated background data parsing via GitHub Actions',
      'Lightweight JSON-based storage for fast data loading',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'GitHub Actions', 'JSON'],
    challenges: [
      'Designing a sleek, minimalist UI that remains easy to navigate on mobile devices.',
      'Automating schedule updates using GitHub Actions without requiring a server backend.',
    ],
    learnings: [
      'Building zero-dependency frontend tools using vanilla JavaScript and CSS.',
      'Structuring workflow automation using GitHub Actions and JSON data.',
    ],
    links: {
      live: 'https://chrono-events.vercel.app/',
      github: 'https://github.com/mahie-cs/Chrono-Events',
    },
  },
  {
    title: 'Library',
    slug: 'library',
    tagline: 'An online library for browsing engineering and science books in PDF format.',
    overview:
      'Library is a web-based digital resource portal designed for quick browsing, searching, and viewing of engineering and science textbooks in PDF format.',
    year: '2026',
    number: 2,
    featured: true,
    features: [
      'Categorized digital catalog for engineering and science textbooks',
      'Built-in PDF viewer and preview support',
      'Fast client-side search and filtering',
      'Automated catalog index builds via GitHub Actions',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'GitHub Actions', 'JSON'],
    challenges: [
      'Handling large PDF file catalogs while maintaining fast browser loading performance.',
      'Structuring textbook metadata efficiently in JSON.',
    ],
    learnings: [
      'Optimizing document viewing and PDF integration in web browsers.',
      'Managing automated CI/CD index workflows with GitHub Actions.',
    ],
    links: {
      live: 'https://sci-eng-library.vercel.app/',
      github: 'https://github.com/mahie-cs/Library',
    },
  },
  {
    title: 'Lingua Aid',
    slug: 'lingua-aid',
    tagline: "Emergency numbers and everyday phrases, with pronunciation and audio, for when you don't speak the language.",
    overview:
      "Lingua Aid provides travelers and non-native speakers with instant access to critical emergency phone numbers and essential everyday phrases, complete with phonetic pronunciation guides and audio clips.",
    year: '2026',
    number: 1,
    featured: true,
    features: [
      'Quick emergency numbers categorized by region and utility',
      'Everyday phrases with phonetic pronunciation guides',
      'Audio playback support for accurate phrase pronunciation',
      'Lightweight, offline-capable interface for emergency situations',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'GitHub Actions', 'JSON'],
    challenges: [
      'Ensuring reliable audio playback across diverse mobile and desktop browsers.',
      'Designing an ultra-accessible UI optimized for rapid access in emergency scenarios.',
    ],
    learnings: [
      'Working with Web Audio APIs and audio element management in vanilla JavaScript.',
      'Creating user experience patterns tailored for high-urgency user needs.',
    ],
    links: {
      live: 'https://destroy-the-language-barrier.vercel.app/',
      github: 'https://github.com/mahie-cs/Destroy-the-language-barrier',
    },
  },
];

/** Sorted by project number in descending order (higher numbers sit higher on the list). */
export const projects: Project[] = [...rawProjects].sort((a, b) => b.number - a.number);
