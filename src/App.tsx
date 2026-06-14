// src/App.tsx
import { lazy, Suspense, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { handleInitialHash, scrollToSectionWithRetry, checkSectionsExist } from './lib/scroll';
import { setupDebugTools } from './lib/debug';
import './App.css';

// Lazy load heavy components that are below the fold
const Chatbot = lazy(() => import('./components/Chatbot'));

// Lazy load analytics
const Analytics = lazy(() =>
  import('@vercel/analytics/react').then((m) => ({ default: m.Analytics }))
);

function App() {
  useEffect(() => {
    // Only run debug tools in development
    if (import.meta.env.DEV) {
      setupDebugTools();
    }
    
    // Defer non-critical checks
    const timer = setTimeout(() => {
      if (import.meta.env.DEV) {
        const sectionsExist = checkSectionsExist();
        const allFound = Object.values(sectionsExist).every(Boolean);
        if (!allFound) {
          console.warn('Some sections are missing. Check component IDs.');
        }
      }
    }, 1000);
    
    // Handle initial hash
    handleInitialHash();
    
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        if (id === 'booking') {
          scrollToSectionWithRetry('booking-section', 3, 200);
        } else {
          scrollToSectionWithRetry(id, 3, 200);
        }
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 antialiased">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <SoftSkills />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
          <Booking />
        </main>
        <Footer />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <Suspense fallback={null}>
          <Chatbot />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;