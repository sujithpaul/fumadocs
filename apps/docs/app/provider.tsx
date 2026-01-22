'use client';

import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

const SearchDialog = dynamic(() => import('@/components/search'), {
  ssr: false,
});

const inject = `
const urlParams = new URLSearchParams(window.location.search);
const uwuParam = urlParams.get("uwu");

if (typeof uwuParam === 'string') {
    localStorage.setItem('uwu', uwuParam);
}

const item = localStorage.getItem('uwu')

if (item === 'true') {
    document.documentElement.classList.add("uwu")
}
`;

export const searchConfig = {
  SearchDialog,
};

const USER_PREF_KEY = 'user-theme-preference';
const THEME_STORAGE_KEY = 'fumadocs-theme';

function isHomePage(pathname: string): boolean {
  return pathname === '/' || /^\/[a-z]{2}$/.test(pathname);
}

/**
 * Unified theme controller that handles route-based theme switching.
 * - Home page: always dark, no user choice
 * - Other pages: user preference (defaults to light)
 */
function ThemeController() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useLayoutEffect(() => {
    const isHome = isHomePage(pathname);

    if (isHome) {
      // Save user's current preference before forcing dark (if not already dark)
      if (theme && theme !== 'dark') {
        try {
          sessionStorage.setItem(USER_PREF_KEY, theme);
        } catch {
          // ignore
        }
      }
      // Force dark mode on home
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      // Non-home page: restore user preference if we saved one
      try {
        const savedPref = sessionStorage.getItem(USER_PREF_KEY);
        if (savedPref) {
          sessionStorage.removeItem(USER_PREF_KEY);
          document.documentElement.classList.remove('dark', 'light');
          document.documentElement.classList.add(savedPref);
          setTheme(savedPref);
        }
      } catch {
        // ignore
      }
    }
  }, [pathname, theme, setTheme]);

  return null;
}

export function Provider({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider>
      <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: inject }} />
      <ThemeController />
      {children}
    </TooltipProvider>
  );
}

export { isHomePage };
