import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions, linkItems, logo } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { AISearch, AISearchPanel, AISearchTrigger } from '@/components/ai/search';
import 'katex/dist/katex.min.css';
import { getSection } from '@/lib/source/navigation';

export default async function Layout({
  params,
  children,
}: LayoutProps<'/[lang]/docs'>) {
  const { lang } = await params;
  const base = baseOptions();

  return (
    <DocsLayout
      {...base}
      tree={source.getPageTree(lang)}
      // All links for mobile sidebar, icon items shown in sidebar footer
      links={linkItems}
      nav={{
        enabled: true,
        // Logo only visible on mobile header (hidden on desktop via CSS)
        title: (
          <span className="md:hidden flex items-center">
            {logo}
          </span>
        ),
      }}
      searchToggle={{
        enabled: false,
      }}
      sidebar={{
        collapsible: false,
        tabs: {
          transform(option, node) {
            const meta = source.getNodeMeta(node);
            if (!meta || !node.icon) return option;
            const color = `var(--${getSection(meta.path)}-color, var(--color-fd-foreground))`;

            return {
              ...option,
              icon: (
                <div
                  className="[&_svg]:size-full rounded-lg size-full text-(--tab-color) max-md:bg-(--tab-color)/10 max-md:border max-md:p-1.5"
                  style={
                    {
                      '--tab-color': color,
                    } as object
                  }
                >
                  {node.icon}
                </div>
              ),
            };
          },
        },
      }}
    >
      {children}

      <AISearch>
        <AISearchPanel />
        <AISearchTrigger />
      </AISearch>
    </DocsLayout>
  );
}
