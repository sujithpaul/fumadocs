'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export function EnsureLightMode() {
  const { setTheme, theme } = useTheme();
  
  useEffect(() => {
    // Ensure light mode is set for non-homepage pages
    if (theme !== 'light') {
      setTheme('light');
    }
    // Also directly set the class
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }, [setTheme, theme]);
  
  return null;
}

