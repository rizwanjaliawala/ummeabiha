import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { ZIYARAH_OPTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { WizardSchemaType } from "@/lib/schemas";

export default function ZiyarahStep() {
  const { control } = useFormContext<WizardSchemaType>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Ziyarah Preferences</h2>
        <p className="text-sm text-muted">Select the tours you'd like to include in your package.</p>
      </div>

      <Controller
        name="ziyarahs"
        control={control}
        render={({ field }) => (
          <div className="space-y-3">
            {ZIYARAH_OPTIONS.map((option) => {
              const isSelected = field.value.includes(option.value);
              
              const toggleOption = () => {
                const newValue = isSelected
                  ? field.value.filter((v: string) => v !== option.value)
                  : [...field.value, option.value];
                field.onChange(newValue);
              };

              return (
                <div
                  key={option.value}
                  onClick={toggleOption}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all",
                    isSelected
                      ? "border-emerald bg-emerald/5 shadow-[var(--shadow-sm)]"
                      : "border-border bg-surface hover:border-emerald/30 hover:bg-surface-alt"
                  )}
                >
                  <div className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded border",
                    isSelected ? "bg-emerald border-emerald" : "bg-surface border-border"
                  )}>
                    {isSelected && (
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className={cn(
                      "font-semibold text-sm sm:text-base",
                      isSelected ? "text-emerald" : "text-foreground"
                    )}>
                      {option.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted mt-0.5">
                      {option.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      />
    </div>
  );
}
