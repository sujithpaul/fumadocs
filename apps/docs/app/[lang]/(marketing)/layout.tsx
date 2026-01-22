import { ForcedDarkTheme } from './forced-theme.client';

export default async function MarketingLayout({
  params,
  children,
}: LayoutProps<'/[lang]'>) {
  return (
    <>
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              document.documentElement.classList.remove('light');
              document.documentElement.classList.add('dark');
            })();
          `,
        }}
      />
      <ForcedDarkTheme>
        {children}
      </ForcedDarkTheme>
    </>
  );
}
