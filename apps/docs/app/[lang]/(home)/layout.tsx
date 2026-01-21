import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions, linkItems } from '@/lib/layout.shared';
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';
import Link from 'fumadocs-core/link';
import Image from 'next/image';
import Preview from '@/public/banner.png';
import { Book, ComponentIcon, Pencil, PlusIcon, Server } from 'lucide-react';
import { EnsureLightMode } from './ensure-light.client';

export default async function Layout({
  params,
  children,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params;
  const base = baseOptions();
  return (
    <>
      <EnsureLightMode />
      <HomeLayout
      {...base}
      nav={{
        ...base.nav,
        transparentMode: 'always',
      }}
      links={[
        {
          type: 'main',
          on: 'nav',
          text: 'Home',
          url: `/${lang}`,
        },
        {
          type: 'menu',
          on: 'menu',
          text: 'Help Docs',
          items: [
            {
              text: 'Getting Started',
              url: `/${lang}/docs`,
              icon: <Book />,
            },
            {
              text: 'Components',
              url: `/${lang}/docs/ui/components`,
              icon: <ComponentIcon />,
            },
          ],
        },
        {
          type: 'custom',
          on: 'nav',
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>
                <Link href={`/${lang}/docs`}>Help Docs</Link>
              </NavbarMenuTrigger>
              <NavbarMenuContent>
                <NavbarMenuLink href={`/${lang}/docs`} className="md:row-span-2">
                  <div className="-mx-3 -mt-3">
                    <Image
                      src={Preview}
                      alt="Perview"
                      className="rounded-t-lg object-cover"
                      style={{
                        maskImage: 'linear-gradient(to bottom,white 60%,transparent)',
                      }}
                    />
                  </div>
                  <p className="font-medium">Getting Started</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Learn to use Fumadocs on your docs site.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink href={`/${lang}/docs/ui/components`} className="lg:col-start-2">
                  <ComponentIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Components</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Add interactive experience to your docs.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink href={`/${lang}/docs/openapi`} className="lg:col-start-2">
                  <Server className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">OpenAPI</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Generate interactive playgrounds and docs for your OpenAPI schema.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink href={`/${lang}/docs/markdown`} className="lg:col-start-3 lg:row-start-1">
                  <Pencil className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Markdown</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Learn the writing format/syntax of Fumadocs.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href={`/${lang}/docs/manual-installation`}
                  className="lg:col-start-3 lg:row-start-2"
                >
                  <PlusIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Manual Installation</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Setup Fumadocs for your existing Next.js app.
                  </p>
                </NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
        ...linkItems
          .filter((item) => item.type !== 'icon' || item.label !== 'github')
          .map((item) => ({
            ...item,
            ...('url' in item && item.url ? { url: `/${lang}${item.url}` } : {}),
          })),
      ]}
      className="dark:bg-background [--color-fd-primary:var(--color-brand)]"
    >
      {children}
    </HomeLayout>
    </>
  );
}
