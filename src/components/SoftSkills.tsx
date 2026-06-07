// src/components/SoftSkills.tsx
import {
  Brain,
  Code2,
  GraduationCap,
  Lightbulb,
  ScanEye,
  type PortfolioIcon,
} from './icons';
import { cn } from '../lib/utils';

type SoftSkill = {
  name: string;
  description: string;
  icon: PortfolioIcon;
};

const softSkills: SoftSkill[] = [
  {
    name: 'AI Integration',
    description: 'Building AI-powered features using modern LLM APIs and machine learning',
    icon: Brain,
  },
  {
    name: 'Problem Solving',
    description: 'Debugging, optimizing and finding pragmatic solutions under pressure',
    icon: Lightbulb,
  },
  {
    name: 'Continuous Learning',
    description: 'Proactive learner with 11+ certifications, always exploring new technologies',
    icon: GraduationCap,
  },
  {
    name: 'Attention to Detail',
    description: 'Polished UIs and careful implementation — spacing, types, and edge cases matter',
    icon: ScanEye,
  },
  {
    name: 'Clean Code Advocate',
    description: 'Readable, maintainable code — clear naming, structure, and thoughtful reviews',
    icon: Code2,
  },
];

const SoftSkills = () => {
  return (
    <section id="soft-skills" className="section-padding overflow-x-hidden">
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <div className="mb-8 text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
            How I Work
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Soft Skills
          </h2>
          <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
            The mindset and habits behind reliable delivery — beyond the tech stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {softSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={cn(
                  'group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6',
                  'border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50',
                  'shadow-sm shadow-zinc-200/50 dark:shadow-zinc-950/50',
                  'transition-[border-color,box-shadow,background-color] duration-500',
                  'hover:border-zinc-300 hover:bg-white hover:shadow-lg hover:shadow-zinc-300/35 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:shadow-zinc-800/30'
                )}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-zinc-300/0 blur-3xl transition-all duration-700 group-hover:bg-zinc-300/20 dark:group-hover:bg-zinc-700/20"
                />
                <span
                  className={cn(
                    'relative flex h-11 w-11 items-center justify-center rounded-xl border text-zinc-800 dark:text-zinc-200',
                    'border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950',
                    'shadow-sm transition-all duration-300 group-hover:border-zinc-300 group-hover:shadow-md dark:group-hover:border-zinc-700'
                  )}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="relative mt-4 text-lg font-semibold text-zinc-950 dark:text-white">
                  {skill.name}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;