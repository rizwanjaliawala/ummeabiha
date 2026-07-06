import React from "react";
import ContactForm from "@/components/forms/ContactForm";
import type { Metadata } from "next";
import SectionHeader from "@/components/sections/SectionHeader";
import { COMPANY } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Umme Abiha Travel & Tours. We're here to assist you with your Umrah, Hajj, and Islamic tourism needs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface-alt pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Get in Touch"
          title="Contact Our Team"
          subtitle="Have questions about our packages or need help planning your journey? Our dedicated consultants are ready to assist you."
        />

        <div className="grid lg:grid-cols-5 gap-12 mt-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-surface rounded-3xl p-8 border border-border shadow-[var(--shadow-sm)]">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-emerald/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-emerald" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Our Office</p>
                    <p className="text-sm text-muted mt-1 leading-relaxed">{COMPANY.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-emerald/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-emerald" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-sm text-muted mt-1 hover:text-emerald transition-colors block">
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-emerald/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-emerald" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href={`mailto:${COMPANY.email}`} className="text-sm text-muted mt-1 hover:text-emerald transition-colors block">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-emerald/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-emerald" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="text-sm text-muted mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-muted">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <Button 
                  href={whatsappLink(COMPANY.whatsapp)}
                  variant="whatsapp"
                  className="w-full"
                  icon={<MessageCircle className="h-5 w-5" />}
                >
                  Message on WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-surface rounded-3xl p-8 sm:p-10 border border-border shadow-[var(--shadow-lg)]">
              <h3 className="text-2xl font-semibold mb-2">Send us a message</h3>
              <p className="text-sm text-muted mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
