"use client";

import { formatPrice } from "@/lib/utils";
import { pricingPackages, menuItems, additionalServices } from "@/lib/data";

interface QuoteSummaryProps {
  eventType: string;
  date: string;
  time: string;
  guestCount: number;
  serviceFormat: string;
  packageId: string;
  selectedMenuItems: string[];
  selectedServices: Record<string, boolean>;
  specialRequests: string;
}

const eventTypeLabels: Record<string, string> = {
  wedding: "Свадьба",
  corporate: "Корпоратив",
  birthday: "День рождения",
  anniversary: "Юбилей",
  other: "Другое",
};

const formatLabels: Record<string, string> = {
  furshet: "Фуршет",
  banquet: "Банкет",
  cocktail: "Коктейль",
};

export function QuoteSummary({
  eventType,
  date,
  time,
  guestCount,
  serviceFormat,
  packageId,
  selectedMenuItems,
  selectedServices,
  specialRequests,
}: QuoteSummaryProps) {
  const pkg = pricingPackages.find((p) => p.id === packageId);
  const basePrice = (pkg?.pricePerPerson ?? 0) * guestCount;
  const addonsTotal = additionalServices.reduce((sum, svc) => {
    if (!selectedServices[svc.id]) return sum;
    if (svc.priceType === "fixed") return sum + svc.price;
    if (svc.priceType === "per-guest") return sum + svc.price * guestCount;
    return sum + svc.price * 5;
  }, 0);
  const total = basePrice + addonsTotal;

  const selectedNames = menuItems
    .filter((i) => selectedMenuItems.includes(i.id))
    .map((i) => i.name);

  const selectedSvcNames = additionalServices
    .filter((s) => selectedServices[s.id])
    .map((s) => s.name);

  return (
    <div className="bg-muted rounded-xl p-5 space-y-4 text-sm">
      <h4 className="font-heading text-lg font-bold">Итоговая заявка</h4>

      <div className="grid grid-cols-2 gap-y-2 gap-x-4">
        <span className="text-muted-foreground">Тип:</span>
        <span>{eventTypeLabels[eventType] || eventType}</span>
        <span className="text-muted-foreground">Дата:</span>
        <span>{date || "—"}</span>
        <span className="text-muted-foreground">Время:</span>
        <span>{time || "—"}</span>
        <span className="text-muted-foreground">Гости:</span>
        <span>{guestCount}</span>
        <span className="text-muted-foreground">Формат:</span>
        <span>{formatLabels[serviceFormat] || serviceFormat}</span>
        <span className="text-muted-foreground">Пакет:</span>
        <span>{pkg?.name || "—"}</span>
      </div>

      {selectedNames.length > 0 && (
        <div>
          <p className="text-muted-foreground mb-1">Выбранные блюда:</p>
          <p className="text-xs">{selectedNames.join(", ")}</p>
        </div>
      )}

      {selectedSvcNames.length > 0 && (
        <div>
          <p className="text-muted-foreground mb-1">Доп. услуги:</p>
          <p className="text-xs">{selectedSvcNames.join(", ")}</p>
        </div>
      )}

      {specialRequests && (
        <div>
          <p className="text-muted-foreground mb-1">Пожелания:</p>
          <p className="text-xs">{specialRequests}</p>
        </div>
      )}

      <div className="border-t border-border pt-3 flex justify-between items-center">
        <span className="font-medium">Примерная стоимость:</span>
        <span className="font-heading text-2xl font-bold text-accent">{formatPrice(total)}</span>
      </div>
    </div>
  );
}