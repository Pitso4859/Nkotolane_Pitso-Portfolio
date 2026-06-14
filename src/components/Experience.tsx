// src/components/Experience.tsx
import { Briefcase, Check, GraduationCap, type PortfolioIcon } from './icons';
import { cn } from '../lib/utils';

type ExperienceEntry = {
  type: 'work' | 'education';
  title: string;
  company: string;
  period: string;
  description: string[];
  badge?: string;
};

const experiences: ExperienceEntry[] = [
  {
    type: 'work',
    title: 'Software Developer',
    company: 'O2M8-2-AI',
    period: 'Jan 2026 - Present',
    badge: 'Current',
    description: [
      'Improved page load time by 40% through optimization techniques',
      'Worked on customer-facing systems serving 10,000+ users',
      'Contributed to AI-powered financial systems',
      'Helped achieve 85% automated test coverage',
      'Collaborated in Agile/Scrum teams with regular sprints',
    ],
  },
  {
    type: 'education',
    title: 'Advanced Diploma in Information Technology',
    company: 'Vaal University of Technology (VUT)',
    period: 'In progress - Expected ( April 2027 )',
    description: [
      'Advanced software development and system design',
      'Enterprise application architecture',
      'Cloud computing and DevOps practices',
    ],
  },
  {
    type: 'education',
    title: 'Diploma in Information Technology',
    company: 'Vaal University of Technology (VUT)',
    period: '2023 - 2025',
    description: [
      'Full-stack development with Java, Spring Boot, and React',
      'Database design and management with MySQL and PostgreSQL',
      'Network fundamentals and CCNA certification',
      'Software engineering principles and Agile methodologies',
    ],
  },
];

const iconByType: Record<ExperienceEntry['type'], PortfolioIcon> = {
  work: Briefcase,
  education: GraduationCap,
};

function TimelineConnector({ isLast }: { isLast: boolean }) {
  if (isLast) return null;

  return (
    <div
      className="absolute left-4 top-10 w-px -translate-x-1/2 bg-gradient-to-b from-zinc-800 via-zinc-400 to-zinc-200 dark:from-zinc-600 dark:via-zinc-500 dark:to-zinc-700 sm:left-5"
      style={{ height: 'calc(100% - 1.25rem)' }}
      aria-hidden
    />
  );
}

function ExperienceItem({ exp, isLast }: { exp: ExperienceEntry; isLast: boolean }) {
  const Icon = iconByType[exp.type];

  return (
    <li className="relative list-none pb-10 last:pb-0 sm:pb-12">
      <TimelineConnector isLast={isLast} />

      <div className="relative flex gap-5 sm:gap-6">
        <div
          className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-zinc-900 bg-zinc-900 text-white shadow-md shadow-zinc-900/20 dark:border-zinc-700 dark:bg-zinc-800 sm:h-10 sm:w-10"
          aria-hidden
        >
          <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
        </div>

        <article
          className={cn(
            'group relative min-w-0 flex-1 overflow-hidden rounded-2xl border p-5 shadow-md sm:p-6',
            'border-zinc-300 bg-white shadow-zinc-200/50 dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-zinc-800/30',
            'transition-[border-color,box-shadow,background-color] duration-500',
            'hover:border-zinc-300 hover:shadow-lg dark:hover:border-zinc-600 dark:hover:bg-zinc-900/80'
          )}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-zinc-300/0 blur-3xl transition-all duration-700 group-hover:bg-zinc-300/25 dark:group-hover:bg-zinc-700/20"
          />

          <header className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                {exp.badge && (
                  <span className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    {exp.badge}
                  </span>
                )}
                <span
                  className={cn(
                    'inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                    exp.type === 'work'
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'
                  )}
                >
                  {exp.type === 'work' ? 'Work' : 'Education'}
                </span>
              </div>

              <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-xl">
                {exp.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">{exp.company}</p>
            </div>

            <time
              dateTime={exp.period}
              className="shrink-0 text-xs font-semibold tabular-nums text-zinc-500 dark:text-zinc-500 sm:pt-1 sm:text-right sm:text-sm"
            >
              {exp.period}
            </time>
          </header>

          <ul className="relative mt-5 space-y-2.5 border-t pt-5 border-zinc-100 dark:border-zinc-800">
            {exp.description.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400 dark:text-zinc-600"
                  strokeWidth={2.5}
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </li>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="section-padding overflow-x-hidden">
      <div className="mx-auto w-full min-w-0 max-w-4xl">
        <div className="mb-10 text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
            Journey
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Experience & Education
          </h2>
          <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
            My professional journey and academic background in software development.
          </p>
        </div>

        <ol className="relative">
          <div
            className="pointer-events-none absolute bottom-8 left-4 top-8 w-px -translate-x-1/2 bg-zinc-200 dark:bg-zinc-800 sm:left-5"
            aria-hidden
          />

          {experiences.map((exp, index) => (
            <ExperienceItem
              key={`${exp.title}-${exp.period}`}
              exp={exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;