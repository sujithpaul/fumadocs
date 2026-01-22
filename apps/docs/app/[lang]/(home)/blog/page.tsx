import Link from 'next/link';
import { blog } from '@/lib/source';
import { PathUtils } from 'fumadocs-core/source';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

function getName(path: string) {
  return PathUtils.basename(path, PathUtils.extname(path));
}

// Generate a consistent color based on post slug - orange shades only
function getColorForPost(slug: string): string {
  const colors = [
    'bg-gradient-to-br from-orange-300 to-orange-500',
    'bg-gradient-to-br from-orange-400 to-orange-600',
    'bg-gradient-to-br from-orange-500 to-orange-700',
    'bg-gradient-to-br from-amber-400 to-orange-600',
    'bg-gradient-to-br from-orange-400 to-red-500',
    'bg-gradient-to-br from-orange-500 to-amber-600',
  ];
  
  // Use slug to consistently pick a color
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const posts = [...blog.getPages(lang)].sort(
    (a, b) =>
      new Date(b.data.date ?? getName(b.path)).getTime() -
      new Date(a.data.date ?? getName(a.path)).getTime(),
  );

  return (
    <main className="w-full pb-12 md:py-12 bg-gray-50/50 dark:bg-gray-950/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Hero Section - Magazine Style */}
        <div className="relative mb-24 md:mb-32 lg:mb-40">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 p-12 md:p-16 lg:p-20">
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_70%)]" />
            
            <div className="relative z-10 max-w-4xl">
              {/* Magazine-style tagline */}
              <div className="mb-6 md:mb-8">
                <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-gray-900/80 mb-2">
                  Insights & Perspectives
                </p>
                <div className="w-16 h-px bg-gray-900/30" />
              </div>

              {/* Main title - magazine style */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 mb-6 md:mb-8 leading-[1.1]">
                Stories from the
                <br />
                <span className="italic font-light">practice of therapy</span>
              </h1>

              {/* Editorial description */}
              <div className="space-y-4 max-w-2xl">
                <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed">
                  Where modern practice management meets thoughtful reflection. 
                  We explore the evolving landscape of therapy, the tools that shape 
                  how practitioners work, and the stories behind building better 
                  systems for care.
                </p>
                <p className="text-sm md:text-base text-gray-700/90 leading-relaxed font-light">
                  From the intersection of technology and human-centered design 
                  to the daily realities of running a practice—this is where 
                  we share what we're learning, building, and thinking about.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={`/${lang}${post.url}`}
            className="flex flex-col h-full bg-white dark:bg-fd-card rounded-3xl border shadow-sm overflow-hidden transition-shadow hover:shadow-md"
          >
            {/* Image Section - Fixed size */}
            <div className="relative w-full aspect-[4/3] flex-shrink-0 overflow-hidden">
              {post.data.image ? (
                <Image
                  src={post.data.image}
                  alt={post.data.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className={`w-full h-full ${getColorForPost(post.slugs[0] || post.url)}`} />
              )}
            </div>

            {/* Content Section - Fixed height */}
            <div className="flex flex-col flex-1 p-6 min-h-[180px]">
              {/* Category */}
              {post.data.category && (
                <div className="mb-3">
                  <Badge variant="outline" className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 font-normal">
                    {post.data.category}
                  </Badge>
                </div>
              )}

              {/* Title - Fixed height with line-clamp */}
              <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 line-clamp-2 min-h-[3.5rem]">
                {post.data.title}
              </h2>

              {/* Description - Fixed height with line-clamp */}
              <p className="text-sm text-gray-600 dark:text-fd-muted-foreground line-clamp-3 flex-1 min-h-[4.5rem]">
                {post.data.description}
              </p>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </main>
  );
}
