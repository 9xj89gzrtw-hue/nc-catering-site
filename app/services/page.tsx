import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const metadata: Metadata = {
  title: "Услуги кейтеринга — Санкт-Петербург",
  description: "Услуги кейтеринга в Санкт-Петербурге: фуршеты, банкеты, свадьбы, корпоративы, барные станции. Профессиональное обслуживание от 1500 ₽/чел.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://nc-site-2026.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Услуги", item: "https://nc-site-2026.vercel.app/services" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Наши услуги
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Полный спектр кейтеринговых услуг для мероприятий любого формата и масштаба
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Услуги" }]} />
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.id} delay={i * 0.1}>
                <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading text-xl font-bold mb-2">{svc.title}</h2>
                    <p className="text-sm text-muted-foreground mb-4">{svc.description}</p>

                    <div className="space-y-2 mb-4 max-h-0 group-hover:max-h-48 overflow-hidden transition-all duration-500">
                      {svc.features.map((f, fi) => (
                        <div key={fi} className="flex items-start gap-2 text-sm">
                          <Check className="size-4 text-accent mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                    >
                      Подробнее <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}