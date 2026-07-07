"use client";

import { cn } from "@/lib/utils";

interface QuoteStepEventProps {
  eventType: string;
  setEventType: (v: string) => void;
  date: string;
  setDate: (v: string) => void;
  time: string;
  setTime: (v: string) => void;
}

const eventTypes = [
  { id: "wedding", label: "Свадьба", icon: "💍" },
  { id: "corporate", label: "Корпоратив", icon: "💼" },
  { id: "birthday", label: "День рождения", icon: "🎂" },
  { id: "anniversary", label: "Юбилей", icon: "🎉" },
  { id: "other", label: "Другое", icon: "✨" },
];

export function QuoteStepEvent({ eventType, setEventType, date, setDate, time, setTime }: QuoteStepEventProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading text-xl font-bold mb-1">Тип мероприятия</h3>
        <p className="text-sm text-muted-foreground">Выберите тип вашего мероприятия</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {eventTypes.map((et) => (
          <button
            key={et.id}
            type="button"
            onClick={() => setEventType(et.id)}
            className={cn(
              "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all",
              eventType === et.id
                ? "border-accent bg-accent/5"
                : "border-border hover:border-accent/40"
            )}
          >
            <span className="text-2xl">{et.icon}</span>
            <span className={cn("text-sm font-medium", eventType === et.id ? "text-accent" : "")}>
              {et.label}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="quote-date" className="text-sm font-medium">
            Дата мероприятия
          </label>
          <input
            id="quote-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="quote-time" className="text-sm font-medium">
            Время начала
          </label>
          <input
            id="quote-time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
          />
        </div>
      </div>
    </div>
  );
}