import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О нас — кейтеринг Санкт-Петербург",
  description: "Nilov Catering — 19 лет опыта в кейтеринге Санкт-Петербурга. Более 3500 мероприятий, свадеб и корпоративов. Узнайте историю, миссию и познакомьтесь с командой.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://nc-site-2026.vercel.app" },
    { "@type": "ListItem", position: 2, name: "О нас", item: "https://nc-site-2026.vercel.app/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <div className="bg-primary py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            О нас
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            19 лет создания незабываемых гастрономических впечатлений в Санкт-Петербурге
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "О нас" }]} />
      </div>

      {/* Наша история */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="font-heading text-3xl font-bold">Наша история</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nilov Catering был основан в 2006 году в Санкт-Петербурге с простой, но амбициозной целью — сделать кейтеринг доступным, вкусным и красивым. Что начиналось как небольшая команда энтузиастов с парой блюд, сегодня превратилось в одну из ведущих кейтеринговых компаний города.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  За 19 лет мы организовали более 3500 мероприятий — от камерных ужинов на 10 человек до грандиозных корпоративов на 500+. Мы работали на лучших площадках Санкт-Петербурга и Ленинградской области: от дворцов Петергофа до современных лофтов на Васильевском острове.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Наш путь — это путь непрерывного совершенствования. Мы первыми в городе внедрили концепцию авторского кейтеринга, привезли интерактивные барные станции и стали пионерами в области экологичного обслуживания. Каждое мероприятие для нас — это возможность создать что-то уникальное.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/gallery/12_team_portrait.png"
                  alt="Команда Nilov Catering"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Миссия */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="font-heading text-3xl font-bold">Наша миссия</h2>
              <p className="text-accent font-heading italic text-2xl leading-relaxed">
                Превращать каждое мероприятие в гастрономическое путешествие, где каждый гость чувствует себя особенным
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Мы верим, что еда — это не просто питание, а искусство общения. Через безупречный вкус, идеальную подачу и искреннее гостеприимство мы создаём моменты, которые остаются в памяти навсегда.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Команда — компактный блок со ссылкой на полную страницу */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="font-heading text-3xl font-bold">Наша команда</h2>
              <p className="text-muted-foreground leading-relaxed">
                Более 60 профессионалов — шеф-повара, сомелье, координаторы и официанты. Каждый член команды прошёл стажировку в лучших ресторанах Санкт-Петербурга и регулярно повышает квалификацию.
              </p>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 bg-accent text-background px-6 py-3 rounded-md font-medium hover:bg-accent/90 transition-colors"
              >
                Познакомиться с командой
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}