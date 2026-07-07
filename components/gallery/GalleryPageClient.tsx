"use client";

import { useState, useMemo } from "react";
import { galleryImages } from "@/lib/data";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { cn } from "@/lib/utils";

export default function GalleryPageClient() {
  const categories = useMemo(() => {
    const set = new Set(galleryImages.map((img) => img.category));
    return [
      { id: "all", label: "Все" },
      ...Array.from(set).map((cat) => ({
        id: cat,
        label: galleryImages.find((i) => i.category === cat)?.categoryLabel ?? cat,
      })),
    ];
  }, []);

  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <div className="flex gap-2 overflow-x-auto scrollbar-hide py-4">
        {categories.map((cat) => (
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

      <div className="py-6">
        <GalleryGrid images={filtered} />
      </div>
    </>
  );
}