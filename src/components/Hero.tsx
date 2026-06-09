// src/components/Hero.tsx
import { useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight, Calendar } from './icons';
import { FaJava, FaPython, FaDatabase, FaDocker, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiReact, SiNodedotjs, SiTypescript } from 'react-icons/si';
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
      className="section-padding relative flex min-h-0 items-center overflow-x-hidden pt-20 sm:pt-28 lg:min-h-[85vh] lg:pt-32"
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

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Left Column - Text Content */}
        <div className="w-full min-w-0 text-center lg:text-left order-2 lg:order-1">
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
          <h1 className="text-2xl font-bold leading-[1.15] tracking-tight text-zinc-950 dark:text-white sm:text-3xl md:text-4xl lg:text-6xl">
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
          
          {/* Stats Section */}
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
            <div className="text-center">
              <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">40%</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">Performance<br/>Improvement</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">10K+</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">Users Served</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">85%</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">Test<br/>Coverage</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">11+</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">Certifications</p>
            </div>
          </div>

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

        {/* Right Column - Profile Image with Icons (Floating around) */}
        <div className="relative flex w-full items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="relative flex flex-col items-center">
            {/* Main Image Container */}
            <div className="relative">
              {/* Outer rotating ring */}
              <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur-md animate-spin-slow"></div>
              
              {/* Gradient border */}
              <div className="relative rounded-full p-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="rounded-full overflow-hidden bg-white dark:bg-zinc-800">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Pitso Nkotolane, Software Developer"
                    width={320}
                    height={320}
                    fetchPriority="high"
                    decoding="async"
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover object-center rounded-full"
                    style={{ aspectRatio: '1/1' }}
                  />
                </div>
              </div>
            </div>

            {/* Floating Icons - Positioned around the image */}
            {/* Top Row */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg animate-bounce">
                <SiTypescript className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Top Right */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg animate-bounce z-10">
                <FaJava className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>

            {/* Bottom Right */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg animate-bounce animation-delay-500 z-10">
                <SiSpringboot className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>

            {/* Bottom Left */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg animate-bounce animation-delay-1000 z-10">
                <SiReact className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>

            {/* Top Left */}
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-600 to-lime-600 flex items-center justify-center shadow-lg animate-bounce animation-delay-700 z-10">
                <SiNodedotjs className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>

            {/* Right Center */}
            <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 md:-right-7">
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-slate-500 to-gray-700 flex items-center justify-center shadow-lg animate-pulse animation-delay-500 z-10">
                <FaDatabase className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            </div>

            {/* Left Center */}
            <div className="absolute top-1/2 -left-5 transform -translate-y-1/2 md:-left-7">
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center shadow-lg animate-pulse animation-delay-1000 z-10">
                <FaDocker className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            </div>

            {/* Bottom Center Row - Two icons */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg animate-pulse">
                <FaJs className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg animate-pulse animation-delay-700">
                <FaPython className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center shadow-lg animate-pulse animation-delay-1000">
                <FaGitAlt className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
