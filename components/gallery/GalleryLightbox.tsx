"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/lib/data";
import { cn } from "@/lib/utils";

interface GalleryLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function GalleryLightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const current = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(Math.max(0, currentIndex - 1));
      if (e.key === "ArrowRight")
        onNavigate(Math.min(images.length - 1, currentIndex + 1));
    },
    [currentIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!current) return null;

  const aspectRatio = current.width / current.height;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white/80 hover:text-white transition-colors"
        aria-label="Закрыть"
      >
        <X className="size-8" />
      </button>

      <span className="absolute top-4 right-16 text-white/60 text-sm">
        {currentIndex + 1} / {images.length}
      </span>

      {currentIndex > 0 && (
        <button
          onClick={() => onNavigate(currentIndex - 1)}
          className="absolute left-4 z-10 text-white/80 hover:text-white transition-colors p-2"
          aria-label="Предыдущее"
        >
          <ChevronLeft className="size-8" />
        </button>
      )}

      {currentIndex < images.length - 1 && (
        <button
          onClick={() => onNavigate(currentIndex + 1)}
          className="absolute right-4 z-10 text-white/80 hover:text-white transition-colors p-2"
          aria-label="Следующее"
        >
          <ChevronRight className="size-8" />
        </button>
      )}

      <div
        className="relative max-w-[90vw] max-h-[80vh]"
        style={{ aspectRatio }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
        <p className="text-white text-sm text-center">{current.alt}</p>
        <p className="text-white/60 text-xs text-center mt-1">{current.categoryLabel}</p>
      </div>
    </div>
  );
}