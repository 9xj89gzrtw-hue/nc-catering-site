"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ConsentSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const DEFAULT_CONSENT: ConsentSettings = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<ConsentSettings>({ ...DEFAULT_CONSENT });

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (consent: ConsentSettings) => {
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };

  const acceptNecessary = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  };

  const saveSettings = () => {
    saveConsent(settings);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 z-50 bg-card border-t p-4 w-full"
        >
          <div className="container mx-auto max-w-5xl">
            <p className="text-sm text-muted-foreground mb-4">
              Мы используем файлы cookie для улучшения работы сайта. Нажимая &laquo;Принять все&raquo;, вы соглашаетесь с использованием всех cookie. 
              Подробнее в нашей <Link href="/privacy" className="text-accent hover:underline">политике конфиденциальности</Link>.
            </p>

            {!showSettings ? (
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={acceptAll}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-6 text-sm font-medium text-background hover:bg-accent/90 transition-colors"
                >
                  Принять все
                </button>
                <button
                  onClick={acceptNecessary}
                  className="inline-flex h-10 items-center justify-center rounded-md border border-border px-6 text-sm font-medium hover:bg-muted transition-colors"
                >
                  Только необходимые
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="inline-flex h-10 items-center justify-center rounded-md border border-border px-6 text-sm font-medium hover:bg-muted transition-colors"
                >
                  Настроить
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-3">
                  <label className="flex items-center gap-3 text-sm">
                    <input
                      type="checkbox"
                      checked
                      disabled
                      className="rounded border-border accent-accent"
                    />
                    <span className="font-medium">Необходимые</span>
                    <span className="text-muted-foreground ml-auto">Всегда включены</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm">
                    <input
                      type="checkbox"
                      checked={settings.analytics}
                      onChange={(e) => setSettings((s) => ({ ...s, analytics: e.target.checked }))}
                      className="rounded border-border accent-accent"
                    />
                    <span>Аналитика</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm">
                    <input
                      type="checkbox"
                      checked={settings.marketing}
                      onChange={(e) => setSettings((s) => ({ ...s, marketing: e.target.checked }))}
                      className="rounded border-border accent-accent"
                    />
                    <span>Маркетинг</span>
                  </label>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={saveSettings}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-6 text-sm font-medium text-background hover:bg-accent/90 transition-colors"
                  >
                    Сохранить
                  </button>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="inline-flex h-10 items-center justify-center rounded-md border border-border px-6 text-sm font-medium hover:bg-muted transition-colors"
                  >
                    Назад
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}