"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ParallaxImage } from "@/components/common/ParallaxImage";
import { RevealText } from "@/components/common/RevealText";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background */}
      <ParallaxImage
        src="/images/hero/hero_catering.png"
        alt="Кейтеринг от Nilov Catering"
        className="absolute inset-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background z-[1]" />

      {/* Content */}
      <div className="relative z-[2] container mx-auto px-4 text-center">
        <RevealText
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6"
        >
          Ресторан выездного обслуживания
        </RevealText>

        <AnimatedSection delay={0.3}>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Профессиональный кейтеринг для свадеб, корпоративов и частных мероприятий в Санкт-Петербурге
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-background hover:bg-accent/90 transition-colors"
            >
              Заказать кейтеринг
            </Link>
            <Link
              href="/menu"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/40 px-8 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Смотреть меню
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2]">
        <ChevronDown className="size-6 text-white animate-bounce" />
      </div>
    </section>
  );
}