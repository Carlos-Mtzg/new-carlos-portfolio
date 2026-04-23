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
    <nav className="fixed right-12 top-0 z-50 hidden h-screen w-6 flex-col items-center justify-center py-24 md:flex">
      <div className="flex h-full w-full flex-col items-end justify-evenly rounded-full py-6">
        {navLinks.map(({ label, id }, index) => (
          <Navlink
            key={id}
            icon={iconMap[id]}
            label={label}
            id={id}
            isActive={activeId === id}
            delay={index * 100}
          />
        ))}
      </div>
    </nav>
  );
}
