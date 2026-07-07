import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote/QuoteForm";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Расчёт стоимости — кейтеринг Санкт-Петербург",
  description: "Рассчитайте стоимость кейтеринга онлайн. Многошаговая форма заявки с подбором меню, доп. услуг и расчётом итоговой цены.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://nc-site-2026.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Заявка", item: "https://nc-site-2026.vercel.app/quote" },
  ],
};

export default function QuotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Расчёт стоимости
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Заполните форму и получите персональный расчёт стоимости кейтеринга для вашего мероприятия
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: "Расчёт стоимости" }]} />
        <QuoteForm />
      </div>
    </>
  );
}