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
      className="section-padding relative flex min-h-0 items-center overflow-x-visible pt-28 sm:pt-32 lg:min-h-[80vh] lg:pt-32"
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

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
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
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
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

        {/* Circular Profile Image with Programming Icons - Mobile Responsive */}
        <div className="relative mt-4 flex w-full shrink-0 justify-center sm:mt-6 lg:mt-0 lg:justify-end overflow-visible">
          <div className="relative overflow-visible">
            {/* Outer ring animation */}
            <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-md animate-pulse"></div>
            
            {/* Gradient border container */}
            <div className="relative rounded-full p-[2px] sm:p-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <div className="rounded-full overflow-hidden bg-zinc-50 dark:bg-zinc-800">
                <img
                  src={PROFILE_IMAGE}
                  alt="Pitso Nkotolane, Software Developer"
                  width={280}
                  height={280}
                  fetchPriority="high"
                  decoding="async"
                  className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover object-center rounded-full"
                  style={{ aspectRatio: '1/1' }}
                />
              </div>
            </div>
            
            {/* Programming Icons around the image - Responsive positions */}
            
            {/* Java Icon - Top Right */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg animate-bounce z-10">
              <FaJava className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>

            {/* Spring Boot Icon - Bottom Right */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg animate-bounce animation-delay-500 z-10">
              <SiSpringboot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>

            {/* React Icon - Bottom Left */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg animate-bounce animation-delay-1000 z-10">
              <SiReact className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>

            {/* Node.js Icon - Top Left */}
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-600 to-lime-600 flex items-center justify-center shadow-lg animate-bounce animation-delay-700 z-10">
              <SiNodedotjs className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>

            {/* Python Icon - Top Center */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 sm:-top-8 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-blue-500 to-yellow-500 flex items-center justify-center shadow-lg animate-pulse z-10">
              <FaPython className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
            </div>

            {/* Database Icon - Right Center */}
            <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 sm:-right-8 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-slate-500 to-gray-700 flex items-center justify-center shadow-lg animate-pulse animation-delay-500 z-10">
              <FaDatabase className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
            </div>

            {/* Docker Icon - Left Center */}
            <div className="absolute top-1/2 -left-5 transform -translate-y-1/2 sm:-left-8 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center shadow-lg animate-pulse animation-delay-1000 z-10">
              <FaDocker className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
