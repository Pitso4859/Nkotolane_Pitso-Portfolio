import { useState, useEffect, useCallback, useRef, type MouseEvent } from 'react';
import { Sun, Moon } from './icons';
import { cn } from '../lib/utils';
import { useTheme } from '../contexts/ThemeContext';
import PictureIcon from './ui/PictureIcon';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'soft-skills', label: 'How I work' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
] as const;

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSectionRef = useRef('home');
  const skipHashSync = useRef(true);

  const updateSectionHash = useCallback((id: string) => {
    if (typeof window !== 'undefined' && window.history.replaceState) {
      window.history.replaceState(null, '', id === 'home' ? '/' : `#${id}`);
    }
  }, []);

  const updateActiveSection = useCallback(() => {
    const scrollPos = window.scrollY + 100;
    let current = 'home';
    for (const item of navItems) {
      const el = document.getElementById(item.id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (scrollPos >= top) current = item.id;
    }
    if (current !== activeSectionRef.current) {
      activeSectionRef.current = current;
      setActiveSection(current);
      if (!skipHashSync.current) updateSectionHash(current);
    }
    skipHashSync.current = false;
  }, [updateSectionHash]);

  useEffect(() => {
    let frameId = 0;

    const updateHeaderState = () => {
      frameId = 0;
      updateActiveSection();
      setScrolled(window.scrollY > 8);
    };

    const scheduleHeaderUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateHeaderState);
    };

    updateHeaderState();
    window.addEventListener('scroll', scheduleHeaderUpdate, { passive: true });
    window.addEventListener('resize', scheduleHeaderUpdate);
    return () => {
      window.removeEventListener('scroll', scheduleHeaderUpdate);
      window.removeEventListener('resize', scheduleHeaderUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [updateActiveSection]);

  const navigateToSection = (e: MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    activeSectionRef.current = id;
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    updateSectionHash(id);
  };

  const goToBooking = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
    const element = document.getElementById('booking-section');
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((open) => {
      document.body.style.overflow = open ? '' : 'hidden';
      return !open;
    });
  };

  useEffect(() => () => { document.body.style.overflow = ''; }, []);

  return (
    <header className={cn(
      'fixed inset-x-0 top-0 z-50 border-b border-[#e4e7eb] bg-white dark:border-[#252d39] dark:bg-[#0b0f17]',
      'transition-shadow duration-200',
      scrolled ? 'shadow-[0_4px_18px_rgba(15,23,42,0.06)]' : 'shadow-none'
    )}>
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" onClick={(e) => navigateToSection(e, 'home')} className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="Go to home">
          <img src="/favicon-48x48.png" alt="" className="h-9 w-9 rounded-md object-cover" />
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-[#172033] dark:text-white">Pitso Nkotolane</span>
            <span className="block truncate text-[11px] text-[#727b88] dark:text-zinc-400">Software Developer</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.slice(1).map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => navigateToSection(e, item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'border-b-2 px-2.5 py-2 text-[13px] font-medium transition-colors',
                  isActive
                    ? 'border-[#2563eb] text-[#172033] dark:text-white'
                    : 'border-transparent text-[#626b78] hover:text-[#172033] dark:text-zinc-400 dark:hover:text-white'
                )}
              >
                {item.label}
              </a>
            );
          })}
          <button onClick={toggleTheme} className="ml-1 rounded-md p-2 text-[#626b78] transition-colors hover:bg-[#f2f3f5] hover:text-[#172033] dark:text-zinc-400 dark:hover:bg-[#171e2a] dark:hover:text-white" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>
          <a href="#booking-section" onClick={goToBooking} className="ml-2 inline-flex items-center gap-2 rounded-md bg-[#172033] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0f172a] dark:bg-[#3b82f6] dark:text-white dark:hover:bg-[#2563eb]">
            <PictureIcon surface="transparent" src="/icon-logo/calendar.png" size="xs" imageClassName="brightness-0 invert" />
            Book a call
          </a>
        </div>

        <div className="ml-2 flex shrink-0 items-center gap-1 xl:hidden">
          <button onClick={toggleTheme} className="rounded-md p-2 text-[#626b78] hover:bg-[#f2f3f5] dark:text-zinc-400 dark:hover:bg-[#171e2a]" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button onClick={toggleMobileMenu} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md hover:bg-[#f2f3f5] dark:hover:bg-[#171e2a]" aria-label="Toggle menu">
            <span className={cn('h-0.5 w-5 bg-[#172033] transition-all dark:bg-zinc-200', mobileMenuOpen && 'translate-y-2 rotate-45')} />
            <span className={cn('h-0.5 w-5 bg-[#172033] transition-all dark:bg-zinc-200', mobileMenuOpen && 'opacity-0')} />
            <span className={cn('h-0.5 w-5 bg-[#172033] transition-all dark:bg-zinc-200', mobileMenuOpen && '-translate-y-2 -rotate-45')} />
          </button>
        </div>

        <div
          className={cn(
            'fixed inset-x-0 bottom-0 top-[4.5rem] z-[60] overflow-y-auto border-t border-[#e4e7eb] bg-white px-5 py-5 shadow-[0_18px_50px_rgba(15,23,42,0.18)] transition-transform duration-200 dark:border-[#252d39] dark:bg-[#0b0f17] xl:hidden',
            mobileMenuOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
          )}
          style={{ backgroundColor: theme === 'dark' ? '#0b0f17' : '#ffffff' }}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="mx-auto flex max-w-xl flex-col gap-1">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={(e) => navigateToSection(e, item.id)} className={cn('rounded-md px-4 py-3 text-base font-medium transition-colors', activeSection === item.id ? 'bg-[#eff6ff] text-[#172033] dark:bg-[#1a2230] dark:text-white' : 'text-[#58616f] hover:bg-[#f5f6f7] dark:text-zinc-300 dark:hover:bg-[#171e2a]')}>
                {item.label}
              </a>
            ))}
            <a href="#booking-section" onClick={goToBooking} className="mt-3 flex items-center justify-center gap-2 rounded-md bg-[#172033] px-4 py-3 text-base font-semibold text-white dark:bg-[#3b82f6] dark:text-white">
              <PictureIcon surface="transparent" src="/icon-logo/calendar.png" size="xs" imageClassName="brightness-0 invert" />
              Book a call
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
