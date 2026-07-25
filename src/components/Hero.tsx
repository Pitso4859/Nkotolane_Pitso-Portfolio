// src/components/Hero.tsx
import { useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight, Calendar } from './icons';
import { FaJava, FaPython, FaDatabase, FaDocker } from 'react-icons/fa';
import { SiSpringboot, SiReact } from 'react-icons/si';
import PrimaryButton from './ui/PrimaryButton';
import { StreamingCursor } from './ui/StreamingText';
import { secondaryButton } from '../lib/button-styles';
import { useStreamingText } from '../hooks/useStreamingText';
import { handleSectionNavClick } from '../lib/scroll';
import { cn } from '../lib/utils';

const PROFILE_IMAGE = '/images/profile.png';

const ROLE = 'Software Developer';
const HEADLINE_1 = 'Building reliable software with ';
const HEADLINE_2 = 'Java, Spring Boot, React & modern technologies.';

const BIO =
  "I'm Pitso Nkotolane, a Software Developer who backs decisions with numbers, not guesswork. I cut page load times by 40% through route-level code-splitting and Redis-backed caching, kept 85% test coverage across layered JUnit 5 suites, and work daily in Java, Spring Boot, React, and TypeScript — from architecture through deployment.";

const SKILLS = ['Java', 'Spring Boot', 'React', 'TypeScript', 'Python', 'SQL'];

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

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-0 items-center overflow-visible pt-24 sm:pt-28 lg:min-h-[80vh] lg:pt-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-[480px] w-[480px] rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-[120px] animate-pulse" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-[100px] animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 blur-[100px] animate-pulse" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-4 py-1.5 mb-6 border border-indigo-200/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                Available for opportunities
              </span>
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-400">
              {ROLE}
            </p>

            <h1 className="text-2xl font-bold leading-[1.15] tracking-tight text-zinc-950 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {streamActive ? headline1.displayed : HEADLINE_1}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {streamActive ? headline2.displayed : HEADLINE_2}
              </span>
              <StreamingCursor visible={headlineStreaming} />
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg mx-auto lg:mx-0">
              {BIO}
            </p>

            {/* Skill pills */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-200 bg-white/50 px-3 py-1.5 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <PrimaryButton
                href="#projects"
                onClick={(e) => handleSectionNavClick(e, 'projects')}
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <a
                href="#booking-section"
                className={cn(secondaryButton, 'px-6 py-[12px] text-sm')}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('booking-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Calendar className="h-4 w-4 mr-1" />
                Book a Call
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative flex w-full items-center justify-center order-1 lg:order-2 mt-4 sm:mt-6 lg:mt-0">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-md animate-pulse" />

              {/* Image border */}
              <div className="relative rounded-full p-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="rounded-full overflow-hidden bg-zinc-50 dark:bg-zinc-800">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Pitso Nkotolane Software Developer"
                    width={360}
                    height={360}
                    loading="eager"
                    decoding="async"
                    className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover object-center rounded-full"
                    style={{ aspectRatio: '1/1' }}
                  />
                </div>
              </div>

              {/* Java - Top Right */}
              <div className="absolute -top-4 -right-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg animate-bounce">
                  <FaJava className="text-white text-xl" />
                </div>
              </div>

              {/* Spring Boot - Bottom Right */}
              <div className="absolute -bottom-4 -right-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg animate-bounce animation-delay-500">
                  <SiSpringboot className="text-white text-xl" />
                </div>
              </div>

              {/* React - Bottom Left */}
              <div className="absolute -bottom-4 -left-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg animate-bounce animation-delay-1000">
                  <SiReact className="text-white text-xl" />
                </div>
              </div>

              {/* Python - Top Center */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-yellow-500 flex items-center justify-center shadow-lg animate-pulse">
                  <FaPython className="text-white text-lg" />
                </div>
              </div>

              {/* Database - Right Center */}
              <div className="absolute right-[-25px] top-1/2 -translate-y-1/2">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-slate-500 to-gray-700 flex items-center justify-center shadow-lg animate-pulse animation-delay-500">
                  <FaDatabase className="text-white text-lg" />
                </div>
              </div>

              {/* Docker - Left Center */}
              <div className="absolute left-[-25px] top-1/2 -translate-y-1/2">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center shadow-lg animate-pulse animation-delay-1000">
                  <FaDocker className="text-white text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
