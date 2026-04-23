"use client";

import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Layers,
  GraduationCap,
  Mail,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { navLinks } from "@/lib/data/navlinks";
import Navlink from "@components/layout/Navlink";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/lib/i18n/translations";

const iconMap: Record<string, LucideIcon> = {
  hero: Home,
  about: User,
  experience: Briefcase,
  projects: FolderOpen,
  stack: Layers,
  education: GraduationCap,
  contact: Mail,
};

export default function Navbar() {
  const [activeId, setActiveId] = useState(navLinks[0].id);
  const { lang, toggle } = useLanguage();
  const t = ui[lang];

  useEffect(() => {
    const handleScroll = () => {
      const triggerY = window.scrollY + window.innerHeight * 0.4;

      let current = navLinks[0].id;
      for (const { id } of navLinks) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= triggerY) current = id;
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <button
        onClick={toggle}
        className="fixed top-6 right-6 z-50 hidden md:flex items-center gap-1.5 text-sm font-medium tracking-widest cursor-pointer select-none"
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

      <nav className="fixed right-12 top-0 z-50 hidden h-screen w-6 flex-col items-center justify-center py-24 md:flex">
        <div className="flex h-full w-full flex-col items-end justify-evenly rounded-full py-6">
          {navLinks.map(({ label, id }, index) => (
            <Navlink
              key={id}
              icon={iconMap[id]}
              label={t.nav[label as keyof typeof t.nav]}
              id={id}
              isActive={activeId === id}
              delay={index * 100}
            />
          ))}
        </div>
      </nav>
    </>
  );
}
