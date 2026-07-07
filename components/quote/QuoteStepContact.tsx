"use client";

import { cn } from "@/lib/utils";

interface QuoteStepContactProps {
  name: string;
  setName: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  contactPreference: string;
  setContactPreference: (v: string) => void;
  children: React.ReactNode;
}

const preferences = [
  { id: "phone", label: "Телефон" },
  { id: "email", label: "Email" },
  { id: "whatsapp", label: "WhatsApp" },
];

export function QuoteStepContact({
  name, setName,
  phone, setPhone,
  email, setEmail,
  contactPreference, setContactPreference,
  children,
}: QuoteStepContactProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading text-xl font-bold mb-1">Контактные данные</h3>
        <p className="text-sm text-muted-foreground">Как с вами связаться для обсуждения заявки</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="q-name" className="text-sm font-medium">Имя</label>
          <input
            id="q-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
            placeholder="Ваше имя"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="q-phone" className="text-sm font-medium">Телефон</label>
          <input
            id="q-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
            placeholder="+7 (___) ___-__-__"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="q-email" className="text-sm font-medium">Email</label>
          <input
            id="q-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
            placeholder="email@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Предпочтительный способ связи</label>
        <div className="flex gap-3">
          {preferences.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setContactPreference(p.id)}
              className={cn(
                "px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all",
                contactPreference === p.id
                  ? "border-accent bg-accent/5 text-accent"
                  : "border-border hover:border-accent/40"
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {children}
    </div>
  );
}