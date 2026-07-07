import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { AnimatedSection } from "@/components/common/AnimatedSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return { title: "Не найдено" };

  return {
    title: `${svc.title} — кейтеринг Санкт-Петербург`,
    description: svc.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://nc-site-2026.vercel.app" },
      { "@type": "ListItem", position: 2, name: "Услуги", item: "https://nc-site-2026.vercel.app/services" },
      { "@type": "ListItem", position: 3, name: svc.title, item: `https://nc-site-2026.vercel.app/services/${svc.slug}` },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    description: svc.description,
    serviceType: `Кейтеринг — ${svc.title}`,
    areaServed: { "@type": "City", name: "Санкт-Петербург" },
    provider: { "@type": "Organization", name: "Nilov Catering", url: "https://nc-site-2026.vercel.app" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <div className="bg-primary py-24 md:py-32 relative">
        <Image
          src={svc.image}
          alt={svc.title}
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {svc.title}
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">{svc.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Услуги", href: "/services" }, { label: svc.title }]} />
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <h2 className="font-heading text-2xl font-bold mb-6">Особенности услуги</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {svc.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <Check className="size-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-12">
              <p>
                Кейтеринг формата «{svc.title}» — одно из ключевых направлений Nilov Catering.
                Мы создали уникальную систему организации, которая позволяет обеспечить безупречный
                результат на мероприятиях любого масштаба в Санкт-Петербурге.
              </p>
              <p>
                Каждый заказ начинается с персональной консультации, где мы обсуждаем ваши пожелания,
                особенности площадки и бюджет. Затем шеф-повар разрабатывает индивидуальное меню,
                а менеджер мероприятий составляет детальный тайминг.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <a
              href="/quote"
              className="inline-flex items-center gap-2 bg-accent text-background px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Заказать {svc.title.toLowerCase()}
              <ArrowRight className="size-4" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}