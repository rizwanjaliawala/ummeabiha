import React from "react";
import Image from "next/image";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";
import { MessageCircle, Phone, Mail, MapPin, Link } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy text-white/80">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-red via-red-light to-red" />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <Image
                src="/images/logo.jpg"
                alt={COMPANY.name}
                width={44}
                height={44}
                className="rounded-xl object-contain"
              />
              <div>
                <p className="text-base font-bold text-white font-[family-name:var(--font-heading)]">Umme Abiha</p>
                <p className="text-[10px] font-medium tracking-widest uppercase text-gold -mt-0.5">Travel & Tours</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-6">
              Premium Umrah, Hajj & Islamic Tourism from Karachi, Pakistan. 
              Trusted guidance, seamless journeys, unforgettable experiences.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Link, href: COMPANY.social.facebook, label: "Facebook" },
                { Icon: Link, href: COMPANY.social.instagram, label: "Instagram" },
                { Icon: Link, href: COMPANY.social.youtube, label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-red hover:text-white hover:border-red transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-red-light uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-red-light transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-red-light uppercase tracking-wider mb-5">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Umrah Packages",
                "Hajj Packages",
                "Custom Packages",
                "Islamic Tours",
                "Hotel Booking",
                "Visa Assistance",
                "Flight Booking",
                "Ground Transport",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/60">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-red-light uppercase tracking-wider mb-5">Contact Us</h4>
            <div className="space-y-4">
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-3 group"
              >
                <Phone className="h-4 w-4 mt-0.5 text-red-light shrink-0" />
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                  {COMPANY.phone}
                </span>
              </a>
              <a
                href={whatsappLink(COMPANY.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <MessageCircle className="h-4 w-4 mt-0.5 text-[#25D366] shrink-0" />
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                  WhatsApp Us
                </span>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 group">
                <Mail className="h-4 w-4 mt-0.5 text-red-light shrink-0" />
                <span className="text-sm text-white/60 group-hover:text-white transition-colors break-all">
                  {COMPANY.email}
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-red-light shrink-0" />
                <span className="text-sm text-white/60">
                  {COMPANY.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="text-xs text-white/40 hover:text-red-light transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-xs text-white/40 hover:text-red-light transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
