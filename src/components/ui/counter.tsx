"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";

interface CounterProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  description?: string;
}

export function Counter({
  label,
  value,
  onChange,
  min = 0,
  max = 20,
  description,
}: CounterProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border bg-surface p-4">
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        {description && (
          <p className="text-xs text-muted mt-0.5">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-full border border-border",
            "transition-all duration-200 hover:border-emerald hover:text-emerald",
            "active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-foreground"
          )}
          aria-label={`Decrease ${label}`}
        >
          <Minus className="h-4 w-4" />
        </button>
        <span
          className="w-8 text-center text-lg font-semibold tabular-nums text-foreground"
          aria-live="polite"
          aria-label={`${label}: ${value}`}
        >
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-full border border-emerald bg-emerald text-white",
            "transition-all duration-200 hover:brightness-110",
            "active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
          )}
          aria-label={`Increase ${label}`}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
