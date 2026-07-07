"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import type { GalleryImage } from "@/lib/data";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { AnimatedSection } from "@/components/common/AnimatedSection";

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground">Фотографии не найдены.</p>
      </div>
    );
  }

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((img, i) => (
          <AnimatedSection key={img.id} className="mb-4 break-inside-avoid">
            <button
              onClick={() => setLightboxIndex(i)}
              className="relative group w-full overflow-hidden rounded-xl block"
              style={{ aspectRatio: `${img.width}/${img.height}` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <Search className="size-6 text-white mx-auto mb-2" />
                  <span className="text-white text-xs font-medium">{img.categoryLabel}</span>
                </div>
              </div>
            </button>
          </AnimatedSection>
        ))}
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}