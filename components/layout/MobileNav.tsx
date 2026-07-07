"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, UtensilsCrossed, Divide, Image, Phone } from "lucide-react";

const items = [
  { href: "/", label: "Главная", icon: Home },
  { href: "/menu", label: "Меню", icon: UtensilsCrossed },
  { href: "/menu#calculator", label: "Калькулятор", icon: Divide },
  { href: "/gallery", label: "Галерея", icon: Image },
  { href: "/contact", label: "Контакты", icon: Phone },
];

export function MobileNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.includes("#")) {
      return pathname === href.split("#")[0];
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t flex md:hidden" aria-label="Мобильная навигация">
      {items.map((item) => {
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex-1 flex flex-col items-center gap-0.5 py-2 text-[10px] font-medium transition-colors ${
              active ? "text-accent scale-105" : "text-muted-foreground"
            }`}
          >
            <item.icon className="size-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}