import React from "react";
import Image from "next/image";
import RevealOnScroll from "@/components/sections/RevealOnScroll";
import SectionHeader from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/button";
import { hotels } from "@/data/hotels";
import { MapPin, Star } from "lucide-react";

export default function HotelShowcase() {
  const featuredHotels = hotels.slice(0, 4);

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeader
              badge="Premium Accommodations"
              title="Where You'll Stay"
              subtitle="We partner with the finest hotels in Makkah and Madinah, ensuring you rest comfortably steps away from the Holy Mosques."
              align="left"
              className="mb-0 max-w-2xl"
            />
            <Button href="/hotels" variant="outline" className="hidden md:inline-flex shrink-0">
              View All Hotels
            </Button>
          </div>
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredHotels.map((hotel, index) => (
            <RevealOnScroll
              key={hotel.id}
              direction="up"
              delay={index * 0.1}
            >
              <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface border border-border shadow-[var(--shadow-sm)] transition-all hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
                  <Image src={hotel.image} alt={hotel.name} fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  
                  <div className="absolute top-3 left-3 z-20 flex bg-white/90 backdrop-blur rounded-full px-2 py-1 items-center gap-1">
                    <Star className="h-3 w-3 fill-gold text-gold" />
                    <span className="text-xs font-bold">{hotel.stars}</span>
                  </div>
                  
                  <div className="absolute bottom-3 left-4 z-20 right-4">
                    <p className="text-xs font-medium text-gold uppercase tracking-wider mb-1">
                      {hotel.city}
                    </p>
                    <h3 className="text-white font-semibold truncate">
                      {hotel.name}
                    </h3>
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-start gap-2 mb-3 text-muted">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-emerald" />
                    <span className="text-xs leading-snug">{hotel.distanceToHaram}</span>
                  </div>
                  <p className="text-sm text-foreground/70 line-clamp-2 mt-auto">
                    {hotel.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button href="/hotels" variant="outline" className="w-full">
            View All Hotels
          </Button>
        </div>
      </div>
    </section>
  );
}
