"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { COMPANY } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-hero" />
  ),
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const trustItems = [
  { icon: Shield, label: "Trusted by 5,000+ pilgrims", detail: "Since 2015" },
  { icon: Clock, label: "24/7 on-ground support", detail: "Always available" },
  { icon: Users, label: "Expert local guides", detail: "Experienced team" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* 3D Canvas Background */}
      <HeroCanvas />

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 sm:py-36 lg:py-40 w-full">
        <div className="max-w-3xl">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <Badge variant="gold" className="backdrop-blur-md bg-white/5 border-gold/30">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              Premium Umrah • Hajj • Islamic Tours
            </Badge>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-7 text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]"
          >
            Begin Your Sacred
            <br />
            <span className="text-gradient-gold">Journey with Confidence</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/70"
          >
            Premium Umrah, Hajj & Islamic Tours from Karachi, Pakistan. 
            Personalized guidance, trusted assistance, and a seamless journey 
            from start to finish.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button
              href="/umrah-packages"
              size="lg"
              className="shadow-[var(--shadow-emerald)]"
            >
              View Packages
            </Button>
            <Button
              href="/package-builder"
              variant="gold"
              size="lg"
            >
              Create My Package
            </Button>
            <Button
              href={whatsappLink(COMPANY.whatsapp, "Assalamualaikum! I am interested in your Umrah/Hajj packages.")}
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle className="h-4 w-4" />}
            >
              WhatsApp Us
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-14 grid gap-3 sm:grid-cols-3 max-w-2xl"
          >
            {trustItems.map(({ icon: Icon, label, detail }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm px-4 py-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald/20">
                  <Icon className="h-4 w-4 text-emerald-light" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90">{label}</p>
                  <p className="text-xs text-white/50">{detail}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#why-choose-us" aria-label="Scroll down" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors">
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
