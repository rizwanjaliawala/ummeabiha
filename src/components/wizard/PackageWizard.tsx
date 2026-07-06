"use client";

import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { wizardSchema, type WizardSchemaType } from "@/lib/schemas";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { submitLead } from "@/lib/actions";

import WizardProgress from "./WizardProgress";
import WizardNavigation from "./WizardNavigation";
import WizardSuccess from "./WizardSuccess";

import IdentityStep from "./steps/IdentityStep";
import DepartureStep from "./steps/DepartureStep";
import PartySizeStep from "./steps/PartySizeStep";
import TierStep from "./steps/TierStep";
import MakkahHotelStep from "./steps/MakkahHotelStep";
import MadinahHotelStep from "./steps/MadinahHotelStep";
import StayMatrixStep from "./steps/StayMatrixStep";
import PortOfEntryStep from "./steps/PortOfEntryStep";
import PortOfDepartureStep from "./steps/PortOfDepartureStep";
import TransportStep from "./steps/TransportStep";
import ZiyarahStep from "./steps/ZiyarahStep";
import BudgetNotesStep from "./steps/BudgetNotesStep";

const TOTAL_STEPS = 12;

const stepComponents = [
  IdentityStep,
  DepartureStep,
  PartySizeStep,
  TierStep,
  MakkahHotelStep,
  MadinahHotelStep,
  StayMatrixStep,
  PortOfEntryStep,
  PortOfDepartureStep,
  TransportStep,
  ZiyarahStep,
  BudgetNotesStep,
];

const stepFields: (keyof WizardSchemaType)[][] = [
  ["fullName", "email", "phone", "whatsapp"],
  ["departureCity", "travelMonth", "dateFlexible"],
  ["adults", "children", "infants"],
  ["tier"],
  ["makkahHotel"],
  ["madinahHotel"],
  ["makkahNights", "madinahNights"],
  ["portOfEntry"],
  ["portOfDeparture"],
  ["transportLevel"],
  ["ziyarahs"],
  ["budgetRange", "specialRequests"],
];

const defaultValues: Partial<WizardSchemaType> = {
  fullName: "",
  email: "",
  phone: "",
  whatsapp: "",
  departureCity: "Karachi",
  travelMonth: "",
  dateFlexible: true,
  adults: 1,
  children: 0,
  infants: 0,
  tier: "4-star",
  makkahHotel: "recommend",
  madinahHotel: "recommend",
  makkahNights: 7,
  madinahNights: 5,
  portOfEntry: "jeddah",
  portOfDeparture: "madinah",
  transportLevel: "shared",
  ziyarahs: [],
  budgetRange: "",
  specialRequests: "",
};

export default function PackageWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ id: string } | null>(null);

  const [savedData, setSavedData, clearSavedData] = useLocalStorage<Partial<WizardSchemaType>>(
    "ummeabiha-wizard-data",
    defaultValues
  );

  const methods = useForm<WizardSchemaType>({
    resolver: zodResolver(wizardSchema),
    defaultValues: savedData,
    mode: "onChange",
  });

  const { trigger, watch, getValues, formState: { isValid } } = methods;

  useEffect(() => {
    setIsClient(true);
    const subscription = watch((value) => {
      setSavedData(value as Partial<WizardSchemaType>);
    });
    return () => subscription.unsubscribe();
  }, [watch, setSavedData]);

  const handleNext = async () => {
    const fieldsToValidate = stepFields[currentStep - 1];
    const isStepValid = await trigger(fieldsToValidate);
    
    if (isStepValid) {
      if (currentStep < TOTAL_STEPS) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    const isFormValid = await trigger();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const data = getValues();
      const result = await submitLead(data);
      
      if (result.success && result.id) {
        // Send email via Web3Forms from the client-side to bypass Cloudflare
        const htmlBody = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
            <h2 style="color: #047857; text-align: center; border-bottom: 2px solid #047857; padding-bottom: 10px;">
              Umme Abiha Travel & Tours
            </h2>
            <h3 style="color: #333;">New Package Builder Request</h3>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tbody>
                ${Object.entries(data)
                  .map(([key, value]) => `
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px; font-weight: bold; color: #475569; width: 35%; text-transform: capitalize;">
                        ${key.replace(/([A-Z])/g, ' $1').trim()}
                      </td>
                      <td style="padding: 12px; color: #0f172a;">
                        ${Array.isArray(value) ? value.join(', ') : (value === true ? 'Yes' : value === false ? 'No' : value || 'N/A')}
                      </td>
                    </tr>
                  `).join('')}
              </tbody>
            </table>
          </div>
        `;

        try {
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: "a8eddaa9-912e-4d90-b42a-c4d66db7a842",
              subject: `New Package Request: ${data.tier} - ${data.fullName}`,
              from_name: "Umme Abiha Website",
              replyto: data.email || "no-reply@ummeabihatravels.com",
              message: htmlBody,
            }),
          });
        } catch (e) {
          console.error("Failed to send email notification", e);
        }

        setSuccessData({ id: result.id });
        clearSavedData();
      } else {
        setSubmitError(result.error || "Failed to submit request.");
      }
    } catch (error) {
      setSubmitError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isClient) {
    return <div className="min-h-[600px] flex items-center justify-center">Loading...</div>;
  }

  if (successData) {
    return <WizardSuccess referenceId={successData.id} />;
  }

  const CurrentStepComponent = stepComponents[currentStep - 1];

  return (
    <div className="w-full max-w-3xl mx-auto bg-surface border border-border rounded-3xl p-6 sm:p-10 shadow-[var(--shadow-lg)]">
      <div className="mb-8 flex items-center justify-between p-4 bg-emerald/10 text-emerald rounded-xl border border-emerald/20">
        <p className="text-sm font-medium">Estimated completion time: ~2 minutes</p>
      </div>

      <WizardProgress currentStep={currentStep} totalSteps={TOTAL_STEPS} />

      {submitError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
          {submitError}
        </div>
      )}

      <FormProvider {...methods}>
        <form onSubmit={(e) => e.preventDefault()}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CurrentStepComponent />
            </motion.div>
          </AnimatePresence>

          <WizardNavigation
            onNext={handleNext}
            onBack={handleBack}
            isFirstStep={currentStep === 1}
            isLastStep={currentStep === TOTAL_STEPS}
            isValid={true} 
            isSubmitting={isSubmitting}
          />
        </form>
      </FormProvider>
    </div>
  );
}
