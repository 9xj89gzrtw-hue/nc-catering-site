"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import type { MenuItem } from "@/lib/data";

interface MenuItemWithQty {
  item: MenuItem;
  quantity: number;
}

interface MenuBuilderContextType {
  items: MenuItemWithQty[];
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  clearAll: () => void;
  totalCount: number;
  totalPrice: number;
}

const MenuBuilderContext = createContext<MenuBuilderContextType | null>(null);

export function useMenuBuilder() {
  const ctx = useContext(MenuBuilderContext);
  if (!ctx) throw new Error("useMenuBuilder must be used within MenuBuilderProvider");
  return ctx;
}

export function MenuBuilderProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<MenuItemWithQty[]>([]);

  const addItem = useCallback((item: MenuItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.item.id !== id));
  }, []);

  const incrementItem = useCallback((id: string) => {
    setItems((prev) =>
      prev.map((i) =>
        i.item.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  }, []);

  const decrementItem = useCallback((id: string) => {
    setItems((prev) => {
      const target = prev.find((i) => i.item.id === id);
      if (target && target.quantity <= 1) {
        return prev.filter((i) => i.item.id !== id);
      }
      return prev.map((i) =>
        i.item.id === id ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  }, []);

  const clearAll = useCallback(() => setItems([]), []);

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.item.price * i.quantity, 0);

  return (
    <MenuBuilderContext.Provider
      value={{ items, addItem, removeItem, incrementItem, decrementItem, clearAll, totalCount, totalPrice }}
    >
      {children}
    </MenuBuilderContext.Provider>
  );
}

export function MenuBuilderPanel() {
  const { items, incrementItem, decrementItem, clearAll, totalCount, totalPrice } = useMenuBuilder();
  const [open, setOpen] = useState(false);

  if (totalCount === 0) return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-accent text-background px-5 py-3 rounded-xl shadow-lg hover:bg-accent/90 transition-colors font-medium text-sm"
      >
        Моё меню ({totalCount} поз., {totalPrice.toLocaleString("ru-RU")} ₽)
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-md bg-background h-full overflow-y-auto p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-xl font-bold">Моё меню</h3>
              <button
                onClick={() => setOpen(false)}
                className="size-8 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              >
                ✕
              </button>
            </div>

            {items.length === 0 ? (
              <p className="text-muted-foreground text-sm">Меню пусто. Добавьте блюда из каталога.</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {items.map(({ item, quantity }) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {quantity} × {item.price} ₽
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decrementItem(item.id)}
                          className="size-7 rounded-full border border-border flex items-center justify-center text-sm hover:bg-muted transition-colors"
                        >
                          −
                        </button>
                        <span className="w-5 text-center text-sm">{quantity}</span>
                        <button
                          onClick={() => incrementItem(item.id)}
                          className="size-7 rounded-full border border-border flex items-center justify-center text-sm hover:bg-muted transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-medium w-16 text-right">
                        {(item.price * quantity).toLocaleString("ru-RU")} ₽
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Итого:</span>
                    <span className="font-heading text-2xl font-bold text-accent">
                      {totalPrice.toLocaleString("ru-RU")} ₽
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {totalCount} {totalCount === 1 ? "позиция" : totalCount < 5 ? "позиции" : "позиций"}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={clearAll}
                    className="flex-1 py-2.5 rounded-lg border border-border text-sm hover:bg-muted transition-colors"
                  >
                    Очистить
                  </button>
                  <a
                    href="/quote"
                    className="flex-1 py-2.5 rounded-lg bg-accent text-background text-sm font-medium text-center hover:bg-accent/90 transition-colors"
                  >
                    Оформить заказ
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}