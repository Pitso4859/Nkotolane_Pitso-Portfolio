// src/components/Header.tsx
import { useState, useEffect, useCallback } from 'react';
import { Calendar, Sun, Moon } from './icons';
import { cn } from '../lib/utils';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'soft-skills', label: 'Soft Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
] as const;

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const updateActiveSection = useCallback(() => {
    const offset = 100;
    const scrollPos = window.scrollY + offset;
    let current = 'home';

    for (const item of navItems) {
      const el = document.getElementById(item.id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (scrollPos >= top) current = item.id;
    }

    setActiveSection(current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      updateActiveSection();
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [updateActiveSection]);

  const scrollToSectionId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const updateSectionHash = (id: string) => {
    if (typeof window !== 'undefined' && window.history.replaceState) {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  const navigateToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);
    scrollToSectionId(id);
    updateSectionHash(id);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <header className={cn(
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      'bg-white dark:bg-zinc-900',
      'border-b border-zinc-200 dark:border-zinc-800',
      scrolled ? 'shadow-md' : 'shadow-sm'
    )}>
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => navigateToSection(e, 'home')}
          className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          P<span className="text-zinc-800 dark:text-zinc-200 bg-none">.Nkotolane</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex lg:gap-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => navigateToSection(e, item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'relative rounded-lg px-3.5 py-2.5 text-sm font-medium transition-all duration-300 lg:px-4',
                  isActive 
                    ? 'text-indigo-600 dark:text-indigo-400' 
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30'
                )}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 ring-1 ring-indigo-200 dark:ring-indigo-800/50"
                    aria-hidden
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <a
            href="#booking-section"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              const element = document.getElementById('booking-section');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="ml-1 lg:ml-2 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Calendar className="h-4 w-4" />
            Book a Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <button
            onClick={toggleMobileMenu}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                'h-0.5 w-5 bg-zinc-800 dark:bg-zinc-200 transition-all duration-300',
                mobileMenuOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'h-0.5 w-5 bg-zinc-800 dark:bg-zinc-200 transition-all duration-300',
                mobileMenuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'h-0.5 w-5 bg-zinc-800 dark:bg-zinc-200 transition-all duration-300',
                mobileMenuOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={cn(
            'fixed inset-0 z-40 bg-white dark:bg-zinc-900 transition-transform duration-300 md:hidden',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
          style={{ top: '4.5rem' }}
        >
          <div className="flex flex-col p-6 gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => navigateToSection(e, item.id)}
                  className={cn(
                    'rounded-lg px-4 py-3 text-base font-medium transition-colors',
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:text-indigo-600 dark:hover:text-indigo-400'
                  )}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#booking-section"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                const element = document.getElementById('booking-section');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.scrollY - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="mt-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-center text-base font-semibold text-white flex items-center justify-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Book a Call
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;