import React from "react";
import { useFormContext } from "react-hook-form";
import { Select } from "@/components/ui/select";
import { MADINAH_HOTELS } from "@/lib/constants";
import type { WizardSchemaType } from "@/lib/schemas";

export default function MadinahHotelStep() {
  const { register, formState: { errors } } = useFormContext<WizardSchemaType>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Madinah Accommodation</h2>
        <p className="text-sm text-muted">Do you have a specific hotel preference in Madinah?</p>
      </div>

      <div className="space-y-4">
        <Select
          label="Madinah Hotel Preference"
          {...register("madinahHotel")}
          error={errors.madinahHotel?.message}
          options={MADINAH_HOTELS.map(h => ({ value: h.value, label: h.label }))}
        />
      </div>
    </div>
  );
}
