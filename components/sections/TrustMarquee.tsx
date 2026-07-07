"use client";

import { MarqueeText } from "@/components/common/MarqueeText";
import { trustMarks } from "@/lib/data";

export function TrustMarquee() {
  return (
    <div className="py-6 border-y border-border bg-muted/30 text-muted-foreground text-sm uppercase tracking-[0.3em] font-heading">
      <MarqueeText speed={25} reverse={true}>
        <span>
          Nilov Catering  •  {trustMarks.map((t) => t.name).join("  •  ")}  •  
        </span>
      </MarqueeText>
    </div>
  );
}