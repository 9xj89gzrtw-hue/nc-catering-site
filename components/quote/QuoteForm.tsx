"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { formatPrice, cn } from "@/lib/utils";
import { pricingPackages, additionalServices } from "@/lib/data";
import { QuoteStepEvent } from "./QuoteStepEvent";
import { QuoteStepGuests } from "./QuoteStepGuests";
import { QuoteStepMenu } from "./QuoteStepMenu";
import { QuoteStepDetails } from "./QuoteStepDetails";
import { QuoteStepContact } from "./QuoteStepContact";
import { QuoteSummary } from "./QuoteSummary";

const steps = ["Мероприятие", "Гости", "Меню", "Детали", "Контакты"];

export function QuoteForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guestCount, setGuestCount] = useState(50);
  const [serviceFormat, setServiceFormat] = useState("");
  const [packageId, setPackageId] = useState("basic");
  const [selectedMenuItems, setSelectedMenuItems] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<Record<string, boolean>>({});
  const [specialRequests, setSpecialRequests] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [contactPreference, setContactPreference] = useState("");

  const canNext = () => {
    if (currentStep === 0) return eventType && date && time;
    if (currentStep === 1) return guestCount >= 10 && serviceFormat && packageId;
    return true;
  };

  const livePrice = (() => {
    if (currentStep < 1 || !packageId) return 0;
    const pkg = pricingPackages.find((p) => p.id === packageId);
    const base = (pkg?.pricePerPerson ?? 0) * guestCount;
    const addons = additionalServices.reduce((sum, svc) => {
      if (!selectedServices[svc.id]) return sum;
      if (svc.priceType === "fixed") return sum + svc.price;
      if (svc.priceType === "per-guest") return sum + svc.price * guestCount;
      return sum + svc.price * 5;
    }, 0);
    return base + addons;
  })();

  const handleSubmit = async () => {
    if (!name || !phone || !email || !contactPreference) {
      toast.error("Заполните все контактные данные");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventType, date, time, guestCount, serviceFormat, packageId,
          selectedMenuItems, selectedServices, specialRequests,
          name, phone, email, contactPreference, totalEstimate: livePrice,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
        router.push("/");
      } else {
        toast.error("Ошибка отправки заявки. Попробуйте позже.");
      }
    } catch {
      toast.error("Ошибка сети. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-500 rounded-full"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
        <div className="hidden sm:flex justify-between mt-3">
          {steps.map((label, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={`size-6 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                  i < currentStep
                    ? "bg-accent text-background"
                    : i === currentStep
                    ? "bg-accent/20 text-accent border border-accent"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {i < currentStep ? <Check className="size-3" /> : i + 1}
              </div>
              <span className={`text-xs ${i === currentStep ? "font-medium" : "text-muted-foreground"}`}>
                {label}
              </span>
            </div>
          ))}
        </div>
        <div className="flex sm:hidden justify-center gap-1.5 mt-3">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i <= currentStep ? "bg-accent w-6" : "bg-muted w-1.5"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Live price */}
      {currentStep >= 1 && livePrice > 0 && (
        <div className="mb-6 p-3 bg-accent/5 border border-accent/20 rounded-lg text-right">
          <span className="text-xs text-muted-foreground">Примерная стоимость: </span>
          <span className="font-heading text-lg font-bold text-accent">{formatPrice(livePrice)}</span>
        </div>
      )}

      {/* Steps */}
      <div className="bg-card rounded-xl border border-border p-6">
        {currentStep === 0 && (
          <QuoteStepEvent
            eventType={eventType} setEventType={setEventType}
            date={date} setDate={setDate}
            time={time} setTime={setTime}
          />
        )}
        {currentStep === 1 && (
          <QuoteStepGuests
            guestCount={guestCount} setGuestCount={setGuestCount}
            serviceFormat={serviceFormat} setServiceFormat={setServiceFormat}
            packageId={packageId} setPackageId={setPackageId}
          />
        )}
        {currentStep === 2 && (
          <QuoteStepMenu
            selectedMenuItems={selectedMenuItems}
            setSelectedMenuItems={setSelectedMenuItems}
          />
        )}
        {currentStep === 3 && (
          <QuoteStepDetails
            selectedServices={selectedServices}
            setSelectedServices={setSelectedServices}
            specialRequests={specialRequests}
            setSpecialRequests={setSpecialRequests}
          />
        )}
        {currentStep === 4 && (
          <div className="space-y-6">
            <QuoteStepContact
              name={name} setName={setName}
              phone={phone} setPhone={setPhone}
              email={email} setEmail={setEmail}
              contactPreference={contactPreference} setContactPreference={setContactPreference}
            >
              <QuoteSummary
                eventType={eventType} date={date} time={time}
                guestCount={guestCount} serviceFormat={serviceFormat} packageId={packageId}
                selectedMenuItems={selectedMenuItems} selectedServices={selectedServices}
                specialRequests={specialRequests}
              />
            </QuoteStepContact>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors",
            currentStep === 0 && "invisible"
          )}
        >
          <ChevronLeft className="size-4" />
          Назад
        </button>

        {currentStep < steps.length - 1 ? (
          <button
            type="button"
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={!canNext()}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-background text-sm font-medium hover:bg-accent/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Далее
            <ChevronRight className="size-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-background text-sm font-medium hover:bg-accent/90 transition-colors disabled:opacity-40"
          >
            {isSubmitting ? "Отправка..." : "Отправить заявку"}
          </button>
        )}
      </div>
    </div>
  );
}