// Root layout that provides html/body structure
// CSS must be imported here for Next.js to process it
import './global.css';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import { Body } from '@/app/layout.client';

const geist = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const mono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const path = window.location.pathname;
                const isHome = path === '/' || path === '/en' || path.match(/^\/[a-z]{2}$/);

                // Force dark mode for homepage routes (/en or /)
                if (isHome) {
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                  try { sessionStorage.setItem('__forced_home_dark__', '1'); } catch (e) {}
                  return;
                }

                // If we previously visited the forced-dark homepage in this session,
                // reset back to light before hydration to avoid a dark flash.
                try {
                  if (sessionStorage.getItem('__forced_home_dark__') === '1') {
                    sessionStorage.removeItem('__forced_home_dark__');
                    localStorage.setItem('theme', 'light');
                    localStorage.setItem('fumadocs-theme', 'light');
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <Body>{children}</Body>
    </html>
  );
}
