import type { Viewport } from 'next';
import { baseUrl, createMetadata } from '@/lib/metadata';
import { Provider, searchConfig } from '../provider';
import type { ReactNode } from 'react';
import { TreeContextProvider } from 'fumadocs-ui/contexts/tree';
import { source } from '@/lib/source';
import { NextProvider } from 'fumadocs-core/framework/next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { defineI18nUI } from 'fumadocs-ui/i18n';
import { i18n } from '@/lib/i18n';

export const metadata = createMetadata({
  title: {
    template: '%s | Fumadocs',
    default: 'Fumadocs',
  },
  description: 'The React.js documentation framework.',
  metadataBase: baseUrl,
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

const { provider } = defineI18nUI(i18n, {
  translations: {
    en: {
      displayName: 'English',
    },
    de: {
      displayName: 'Deutsch',
      toc: 'Inhaltsverzeichnis',
      search: 'Dokumentation durchsuchen',
      lastUpdate: 'Zuletzt aktualisiert am',
      searchNoResult: 'Keine Ergebnisse',
      previousPage: 'Vorherige Seite',
      nextPage: 'Nächste Seite',
      chooseLanguage: 'Sprache wählen',
    },
  },
});

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return (
    <NextProvider>
      <TreeContextProvider tree={source.getPageTree(lang)}>
        <RootProvider i18n={provider(lang)} search={searchConfig}>
          <Provider>{children}</Provider>
        </RootProvider>
      </TreeContextProvider>
    </NextProvider>
  );
}

