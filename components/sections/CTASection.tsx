"use client";

import Link from "next/link";
import { ParallaxImage } from "@/components/common/ParallaxImage";
import { RevealText } from "@/components/common/RevealText";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <ParallaxImage
        src="/images/hero/hero_catering.png"
        alt="Мероприятие с кейтерингом"
        className="absolute inset-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] container mx-auto px-4 text-center">
        <RevealText className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
          Сделайте ваше мероприятие незабываемым
        </RevealText>

        <AnimatedSection delay={0.2}>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Свяжитесь с нами для бесплатной консультации и индивидуального расчёта вашего мероприятия
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

        <AnimatedSection delay={0.6}>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <span>19+ лет</span>
            <span className="text-white/30">|</span>
            <span>98% довольных</span>
            <span className="text-white/30">|</span>
            <span>3500+ мероприятий</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}