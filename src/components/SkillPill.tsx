// src/components/SkillPill.tsx
import type { IconType } from 'react-icons';
import { skillDetails } from '../data/skill-details';
import { cn } from '../lib/utils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@radix-ui/react-hover-card';

export type SkillPillData = {
  name: string;
  role: string;
  icon: IconType;
  color: string;
};

type SkillPillProps = {
  skill: SkillPillData;
  className?: string;
};

export function SkillPill({ skill, className }: SkillPillProps) {
  const detail = skillDetails[skill.name];
  const Icon = skill.icon;

  const pill = (
    <div
      tabIndex={detail ? 0 : undefined}
      className={cn(
        'flex shrink-0 items-center gap-2.5 rounded-xl border border-dashed',
        'border-zinc-200 bg-white px-3 py-2.5 shadow-sm transition-all duration-300 dark:border-zinc-700 dark:bg-zinc-900/50 sm:gap-3 sm:px-4 sm:py-3',
        'hover:-translate-y-1 hover:border-zinc-400 hover:bg-zinc-50/80 hover:shadow-md dark:hover:border-zinc-600 dark:hover:bg-zinc-800/50',
        'active:scale-[0.99] active:border-zinc-400 active:bg-zinc-50/80 dark:active:border-zinc-600 dark:active:bg-zinc-800/50',
        detail && 'cursor-pointer',
        className
      )}
    >
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-50 dark:bg-zinc-800 sm:h-9 sm:w-9"
        aria-hidden
      >
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: skill.color }} />
      </span>
      <div className="whitespace-nowrap">
        <p className="text-xs font-semibold text-zinc-950 dark:text-white sm:text-sm">{skill.name}</p>
        <p className="text-[10px] text-zinc-400 dark:text-zinc-500 sm:text-xs">{skill.role}</p>
      </div>
    </div>
  );

  if (!detail) {
    return pill;
  }

  return (
    <HoverCard openDelay={200} closeDelay={120}>
      <HoverCardTrigger asChild>{pill}</HoverCardTrigger>
      <HoverCardContent side="top" className="w-64 dark:bg-zinc-900 dark:border-zinc-700">
        <div className="space-y-3">
          <div>
            <p className="text-sm font-semibold text-zinc-950 dark:text-white">{skill.name}</p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">{detail.summary}</p>
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              Featured in
            </p>
            <ul className="mt-1.5 space-y-1">
              {detail.usedIn.map((project) => (
                <li key={project} className="text-xs text-zinc-700 dark:text-zinc-300">
                  <span aria-hidden className="mr-1.5 text-zinc-400 dark:text-zinc-600">
                    -
                  </span>
                  {project}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}