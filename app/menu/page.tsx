import type { Metadata } from "next";
import { menuItems, menuCategories } from "@/lib/data";
import MenuPageClient from "@/components/menu/MenuPageClient";
import PriceCalculator from "@/components/calculator/PriceCalculator";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Меню — кейтеринг Санкт-Петербург",
  description:
    `Полное меню кейтеринга в Санкт-Петербурге: ${menuItems.length} блюд от канапе до десертов. Вегетарианские, безглютеновые, сезонные и детские позиции. Цены от 60 ₽.`,
};

const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Меню Nilov Catering",
  hasMenuSection: menuCategories.map((cat) => ({
    "@type": "MenuSection",
    name: cat.label,
    hasMenuItem: menuItems
      .filter((item) => item.category === cat.id)
      .map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price,
          priceCurrency: "RUB",
        },
      })),
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://nc-site-2026.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Меню", item: "https://nc-site-2026.vercel.app/menu" },
  ],
};

export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Наше меню
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            {menuItems.length} авторских блюда для кейтеринга в Санкт-Петербурге. Выберите идеальное сочетание для вашего мероприятия.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Меню" }]} />
      </div>

      <MenuPageClient />
      <PriceCalculator />
    </>
  );
}