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
      className="min-h-screen relative flex items-center overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-20 h-[480px] w-[480px] rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-[120px] animate-pulse" />
        <div className="absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 blur-[100px] animate-pulse" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          {/* Left Column - Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-4 py-1.5 mb-6 border border-indigo-200/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">Available for opportunities</span>
            </div>
            
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-400">
              {ROLE}
            </p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-white">
              {streamActive && <span className="sr-only">{HEADLINE_FULL}</span>}
              <span aria-hidden={streamActive}>
                {streamActive ? headline1.displayed : HEADLINE_1}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {streamActive ? headline2.displayed : HEADLINE_2}
                </span>
              </span>
              <StreamingCursor visible={headlineStreaming} />
            </h1>
            
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg mx-auto lg:mx-0">
              {BIO}
            </p>
            
            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">40%</p>
                <p className="text-xs text-zinc-500">Performance<br/>Improvement</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">10K+</p>
                <p className="text-xs text-zinc-500">Users Served</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">85%</p>
                <p className="text-xs text-zinc-500">Test<br/>Coverage</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">11+</p>
                <p className="text-xs text-zinc-500">Certifications</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
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
                  document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Calendar className="h-4 w-4 mr-1" />
                Book a Call
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur-md animate-pulse" />
              
              {/* Image Container */}
              <div className="relative rounded-full p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="rounded-full overflow-hidden bg-white dark:bg-zinc-800">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Pitso Nkotolane"
                    width={320}
                    height={320}
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover object-center"
                  />
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
