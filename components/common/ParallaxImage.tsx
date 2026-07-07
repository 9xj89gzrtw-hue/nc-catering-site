"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ParallaxImage({ src, alt, className, speed = 0.3 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1]);

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ y, scale, backgroundImage: `url(${src})` }}
        aria-hidden="true"
      />
      {alt && <span className="sr-only">{alt}</span>}
    </div>
  );
}