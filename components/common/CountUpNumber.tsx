"use client";

import { useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountUpNumberProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export function CountUpNumber({ target, suffix = "", prefix = "", label }: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 2.5,
      onUpdate(value) {
        setCount(Math.round(value));
      },
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold tabular-nums">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm uppercase tracking-[0.2em] opacity-70 mt-2">
        {label}
      </div>
    </div>
  );
}