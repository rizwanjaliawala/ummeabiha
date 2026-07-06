import React from "react";
import RevealOnScroll from "@/components/sections/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";
import { Phone, MessageCircle } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 sm:py-24 bg-surface relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <RevealOnScroll direction="up">
          <div className="rounded-3xl bg-navy border border-navy-light p-10 sm:p-16 text-center relative overflow-hidden shadow-[var(--shadow-xl)]">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6 relative z-10">
              Ready to embark on a sacred journey?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
              Our travel consultants are standing by to help you plan the perfect Umrah or Hajj experience. Let's make this journey memorable and worry-free.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Button 
                variant="whatsapp" 
                size="lg" 
                href={whatsappLink(COMPANY.whatsapp)}
                icon={<MessageCircle className="h-5 w-5" />}
                className="w-full sm:w-auto"
              >
                Chat on WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                icon={<Phone className="h-5 w-5" />}
                className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 hover:border-white/40"
              >
                Call Us Now
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
