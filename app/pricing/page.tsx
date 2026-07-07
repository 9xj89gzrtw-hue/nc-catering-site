import type { Metadata } from "next";
import { Check } from "lucide-react";
import { pricingPackages } from "@/lib/data";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Цены на кейтеринг — Санкт-Петербург",
  description: "Стоимость кейтеринга в Санкт-Петербурге от 1200 ₽/чел. 5 ценовых пакетов: базовый фуршет, премиум банкет, VIP, BBQ, детский праздник.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://nc-site-2026.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Цены", item: "https://nc-site-2026.vercel.app/pricing" },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Цены на кейтеринг
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Прозрачное ценообразование без скрытых платежей. Выберите подходящий пакет или рассчитайте индивидуально
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Цены" }]} />
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPackages.map((pkg, i) => (
              <AnimatedSection
                key={pkg.id}
                delay={i * 0.1}
                className={pkg.isPopular ? "lg:col-span-1" : ""}
              >
                <div
                  className={`relative bg-card rounded-xl border p-6 h-full flex flex-col transition-shadow hover:shadow-lg ${
                    pkg.isPopular
                      ? "border-accent ring-2 ring-accent scale-105"
                      : "border-border"
                  }`}
                >
                  {pkg.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="secondary" className="bg-accent text-background">Популярный</Badge>
                    </div>
                  )}

                  <h2 className="font-heading text-xl font-bold mb-1">{pkg.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>

                  <div className="mb-6">
                    <span className="font-heading text-4xl font-bold">
                      {formatPrice(pkg.pricePerPerson)}
                    </span>
                    <span className="text-sm text-muted-foreground"> / чел</span>
                  </div>

                  <div className="space-y-2 mb-6 flex-1">
                    {pkg.features.map((f, fi) => (
                      <div key={fi} className="flex items-start gap-2 text-sm">
                        <Check className="size-4 text-accent mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-muted-foreground mb-4">
                    Минимум {pkg.minGuests} гостей
                  </p>

                  <a
                    href="/quote"
                    className={`block text-center py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      pkg.isPopular
                        ? "bg-accent text-background hover:bg-accent/90"
                        : "border border-border hover:bg-muted"
                    }`}
                  >
                    Заказать
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}