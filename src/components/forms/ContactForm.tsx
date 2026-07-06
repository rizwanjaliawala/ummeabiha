"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const WEB3FORMS_KEY = "a8eddaa9-912e-4d90-b42a-c4d66db7a842";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("from_name", "Umme Abiha Website");
    formData.append("subject", `New Contact Inquiry from ${formData.get("name")}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError(result.message || "Failed to send message. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    }

    setLoading(false);
  }

  if (success) {
    return (
      <div className="bg-emerald/10 border border-emerald rounded-2xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald text-white mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-muted mb-6">
          Thank you for reaching out. We have received your inquiry and will get back to you within 24 hours.
        </p>
        <Button onClick={() => setSuccess(false)} variant="outline">Send Another Message</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot for spam */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
      
      {error && (
        <div className="p-4 rounded-xl bg-red-50 text-red-600 border border-red-200 text-sm">
          {error}
        </div>
      )}
      
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Full Name</label>
          <input required id="name" name="name" type="text" className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition-all bg-background" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email Address</label>
          <input required id="email" name="email" type="email" className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition-all bg-background" placeholder="john@example.com" />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
        <input required id="phone" name="phone" type="tel" className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition-all bg-background" placeholder="+92 300 1234567" />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject-field" className="text-sm font-medium">Subject</label>
        <input required id="subject-field" name="subject_text" type="text" className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition-all bg-background" placeholder="How can we help?" />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea required id="message" name="message" rows={5} className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition-all resize-none bg-background" placeholder="Your message here..."></textarea>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
