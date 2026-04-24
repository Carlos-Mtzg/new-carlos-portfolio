"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className="fixed top-6 right-6 z-50 flex items-center gap-1.5 text-sm font-medium tracking-widest cursor-pointer select-none"
      aria-label="Toggle language"
    >
      <span
        className={`transition-colors duration-200 ${lang === "en" ? "text-dark-purple" : "text-light-purple/30"}`}
      >
        EN 🇺🇸
      </span>
      <span className="text-light-purple/20">|</span>
      <span
        className={`transition-colors duration-200 ${lang === "es" ? "text-dark-purple" : "text-light-purple/30"}`}
      >
        ES 🇲🇽
      </span>
    </button>
  );
}
