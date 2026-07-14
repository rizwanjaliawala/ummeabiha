"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/utils";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#1e1e1e]/90 backdrop-blur-xl shadow-[var(--shadow-md)] border-b border-white/10"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group" aria-label="Home">
            <Image
              src="/images/logo.jpg"
              alt={COMPANY.name}
              width={44}
              height={44}
              className="rounded-xl object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="hidden sm:block">
              <p className={cn(
                "text-lg font-bold tracking-tight font-[family-name:var(--font-heading)] transition-colors",
                scrolled ? "text-foreground" : "text-white"
              )}>
                Umme Abiha
              </p>
              <p className={cn(
                "text-[10px] font-medium tracking-widest uppercase -mt-0.5 transition-colors",
                scrolled ? "text-emerald" : "text-gold"
              )}>
                Travel & Tours
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                  scrolled
                    ? "text-foreground/70 hover:text-emerald hover:bg-emerald/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappLink(COMPANY.whatsapp, "Assalamualaikum! I am interested in your Umrah/Hajj packages.")}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                "bg-[#25D366] text-white hover:brightness-110 shadow-[0_8px_20px_rgba(37,211,102,0.25)]"
              )}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={cn(
                "lg:hidden flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                scrolled ? "text-foreground hover:bg-beige" : "text-white hover:bg-white/10"
              )}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] shadow-2xl"
              style={{ background: '#1e1e1e' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex h-20 items-center justify-between px-6 border-b border-border">
                <p className="font-bold font-[family-name:var(--font-heading)] text-lg text-foreground">
                  Menu
                </p>
                <button
                  onClick={closeMenu}
                  className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-beige transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="py-4 px-4 space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center px-4 py-3 text-sm font-medium text-foreground/80 rounded-xl hover:bg-beige hover:text-emerald transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3 border-t border-border">
                <Button href="/package-builder" size="lg" className="w-full">
                  Create Your Package
                </Button>
                <Button
                  variant="whatsapp"
                  href={whatsappLink(COMPANY.whatsapp)}
                  size="lg"
                  className="w-full"
                  icon={<MessageCircle className="h-4 w-4" />}
                >
                  WhatsApp Us
                </Button>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-muted hover:text-emerald transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {COMPANY.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
