// src/components/About.tsx
import { GraduationCap, Award } from './icons';
import { cn } from '../lib/utils';

const highlights = [
  {
    icon: GraduationCap,
    text: 'Advanced Diploma in IT (In Progress) | Expected Nov 2026',
  },
  {
    icon: GraduationCap,
    text: 'Diploma in Information Technology | Completed Nov 2025',
  },
  {
    icon: Award,
    text: 'Oracle Certified DevOps Professional | Microsoft Azure Fundamentals',
  },
  {
    icon: Award,
    text: '11+ Certifications including CCNA, Spring Boot, and Git',
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding overflow-x-hidden">
      <div className="mx-auto w-full min-w-0 max-w-3xl">
        <div
          className={cn(
            'group relative overflow-hidden rounded-2xl border p-8 sm:p-10',
            'border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50',
            'shadow-md shadow-zinc-300/30 dark:shadow-zinc-950/50',
            'transition-[border-color,box-shadow,background-color] duration-500',
            'hover:border-zinc-300 hover:bg-white hover:shadow-xl hover:shadow-zinc-300/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:shadow-zinc-800/30'
          )}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-r from-indigo-500/0 to-purple-500/0 blur-3xl transition-all duration-700 group-hover:from-indigo-500/20 group-hover:to-purple-500/20"
          />
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Software Developer with a passion for building impactful solutions
          </h2>
          <p className="mt-2 text-lg font-medium text-zinc-800 dark:text-zinc-200">
            Java, Spring Boot, React, Node.js · Full-Stack Developer
          </p>
          <ul className="mt-8 space-y-4">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="flex gap-4 text-zinc-600 dark:text-zinc-400">
                <span
                  className={cn(
                    'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border',
                    'border-indigo-200 bg-white text-indigo-600 dark:border-indigo-800 dark:bg-zinc-900 dark:text-indigo-400',
                    'shadow-sm transition-all duration-300',
                    'group-hover:border-indigo-300 group-hover:shadow-md dark:group-hover:border-indigo-700'
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="pt-2 text-sm leading-relaxed sm:text-base">{text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
            I thrive in Agile environments where collaboration turns complex ideas into reliable
            systems. With experience improving performance by 40%, serving 10,000+ users, and
            contributing to AI-powered financial systems, I'm committed to delivering high-quality
            software that makes a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;