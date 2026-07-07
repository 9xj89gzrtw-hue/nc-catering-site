"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { pricingPackages, additionalServices } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export default function PriceCalculator() {
  const [guestCount, setGuestCount] = useState(50);
  const [packageId, setPackageId] = useState("basic");
  const [selectedServices, setSelectedServices] = useState<Record<string, boolean>>({});

  const pkg = pricingPackages.find((p) => p.id === packageId);

  const basePrice = (pkg?.pricePerPerson ?? 0) * guestCount;

  const addonsTotal = additionalServices.reduce((sum, svc) => {
    if (!selectedServices[svc.id]) return sum;
    if (svc.priceType === "fixed") return sum + svc.price;
    if (svc.priceType === "per-guest") return sum + svc.price * guestCount;
    if (svc.priceType === "per-hour") return sum + svc.price * 5;
    return sum;
  }, 0);

  const total = basePrice + addonsTotal;
  const perPerson = guestCount > 0 ? Math.round(total / guestCount) : 0;

  return (
    <section id="calculator" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-center mb-8">
              Калькулятор стоимости
            </h2>

            <div className="bg-card rounded-xl border border-border p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="guestCount">Количество гостей</Label>
                  <Input
                    id="guestCount"
                    type="number"
                    min={10}
                    max={1000}
                    value={guestCount}
                    onChange={(e) => setGuestCount(parseInt(e.target.value) || 0)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="packageSelect">Пакет</Label>
                  <Select
                    value={packageId}
                    onValueChange={(v) => v && setPackageId(v)}
                  >
                    <SelectTrigger id="packageSelect">
                      <SelectValue placeholder="Выберите пакет" />
                    </SelectTrigger>
                    <SelectContent>
                      {pricingPackages.map((p) => (
                        <SelectItem key={p.id} value={p.id}>
                          {p.name} — {formatPrice(p.pricePerPerson)}/чел
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-sm">Дополнительные услуги</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {additionalServices.map((svc) => (
                    <div
                      key={svc.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-border"
                    >
                      <div className="flex-1 min-w-0 mr-3">
                        <p className="text-sm font-medium truncate">{svc.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {svc.priceType === "fixed"
                            ? formatPrice(svc.price)
                            : svc.priceType === "per-guest"
                            ? formatPrice(svc.price) + "/чел"
                            : formatPrice(svc.price) + "/час"}
                        </p>
                      </div>
                      <Switch
                        checked={selectedServices[svc.id] || false}
                        onCheckedChange={(checked) =>
                          setSelectedServices((prev) => ({ ...prev, [svc.id]: !!checked }))
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Базовая стоимость ({guestCount} чел.):</span>
                  <span>{formatPrice(basePrice)}</span>
                </div>
                {addonsTotal > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Дополнительные услуги:</span>
                    <span>+ {formatPrice(addonsTotal)}</span>
                  </div>
                )}
                <div className="border-t border-border pt-2 mt-2 flex justify-between items-center">
                  <div>
                    <span className="font-medium">Итого:</span>
                    <span className="text-sm text-muted-foreground ml-2">
                      ({formatPrice(perPerson)}/чел)
                    </span>
                  </div>
                  <span className="font-heading text-2xl font-bold text-accent">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              <a
                href="/quote"
                className="block w-full text-center bg-accent text-background py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Оформить заявку
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}