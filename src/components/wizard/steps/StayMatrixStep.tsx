import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { MAKKAH_NIGHTS, MADINAH_NIGHTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { WizardSchemaType } from "@/lib/schemas";

export default function StayMatrixStep() {
  const { control } = useFormContext<WizardSchemaType>();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Duration of Stay</h2>
        <p className="text-sm text-muted">How many nights would you like to spend in each holy city?</p>
      </div>

      <div className="space-y-6">
        {/* Makkah Nights */}
        <div>
          <h3 className="text-base font-semibold mb-3">Nights in Makkah</h3>
          <Controller
            name="makkahNights"
            control={control}
            render={({ field }) => (
              <div className="flex flex-wrap gap-3">
                {MAKKAH_NIGHTS.map((nights) => (
                  <button
                    key={`makkah-${nights}`}
                    type="button"
                    onClick={() => field.onChange(nights)}
                    className={cn(
                      "px-5 py-2.5 rounded-xl border font-medium transition-all",
                      field.value === nights
                        ? "bg-emerald text-white border-emerald shadow-[var(--shadow-sm)]"
                        : "bg-surface border-border text-foreground hover:border-emerald/50"
                    )}
                  >
                    {nights} Nights
                  </button>
                ))}
              </div>
            )}
          />
        </div>

        {/* Madinah Nights */}
        <div>
          <h3 className="text-base font-semibold mb-3">Nights in Madinah</h3>
          <Controller
            name="madinahNights"
            control={control}
            render={({ field }) => (
              <div className="flex flex-wrap gap-3">
                {MADINAH_NIGHTS.map((nights) => (
                  <button
                    key={`madinah-${nights}`}
                    type="button"
                    onClick={() => field.onChange(nights)}
                    className={cn(
                      "px-5 py-2.5 rounded-xl border font-medium transition-all",
                      field.value === nights
                        ? "bg-emerald text-white border-emerald shadow-[var(--shadow-sm)]"
                        : "bg-surface border-border text-foreground hover:border-emerald/50"
                    )}
                  >
                    {nights} Nights
                  </button>
                ))}
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}
