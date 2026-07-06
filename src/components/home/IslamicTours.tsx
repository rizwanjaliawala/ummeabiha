import React from "react";
import Image from "next/image";
import RevealOnScroll from "@/components/sections/RevealOnScroll";
import SectionHeader from "@/components/sections/SectionHeader";
import { tours } from "@/data/tours";
import { ArrowRight, Clock } from "lucide-react";

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
                <div className="relative h-80 overflow-hidden rounded-3xl bg-navy isolate">
                  {/* Background image */}
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Duration badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                    <Clock className="h-3 w-3 text-gold" />
                    <span className="text-xs text-white font-medium">{tour.duration}</span>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col">
                    <p className="text-xs font-semibold text-gold mb-1.5 uppercase tracking-widest">
                      {tour.destination}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-heading)] leading-tight">
                      {tour.title}
                    </h3>
                    <p className="text-white/70 text-sm line-clamp-2 mb-4">
                      {tour.description}
                    </p>
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm group-hover:text-gold transition-colors">
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
