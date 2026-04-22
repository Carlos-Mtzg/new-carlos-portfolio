"use client";

interface ButtonProps {
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const variants = {
  primary: {
    base: "bg-light-purple/10 border border-light-purple/30 text-text",
    slide: "bg-light-purple/30",
  },
  ghost: {
    base: "text-light-purple border border-light-purple/30",
    slide: "bg-light-purple/10",
  },
};

export default function Button({
  variant = "primary",
  children,
  onClick,
  className = "",
}: ButtonProps) {
  const { base, slide } = variants[variant];

  return (
    <button
      onClick={onClick}
      className={`relative cursor-pointer overflow-hidden rounded-lg px-8 py-2 duration-300 group ${base} ${className}`}
    >
      <span
        className={`absolute right-full top-0 bottom-0 w-full transition-all duration-300 group-hover:right-0 ${slide}`}
      />
      <span className="relative">{children}</span>
    </button>
  );
}
