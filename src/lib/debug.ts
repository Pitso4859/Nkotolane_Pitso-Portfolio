
import { checkSectionsExist, scrollToSectionId, getValidSectionIds } from './scroll';

declare global {
  interface Window {
    debugPortfolio: () => void;
    goToSection: (id: string) => void;
    listSections: () => string[];
  }
}

export function setupDebugTools() {
  window.debugPortfolio = () => {
    console.log('=== Portfolio Debug Info === - debug.ts:14');
    checkSectionsExist();
    console.log('Scroll position: - debug.ts:16', window.scrollY);
    console.log('Viewport height: - debug.ts:17', window.innerHeight);
    console.log('Document height: - debug.ts:18', document.body.scrollHeight);
  };
  
  window.goToSection = (id: string) => {
    scrollToSectionId(id);
  };
  
  window.listSections = () => {
    return getValidSectionIds();
  };
  
  console.log('Debug tools ready. Available commands: debugPortfolio(), goToSection("projects"), listSections() - debug.ts:29');
}