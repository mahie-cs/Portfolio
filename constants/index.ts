/** `icon` must be a key of the Icons object in components/icons.tsx. */
export const mySkills = [
  { title: 'TypeScript', icon: 'typescript' },
  { title: 'JavaScript', icon: 'javascript' },
  { title: 'React', icon: 'react' },
  { title: 'Next.js', icon: 'nextjs' },
  { title: 'Tailwind CSS', icon: 'tailwind' },
  { title: 'HTML', icon: 'html' },
  { title: 'CSS', icon: 'css' },
  { title: 'Node.js', icon: 'nodejs' },
  { title: 'MongoDB', icon: 'mongodb' },
  { title: 'Supabase', icon: 'SupabaseIcon' },
  { title: 'Docker', icon: 'docker' },
  { title: 'Vercel', icon: 'vercel' },
  { title: 'Git', icon: 'git' },
  { title: 'GitHub', icon: 'gitHub' },
  { title: 'Postman', icon: 'postman' },
  { title: 'npm', icon: 'npm' },
  { title: 'Godot 4', icon: 'godot' },
  { title: "Ren'Py", icon: 'renpy' },
  { title: 'Linux', icon: 'linux' },
  { title: 'Vim', icon: 'vim' },
] as const;

/** Grouped view shown on the Skills page. Names are free text. */
export const skillGroups = [
  { title: 'Web', items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML and CSS'] },
  { title: 'Back end and data', items: ['Node.js', 'MongoDB', 'Supabase', 'Postman', 'npm'] },
  { title: 'Game development', items: ['Godot 4', "Ren'Py"] },
  { title: 'Tools and platforms', items: ['Git and GitHub', 'Docker', 'Vercel', 'Linux and Windows', 'Bash, MSYS2 and PowerShell', 'VS Code and Vim'] },
];
