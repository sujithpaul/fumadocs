'use client';

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

interface NavbarProps {
  lang: string;
}

function getNavbarLinks(lang: string) {
  return [
    {
      type: 'menu' as const,
      on: 'menu' as const,
      text: 'Documentation',
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
      type: 'custom' as const,
      on: 'nav' as const,
      children: (
        <NavbarMenu>
          <NavbarMenuTrigger>
            <Link href={`/${lang}/docs`}>Documentation</Link>
          </NavbarMenuTrigger>
          <NavbarMenuContent>
            <NavbarMenuLink href={`/${lang}/docs`} className="md:row-span-2">
              <div className="-mx-3 -mt-3">
                <Image
                  src={Preview}
                  alt="Preview"
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
    ...linkItems.map((item) => ({
      ...item,
      ...('url' in item && item.url ? { url: `/${lang}${item.url}` } : {}),
    })),
  ];
}

export function Navbar({ lang }: NavbarProps) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={getNavbarLinks(lang)}
      className="!flex-none dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)] [--color-fd-primary:var(--color-brand)]"
    />
  );
}

export { getNavbarLinks };
