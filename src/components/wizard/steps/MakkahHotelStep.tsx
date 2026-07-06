import React from "react";
import { useFormContext } from "react-hook-form";
import { Select } from "@/components/ui/select";
import { MAKKAH_HOTELS } from "@/lib/constants";
import type { WizardSchemaType } from "@/lib/schemas";

export default function MakkahHotelStep() {
  const { register, formState: { errors } } = useFormContext<WizardSchemaType>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Makkah Accommodation</h2>
        <p className="text-sm text-muted">Do you have a specific hotel preference in Makkah?</p>
      </div>

      <div className="space-y-4">
        <Select
          label="Makkah Hotel Preference"
          {...register("makkahHotel")}
          error={errors.makkahHotel?.message}
          options={MAKKAH_HOTELS.map(h => ({ value: h.value, label: h.label }))}
        />
        
        <div className="p-4 bg-beige rounded-xl text-sm text-foreground/80">
          <p>If you select "Recommend Best Hotel for Me", our consultants will choose the best available hotel that matches your selected tier and budget.</p>
        </div>
      </div>
    </div>
  );
}
