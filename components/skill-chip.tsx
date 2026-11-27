import { Icons } from '@/components/icons';

export function SkillChip({ title, icon }: { title: string; icon: string }) {
  const Icon = Icons[icon as keyof typeof Icons] as ((p: { className?: string }) => React.ReactNode) | undefined;
  return (
    <span className="flex items-center gap-2 whitespace-nowrap rounded-xl border-[3px] border-foreground bg-card px-4 py-2 odd:bg-primary even:bg-card [&:nth-child(3n)]:bg-secondary [&:nth-child(4n)]:bg-accent text-black font-sans text-sm font-bold shadow-hard-sm">
      {Icon?.({ className: 'size-4' })}
      {title}
    </span>
  );
}
