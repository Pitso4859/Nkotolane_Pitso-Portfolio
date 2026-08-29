import type { MouseEvent } from 'react';
import { ArrowRight } from './icons';
import PrimaryButton from './ui/PrimaryButton';
import { secondaryButton } from '../lib/button-styles';
import { handleSectionNavClick } from '../lib/scroll';
import { cn } from '../lib/utils';
<<<<<<< HEAD
import PictureIcon from './ui/PictureIcon';

const Hero = () => {
  const handleBookCall = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('booking-section');
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: 'smooth' });
=======

const PROFILE_IMAGE = '/images/profile.png';

const ROLE = 'Software Developer';
const HEADLINE_1 = 'Turning ideas into reliable software with [Java, Spring Boot, React ]';
const HEADLINE_2 = '~ From Sephukubje village to the world.';
const HEADLINE_FULL = HEADLINE_1 + HEADLINE_2;

const BIO =
  "I'm Pitso Nkotolane, a Software Developer from Sephukubje village in Sekgosese, now based in Johannesburg, South Africa. Growing up in a small village taught me resourcefulness and determination skills I bring to every project. I specialize in Java, Spring Boot, React, and TypeScript, building practical solutions that solve real problems. From academic projects to real-world applications, I'm driven by curiosity and a desire to create technology that makes a difference.";

const SKILLS = ['Java', 'Spring Boot', 'React', 'TypeScript', 'Python', 'SQL'];


const STATS = [
  { value: 'From', label: 'Sephukubje\n Village' },
  { value: 'Currently', label: 'Based in Johannesburg,\nGauteng' },
  { value: 'Java', label: 'Primary\nLanguage' },
  { value: 'Full-Stack', label: 'Development\nFocus' },
];

const CHAR_MS = 30;
const HEADLINE_2_DELAY = HEADLINE_1.length * CHAR_MS;

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(sectionRef, { amount: 0.12, once: true });
  const streamActive = isInView && !reduceMotion;

  const headline1 = useStreamingText(HEADLINE_1, {
    active: streamActive,
    speed: CHAR_MS,
  });
  const headline2 = useStreamingText(HEADLINE_2, {
    active: streamActive,
    speed: CHAR_MS,
    delay: HEADLINE_2_DELAY,
  });

  const headlineStreaming = streamActive && (!headline1.isComplete || !headline2.isComplete);

  // Smooth scroll with offset for fixed navbar
  const handleBookCall = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('booking-section');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
>>>>>>> 0f457241666c47c91735386dafd40a9f6f9e76bb
    }
  };

  return (
<<<<<<< HEAD
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
=======
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-0 items-center overflow-visible pt-24 sm:pt-28 lg:min-h-[80vh] lg:pt-32"
    >
      {/* Animated background elements */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-[480px] w-[480px] rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-[120px] animate-pulse"
        style={{ willChange: 'transform, opacity' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-[100px] animate-pulse"
        style={{ willChange: 'transform, opacity' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 blur-[100px] animate-pulse"
        style={{ willChange: 'transform, opacity' }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-4 py-1.5 mb-6 border border-indigo-200/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                Available for opportunities
              </span>
            </div>

            {/* Role */}
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-400">
              {ROLE}
            </p>

            {/* Headline with streaming text */}
            <h1 className="text-2xl font-bold leading-[1.15] tracking-tight text-zinc-950 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {streamActive && <span className="sr-only">{HEADLINE_FULL}</span>}
              <span aria-hidden={streamActive}>
                {streamActive ? headline1.displayed : HEADLINE_1}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {streamActive ? headline2.displayed : HEADLINE_2}
                </span>
              </span>
              <StreamingCursor visible={headlineStreaming} />
            </h1>

            {/* Bio - Human and personal */}
            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg mx-auto lg:mx-0">
              {BIO}
            </p>

            {/* Skill pills with hover effects */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-200 bg-white/50 px-3 py-1.5 text-sm text-zinc-600 backdrop-blur-sm transition-all duration-200 hover:border-indigo-500/50 hover:bg-indigo-50 hover:scale-105 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-indigo-500/50 dark:hover:bg-indigo-950/50"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats - Personal and verifiable */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-6">
              {STATS.map(({ value, label }) => (
                <div key={value + label} className="text-center">
                  <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    {value}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 whitespace-pre-line">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <PrimaryButton
                href="#projects"
                onClick={(e) => handleSectionNavClick(e, 'projects')}
              >
                View Projects
                <ArrowRight className="h-4 w-4" aria-hidden />
              </PrimaryButton>
              <a
                href="#booking-section"
                className={cn(
                  secondaryButton,
                  'px-6 py-[12px] text-sm inline-flex items-center justify-center transition-all duration-200 hover:scale-105'
                )}
                onClick={handleBookCall}
              >
                <Calendar className="h-4 w-4 mr-1" />
                Book a Call
              </a>
            </div>
          </div>

          {/* Right Column - Circular Profile Image */}
          <div className="relative flex w-full items-center justify-center order-1 lg:order-2 mt-4 sm:mt-6 lg:mt-0">
            <div className="relative">
              {/* Outer ring glow */}
              <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-md animate-pulse" />

              {/* Gradient border container */}
              <div className="relative rounded-full p-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="rounded-full overflow-hidden bg-zinc-50 dark:bg-zinc-800">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Pitso Nkotolane, Software Developer from Sephukubje village, now based in Johannesburg"
                    width={360}
                    height={360}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover object-center rounded-full"
                    style={{ aspectRatio: '1/1' }}
                  />
                </div>
              </div>

              {/* Tech Icons */}
              <div className="absolute -top-4 -right-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg animate-bounce">
                  <FaJava className="text-white text-xl" aria-hidden />
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4">
                <div 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg animate-bounce"
                  style={{ animationDelay: '500ms' }}
                >
                  <SiSpringboot className="text-white text-xl" aria-hidden />
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4">
                <div 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg animate-bounce"
                  style={{ animationDelay: '1000ms' }}
                >
                  <SiReact className="text-white text-xl" aria-hidden />
                </div>
              </div>

              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-yellow-500 flex items-center justify-center shadow-lg animate-pulse">
                  <FaPython className="text-white text-lg" aria-hidden />
                </div>
              </div>

              <div className="absolute right-[-25px] top-1/2 -translate-y-1/2">
                <div 
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-slate-500 to-gray-700 flex items-center justify-center shadow-lg animate-pulse"
                  style={{ animationDelay: '500ms' }}
                >
                  <FaDatabase className="text-white text-lg" aria-hidden />
                </div>
              </div>

              <div className="absolute left-[-25px] top-1/2 -translate-y-1/2">
                <div 
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center shadow-lg animate-pulse"
                  style={{ animationDelay: '1000ms' }}
                >
                  <FaDocker className="text-white text-lg" aria-hidden />
                </div>
              </div>
            </div>
>>>>>>> 0f457241666c47c91735386dafd40a9f6f9e76bb
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
