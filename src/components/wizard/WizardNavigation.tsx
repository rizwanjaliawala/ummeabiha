import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

interface WizardNavigationProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  isValid: boolean;
  isSubmitting?: boolean;
}

export default function WizardNavigation({
  onNext,
  onBack,
  isFirstStep,
  isLastStep,
  isValid,
  isSubmitting = false,
}: WizardNavigationProps) {
  return (
    <div className="flex items-center justify-between pt-8 mt-8 border-t border-border">
      <Button
        variant="ghost"
        onClick={onBack}
        disabled={isFirstStep || isSubmitting}
        className={isFirstStep ? "invisible" : ""}
        icon={<ArrowLeft className="h-4 w-4" />}
      >
        Back
      </Button>

      {isLastStep ? (
        <Button
          variant="primary"
          onClick={onNext}
          disabled={!isValid || isSubmitting}
          loading={isSubmitting}
          icon={<CheckCircle className="h-4 w-4" />}
          className="shadow-[var(--shadow-emerald)]"
        >
          Submit Request
        </Button>
      ) : (
        <Button
          variant="primary"
          onClick={onNext}
          disabled={!isValid || isSubmitting}
          className="flex-row-reverse"
          icon={<ArrowRight className="h-4 w-4" />}
        >
          Next Step
        </Button>
      )}
    </div>
  );
}
