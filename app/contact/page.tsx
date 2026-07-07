import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm, MapPlaceholder } from "@/components/contact/ContactForm";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const metadata: Metadata = {
  title: "Контакты — кейтеринг Санкт-Петербург",
  description: "Свяжитесь с Nilov Catering: телефон, email, адрес. Заказать кейтеринг в Санкт-Петербурге. Режим работы: Пн-Вс 09:00-21:00.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://nc-site-2026.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Контакты", item: "https://nc-site-2026.vercel.app/contact" },
  ],
};

const contactCards = [
  // TODO: заменить на реальный номер телефона
  { icon: Phone, label: "Телефон", value: "+7 (812) 000-00-00", href: "tel:+78120000000" },
  { icon: Mail, label: "Email", value: "info@odaeda.ru", href: "mailto:info@odaeda.ru" },
  { icon: MapPin, label: "Адрес", value: "Санкт-Петербург, Россия", href: undefined },
  { icon: Clock, label: "Режим работы", value: "Пн-Вс: 09:00-21:00", href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Контакты
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом — мы ответим в течение часа
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Контакты" }]} />
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="font-heading text-2xl font-bold mb-6">Напишите нам</h2>
              <ContactForm />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="font-heading text-2xl font-bold mb-6">Контактная информация</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactCards.map((c) => (
                  <div key={c.label} className="p-4 rounded-xl bg-muted/50 border border-border">
                    <div className="flex items-center gap-2 mb-1">
                      <c.icon className="size-4 text-accent" />
                      <span className="text-xs text-muted-foreground">{c.label}</span>
                    </div>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-medium hover:text-accent transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{c.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-12">
            <MapPlaceholder />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}