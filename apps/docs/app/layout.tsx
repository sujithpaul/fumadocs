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
                var path = window.location.pathname;
                var isHome = path === '/' || /^\\/[a-z]{2}$/.test(path);
                var storageKey = 'fumadocs-theme';
                var userPrefKey = 'user-theme-preference';

                if (isHome) {
                  // Home page: always dark
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                  return;
                }

                // Non-home page: restore user preference or default to light
                try {
                  var savedPref = sessionStorage.getItem(userPrefKey);
                  var theme = savedPref || localStorage.getItem(storageKey) || 'light';
                  document.documentElement.classList.remove('dark', 'light');
                  document.documentElement.classList.add(theme);
                } catch (e) {
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <Body>{children}</Body>
    </html>
  );
}
