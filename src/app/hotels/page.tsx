import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/sections/SectionHeader";
import { hotels } from "@/data/hotels";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Hotels",
  description: "Browse our curated selection of premium partner hotels in Makkah and Madinah.",
};

export default function HotelsPage() {
  const makkahHotels = hotels.filter(h => h.city === "makkah");
  const madinahHotels = hotels.filter(h => h.city === "madinah");

  const HotelList = ({ title, items }: { title: string, items: typeof hotels }) => (
    <div className="mb-20">
      <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-foreground mb-10 text-center">{title}</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((hotel) => (
          <div key={hotel.id} className="bg-surface border border-border rounded-3xl overflow-hidden shadow-[var(--shadow-sm)] flex flex-col group">
            <div className="aspect-[16/9] bg-navy relative">
               <Image src={hotel.image} alt={hotel.name} fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
               <div className="absolute top-4 left-4 z-20">
                 <Badge variant="gold" className="bg-white/90 text-gold-dark backdrop-blur-md">
                   {hotel.stars}★
                 </Badge>
               </div>
               <div className="absolute bottom-4 left-4 right-4 z-20">
                 <h3 className="text-xl font-bold text-white font-[family-name:var(--font-heading)] drop-shadow-md">{hotel.name}</h3>
               </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm text-emerald font-medium mb-3">{hotel.distanceToHaram}</p>
              <p className="text-sm text-muted leading-relaxed mb-6 flex-grow">{hotel.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {hotel.amenities.slice(0, 4).map((amenity, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-surface-alt border border-border text-muted">
                    {amenity}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-border">
                <Button href="/contact" variant="outline" className="w-full">
                  Inquire
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-surface-alt pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 mb-16 text-center">
        <SectionHeader
          badge="Premium Stays"
          title="Our Partner Hotels"
          subtitle="Experience comfort and luxury with our carefully selected partner hotels in the holy cities, ensuring you remain close to the Haramain."
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <HotelList title="Hotels in Makkah" items={makkahHotels} />
        <HotelList title="Hotels in Madinah" items={madinahHotels} />
      </div>
    </div>
  );
}
