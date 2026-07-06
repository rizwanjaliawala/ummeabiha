import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";
import { CheckCircle2, MessageCircle, Home } from "lucide-react";

export default function WizardSuccess({ referenceId }: { referenceId: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto bg-surface border border-border rounded-3xl p-8 sm:p-12 text-center shadow-[var(--shadow-xl)]"
    >
      <div className="mx-auto w-20 h-20 bg-emerald/10 text-emerald rounded-full flex items-center justify-center mb-6">
        <CheckCircle2 className="h-10 w-10" />
      </div>

      <h2 className="text-3xl font-semibold text-foreground mb-4">
        Request Submitted Successfully
      </h2>
      
      <p className="text-muted mb-8 leading-relaxed">
        Thank you for choosing Umme Abiha Travel & Tours. We have received your package request. 
        Our dedicated travel consultant will review your details and contact you shortly to discuss your itinerary.
      </p>

      <div className="bg-surface-alt border border-border rounded-xl p-4 mb-8 inline-block mx-auto">
        <p className="text-sm text-muted mb-1">Your Reference ID</p>
        <p className="text-xl font-bold font-mono text-emerald tracking-wider">{referenceId}</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button 
          href={whatsappLink(COMPANY.whatsapp, `Assalamualaikum, I just submitted a package request. My reference ID is ${referenceId}.`)}
          variant="whatsapp"
          size="lg"
          icon={<MessageCircle className="h-5 w-5" />}
          className="w-full sm:w-auto"
        >
          Message us on WhatsApp
        </Button>
        
        <Button 
          href="/"
          variant="outline"
          size="lg"
          icon={<Home className="h-4 w-4" />}
          className="w-full sm:w-auto"
        >
          Return to Home
        </Button>
      </div>
    </motion.div>
  );
}
