"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { UtensilsCrossed, Award, Heart, Briefcase, Music, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { RevealText } from "@/components/common/RevealText";
import { AnimatedSection } from "@/components/common/AnimatedSection";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  furshet: UtensilsCrossed,
  banket: Award,
  svadba: Heart,
  korporativ: Briefcase,
  bar: Music,
};

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <RevealText className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Наши услуги
          </RevealText>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный спектр кейтеринговых услуг для мероприятий любого масштаба
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.slug] || UtensilsCrossed;
            return (
              <AnimatedSection key={service.id} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                  className="group relative bg-card rounded-xl border border-border p-6 h-full flex flex-col overflow-hidden"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-accent/10 text-accent"
                  >
                    <Icon className="size-6" />
                  </motion.div>

                  <h3 className="font-heading text-xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {service.description}
                  </p>

                  {/* Features on hover */}
                  <ul className="space-y-1.5 mb-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-300 overflow-hidden">
                    {service.features.map((feature, fi) => (
                      <li key={fi} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Подробнее
                    <ArrowRight className="size-4" />
                  </Link>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}