// src/lib/scroll.ts

/** Pixel offset for fixed header (matches section scroll-margin-top in index.css) */
function getHeaderScrollOffset(): number {
  const rem =
    parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  return window.matchMedia('(min-width: 1024px)').matches ? rem * 7 : rem * 6.5;
}

function getScrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'auto'
    : 'smooth';
}

/** Top document Y for a section, honoring scroll-margin-top. */
export function getSectionScrollTop(element: HTMLElement): number {
  const style = window.getComputedStyle(element);
  const scrollMargin = parseFloat(style.scrollMarginTop);
  const offset =
    Number.isFinite(scrollMargin) && scrollMargin > 0
      ? scrollMargin
      : getHeaderScrollOffset();

  return element.getBoundingClientRect().top + window.scrollY - offset;
}

/** Get all valid section IDs */
export function getValidSectionIds(): string[] {
  return [
    'home',
    'about',
    'skills',
    'soft-skills',
    'projects',
    'experience',
    'certificates',
    'contact',
    'booking-section'
  ];
}

/** Scroll to a portfolio section by id, accounting for the fixed header. */
export function scrollToSectionId(id: string, behavior?: ScrollBehavior): boolean {
  const scrollBehavior = behavior ?? getScrollBehavior();

  // Handle home section
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: scrollBehavior });
    return true;
  }

  // Handle booking section
  if (id === 'booking-section') {
    const element = document.getElementById(id);
    if (element) {
      const top = Math.max(0, getSectionScrollTop(element));
      window.scrollTo({ top, behavior: scrollBehavior });
      return true;
    } else {
      console.warn(`Element with id "${id}" not found. Make sure Booking component has id="bookingsection" - scroll.ts:61`);
      return false;
    }
  }

  // Handle regular sections
  const element = document.getElementById(id);
  if (!element) {
    console.warn(`Element with id "${id}" not found. Available sections: ${getValidSectionIds().join(', ')} - scroll.ts:69`);
    return false;
  }

  const top = Math.max(0, getSectionScrollTop(element));
  window.scrollTo({ top, behavior: scrollBehavior });
  return true;
}

/** Update URL hash without causing scroll */
export function updateSectionHash(id: string) {
  if (id === 'home') {
    window.history.replaceState(null, '', '/');
  } else if (id === 'booking-section') {
    window.history.replaceState(null, '', '#booking');
  } else {
    window.history.replaceState(null, '', `#${id}`);
  }
}

/** Handle section navigation clicks with smooth scroll */
export function handleSectionNavClick(
  e: React.MouseEvent<HTMLElement> | { preventDefault: () => void },
  id: string
) {
  e.preventDefault();
  
  // Small delay to ensure DOM is ready
  setTimeout(() => {
    scrollToSectionId(id);
    updateSectionHash(id);
  }, 10);
}

/** Check if all required sections exist in the DOM */
export function checkSectionsExist(): Record<string, boolean> {
  const sections = getValidSectionIds();
  const result: Record<string, boolean> = {};
  
  console.log('Checking section visibility... - scroll.ts:108');
  
  for (const section of sections) {
    const element = document.getElementById(section);
    result[section] = !!element;
    if (result[section]) {
      console.log(`Found: ${section} - scroll.ts:114`);
    } else {
      console.warn(`Not found: ${section} - scroll.ts:116`);
    }
  }
  
  return result;
}

/** Force scroll to section with retry mechanism */
export function scrollToSectionWithRetry(
  id: string, 
  maxRetries: number = 5, 
  delay: number = 100
): Promise<boolean> {
  return new Promise((resolve) => {
    let retries = 0;
    
    const tryScroll = () => {
      const success = scrollToSectionId(id);
      if (success) {
        updateSectionHash(id);
        resolve(true);
      } else if (retries < maxRetries) {
        retries++;
        console.log(`Retry ${retries}/${maxRetries} for section "${id}"... - scroll.ts:139`);
        setTimeout(tryScroll, delay);
      } else {
        console.error(`Failed to scroll to "${id}" after ${maxRetries} retries - scroll.ts:142`);
        resolve(false);
      }
    };
    
    tryScroll();
  });
}

/** Scroll to section and highlight it temporarily */
export function scrollToAndHighlight(id: string): Promise<boolean> {
  return new Promise((resolve) => {
    scrollToSectionWithRetry(id, 5, 100).then((success) => {
      if (success) {
        const element = document.getElementById(id);
        if (element) {
          // Add highlight class
          element.classList.add('ring-2', 'ring-indigo-500', 'ring-offset-2', 'rounded-2xl', 'transition-all', 'duration-300');
          
          // Remove highlight after 2 seconds
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-indigo-500', 'ring-offset-2');
          }, 2000);
        }
      }
      resolve(success);
    });
  });
}

/** Handle initial hash on page load */
export function handleInitialHash() {
  const hash = window.location.hash;
  if (hash) {
    const id = hash.replace('#', '');
    // Small delay to ensure DOM is loaded
    setTimeout(() => {
      scrollToSectionWithRetry(id, 3, 200);
    }, 300);
  }
}

/** Get current active section based on scroll position */
export function getCurrentActiveSection(): string {
  const sections = getValidSectionIds();
  const scrollPosition = window.scrollY + getHeaderScrollOffset() + 50;
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section) {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= sectionTop) {
        return sections[i];
      }
    }
  }
  
  return 'home';
}