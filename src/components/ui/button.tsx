import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "gold" | "whatsapp" | "glass";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  href?: string;
  loading?: boolean;
  icon?: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-emerald text-white shadow-[var(--shadow-emerald)] hover:brightness-110 active:brightness-95",
  secondary:
    "bg-beige text-foreground border border-border hover:bg-beige-dark active:bg-beige-dark",
  outline:
    "border-2 border-emerald text-emerald hover:bg-emerald hover:text-white active:brightness-95",
  ghost:
    "text-foreground hover:bg-beige active:bg-beige-dark",
  gold:
    "bg-gradient-gold text-white shadow-[var(--shadow-gold)] hover:brightness-110 active:brightness-95",
  whatsapp:
    "bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.25)] hover:brightness-110 active:brightness-95",
  glass:
    "glass-card text-foreground hover:bg-white/80 active:bg-white/90",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-3.5 text-base gap-2",
  xl: "px-10 py-4 text-lg gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  loading,
  icon,
  disabled,
  ...props
}: ButtonProps) {
  const classes = cn(
    "relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald select-none",
    variantClasses[variant],
    sizeClasses[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    loading && "cursor-wait",
    className
  );

  const content = (
    <>
      {loading && (
        <svg
          className="h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {icon && !loading && <span className="shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}
