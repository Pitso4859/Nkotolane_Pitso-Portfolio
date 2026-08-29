<<<<<<< HEAD
const facts = [
  { image: '/icon-logo/location_map_logo.png', label: 'Hometown', value: 'Sephukubje Village, Limpopo' },
  { image: '/icon-logo/location_map_logo.png', label: 'Based in', value: 'Johannesburg, South Africa' },
  { image: '/icon-logo/education_logo.png', label: 'Education', value: 'Diploma in Information Technology' },
  { image: '/icon-logo/career_focus_logo.png', label: 'Career focus', value: 'Software development roles' },
];

const About = () => (
  <section id="about" className="section-padding bg-white dark:bg-[#0b0f17]">
    <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
      <div>
        <p className="section-kicker">About me</p>
        <h2 className="section-title mt-2">From Sephukubje Village to software development.</h2>
        <div className="mt-5 max-w-2xl space-y-4 text-[15px] leading-7 text-[#5f6876] dark:text-zinc-400">
          <p>I come from Sephukubje Village in Limpopo. Growing up in a small village taught me to be resourceful, learn independently and keep working through difficult problems.</p>
          <p>I completed a Diploma in Information Technology at Vaal University of Technology and I am continuing with an Advanced Diploma. My strongest technical area is Java development with Spring Boot, supported by React, TypeScript, SQL and cloud fundamentals.</p>
          <p>I am looking for an opportunity where I can contribute to real software, learn from experienced developers and continue improving as an engineer.</p>
        </div>

        <div className="mt-7 flex items-start gap-3 rounded-lg border border-[#e2e5e9] bg-[#f8f9fa] p-4 dark:border-[#2b3441] dark:bg-[#111722]">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#d9dde3] bg-white p-1.5 dark:border-[#343d49] dark:bg-[#f8fafc]">
            <img src="/icon-logo/clean_code_logo.png" alt="" aria-hidden="true" className="h-full w-full object-contain" />
          </div>
          <div><p className="text-sm font-semibold text-[#172033] dark:text-white">What I want to contribute</p><p className="mt-1 text-sm leading-6 text-[#65707d] dark:text-zinc-400">Readable code, dependable application behaviour, thoughtful problem solving and a willingness to learn quickly from the team around me.</p></div>
=======
// src/components/About.tsx
import { GraduationCap, Award, MapPin, Code2 } from './icons';
import { cn } from '../lib/utils';

const highlights = [
  {
    icon: MapPin,
    text: 'From Sephukubje village, Sekgosese — now based in Johannesburg, South Africa',
  },
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
    icon: Code2,
    text: 'Passionate about building practical solutions with Java, Spring Boot, and React',
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
            From a small village to building software for the world
          </h2>
          <p className="mt-2 text-lg font-medium text-zinc-800 dark:text-zinc-200">
            Java, Spring Boot, React · Full-Stack Developer
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
            My journey from Sephukubje village to becoming a software developer has shaped my
            approach to technology — I believe in building solutions that are practical, reliable,
            and accessible. Whether it's developing full-stack applications or exploring AI
            integrations, I'm driven by curiosity and a commitment to continuous learning.
          </p>
>>>>>>> 0f457241666c47c91735386dafd40a9f6f9e76bb
        </div>
      </div>

<<<<<<< HEAD
      <div className="overflow-hidden rounded-xl border border-[#e2e5e9] bg-[#fbfbfc] dark:border-[#2b3441] dark:bg-[#111722]">
        {facts.map(({ image, label, value }, index) => (
          <div key={label} className={index === 0 ? 'flex gap-4 p-5' : 'flex gap-4 border-t border-[#e5e7eb] p-5 dark:border-[#29323f]'}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white p-1.5 shadow-sm ring-1 ring-[#e0e3e7] dark:bg-[#f8fafc] dark:ring-[#343d49]">
              <img src={image} alt="" aria-hidden="true" className="h-full w-full object-contain" loading="lazy" />
            </div>
            <div><p className="text-xs font-medium text-[#818a96] dark:text-zinc-500">{label}</p><p className="mt-1 text-sm font-semibold text-[#172033] dark:text-white">{value}</p></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

=======
>>>>>>> 0f457241666c47c91735386dafd40a9f6f9e76bb
export default About;
