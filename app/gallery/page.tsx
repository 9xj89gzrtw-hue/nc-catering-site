import type { Metadata } from "next";
import GalleryPageClient from "@/components/gallery/GalleryPageClient";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Галерея — кейтеринг Санкт-Петербург",
  description: "Фотографии с мероприятий кейтеринга Nilov Catering в Санкт-Петербурге. Свадьбы, корпоративы, банкеты, фуршеты и барные станции.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://nc-site-2026.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Галерея", item: "https://nc-site-2026.vercel.app/gallery" },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Галерея
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Фотографии с наших мероприятий в Санкт-Петербурге
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Галерея" }]} />
        <GalleryPageClient />
      </div>
    </>
  );
}