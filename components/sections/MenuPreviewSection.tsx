"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { menuItems } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { RevealText } from "@/components/common/RevealText";


export function MenuPreviewSection() {
  const popular = menuItems.filter((item) => item.isPopular);

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <RevealText className="text-3xl md:text-5xl font-heading font-bold mb-2">
              Популярные блюда
            </RevealText>
          </div>
          <Link
            href="/menu"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
          >
            Всё меню
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
          {popular.map((item) => (
            <div
              key={item.id}
              className="min-w-[260px] max-w-[280px] snap-start bg-card rounded-xl border border-border overflow-hidden flex-shrink-0"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="260px"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading text-lg font-bold mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-accent">{formatPrice(item.price)}</span>
                  <span className="text-xs text-muted-foreground">{item.weight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sm:hidden mt-4 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
          >
            Всё меню
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}