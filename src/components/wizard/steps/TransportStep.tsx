import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TRANSPORT_LEVELS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { WizardSchemaType } from "@/lib/schemas";
import { Bus, Car, Crown } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "bus": return Bus;
    case "car": return Car;
    case "crown": return Crown;
    default: return Car;
  }
};

export default function TransportStep() {
  const { control, formState: { errors } } = useFormContext<WizardSchemaType>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Ground Transportation</h2>
        <p className="text-sm text-muted">How would you like to travel between cities and airports?</p>
      </div>

      <Controller
        name="transportLevel"
        control={control}
        render={({ field }) => (
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
            {TRANSPORT_LEVELS.map((transport) => {
              const isSelected = field.value === transport.value;
              const Icon = getIcon(transport.icon);
              return (
                <div
                  key={transport.value}
                  onClick={() => field.onChange(transport.value)}
                  className={cn(
                    "relative p-6 rounded-2xl border-2 cursor-pointer transition-all",
                    isSelected
                      ? "border-emerald bg-emerald/5 shadow-[var(--shadow-sm)]"
                      : "border-border bg-surface hover:border-emerald/30 hover:bg-surface-alt"
                  )}
                >
                  <Icon className={cn(
                    "h-8 w-8 mb-4",
                    isSelected ? "text-emerald" : "text-muted"
                  )} />
                  <h3 className={cn(
                    "text-lg font-semibold mb-2",
                    isSelected ? "text-emerald" : "text-foreground"
                  )}>
                    {transport.label}
                  </h3>
                  <p className="text-sm text-muted">
                    {transport.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      />
      {errors.transportLevel && (
        <p className="text-sm text-red-500">{errors.transportLevel.message}</p>
      )}
    </div>
  );
}
