import React from "react";
import type { Metadata } from "next";
import SectionHeader from "@/components/sections/SectionHeader";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn more about ${COMPANY.name} and our commitment to providing premium Umrah and Hajj experiences.`,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface-alt pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Our Story"
          title="About Us"
          subtitle={`Discover the history and mission of ${COMPANY.name}.`}
        />
        <div className="mt-16 bg-surface p-8 sm:p-12 rounded-3xl border border-border shadow-[var(--shadow-sm)]">
          <div className="prose prose-emerald max-w-none prose-lg">
            <h2 className="text-3xl font-semibold text-foreground font-[family-name:var(--font-heading)] mb-6">Our Legacy of Service</h2>
            <p className="text-muted leading-relaxed mb-6">
              Founded in {COMPANY.foundedYear}, {COMPANY.name} has been dedicated to serving the guests of Allah with utmost sincerity, transparency, and excellence. Based in {COMPANY.city}, {COMPANY.country}, our mission is to provide seamless and spiritually enriching journeys to the holy cities of Makkah and Madinah.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              We understand that performing Umrah and Hajj is a profound, life-changing experience. Therefore, we meticulously plan every detail—from visa processing and premium flights to luxury accommodation and comfortable ground transportation—ensuring that you can focus entirely on your spiritual devotion.
            </p>
            <h3 className="text-2xl font-semibold text-foreground font-[family-name:var(--font-heading)] mt-8 mb-4">Why Choose Us?</h3>
            <ul className="list-disc pl-6 text-muted space-y-2">
              <li>Trusted by thousands of pilgrims since {COMPANY.foundedYear}.</li>
              <li>Premium 3-star to 7-star VIP accommodations close to the Haramain.</li>
              <li>Transparent pricing with no hidden costs.</li>
              <li>Dedicated 24/7 on-ground support throughout your journey.</li>
              <li>Experienced religious guides and scholars accompanying our groups.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
