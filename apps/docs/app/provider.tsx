'use client';

import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { useEffect } from 'react';
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

const HOME_SESSION_FLAG = '__forced_home_dark__';

function ThemeRouteSync() {
  const pathname = usePathname();
  const { setTheme } = useTheme();

  useEffect(() => {
    const isHome =
      pathname === '/' ||
      /^\/[a-z]{2}$/.test(pathname); // e.g. /en

    if (isHome) {
      // Mark that we've been on the forced-dark homepage this session.
      sessionStorage.setItem(HOME_SESSION_FLAG, '1');
      return;
    }

    // If we came from the homepage (forced dark), reset to light once.
    if (sessionStorage.getItem(HOME_SESSION_FLAG) === '1') {
      sessionStorage.removeItem(HOME_SESSION_FLAG);

      // Make non-home pages default back to light.
      setTheme('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');

      // Normalize common theme keys that may have been set to dark.
      try {
        localStorage.setItem('theme', 'light');
        localStorage.setItem('fumadocs-theme', 'light');
      } catch {
        // ignore
      }
    }
  }, [pathname, setTheme]);

  return null;
}

export function Provider({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider>
      <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: inject }} />
      <ThemeRouteSync />
      {children}
    </TooltipProvider>
  );
}
