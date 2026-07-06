import React from "react";
import type { Metadata } from "next";
import SectionHeader from "@/components/sections/SectionHeader";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "Travel Guide & FAQ",
  description: "Essential information, travel guides, and frequently asked questions for your Umrah and Hajj journey.",
};

export default function TravelGuidePage() {
  return (
    <div className="min-h-screen bg-surface-alt pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 mb-16 text-center">
        <SectionHeader
          badge="Essential Info"
          title="Travel Guide & FAQ"
          subtitle="Everything you need to know before embarking on your sacred journey."
        />
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-border shadow-[var(--shadow-sm)]">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="pb-6 border-b border-border last:border-0 last:pb-0">
                <h3 className="text-lg font-semibold text-foreground mb-3">{index + 1}. {faq.question}</h3>
                <p className="text-muted leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
