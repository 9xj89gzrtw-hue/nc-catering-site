"use client";

import { cn, formatPrice } from "@/lib/utils";
import { pricingPackages } from "@/lib/data";

interface QuoteStepGuestsProps {
  guestCount: number;
  setGuestCount: (v: number) => void;
  serviceFormat: string;
  setServiceFormat: (v: string) => void;
  packageId: string;
  setPackageId: (v: string) => void;
}

const formats = [
  { id: "furshet", label: "Фуршет", desc: "Свободное перемещение гостей" },
  { id: "banket", label: "Банкет", desc: "Посадка за столы" },
  { id: "cocktail", label: "Коктейль", desc: "Коктейльный формат" },
];

export function QuoteStepGuests({
  guestCount,
  setGuestCount,
  serviceFormat,
  setServiceFormat,
  packageId,
  setPackageId,
}: QuoteStepGuestsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading text-xl font-bold mb-1">Гости и формат</h3>
        <p className="text-sm text-muted-foreground">Укажите количество гостей и выберите формат</p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Количество гостей</label>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setGuestCount(Math.max(10, guestCount - 5))}
            className="size-9 rounded-lg border border-border flex items-center justify-center text-lg hover:bg-muted transition-colors"
          >
            −
          </button>
          <input
            type="number"
            min={10}
            max={1000}
            value={guestCount}
            onChange={(e) => setGuestCount(parseInt(e.target.value) || 0)}
            className="h-9 w-24 text-center rounded-lg border border-input bg-transparent text-sm focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
          />
          <button
            type="button"
            onClick={() => setGuestCount(Math.min(1000, guestCount + 5))}
            className="size-9 rounded-lg border border-border flex items-center justify-center text-lg hover:bg-muted transition-colors"
          >
            +
          </button>
        </div>
        <p className="text-xs text-muted-foreground">От 10 до 1000 гостей</p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Формат обслуживания</label>
        <div className="grid grid-cols-3 gap-3">
          {formats.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setServiceFormat(f.id)}
              className={cn(
                "p-3 rounded-xl border-2 text-center transition-all",
                serviceFormat === f.id
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-accent/40"
              )}
            >
              <span className={cn("text-sm font-medium", serviceFormat === f.id ? "text-accent" : "")}>
                {f.label}
              </span>
              <p className="text-xs text-muted-foreground mt-1">{f.desc}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Ценовой пакет</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {pricingPackages.map((pkg) => (
            <button
              key={pkg.id}
              type="button"
              onClick={() => setPackageId(pkg.id)}
              className={cn(
                "p-4 rounded-xl border-2 text-left transition-all",
                packageId === pkg.id
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-accent/40"
              )}
            >
              <div className="flex justify-between items-start mb-1">
                <span className={cn("font-medium text-sm", packageId === pkg.id ? "text-accent" : "")}>
                  {pkg.name}
                </span>
                <span className="font-heading text-lg font-bold">{formatPrice(pkg.pricePerPerson)}</span>
              </div>
              <p className="text-xs text-muted-foreground">{pkg.description}</p>
              <p className="text-xs text-muted-foreground mt-1">от {pkg.minGuests} чел.</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}