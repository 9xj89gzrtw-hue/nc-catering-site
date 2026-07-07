import type { Metadata } from "next";
import { faqItems } from "@/lib/data";
import FAQClient from "@/components/faq/FAQClient";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Вопросы и ответы — кейтеринг Санкт-Петербург",
  description: "FAQ о кейтеринге в Санкт-Петербурге: бронирование, меню, оплата, логистика. Ответы на 12 самых частых вопросов.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://nc-site-2026.vercel.app" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://nc-site-2026.vercel.app/faq" },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Часто задаваемые вопросы
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о нашем кейтеринге
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "FAQ" }]} />
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <FAQClient />
        </div>
      </section>
    </>
  );
}