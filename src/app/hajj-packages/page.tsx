import React from "react";
import type { Metadata } from "next";
import SectionHeader from "@/components/sections/SectionHeader";
import { hajjPackages } from "@/data/packages";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Premium Hajj Packages",
  description: "Explore our meticulously crafted Hajj packages designed for your comfort, guidance, and peace of mind.",
};

export default function HajjPackagesPage() {
  return (
    <div className="min-h-screen bg-surface-alt pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 mb-20 text-center">
        <SectionHeader
          badge="Sacred Duty"
          title="Premium Hajj Packages"
          subtitle="Complete the fifth pillar of Islam with confidence. Our Hajj packages provide comprehensive spiritual guidance and unmatched comfort."
        />
        <Button href="/contact" variant="gold" size="lg" className="mt-4">
          Inquire About Hajj
        </Button>
      </div>

      <div className="mx-auto max-w-7xl px-6 space-y-16">
        {hajjPackages.map((pkg) => (
          <div 
            key={pkg.id} 
            id={pkg.id}
            className="flex flex-col lg:flex-row gap-8 bg-surface border border-border rounded-3xl overflow-hidden shadow-[var(--shadow-md)]"
          >
            <div className="lg:w-2/5 relative h-64 lg:h-auto bg-navy">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              {pkg.featured && (
                <div className="absolute top-6 left-6 z-20">
                  <Badge variant="gold">Most Popular</Badge>
                </div>
              )}
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <p className="text-sm font-medium text-gold mb-1">{pkg.tier.toUpperCase().replace('-', ' ')}</p>
                <h2 className="text-3xl font-semibold font-[family-name:var(--font-heading)]">{pkg.title}</h2>
              </div>
            </div>

            <div className="lg:w-3/5 p-8 sm:p-10 flex flex-col">
              <h3 className="text-xl font-semibold text-foreground mb-4">{pkg.subtitle}</h3>
              <p className="text-muted leading-relaxed mb-8">
                {pkg.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">Highlights</h4>
                  <ul className="space-y-3">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">Includes</h4>
                  <ul className="space-y-3">
                    {pkg.includes.slice(0, 5).map((inc, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                        <span className="text-emerald font-bold">✓</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-border mt-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-sm text-muted">Estimated Price</p>
                  <p className="text-xl font-semibold text-foreground">{pkg.priceLabel}</p>
                </div>
                <Button href={`/contact?package=${pkg.id}`} variant="primary" size="lg" className="w-full sm:w-auto">
                  Inquire Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
