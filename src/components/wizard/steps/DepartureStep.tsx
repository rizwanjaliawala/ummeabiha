import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { DEPARTURE_CITIES, TRAVEL_MONTHS } from "@/lib/constants";
import type { WizardSchemaType } from "@/lib/schemas";

export default function DepartureStep() {
  const { register, control, formState: { errors } } = useFormContext<WizardSchemaType>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Departure Details</h2>
        <p className="text-sm text-muted">When and from where do you plan to start your journey?</p>
      </div>

      <div className="space-y-4">
        <Select
          label="Departure City"
          {...register("departureCity")}
          error={errors.departureCity?.message}
          options={DEPARTURE_CITIES.map(city => ({ value: city, label: city }))}
        />
        
        <Select
          label="Target Travel Month"
          {...register("travelMonth")}
          error={errors.travelMonth?.message}
          options={TRAVEL_MONTHS.map(month => ({ value: month, label: month }))}
          placeholder="Select a month"
        />

        <Controller
          name="dateFlexible"
          control={control}
          render={({ field }) => (
            <label className="flex items-center gap-3 p-4 border border-border rounded-xl cursor-pointer hover:bg-surface-alt transition-colors">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-border text-emerald focus:ring-emerald"
                checked={field.value}
                onChange={field.onChange}
              />
              <span className="text-sm font-medium text-foreground">
                My travel dates are flexible (± 1 week)
              </span>
            </label>
          )}
        />
      </div>
    </div>
  );
}
