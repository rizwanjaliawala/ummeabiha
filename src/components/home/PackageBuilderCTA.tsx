import React from "react";
import RevealOnScroll from "@/components/sections/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";

export default function PackageBuilderCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with Emerald Gradient */}
      <div className="absolute inset-0 bg-gradient-emerald" />
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 mix-blend-overlay" />
      
      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 relative z-10 text-center">
        <RevealOnScroll direction="up">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-8 text-gold">
            <Settings2 className="h-8 w-8" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
            Design Your Perfect Pilgrimage
          </h2>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every journey is unique. Use our custom package builder to select your preferred dates, hotels, and transport options. Get a personalized quote in minutes.
          </p>
          
          <Button 
            href="/package-builder" 
            variant="gold" 
            size="xl" 
            className="shadow-[var(--shadow-xl)] hover:shadow-gold/40"
          >
            Create Your Custom Package
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
