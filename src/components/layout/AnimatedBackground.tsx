"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function AnimatedBackground() {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || prefersReduced) {
    return <div className="fixed inset-0 z-[-1] pointer-events-none" style={{ background: '#1a1a1a' }} />;
  }

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none" style={{ background: '#1a1a1a' }}>
      {/* Mesh Gradient Base */}
      <div className="absolute inset-0 opacity-30 filter blur-[120px]">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: ["0%", "5%", "-5%", "0%"],
            y: ["0%", "-5%", "5%", "0%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full"
          style={{ background: 'rgba(214,43,43,0.25)' }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: ["0%", "-10%", "5%", "0%"],
            y: ["0%", "10%", "-5%", "0%"],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full"
          style={{ background: 'rgba(60,20,20,0.4)' }}
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: ["0%", "10%", "-10%", "0%"],
            y: ["0%", "-10%", "10%", "0%"],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-[20%] right-[20%] w-[40%] h-[40%] rounded-full"
          style={{ background: 'rgba(44,44,44,0.5)' }}
        />
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{ background: 'rgba(214,43,43,0.4)',
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 10,
          }}
        />
      ))}
      
      {/* Ambient noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
    </div>
  );
}
