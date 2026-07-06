import React from "react";
import RevealOnScroll from "@/components/sections/RevealOnScroll";
import SectionHeader from "@/components/sections/SectionHeader";
import { Card } from "@/components/ui/card";
import { Plane, Building, Car, Headset, ShieldCheck, Settings } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Visa Assistance",
    description: "Fast-track and hassle-free Umrah & Hajj visa processing. We handle the paperwork so you can focus on your spiritual preparation.",
  },
  {
    icon: Building,
    title: "Premium Hotels",
    description: "Carefully selected accommodations closest to the Haram, offering the best comfort, dining, and views for a peaceful stay.",
  },
  {
    icon: Car,
    title: "Luxury Transport",
    description: "From shared AC coaches to private VIP sedans and SUVs, ensuring safe and comfortable travel between holy cities and airports.",
  },
  {
    icon: Headset,
    title: "24/7 Guidance",
    description: "Our dedicated team in Saudi Arabia and Pakistan is always available to assist you with any needs during your sacred journey.",
  },
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Best available routes and rates with premium airlines from major cities in Pakistan directly to Jeddah and Madinah.",
  },
  {
    icon: Settings,
    title: "Custom Packages",
    description: "Tailor every aspect of your pilgrimage. Choose your hotels, transport, and dates to create an itinerary that suits your budget.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <RevealOnScroll direction="up">
          <SectionHeader
            badge="The Umme Abiha Difference"
            title="Why Pilgrims Trust Us"
            subtitle="We combine years of experience with a deep understanding of pilgrims' needs to deliver an exceptional, worry-free journey."
          />
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <RevealOnScroll
                key={feature.title}
                direction="up"
                delay={index * 0.1}
                className="h-full"
              >
                <Card hover className="h-full flex flex-col group p-8">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/10 text-emerald transition-colors group-hover:bg-emerald group-hover:text-white">
                    <Icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
