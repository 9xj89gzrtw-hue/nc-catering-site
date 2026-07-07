"use client";

import { useState } from "react";
import { menuItems, menuCategories } from "@/lib/data";
import { MenuCard } from "@/components/menu/MenuCard";
import { MenuBuilderProvider, useMenuBuilder, MenuBuilderPanel } from "@/components/menu/MenuBuilder";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { cn } from "@/lib/utils";

function MenuFilterBar({
  activeCategory,
  setActiveCategory,
  activeFilter,
  setActiveFilter,
}: {
  activeCategory: string;
  setActiveCategory: (c: string) => void;
  activeFilter: string;
  setActiveFilter: (f: string) => void;
}) {
  const filters = [
    { id: "all", label: "Все" },
    { id: "vegetarian", label: "Вегетарианское" },
    { id: "glutenFree", label: "Без глютена" },
    { id: "new", label: "Новинки" },
    { id: "popular", label: "Хиты" },
  ];

  return (
    <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-md py-3 border-b border-border">
      <div className="container mx-auto px-4 space-y-2">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
              activeCategory === "all"
                ? "bg-accent text-background"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            Все
          </button>
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
                activeCategory === cat.id
                  ? "bg-accent text-background"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={cn(
                "shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors border",
                activeFilter === f.id
                  ? "bg-accent text-background border-accent"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFilter, setActiveFilter] = useState("all");
  const [showNutrition, setShowNutrition] = useState(false);
  const { addItem, items: builderItems, incrementItem, decrementItem } = useMenuBuilder();

  const filtered = menuItems.filter((item) => {
    if (activeCategory !== "all" && item.category !== activeCategory) return false;
    if (activeFilter === "vegetarian" && !item.isVegetarian) return false;
    if (activeFilter === "glutenFree" && !item.isGlutenFree) return false;
    if (activeFilter === "new" && !item.isNew) return false;
    if (activeFilter === "popular" && !item.isPopular) return false;
    return true;
  });

  const getQuantity = (id: string) => {
    const found = builderItems.find((i) => i.item.id === id);
    return found ? found.quantity : undefined;
  };

  return (
    <>
      <MenuFilterBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "блюдо" : filtered.length < 5 ? "блюда" : "блюд"}
          </p>
          <button
            onClick={() => setShowNutrition(!showNutrition)}
            className={cn(
              "text-xs px-3 py-1.5 rounded-full border transition-colors",
              showNutrition
                ? "bg-accent text-background border-accent"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            {showNutrition ? "Скрыть КБЖУ" : "Показать КБЖУ"}
          </button>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Блюда не найдены. Попробуйте изменить фильтры.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {filtered.map((item) => (
              <AnimatedSection key={item.id} className="mb-0">
                <MenuCard
                  item={item}
                  showNutrition={showNutrition}
                  onAdd={addItem}
                  quantity={getQuantity(item.id)}
                  onIncrement={() => incrementItem(item.id)}
                  onDecrement={() => decrementItem(item.id)}
                />
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>

      <MenuBuilderPanel />
    </>
  );
}

export default function MenuPageClient() {
  return (
    <MenuBuilderProvider>
      <MenuContent />
    </MenuBuilderProvider>
  );
}