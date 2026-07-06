import React from "react";
import type { Metadata } from "next";
import SectionHeader from "@/components/sections/SectionHeader";
import { tours } from "@/data/tours";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Islamic Tours",
  description: "Explore our Islamic heritage tours, featuring historical Ziyarahs and guided visits to significant sites.",
};

export default function IslamicToursPage() {
  return (
    <div className="min-h-screen bg-surface-alt pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 mb-20 text-center">
        <SectionHeader
          badge="Historical Journeys"
          title="Islamic Heritage Tours"
          subtitle="Walk in the footsteps of the Prophet ﷺ and explore the rich history of Islamic civilization."
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <div key={tour.id} className="bg-surface border border-border rounded-3xl overflow-hidden shadow-[var(--shadow-sm)] flex flex-col transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
            <div className="aspect-[4/3] bg-navy relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <div className="absolute bottom-4 left-4 z-20 text-white">
                <span className="text-xs font-semibold tracking-wider text-gold uppercase mb-1 block">{tour.destination}</span>
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)]">{tour.title}</h3>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm text-emerald font-medium mb-3">{tour.duration}</p>
              <p className="text-sm text-muted mb-6 leading-relaxed line-clamp-3">
                {tour.description}
              </p>
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Highlights</h4>
                <ul className="space-y-2">
                  {tour.highlights.slice(0, 3).map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted">
                      <span className="h-1 w-1 rounded-full bg-gold mt-1.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                  {tour.highlights.length > 3 && (
                    <li className="text-xs text-muted italic ml-3">+ {tour.highlights.length - 3} more</li>
                  )}
                </ul>
              </div>
              <div className="mt-auto pt-4 border-t border-border">
                <Button href={`/contact?tour=${tour.id}`} variant="outline" className="w-full">
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
