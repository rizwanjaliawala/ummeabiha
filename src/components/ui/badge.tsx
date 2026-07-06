import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "emerald" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        variant === "default" && "bg-beige text-foreground/80",
        variant === "gold" && "bg-gold/10 text-gold-dark border border-gold/20",
        variant === "emerald" && "bg-emerald/10 text-emerald border border-emerald/20",
        variant === "outline" && "border border-border text-foreground/70",
        className
      )}
    >
      {children}
    </span>
  );
}
