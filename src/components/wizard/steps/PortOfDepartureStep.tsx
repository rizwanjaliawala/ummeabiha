import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { PORT_CITIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { WizardSchemaType } from "@/lib/schemas";
import { PlaneTakeoff } from "lucide-react";

export default function PortOfDepartureStep() {
  const { control, formState: { errors } } = useFormContext<WizardSchemaType>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Departure City</h2>
        <p className="text-sm text-muted">From where will you depart Saudi Arabia?</p>
      </div>

      <Controller
        name="portOfDeparture"
        control={control}
        render={({ field }) => (
          <div className="grid gap-4 sm:grid-cols-3">
            {PORT_CITIES.map((port) => {
              const isSelected = field.value === port.value;
              return (
                <div
                  key={port.value}
                  onClick={() => field.onChange(port.value)}
                  className={cn(
                    "relative p-5 rounded-2xl border-2 cursor-pointer transition-all text-center",
                    isSelected
                      ? "border-emerald bg-emerald/5 shadow-[var(--shadow-sm)]"
                      : "border-border bg-surface hover:border-emerald/30 hover:bg-surface-alt"
                  )}
                >
                  <PlaneTakeoff className={cn(
                    "h-8 w-8 mx-auto mb-3",
                    isSelected ? "text-emerald" : "text-muted"
                  )} />
                  <h3 className={cn(
                    "font-semibold mb-1",
                    isSelected ? "text-emerald" : "text-foreground"
                  )}>
                    {port.label}
                  </h3>
                  <p className="text-xs text-muted">
                    {port.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      />
      {errors.portOfDeparture && (
        <p className="text-sm text-red-500">{errors.portOfDeparture.message}</p>
      )}
    </div>
  );
}
