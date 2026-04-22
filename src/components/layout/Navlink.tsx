"use client";

import type { LucideIcon } from "lucide-react";

interface NavlinkProps {
  icon: LucideIcon;
  label: string;
  id: string;
  isActive: boolean;
  delay?: number;
}

export default function Navlink({
  icon: Icon,
  label,
  id,
  isActive,
  delay = 0,
}: NavlinkProps) {
  const handleClick = () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label={label}
      style={{ animationDelay: `${delay}ms` }}
      className="animate-fade-in-left group relative flex cursor-pointer items-center justify-end gap-4"
    >
      <span
        className={`hidden lg:block ${isActive ? "text-dark-purple" : "text-light-purple/40 group-hover:text-light-purple"} group-hover:me-1 transition-all duration-300`}
      >
        {label}
      </span>

      <span
        className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
          isActive
            ? "bg-dark-purple/15 text-dark-purple"
            : "text-light-purple/40 group-hover:text-light-purple"
        }`}
      >
        <Icon size={22} strokeWidth={1.5} />
      </span>
    </button>
  );
}
