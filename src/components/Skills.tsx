// src/components/Skills.tsx
import { motion } from 'framer-motion';
import { 
  FaJava, 
  FaPython, 
  FaCloud,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaMicrosoft,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
} from 'react-icons/si';
import { SkillPill, type SkillPillData } from './SkillPill';
import { cn } from '../lib/utils';

const skills: SkillPillData[] = [
  { name: 'Java', role: 'Language', icon: FaJava, color: '#f89820' },
  { name: 'Spring Boot', role: 'Framework', icon: SiSpringboot, color: '#6db33f' },
  { name: 'JavaScript', role: 'Language', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', role: 'Language', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', role: 'Library', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', role: 'Runtime', icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', role: 'Language', icon: FaPython, color: '#3776AB' },
  { name: 'MySQL', role: 'Database', icon: SiMysql, color: '#4479A1' },
  { name: 'PostgreSQL', role: 'Database', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', role: 'Database', icon: SiMongodb, color: '#47A248' },
  { name: 'Firebase', role: 'BaaS', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Oracle Cloud', role: 'Cloud', icon: FaCloud, color: '#F80000' },
  { name: 'Azure', role: 'Cloud', icon: FaMicrosoft, color: '#0078D4' },
  { name: 'AWS', role: 'Cloud', icon: FaAws, color: '#FF9900' },
  { name: 'Docker', role: 'Container', icon: FaDocker, color: '#2496ED' },
  { name: 'Git', role: 'Version Control', icon: FaGitAlt, color: '#F05032' },
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...skills, ...skills];

  return (
    <div
      className={cn(
        'flex w-max gap-3 sm:gap-4',
        reverse ? 'animate-marquee-reverse' : 'animate-marquee'
      )}
    >
      {items.map((skill, i) => (
        <SkillPill key={`${skill.name}-${i}`} skill={skill} />
      ))}
    </div>
  );
}

const Skills = () => {
  return (
    <section id="skills" className="section-padding overflow-x-hidden">
      <motion.div
        className="mx-auto w-full min-w-0 max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8 text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
            Tech Stack
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Skills
          </h2>
          <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
            Tools and frameworks I use to ship production-ready products.{' '}
            <span className="hidden sm:inline">Hover a skill on desktop for details.</span>
          </p>
        </div>

        <motion.div
          className="marquee-pause relative touch-pan-y space-y-3 sm:space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent dark:from-zinc-900 sm:w-16 md:w-24"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent dark:from-zinc-900 sm:w-16 md:w-24"
            aria-hidden
          />

          <div className="overflow-hidden py-2">
            <MarqueeRow />
          </div>
          <div className="overflow-hidden py-2">
            <MarqueeRow reverse />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;