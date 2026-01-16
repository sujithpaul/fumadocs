'use client';

import { useParams } from 'next/navigation';
import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { getSection } from '@/lib/source/navigation';

export function Body({ children }: { children: ReactNode }): React.ReactElement {
  const mode = useMode();

  return <body className={cn(mode, 'relative flex min-h-screen flex-col')}>{children}</body>;
}

export function useMode(): string | undefined {
  const { slug = [] } = useParams();
  if (Array.isArray(slug)) return getSection(slug[0]);
}

export function FumadocsIcon(props: React.SVGProps<SVGSVGElement>) {
  // Use a static ID to avoid hydration mismatch
  // Since this component is only used once, a static ID is safe
  const id = 'fumadocs-icon-gradient';
  return (
    <svg width="80" height="80" viewBox="0 0 180 180" {...props}>
      <circle
        cx="90"
        cy="90"
        r="89"
        fill={`url(#${id})`}
        stroke="var(--color-fd-primary)"
        strokeWidth="1"
      />
      <defs>
        <linearGradient id={id} gradientTransform="rotate(45)">
          <stop offset="45%" stopColor="var(--color-fd-background)" />
          <stop offset="100%" stopColor="var(--color-fd-primary)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
