import { Icons } from '@/components/icons';

export function SkillChip({ title, icon }: { title: string; icon: string }) {
  const Icon = Icons[icon as keyof typeof Icons] as ((p: { className?: string }) => React.ReactNode) | undefined;
  return (
    <span className="flex items-center gap-2 whitespace-nowrap rounded-full border bg-card/60 px-4 py-2 text-sm">
      {Icon?.({ className: 'size-4' })}
      {title}
    </span>
  );
}
