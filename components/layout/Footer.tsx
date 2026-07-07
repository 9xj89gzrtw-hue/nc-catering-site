"use client";

import Link from "next/link";
import { MessageCircle, Phone, Globe } from "lucide-react";
import { MarqueeText } from "@/components/common/MarqueeText";
import { trustMarks } from "@/lib/data";

// TODO: заменить href на реальные ссылки
const socialLinks = [
  { icon: MessageCircle, label: "Telegram", href: "#" },
  { icon: Phone, label: "WhatsApp", href: "#" },
  { icon: Globe, label: "VK", href: "#" },
];

export function Footer() {
  return (
    <>
      <footer className="bg-primary text-primary-foreground mt-auto">
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">О компании</h3>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Профессиональный кейтеринг в Санкт-Петербурге. 19 лет опыта, более 3500 мероприятий.
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Команда
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Все услуги
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Меню
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Цены
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Рассчитать стоимость
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" />
                {/* TODO: заменить на реальный номер телефона */}
                <a href="tel:+78120000000" className="hover:text-accent transition-colors">
                  +7 (812) 000-00-00
                </a>
              </li>
              <li>
                <a href="mailto:info@odaeda.ru" className="hover:text-accent transition-colors">
                  info@odaeda.ru
                </a>
              </li>
              <li>Санкт-Петербург</li>
              <li>Пн-Вс: 09:00-21:00</li>
            </ul>
          </div>

          {/* Соцсети */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Соцсети</h3>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center size-10 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
                  aria-label={s.label}
                >
                  <s.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-2 text-sm text-primary-foreground/50">
            <span>Nilov Catering. Все права защищены.</span>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Trust Marquee below footer */}
      <MarqueeText
        speed={25}
        reverse={true}
        className="py-6 border-y border-border bg-muted/30 text-muted-foreground text-sm uppercase tracking-[0.3em] font-heading"
      >
        <span>
          Nilov Catering  •  {trustMarks.map((t) => t.name).join("  •  ")}  •  
        </span>
      </MarqueeText>
    </>
  );
}