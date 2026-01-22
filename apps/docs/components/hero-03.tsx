'use client';

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroBg from "@/public/hero-bg.svg";
import HeroImage from "@/public/hero-image.png";

export default function Hero03() {
  return (
    <>
      {/* Main Hero Section */}
      <div className="relative min-h-screen w-full flex flex-col gap-8 md:gap-10 lg:gap-12 items-center justify-center lg:justify-start lg:pt-32 xl:pt-40 px-6 py-12 md:py-16 overflow-hidden -mt-8 sm:-mt-12">
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
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white/60 dark:from-black/20 dark:via-black/40 dark:to-black/60" />
          {/* Bottom fade to merge with next section */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-muted via-muted/80 to-transparent pointer-events-none" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          {/* Floating orbs */}
          <div className="absolute top-1/4 left-[10%] w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/4 right-[10%] w-72 h-72 md:w-[28rem] md:h-[28rem] bg-primary/5 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-2xl animate-[pulse_6s_ease-in-out_infinite]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 md:mb-6 lg:mb-8 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full text-sm font-medium text-muted-foreground animate-[fadeInUp_0.6s_ease-out_both]">
            <Sparkles className="w-4 h-4 text-primary animate-[pulse_2s_ease-in-out_infinite]" />
            <span>Next-generation practice management</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl md:leading-[1.15] font-bold tracking-tighter text-balance animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
            <span className="block">Therapy practice</span>
            <span className="block">management has</span>
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">evolved</span>
              <span className="absolute -inset-1 bg-primary/10 blur-xl rounded-lg animate-[pulse_3s_ease-in-out_infinite]" />
            </span>
          </h1>

          <p className="mt-4 md:mt-6 lg:mt-8 text-lg md:text-xl lg:text-2xl text-white text-balance max-w-3xl mx-auto leading-relaxed animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            Leading practices have moved beyond generic EMRs to software built specifically for therapy workflows.
          </p>

          <div className="mt-6 md:mt-8 lg:mt-10 flex items-center justify-center animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
            <Button size="lg" className="group rounded-full text-base lg:text-lg px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105" asChild>
              <Link href="#">
                Start Now
                <ArrowUpRight className="!h-5 !w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Second Hero Card with Image */}
      <div className="relative w-full py-16 md:py-24 lg:py-32 px-6 bg-gradient-to-b from-muted via-muted to-background overflow-hidden">
        {/* Bottom fade to merge with next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance mb-6 md:mb-8 leading-[1.1]">
              From intake to outcomes, one software that scales with your team.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white text-balance max-w-4xl mx-auto leading-relaxed">
              Metanoa is the integrated platform for growing multi-discipline therapy practices.
            </p>
          </div>
          <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border-2 border-border/30 ring-1 ring-black/5 dark:ring-white/5">
            <Image
              src={HeroImage}
              alt="Hero showcase"
              className="w-full h-auto"
              quality={90}
            />
          </div>
        </div>
      </div>
    </>
  );
}

