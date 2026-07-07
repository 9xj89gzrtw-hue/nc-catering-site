"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import type { MenuItem } from "@/lib/data";
import { cn } from "@/lib/utils";

interface MenuCardProps {
  item: MenuItem;
  showNutrition: boolean;
  onAdd?: (item: MenuItem) => void;
  quantity?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export function MenuCard({ item, showNutrition, onAdd, quantity, onIncrement, onDecrement }: MenuCardProps) {
  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden break-inside-avoid mb-4 hover:shadow-lg transition-shadow">
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {item.isPopular && (
            <Badge variant="secondary" className="text-xs">Хит</Badge>
          )}
          {item.isNew && (
            <Badge variant="outline" className="text-xs">Новинка</Badge>
          )}
          {item.isVegetarian && (
            <Badge variant="outline" className="text-xs">Лист</Badge>
          )}
          {item.isGlutenFree && (
            <Badge variant="outline" className="text-xs">GF</Badge>
          )}
        </div>
        {onAdd && quantity === undefined && (
          <button
            onClick={() => onAdd(item)}
            className="absolute bottom-2 right-2 bg-accent text-background text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent/90"
          >
            Добавить
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-heading text-lg font-bold text-accent">{formatPrice(item.price)}</span>
            <span className="text-xs text-muted-foreground ml-1">/ {item.weight}</span>
          </div>
          {quantity !== undefined && quantity > 0 && (
            <div className="flex items-center gap-2">
              <button
                onClick={onDecrement}
                className="size-6 rounded-full border border-border flex items-center justify-center text-xs hover:bg-muted transition-colors"
              >
                −
              </button>
              <span className="text-sm font-medium w-4 text-center">{quantity}</span>
              <button
                onClick={onIncrement}
                className="size-6 rounded-full border border-border flex items-center justify-center text-xs hover:bg-muted transition-colors"
              >
                +
              </button>
            </div>
          )}
        </div>
        {showNutrition && (
          <div className="mt-2 pt-2 border-t border-border flex gap-3 text-xs text-muted-foreground">
            <span>{item.calories} ккал</span>
            <span>Б {item.proteins}г</span>
            <span>Ж {item.fats}г</span>
            <span>У {item.carbs}г</span>
          </div>
        )}
      </div>
    </div>
  );
}