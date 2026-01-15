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
      <Body>{children}</Body>
    </html>
  );
}
