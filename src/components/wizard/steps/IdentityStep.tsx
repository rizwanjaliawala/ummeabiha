import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import type { WizardSchemaType } from "@/lib/schemas";

export default function IdentityStep() {
  const { register, formState: { errors } } = useFormContext<WizardSchemaType>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Personal Details</h2>
        <p className="text-sm text-muted">Please provide your contact information so we can reach you.</p>
      </div>

      <div className="space-y-4">
        <Input
          label="Full Name"
          placeholder="e.g. Ahmed Ali"
          {...register("fullName")}
          error={errors.fullName?.message}
        />
        
        <Input
          label="Email Address"
          type="email"
          placeholder="ahmed@example.com"
          {...register("email")}
          error={errors.email?.message}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Phone Number"
            type="tel"
            placeholder="0300 1234567"
            {...register("phone")}
            error={errors.phone?.message}
          />
          
          <Input
            label="WhatsApp Number"
            type="tel"
            placeholder="0300 1234567"
            {...register("whatsapp")}
            error={errors.whatsapp?.message}
            hint="For faster communication"
          />
        </div>
      </div>
    </div>
  );
}
