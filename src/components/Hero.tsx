import type { MouseEvent } from 'react';
import { ArrowRight } from './icons';
import PrimaryButton from './ui/PrimaryButton';
import { secondaryButton } from '../lib/button-styles';
import { handleSectionNavClick } from '../lib/scroll';
import { cn } from '../lib/utils';
import PictureIcon from './ui/PictureIcon';

const Hero = () => {
  const handleBookCall = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('booking-section');
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="border-b border-[#e4e7eb] bg-[#f6f7f8] pt-24 dark:border-[#252d39] dark:bg-[#0e141e] sm:pt-28">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-14 sm:px-6 sm:pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-20">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#5f6876] dark:text-zinc-400">
            <span className="font-semibold text-[#2563eb] dark:text-[#3b82f6]">Software Developer</span>
            <span className="inline-flex items-center gap-2"><PictureIcon surface="transparent" src="/icon-logo/location_logo.png" size="sm" /> <span>Johannesburg, South Africa</span></span>
          </div>

          <h1 className="max-w-3xl text-[2.15rem] font-bold leading-[1.14] tracking-tight text-[#111827] dark:text-white sm:text-[2.55rem] lg:text-[2.85rem]">
            Building dependable web applications with Java, Spring Boot and React.
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#5f6876] dark:text-zinc-300 sm:text-base">
            I am Pitso Nkotolane, an Information Technology graduate and software developer. I build full stack applications, APIs and business systems with a strong focus on Java and Spring Boot, supported by React, TypeScript and SQL.
          </p>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#5f6876] dark:text-zinc-400">
            I grew up in Sephukubje Village in Limpopo. That background taught me resourcefulness, persistence and the value of learning independently, qualities I bring into every project I work on.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryButton href="#projects" onClick={(e) => handleSectionNavClick(e, 'projects')}>View projects <ArrowRight className="h-4 w-4" /></PrimaryButton>
            <a href="#booking-section" onClick={handleBookCall} className={cn(secondaryButton)}><PictureIcon surface="transparent" src="/icon-logo/calendar.png" size="xs" imageClassName="dark:brightness-0 dark:invert" /> Book a call</a>
            <a href="/Files/NKOTOLANE PITSO GINTOS RESUME.pdf" download="Pitso_Nkotolane_CV.pdf" className="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2.5 text-sm font-semibold text-[#58616f] transition-colors hover:bg-[#eceef1] hover:text-[#172033] dark:text-zinc-300 dark:hover:bg-[#171e2a] dark:hover:text-white"><PictureIcon surface="transparent" src="/icon-logo/download_logo.png" size="sm" /> Download CV</a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-[#66707d] dark:text-zinc-400">
            <a href="https://github.com/Pitso4859" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#172033] dark:hover:text-white"><PictureIcon surface="transparent" src="/icon-logo/github_logo.png" size="xs" /> GitHub</a>
            <a href="https://linkedin.com/in/pitso-nkotolane" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#172033] dark:hover:text-white"><PictureIcon surface="transparent" src="/icon-logo/linkedin_logo.png" size="xs" /> LinkedIn</a>
          </div>

          <dl className="mt-8 grid max-w-2xl grid-cols-1 gap-3 border-t border-[#dfe2e6] pt-5 dark:border-[#2b3441] sm:grid-cols-3">
            <div><dt className="text-xs text-[#7a8390] dark:text-zinc-500">Primary focus</dt><dd className="mt-1 text-sm font-semibold text-[#172033] dark:text-white">Java and Full Stack</dd></div>
            <div><dt className="text-xs text-[#7a8390] dark:text-zinc-500">Core stack</dt><dd className="mt-1 text-sm font-semibold text-[#172033] dark:text-white">Spring Boot and React</dd></div>
            <div><dt className="text-xs text-[#7a8390] dark:text-zinc-500">Availability</dt><dd className="mt-1 text-sm font-semibold text-[#172033] dark:text-white">Open to developer roles</dd></div>
          </dl>
        </div>

        <aside className="mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
          <div className="rounded-xl border border-[#dfe2e6] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] dark:border-[#2b3441] dark:bg-[#111722]">
            <div className="mx-auto h-56 w-56 overflow-hidden rounded-full border border-[#d9dde3] bg-[#eef0f2] p-1 dark:border-[#3a4350] dark:bg-[#171e2a]">
              <img src="/images/profile.webp" alt="Pitso Nkotolane" width={480} height={480} loading="eager" fetchPriority="high" decoding="async" className="h-full w-full rounded-full object-cover object-center" />
            </div>
            <div className="mt-5 text-center">
              <h2 className="text-lg font-semibold text-[#172033] dark:text-white">Pitso Nkotolane</h2>
              <p className="mt-1 text-sm text-[#697381] dark:text-zinc-400">Software Developer</p>
              <div className="mx-auto mt-4 h-px w-12 bg-[#2563eb]" />
              <p className="mt-4 text-sm leading-6 text-[#5f6876] dark:text-zinc-400">Java focused developer with hands on work across web applications, APIs, business systems and machine learning.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
