"use client";

import { menuItems } from "@/lib/data";
import { cn, formatPrice } from "@/lib/utils";

interface QuoteStepMenuProps {
  selectedMenuItems: string[];
  setSelectedMenuItems: (ids: string[]) => void;
}

export function QuoteStepMenu({ selectedMenuItems, setSelectedMenuItems }: QuoteStepMenuProps) {
  const popular = menuItems.filter((item) => item.isPopular).slice(0, 12);

  const toggleItem = (id: string) => {
    if (selectedMenuItems.includes(id)) {
      setSelectedMenuItems(selectedMenuItems.filter((i) => i !== id));
    } else {
      setSelectedMenuItems([...selectedMenuItems, id]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading text-xl font-bold mb-1">Выбор блюд</h3>
        <p className="text-sm text-muted-foreground">
          Отметьте блюда, которые хотите включить в меню. Выбрано: {selectedMenuItems.length}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {popular.map((item) => {
          const isSelected = selectedMenuItems.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleItem(item.id)}
              className={cn(
                "flex items-start gap-3 p-3 rounded-xl border-2 text-left transition-all",
                isSelected
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-accent/40"
              )}
            >
              <div
                className={cn(
                  "mt-0.5 size-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors",
                  isSelected ? "bg-accent border-accent" : "border-muted-foreground/40"
                )}
              >
                {isSelected && (
                  <svg className="size-3 text-background" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{item.name}</p>
                <p className="text-xs text-muted-foreground line-clamp-1">{item.description}</p>
                <p className="text-xs text-accent font-medium mt-1">
                  {formatPrice(item.price)} · {item.weight}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}