"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="h-0.5 fixed top-0 z-50 bg-accent origin-left"
      style={{ scaleX, willChange: "transform" }}
    />
  );
}