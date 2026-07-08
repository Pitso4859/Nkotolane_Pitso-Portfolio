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

const PROFILE_IMAGE = '/images/profile.jpg';

const ROLE = 'Software Developer';
const HEADLINE_1 = 'Building scalable software solutions. ';
const HEADLINE_2 = 'Engineering secure, high-performance applications.';
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
      className="relative flex min-h-0 items-center overflow-visible pt-24 sm:pt-28 lg:min-h-[80vh] lg:pt-32"
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full text-center lg:text-left order-2 lg:order-1">
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

          {/* Right Column - Circular Profile Image - LARGER SIZE */}
          <div className="relative flex w-full items-center justify-center order-1 lg:order-2 mt-4 sm:mt-6 lg:mt-0">
            <div className="relative">
              {/* Outer ring animation - Larger ring */}
              <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-md animate-pulse"></div>
              
              {/* Gradient border container */}
              <div className="relative rounded-full p-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="rounded-full overflow-hidden bg-zinc-50 dark:bg-zinc-800">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Pitso Nkotolane, Software Developer"
                    width={360}
                    height={360}
                    fetchPriority="high"
                    decoding="async"
                    className="w-52 h-52 xs:w-60 xs:h-60 sm:w-68 sm:h-68 md:w-76 md:h-76 lg:w-80 lg:h-80 xl:w-84 xl:h-84 object-cover object-center rounded-full"
                    style={{ aspectRatio: '1/1' }}
                  />
                </div>
              </div>
              
              {/* All Programming Icons - Larger to match image */}
              
              {/* Java Icon - Top Right */}
              <div className="absolute -top-3 -right-3 xs:-top-4 xs:-right-4 sm:-top-5 sm:-right-5 md:-top-6 md:-right-6">
                <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg animate-bounce z-10">
                  <FaJava className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" />
                </div>
              </div>

              {/* Spring Boot Icon - Bottom Right */}
              <div className="absolute -bottom-3 -right-3 xs:-bottom-4 xs:-right-4 sm:-bottom-5 sm:-right-5 md:-bottom-6 md:-right-6">
                <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg animate-bounce animation-delay-500 z-10">
                  <SiSpringboot className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" />
                </div>
              </div>

              {/* React Icon - Bottom Left */}
              <div className="absolute -bottom-3 -left-3 xs:-bottom-4 xs:-left-4 sm:-bottom-5 sm:-left-5 md:-bottom-6 md:-left-6">
                <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg animate-bounce animation-delay-1000 z-10">
                  <SiReact className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" />
                </div>
              </div>

              {/* Node.js Icon - Top Left */}
              <div className="absolute -top-3 -left-3 xs:-top-4 xs:-left-4 sm:-top-5 sm:-left-5 md:-top-6 md:-left-6">
                <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-600 to-lime-600 flex items-center justify-center shadow-lg animate-bounce animation-delay-700 z-10">
                  <SiNodedotjs className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" />
                </div>
              </div>

              {/* Python Icon - Top Center */}
              <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 xs:-top-8 sm:-top-9 md:-top-10">
                <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-blue-500 to-yellow-500 flex items-center justify-center shadow-lg animate-pulse z-10">
                  <FaPython className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 text-white" />
                </div>
              </div>

              {/* Database Icon - Right Center */}
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 xs:-right-7 sm:-right-8 md:-right-9">
                <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-slate-500 to-gray-700 flex items-center justify-center shadow-lg animate-pulse animation-delay-500 z-10">
                  <FaDatabase className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 text-white" />
                </div>
              </div>

              {/* Docker Icon - Left Center */}
              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 xs:-left-7 sm:-left-8 md:-left-9">
                <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center shadow-lg animate-pulse animation-delay-1000 z-10">
                  <FaDocker className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 text-white" />
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
