"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Заполните обязательные поля: имя, email и сообщение");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, eventType, message }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
        setName(""); setEmail(""); setPhone(""); setEventType(""); setMessage("");
      } else {
        toast.error("Ошибка отправки. Попробуйте позже.");
      }
    } catch {
      toast.error("Ошибка сети. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="c-name" className="text-sm font-medium">Имя *</label>
          <input
            id="c-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
            placeholder="Ваше имя"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="c-email" className="text-sm font-medium">Email *</label>
          <input
            id="c-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
            placeholder="email@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="c-phone" className="text-sm font-medium">Телефон</label>
          <input
            id="c-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
            placeholder="+7 (___) ___-__-__"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="c-event" className="text-sm font-medium">Тип мероприятия</label>
          <input
            id="c-event"
            type="text"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
            placeholder="Свадьба, корпоратив..."
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="c-message" className="text-sm font-medium">Сообщение *</label>
        <textarea
          id="c-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 outline-none resize-none"
          placeholder="Расскажите о вашем мероприятии..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent text-background py-2.5 rounded-lg font-medium text-sm hover:bg-accent/90 transition-colors disabled:opacity-40"
      >
        {isSubmitting ? "Отправка..." : "Отправить сообщение"}
      </button>
    </form>
  );
}

export function MapPlaceholder() {
  return (
    <div className="w-full h-80 rounded-xl bg-muted flex flex-col items-center justify-center gap-3">
      <MapPin className="size-10 text-accent" />
      <p className="font-heading text-lg font-bold">Санкт-Петербург</p>
      <p className="text-sm text-muted-foreground">Работаем по всему городу и ЛО</p>
    </div>
  );
}