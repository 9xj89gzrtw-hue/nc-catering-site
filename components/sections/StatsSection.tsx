"use client";

import { stats } from "@/lib/data";
import { CountUpNumber } from "@/components/common/CountUpNumber";

export function StatsSection() {
  return (
    <section className="bg-primary text-background py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`relative text-center px-4 ${
                i < stats.length - 1 ? "md:border-r md:border-primary-foreground/20" : ""
              }`}
            >
              <CountUpNumber
                target={stat.value}
                suffix={stat.suffix}
                prefix=""
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}