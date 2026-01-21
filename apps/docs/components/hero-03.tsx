import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroBg from "@/public/hero-bg.png";
import HeroImage from "@/public/hero-image.png";

export default function Hero03() {
  return (
    <div className="relative min-h-screen w-full flex flex-col gap-16 items-center justify-center px-6 py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroBg}
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white/80 dark:from-black/40 dark:via-black/60 dark:to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border"
        >
          <Link href="#" className="inline-flex items-center">
            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          Therapy practice management has evolved
        </h1>
        <p className="mt-6 md:text-lg text-foreground/80">
          Modern clinics left behind the old tools and workflows.
          Now they&apos;re growing faster while working less.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base" asChild>
            <Link href="#">
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
            asChild
          >
            <Link href="#">
              <CirclePlay className="!h-5 !w-5" /> Watch Demo
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
        <Image
          src={HeroImage}
          alt="Hero showcase"
          fill
          className="object-cover"
          style={{ objectPosition: 'top' }}
          priority
          quality={90}
        />
      </div>
    </div>
  );
}

