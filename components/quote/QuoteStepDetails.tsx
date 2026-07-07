"use client";

import { additionalServices } from "@/lib/data";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { cn, formatPrice } from "@/lib/utils";

interface QuoteStepDetailsProps {
  selectedServices: Record<string, boolean>;
  setSelectedServices: (v: Record<string, boolean>) => void;
  specialRequests: string;
  setSpecialRequests: (v: string) => void;
}

export function QuoteStepDetails({
  selectedServices,
  setSelectedServices,
  specialRequests,
  setSpecialRequests,
}: QuoteStepDetailsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading text-xl font-bold mb-1">Детали и доп. услуги</h3>
        <p className="text-sm text-muted-foreground">Добавьте дополнительные услуги для вашего мероприятия</p>
      </div>

      <div className="space-y-3">
        {additionalServices.map((svc) => (
          <div
            key={svc.id}
            className={cn(
              "flex items-center justify-between p-3 rounded-xl border transition-colors",
              selectedServices[svc.id] ? "border-accent bg-accent/5" : "border-border"
            )}
          >
            <div className="flex-1 min-w-0 mr-3">
              <p className="text-sm font-medium">{svc.name}</p>
              <p className="text-xs text-muted-foreground">{svc.description}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-sm font-medium">
                {svc.priceType === "fixed"
                  ? formatPrice(svc.price)
                  : svc.priceType === "per-guest"
                  ? formatPrice(svc.price) + "/чел"
                  : formatPrice(svc.price) + "/час"}
              </span>
              <Switch
                checked={selectedServices[svc.id] || false}
                onCheckedChange={(checked) =>
                  setSelectedServices({ ...selectedServices, [svc.id]: !!checked })
                }
              />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Особые пожелания</label>
        <Textarea
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          placeholder="Расскажите о ваших пожеланиях, аллергиях, тематическом оформлении..."
          rows={4}
        />
      </div>
    </div>
  );
}