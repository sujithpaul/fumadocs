import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroBg from "@/public/hero-bg.png";
import { cn } from "@/lib/cn";

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
        <Link href="#">
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
          >
            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
          </Badge>
        </Link>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          Customized Shadcn UI Blocks & Components
        </h1>
        <p className="mt-6 md:text-lg text-foreground/80">
          Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="#"
            className={cn(buttonVariants({ size: "lg" }), "rounded-full text-base")}
          >
            Get Started <ArrowUpRight className="h-5 w-5 ml-1" />
          </Link>
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full text-base shadow-none"
            )}
          >
            <CirclePlay className="h-5 w-5 mr-2" /> Watch Demo
          </Link>
        </div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto aspect-video bg-accent/20 rounded-xl border" />
    </div>
  );
}

