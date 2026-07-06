import React from "react";
import { useFormContext } from "react-hook-form";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BUDGET_RANGES } from "@/lib/constants";
import type { WizardSchemaType } from "@/lib/schemas";

export default function BudgetNotesStep() {
  const { register, formState: { errors } } = useFormContext<WizardSchemaType>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Budget & Special Requests</h2>
        <p className="text-sm text-muted">Help us tailor this package to your expectations.</p>
      </div>

      <div className="space-y-6">
        <Select
          label="Estimated Budget (Per Person)"
          {...register("budgetRange")}
          error={errors.budgetRange?.message}
          options={BUDGET_RANGES.map(b => ({ value: b.value, label: b.label }))}
          placeholder="Select a budget range"
        />

        <Textarea
          label="Special Requests & Notes (Optional)"
          placeholder="E.g., Require wheelchair assistance, prefer ground floor room, specific airline preference..."
          {...register("specialRequests")}
          error={errors.specialRequests?.message}
          hint="Any specific spiritual or physical requirements we should know about."
        />
      </div>
    </div>
  );
}
