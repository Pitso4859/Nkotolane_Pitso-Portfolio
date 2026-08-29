import { Check } from './icons';

type ExperienceEntry = { type: 'work' | 'education'; title: string; company: string; period: string; description: string[]; badge?: string };
const experiences: ExperienceEntry[] = [
  { type: 'work', title: 'Software Developer', company: 'O2M8 2 AI', period: 'January 2026 to Present', badge: 'Current', description: ['Contribute to customer facing software and AI enabled financial systems', 'Improve application performance, frontend behaviour and code quality', 'Work with automated testing and iterative Agile delivery', 'Support deployment and maintenance of application features'] },
  { type: 'education', title: 'Advanced Diploma in Information Technology', company: 'Vaal University of Technology', period: 'In progress', description: ['Advanced software development and system design', 'Enterprise application architecture and cloud concepts', 'DevOps practices and software delivery'] },
  { type: 'education', title: 'Diploma in Information Technology', company: 'Vaal University of Technology', period: '2023 to 2025', description: ['Object oriented programming, database design and software development', 'Systems analysis, web development and networking fundamentals', 'Software engineering principles and team based project work'] },
];
const imageByType: Record<ExperienceEntry['type'], string> = {
  work: '/icon-logo/career_focus_logo.png',
  education: '/icon-logo/education_logo.png',
};

const Experience = () => (
  <section id="experience" className="section-padding bg-white dark:bg-[#0b0f17]">
    <div className="mx-auto w-full max-w-6xl">
      <div className="max-w-2xl"><p className="section-kicker">Experience and education</p><h2 className="section-title mt-2">Practical development experience backed by formal IT training.</h2></div>
      <div className="relative mt-8 border-l border-[#dfe2e6] pl-6 dark:border-[#303846] sm:pl-8">
        {experiences.map((exp, index) => (
          <article key={`${exp.title}-${exp.period}`} className={index === experiences.length - 1 ? 'relative pb-0' : 'relative pb-8'}>
            <span className="absolute -left-[2.15rem] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#d9dde3] bg-white p-1.5 shadow-sm dark:-left-[2.55rem] dark:border-[#343d49] dark:bg-[#f8fafc]">
              <img src={imageByType[exp.type]} alt="" aria-hidden="true" className="h-full w-full object-contain" loading="lazy" />
            </span>
            <div className="grid gap-3 sm:grid-cols-[170px_1fr] sm:gap-8">
              <div><p className="text-sm font-semibold text-[#172033] dark:text-white">{exp.period}</p><p className="mt-1 text-sm text-[#79828f] dark:text-zinc-500">{exp.company}</p></div>
              <div>
                <div className="flex flex-wrap items-center gap-3"><h3 className="text-lg font-semibold text-[#172033] dark:text-white">{exp.title}</h3>{exp.badge && <span className="rounded-md border border-[#bfdbfe] bg-[#eff6ff] px-2 py-0.5 text-[11px] font-semibold text-[#1d4ed8] dark:border-[#1e3a5f] dark:bg-[#0f1b2d] dark:text-[#3b82f6]">{exp.badge}</span>}</div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">{exp.description.map((item) => <li key={item} className="flex gap-2.5 text-sm leading-6 text-[#626c79] dark:text-zinc-400"><Check className="mt-1 h-4 w-4 shrink-0 text-[#2563eb] dark:text-[#3b82f6]" /><span>{item}</span></li>)}</ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
