"use client";

import React, { useState } from "react";
import RevealOnScroll from "@/components/sections/RevealOnScroll";
import SectionHeader from "@/components/sections/SectionHeader";
import { faqs } from "@/data/faq";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const displayFaqs = faqs.slice(0, 5); // Show only top 5 FAQs on homepage

  return (
    <section className="py-20 sm:py-28 bg-surface-alt">
      <div className="mx-auto max-w-4xl px-6">
        <RevealOnScroll direction="up">
          <SectionHeader
            badge="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our packages, visa processing, and travel arrangements."
          />
        </RevealOnScroll>

        <div className="mt-10 space-y-4">
          {displayFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <RevealOnScroll
                key={faq.id}
                direction="up"
                delay={index * 0.1}
              >
                <div 
                  className={cn(
                    "rounded-2xl border transition-colors duration-300 overflow-hidden",
                    isOpen ? "border-emerald bg-white shadow-[var(--shadow-sm)]" : "border-border bg-surface hover:border-emerald/30"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className={cn(
                      "font-semibold text-lg pr-8 transition-colors",
                      isOpen ? "text-emerald" : "text-foreground"
                    )}>
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={cn(
                        "h-5 w-5 shrink-0 transition-transform duration-300",
                        isOpen ? "rotate-180 text-emerald" : "text-muted"
                      )} 
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-0 text-muted leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
