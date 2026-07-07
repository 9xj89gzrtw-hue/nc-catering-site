"use client";

import { motion } from "framer-motion";

interface MarqueeTextProps {
  children: React.ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export function MarqueeText({ children, speed = 30, reverse = false, className }: MarqueeTextProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className ?? ""}`}>
      <motion.div
        className="inline-flex gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{
          direction: reverse ? "rtl" : "ltr",
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}