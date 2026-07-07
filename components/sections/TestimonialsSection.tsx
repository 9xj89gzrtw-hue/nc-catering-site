"use client";

import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { RevealText } from "@/components/common/RevealText";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export function TestimonialsSection() {
  const avgRating =
    testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <RevealText className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Отзывы клиентов
          </RevealText>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
              Autoplay({ delay: 6000, stopOnInteraction: true }),
            ]}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t) => (
                <CarouselItem key={t.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-xl border border-border p-6 h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star
                          key={si}
                          className={`size-4 ${
                            si < t.rating
                              ? "fill-accent text-accent"
                              : "text-border"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-sm text-muted-foreground flex-1 mb-6 leading-relaxed">
                      &laquo;{t.text}&raquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{t.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {t.role && t.company ? `${t.role}, ${t.company}` : t.event}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground/60 mt-2">
                      {t.event} — {t.date}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </AnimatedSection>

        {/* Average rating */}
        <AnimatedSection delay={0.5}>
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-2 bg-card rounded-full border border-border px-5 py-2.5">
              <Star className="size-5 fill-accent text-accent" />
              <span className="font-bold">{avgRating.toFixed(1)}</span>
              <span className="text-sm text-muted-foreground">
                средний рейтинг
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}