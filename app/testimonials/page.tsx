import type { Metadata } from "next";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const metadata: Metadata = {
  title: "Отзывы — кейтеринг Санкт-Петербург",
  description: "Отзывы клиентов Nilov Catering. Более 3500 мероприятий с оценкой 4.9 из 5. Реальные отзывы о свадьбах, корпоративах и частных мероприятиях.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://nc-site-2026.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Отзывы", item: "https://nc-site-2026.vercel.app/testimonials" },
  ],
};

export default function TestimonialsPage() {
  const avg = testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length;
  const distribution = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: testimonials.filter((t) => t.rating === star).length,
    pct: (testimonials.filter((t) => t.rating === star).length / testimonials.length) * 100,
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Отзывы клиентов
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Что говорят о нас клиенты, которые доверили нам свои самые важные события
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Отзывы" }]} />
      </div>

      {/* Rating breakdown */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-8 mb-16">
              <div className="text-center sm:text-left">
                <div className="font-heading text-5xl font-bold">{avg.toFixed(1)}</div>
                <div className="flex gap-0.5 mt-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`size-5 ${s <= Math.round(avg) ? "fill-accent text-accent" : "text-muted-foreground/30"}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  из {testimonials.length} отзывов
                </p>
              </div>
              <div className="flex-1 w-full space-y-2">
                {distribution.map((d) => (
                  <div key={d.star} className="flex items-center gap-2 text-sm">
                    <span className="w-3">{d.star}</span>
                    <Star className="size-3 fill-accent text-accent" />
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all"
                        style={{ width: `${d.pct}%` }}
                      />
                    </div>
                    <span className="w-8 text-right text-muted-foreground">{d.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Testimonial grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.05}>
                <div className="bg-card rounded-xl border border-border border-l-4 border-l-accent p-5 h-full flex flex-col">
                  <div className="flex gap-3 mb-3">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={44}
                      height={44}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {t.role}{t.company ? ` · ${t.company}` : ""}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                    <span>{t.event}</span>
                    <span>·</span>
                    <span>
                      {new Date(t.date).toLocaleDateString("ru-RU", {
                        day: "numeric", month: "long", year: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="flex gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`size-3.5 ${s <= t.rating ? "fill-accent text-accent" : "text-muted-foreground/30"}`}
                      />
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{t.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}