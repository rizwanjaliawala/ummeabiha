import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Counter } from "@/components/ui/counter";
import type { WizardSchemaType } from "@/lib/schemas";

export default function PartySizeStep() {
  const { control } = useFormContext<WizardSchemaType>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Who is traveling?</h2>
        <p className="text-sm text-muted">Let us know how many people are in your group.</p>
      </div>

      <div className="space-y-4">
        <Controller
          name="adults"
          control={control}
          render={({ field }) => (
            <Counter
              label="Adults"
              description="Ages 12 and above"
              value={field.value}
              onChange={field.onChange}
              min={1}
            />
          )}
        />

        <Controller
          name="children"
          control={control}
          render={({ field }) => (
            <Counter
              label="Children"
              description="Ages 2 to 11"
              value={field.value}
              onChange={field.onChange}
              min={0}
            />
          )}
        />

        <Controller
          name="infants"
          control={control}
          render={({ field }) => (
            <Counter
              label="Infants"
              description="Under 2 years"
              value={field.value}
              onChange={field.onChange}
              min={0}
            />
          )}
        />
      </div>
    </div>
  );
}
