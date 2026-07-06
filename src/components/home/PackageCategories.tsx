import React from "react";
import RevealOnScroll from "@/components/sections/RevealOnScroll";
import SectionHeader from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { packages } from "@/data/packages";
import { formatPKR } from "@/lib/utils";

export default function PackageCategories() {
  // Use first 3 packages for home page
  const displayPackages = packages.slice(0, 3);

  return (
    <section id="packages" className="py-20 sm:py-28 bg-surface-alt relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.05),transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <RevealOnScroll direction="up">
          <SectionHeader
            badge="Curated Itineraries"
            title="Explore Our Umrah Packages"
            subtitle="From budget-friendly to VIP luxury, find the perfect package designed to provide you with peace of mind."
          />
        </RevealOnScroll>

        <div className="grid gap-8 lg:grid-cols-3 mt-12">
          {displayPackages.map((pkg, index) => (
            <RevealOnScroll
              key={pkg.id}
              direction="up"
              delay={index * 0.1}
              className="flex"
            >
              <div className="group relative flex flex-col w-full overflow-hidden rounded-3xl bg-surface border border-border shadow-[var(--shadow-md)] transition-all hover:-translate-y-2 hover:shadow-[var(--shadow-xl)]">
                {/* Image Header */}
                <div className="relative h-56 w-full overflow-hidden bg-navy">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent z-10" />
                  {/* Using a placeholder gradient since we don't have actual images yet */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-dark to-navy group-hover:scale-105 transition-transform duration-700" />
                  
                  {pkg.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <Badge variant="gold">Most Popular</Badge>
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-5 z-20">
                    <Badge variant="outline" className="text-white border-white/30 bg-black/20 backdrop-blur-sm mb-2">
                      {pkg.makkahNights + pkg.madinahNights} Nights
                    </Badge>
                    <h3 className="text-2xl font-semibold text-white font-[family-name:var(--font-heading)]">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <div className="mb-4 text-emerald font-medium text-sm">
                    {pkg.subtitle}
                  </div>
                  
                  <p className="text-sm text-muted leading-relaxed mb-6 flex-grow">
                    {pkg.description}
                  </p>
                  
                  <div className="space-y-2.5 mb-8">
                    {pkg.highlights.slice(0, 3).map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                        <span className="text-sm text-foreground/80">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-border flex items-center justify-between mt-auto">
                    <div>
                      <p className="text-xs text-muted">Starting from</p>
                      <p className="text-lg font-semibold text-foreground">
                        {pkg.priceLabel}
                      </p>
                    </div>
                    <Button href={`/umrah-packages#${pkg.id}`} variant={pkg.featured ? "primary" : "outline"} size="sm">
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll direction="up" delay={0.4} className="mt-12 text-center">
          <Button href="/umrah-packages" variant="secondary" size="lg">
            View All Packages
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
