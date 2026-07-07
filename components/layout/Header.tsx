"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeSheet = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading text-xl font-bold text-foreground">
          Nilov Catering
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          <Link
            href="/quote"
            className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-6 text-sm font-medium text-background hover:bg-accent/90 transition-all"
          >
            Заказать
          </Link>
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              {open ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-1 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeSheet}
                    className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/quote"
                  onClick={closeSheet}
                  className="mx-4 mt-4 inline-flex h-10 items-center justify-center rounded-md bg-accent px-6 text-sm font-medium text-background hover:bg-accent/90 transition-all"
                >
                  Заказать
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}