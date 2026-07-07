import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { CookieBanner } from "@/components/common/CookieBanner";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nc-site-2026.vercel.app"),
  title: { default: "Nilov Catering — Кейтеринг в Санкт-Петербурге", template: "%s | Nilov Catering" },
  description: "Профессиональный кейтеринг для мероприятий в Санкт-Петербурге. От 1500 ₽/чел.",
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Nilov Catering',
    images: [{ url: '/images/hero/hero_catering.png', width: 1200, height: 630, alt: 'Nilov Catering — кейтеринг в Санкт-Петербурге' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero_catering.png'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nilov Catering",
  url: "https://nc-site-2026.vercel.app",
  image: "https://nc-site-2026.vercel.app/images/hero/hero_catering.png",
  // TODO: заменить на реальный номер телефона
  telephone: "+7 (812) 000-00-00",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Санкт-Петербург",
    addressCountry: "RU",
  },
  geo: { "@type": "GeoCoordinates", latitude: 59.934, longitude: 30.335 },
  priceRange: "$$",
  openingHours: "Mo-Su 09:00-21:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
        <Header />
        <ScrollProgress />
        <main className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileNav />
        <ScrollToTop />
        <CookieBanner />
        <Toaster />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}