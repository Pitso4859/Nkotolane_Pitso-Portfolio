// src/components/Hero.tsx
import { useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight, Calendar } from './icons';
import { FaJava, FaPython, FaDatabase, FaDocker } from 'react-icons/fa';
import { SiSpringboot, SiReact, SiNodedotjs } from 'react-icons/si';
import PrimaryButton from './ui/PrimaryButton';
import { StreamingCursor } from './ui/StreamingText';
import { secondaryButton } from '../lib/button-styles';
import { useStreamingText } from '../hooks/useStreamingText';
import { handleSectionNavClick } from '../lib/scroll';
import { cn } from '../lib/utils';

const PROFILE_IMAGE = '/images/profile.png';

const ROLE = 'Software Developer';
const HEADLINE_1 = 'Building robust backends. ';
const HEADLINE_2 = 'Crafting intuitive UIs.';
const HEADLINE_FULL = HEADLINE_1 + HEADLINE_2;
const BIO =
  "I'm Pitso Nkotolane, a Software Developer building scalable web applications, REST APIs, and AI-powered solutions. I've helped improve page load time by 40%, worked on systems serving 10K+ users, and achieved 85% automated test coverage.";

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

  const headlineStreaming =
    streamActive && (!headline1.isComplete || !headline2.isComplete);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="section-padding relative flex min-h-0 items-center overflow-visible pt-36 sm:pt-40"
    >
      {/* Animated background elements */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-[480px] w-[480px] rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-[120px] animate-pulse"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-[100px] animate-pulse"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 blur-[100px] animate-pulse"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-10 px-4 lg:grid lg:grid-cols-2 lg:gap-16">
        {/* Left Column - Text Content */}
        <div className="w-full min-w-0 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-4 py-1.5 mb-6 border border-indigo-200/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">Available for opportunities</span>
          </div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-400">
            {ROLE}
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {streamActive && <span className="sr-only">{HEADLINE_FULL}</span>}
            <span aria-hidden={streamActive}>
              {streamActive ? headline1.displayed : HEADLINE_1}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {streamActive ? headline2.displayed : HEADLINE_2}
              </span>
            </span>
            <StreamingCursor visible={headlineStreaming} />
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg mx-auto lg:mx-0">
            {BIO}
          </p>
          
          {/* Stats Section - Updated grid */}
          <div className="mt-8 grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
            <div className="text-center">
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">40%</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">Performance<br/>Improvement</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">10K+</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">Users Served</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">85%</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">Test<br/>Coverage</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">11+</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">Certifications</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <PrimaryButton
              href="#projects"
              onClick={(e) => handleSectionNavClick(e, 'projects')}
            >
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden />
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

        {/* Right Column - Circular Profile Image with Programming Icons */}
        <div className="relative mt-6 flex w-full justify-center lg:justify-end">
          <div className="relative p-8 sm:p-6">

            {/* Glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60 blur-2xl animate-pulse" />

            {/* Gradient Ring */}
            <div className="relative rounded-full p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <div className="overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={PROFILE_IMAGE}
                  alt="Pitso Nkotolane"
                  width={320}
                  height={320}
                  fetchPriority="high"
                  decoding="async"
                  className="
                    w-48 h-48
                    sm:w-64 sm:h-64
                    md:w-72 md:h-72
                    lg:w-80 lg:h-80
                    rounded-full
                    object-cover
                    object-top
                  "
                />
              </div>
            </div>

            {/* Java */}
            <div className="absolute top-2 right-2 sm:-top-4 sm:-right-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-xl z-20">
              <FaJava className="text-lg text-white sm:text-xl" />
            </div>

            {/* Spring */}
            <div className="absolute bottom-2 right-2 sm:-bottom-4 sm:-right-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-xl z-20">
              <SiSpringboot className="text-lg text-white sm:text-xl" />
            </div>

            {/* React */}
            <div className="absolute bottom-2 left-2 sm:-bottom-4 sm:-left-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl z-20">
              <SiReact className="text-lg text-white sm:text-xl" />
            </div>

            {/* Node */}
            <div className="absolute top-2 left-2 sm:-top-4 sm:-left-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-lime-600 shadow-xl z-20">
              <SiNodedotjs className="text-lg text-white sm:text-xl" />
            </div>

            {/* Python */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-yellow-500 shadow-xl z-20">
              <FaPython className="text-lg text-white sm:text-xl" />
            </div>

            {/* Database */}
            <div className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-slate-500 to-gray-700 shadow-xl z-20">
              <FaDatabase className="text-lg text-white sm:text-xl" />
            </div>

            {/* Docker */}
            <div className="absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-700 shadow-xl z-20">
              <FaDocker className="text-lg text-white sm:text-xl" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
