"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { faqItems } from "@/lib/data";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQClient() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return faqItems;
    const q = search.toLowerCase();
    return faqItems.filter(
      (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
    );
  }, [search]);

  const groups = useMemo(() => {
    const g: Record<string, typeof faqItems> = {};
    filtered.forEach((f) => {
      const key = f.group || "Другое";
      if (!g[key]) g[key] = [];
      g[key].push(f);
    });
    return g;
  }, [filtered]);

  return (
    <>
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск по вопросам..."
          className="h-10 w-full pl-10 pr-4 rounded-lg border border-input bg-transparent text-sm focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
        />
      </div>

      {Object.entries(groups).map(([group, items]) => (
        <AnimatedSection key={group} className="mb-8">
          <h2 className="font-heading text-xl font-bold mb-4">{group}</h2>
          <Accordion>
            {items.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left text-sm">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      ))}

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          По вашему запросу ничего не найдено. Попробуйте другой запрос.
        </p>
      )}
    </>
  );
}