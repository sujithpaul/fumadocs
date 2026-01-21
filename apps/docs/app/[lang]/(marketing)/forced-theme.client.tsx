'use client';

import type { ReactNode } from 'react';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function DarkModeEnforcer() {
  const { setTheme } = useTheme();
  const pathname = usePathname();
  
  useEffect(() => {
    // Only enforce dark mode on homepage routes
    const isHomepage = pathname === '/' || pathname === '/en' || pathname.match(/^\/[a-z]{2}$/);
    
    if (isHomepage) {
      try {
        sessionStorage.setItem('__forced_home_dark__', '1');
      } catch {
        // ignore
      }

      // Force dark mode immediately
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      // Also set it via the theme provider
      setTheme('dark');
      
      // Keep checking and forcing it (in case parent overrides)
      const interval = setInterval(() => {
        if (!document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('light');
          document.documentElement.classList.add('dark');
          setTheme('dark');
        }
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [setTheme, pathname]);
  
  return null;
}

export function ForcedDarkTheme({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      forcedTheme="dark"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      storageKey="__forced_dark__"
    >
      <DarkModeEnforcer />
      {children}
    </ThemeProvider>
  );
}


