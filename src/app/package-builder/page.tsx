import React from "react";
import type { Metadata } from "next";
import PackageWizard from "@/components/wizard/PackageWizard";

export const metadata: Metadata = {
  title: "Create Your Custom Package",
  description: "Design your personalized Umrah or Hajj package. Choose your dates, hotels, transport, and ziyarah preferences.",
};

export default function PackageBuilderPage() {
  return (
    <div className="min-h-screen bg-surface-alt pt-32 pb-24">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-96 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-4">
            Create Your Own Package
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Follow the steps to build a personalized spiritual journey that matches your needs and budget.
          </p>
        </div>

        <PackageWizard />
      </div>
    </div>
  );
}
