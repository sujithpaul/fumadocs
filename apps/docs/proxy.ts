import { NextRequest, NextResponse, NextFetchEvent } from 'next/server';
import { isMarkdownPreferred, rewritePath } from 'fumadocs-core/negotiation';
import { createI18nMiddleware } from 'fumadocs-core/i18n/middleware';
import { i18n } from '@/lib/i18n';

const { rewrite: rewriteLLM } = rewritePath('/docs/*path', '/llms.mdx/*path');
const i18nProxy = createI18nMiddleware(i18n);

// Paths that should skip i18n middleware
const SKIP_I18N_PATHS = [
  '/_next',
  '/api',
  '/icon.png',
  '/banner.png',
  '/favicon.ico',
  '/static',
  '/llms-full.txt',
  '/llms.txt',
  '/sitemap.xml',
  '/robots.txt',
];

export default async function proxy(request: NextRequest, event: NextFetchEvent) {
  const pathname = request.nextUrl.pathname;

  // Skip i18n for static assets and API routes
  for (const path of SKIP_I18N_PATHS) {
    if (pathname.startsWith(path)) {
      return NextResponse.next();
    }
  }

  // Handle i18n routing first
  const i18nResponse = await i18nProxy(request, event);

  // If i18n middleware didn't return a response, continue
  if (!i18nResponse) {
    return NextResponse.next();
  }

  // If i18n middleware returned a redirect, return it immediately
  if (i18nResponse.status === 307 || i18nResponse.status === 308) {
    return i18nResponse;
  }

  // Check for markdown preference (for LLM requests)
  if (isMarkdownPreferred(request)) {
    // Use the current pathname (i18n may have rewritten it internally)
    const result = rewriteLLM(pathname);
    if (result) {
      return NextResponse.rewrite(new URL(result, request.nextUrl));
    }
  }

  // Return the i18n response (which may be a rewrite or next())
  return i18nResponse;
}
