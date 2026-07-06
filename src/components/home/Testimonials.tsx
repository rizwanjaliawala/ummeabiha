import React from "react";
import RevealOnScroll from "@/components/sections/RevealOnScroll";
import SectionHeader from "@/components/sections/SectionHeader";
import { testimonials } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const displayTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <RevealOnScroll direction="up">
          <SectionHeader
            badge="Pilgrim Stories"
            title="Heartfelt Experiences"
            subtitle="Don't just take our word for it. Read what our pilgrims have to say about their sacred journeys with Umme Abiha Travel & Tours."
          />
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-3 mt-12">
          {displayTestimonials.map((testimonial, index) => (
            <RevealOnScroll
              key={testimonial.id}
              direction="up"
              delay={index * 0.1}
            >
              <div className="relative flex flex-col h-full p-8 rounded-3xl bg-surface-alt border border-border">
                <Quote className="absolute top-6 right-8 h-10 w-10 text-emerald/10" />
                
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                
                <p className="text-foreground/80 leading-relaxed flex-grow italic mb-8">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border">
                  <div className="h-10 w-10 rounded-full bg-emerald/10 flex items-center justify-center text-emerald font-bold font-[family-name:var(--font-heading)]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted">
                      {testimonial.location} • {testimonial.travelDate}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
