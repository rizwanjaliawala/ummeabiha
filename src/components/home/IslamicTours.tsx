import React from "react";
import RevealOnScroll from "@/components/sections/RevealOnScroll";
import SectionHeader from "@/components/sections/SectionHeader";
import { tours } from "@/data/tours";
import { ArrowRight } from "lucide-react";

export default function IslamicTours() {
  const featuredTours = tours.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6">
        <RevealOnScroll direction="up">
          <SectionHeader
            badge="Beyond the Pilgrimage"
            title="Islamic Heritage Tours"
            subtitle="Enrich your spiritual journey with guided tours to historical Islamic sites in Saudi Arabia and beyond."
          />
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-3 mt-12">
          {featuredTours.map((tour, index) => (
            <RevealOnScroll
              key={tour.id}
              direction="up"
              delay={index * 0.1}
            >
              <a href={`/islamic-tours#${tour.id}`} className="group block h-full">
                <div className="relative h-full overflow-hidden rounded-3xl bg-navy isolate">
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-navy/80 group-hover:scale-105 transition-transform duration-700 -z-10" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent -z-10" />

                  <div className="flex flex-col h-full justify-end p-8">
                    <p className="text-sm font-medium text-gold mb-2 uppercase tracking-wider">
                      {tour.destination}
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-3 font-[family-name:var(--font-heading)]">
                      {tour.title}
                    </h3>
                    <p className="text-white/70 text-sm line-clamp-2 mb-6">
                      {tour.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-emerald-light font-medium text-sm group-hover:text-gold transition-colors">
                      Explore Tour
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
