import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { PACKAGE_TIERS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { WizardSchemaType } from "@/lib/schemas";

export default function TierStep() {
  const { control, formState: { errors } } = useFormContext<WizardSchemaType>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Package Tier</h2>
        <p className="text-sm text-muted">Select the level of comfort and service you prefer.</p>
      </div>

      <Controller
        name="tier"
        control={control}
        render={({ field }) => (
          <div className="grid gap-4 sm:grid-cols-2">
            {PACKAGE_TIERS.map((tier) => {
              const isSelected = field.value === tier.value;
              
              return (
                <div
                  key={tier.value}
                  onClick={() => field.onChange(tier.value)}
                  className={cn(
                    "relative flex flex-col p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200",
                    isSelected
                      ? "border-emerald bg-emerald/5 shadow-[var(--shadow-sm)]"
                      : "border-border bg-surface hover:border-emerald/30 hover:bg-surface-alt"
                  )}
                >
                  {/* Selection indicator */}
                  <div className={cn(
                    "absolute top-5 right-5 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors",
                    isSelected ? "border-emerald" : "border-muted"
                  )}>
                    {isSelected && <div className="h-2.5 w-2.5 rounded-full bg-emerald" />}
                  </div>
                  
                  <h3 className={cn(
                    "text-lg font-semibold pr-8 mb-2",
                    isSelected ? "text-emerald" : "text-foreground"
                  )}>
                    {tier.label}
                  </h3>
                  <p className="text-sm text-muted">
                    {tier.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      />
      {errors.tier && (
        <p className="text-sm text-red-500">{errors.tier.message}</p>
      )}
    </div>
  );
}
