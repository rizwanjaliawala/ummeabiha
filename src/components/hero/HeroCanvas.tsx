"use client";

import React, { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/* ── Video data ─────────────────────────────────────────── */
const VIDEOS = [
  {
    src: "/videos/kaaba-night.mp4",
    label: "Kaaba Night Courtyard",
    accent: "#D62B2B",
  },
  {
    src: "/videos/pilgrims.mp4",
    label: "Pilgrims Walking to Kaaba",
    accent: "#e84545",
  },
  {
    src: "/videos/colonnades.mp4",
    label: "Camera Glides Through Colonnades",
    accent: "#c02020",
  },
];

/* ── Single video tile ──────────────────────────────────── */
function VideoTile({
  src,
  accent,
  className,
  style,
  delay = 0,
}: {
  src: string;
  accent: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onLoaded = () => setLoaded(true);
    el.addEventListener("loadeddata", onLoaded);
    return () => el.removeEventListener("loadeddata", onLoaded);
  }, []);

  return (
    <div
      className={`video-tile ${className ?? ""}`}
      style={{
        ...style,
        "--accent": accent,
        animationDelay: `${delay}ms`,
      } as React.CSSProperties}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`tile-video ${loaded ? "is-loaded" : ""}`}
      />
      {/* Shimmer overlay while loading */}
      {!loaded && <div className="tile-shimmer" />}
      {/* Accent glow on edge */}
      <div className="tile-glow" style={{ "--accent": accent } as React.CSSProperties} />
    </div>
  );
}

/* ── Main export ────────────────────────────────────────── */
export default function HeroCanvas() {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0d0d0d 0%, #1a1a1a 40%, #2c0a0a 100%)",
        }}
      />
    );
  }

  return (
    <>
      {/* Scoped styles */}
      <style>{`
        /* ── Scene wrapper ──────────────────────────────── */
        .hero-video-scene {
          position: absolute;
          inset: 0;
          overflow: hidden;
          perspective: 900px;
          perspective-origin: 50% 40%;
        }

        /* ── Stage: 3-panel rotated grid ───────────────── */
        .hero-video-stage {
          position: absolute;
          inset: -8% -6%;
          display: grid;
          /* Left narrow | Center wide | Right narrow */
          grid-template-columns: 28% 1fr 28%;
          grid-template-rows: 1fr;
          gap: 10px;
          animation: stage-float 18s ease-in-out infinite;
        }

        @keyframes stage-float {
          0%, 100% { transform: rotateX(2deg) rotateY(0deg) translateY(0px); }
          33%       { transform: rotateX(1deg) rotateY(1.5deg) translateY(-6px); }
          66%       { transform: rotateX(3deg) rotateY(-1deg) translateY(4px); }
        }

        /* ── Each tile ──────────────────────────────────── */
        .video-tile {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.07);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.04),
            0 24px 60px rgba(0,0,0,0.7),
            inset 0 1px 0 rgba(255,255,255,0.08);
          animation: tile-enter 1.2s cubic-bezier(0.22,1,0.36,1) both;
          transform-style: preserve-3d;
          will-change: transform;
        }

        @keyframes tile-enter {
          from {
            opacity: 0;
            transform: translateZ(-60px) scale(0.94);
          }
          to {
            opacity: 1;
            transform: translateZ(0) scale(1);
          }
        }

        /* ── Side panels: angled ────────────────────────── */
        .tile-left {
          transform-origin: right center;
          transform: rotateY(18deg) translateZ(-20px);
          transition: transform 0.6s ease;
        }

        .tile-right {
          transform-origin: left center;
          transform: rotateY(-18deg) translateZ(-20px);
          transition: transform 0.6s ease;
        }

        .tile-center {
          transform: translateZ(20px);
          z-index: 2;
          box-shadow:
            0 0 0 1px rgba(214,43,43,0.2),
            0 30px 80px rgba(0,0,0,0.8),
            0 0 60px rgba(214,43,43,0.08),
            inset 0 1px 0 rgba(255,255,255,0.1);
        }

        .hero-video-stage:hover .tile-left {
          transform: rotateY(12deg) translateZ(-10px);
        }
        .hero-video-stage:hover .tile-right {
          transform: rotateY(-12deg) translateZ(-10px);
        }

        /* ── The video itself ───────────────────────────── */
        .tile-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1s ease;
        }
        .tile-video.is-loaded {
          opacity: 1;
        }

        /* ── Shimmer placeholder ────────────────────────── */
        .tile-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            rgba(255,255,255,0.03) 0%,
            rgba(255,255,255,0.07) 40%,
            rgba(255,255,255,0.03) 60%,
            rgba(255,255,255,0.07) 100%
          );
          background-size: 200% 100%;
          animation: shimmer-sweep 1.8s linear infinite;
        }

        @keyframes shimmer-sweep {
          from { background-position: 200% 0; }
          to   { background-position: -200% 0; }
        }

        /* ── Accent glow on border ──────────────────────── */
        .tile-glow {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          box-shadow: inset 0 0 30px rgba(0,0,0,0.4);
        }

        /* ── Master overlays on the scene ───────────────── */

        /* Dark vignette (sides + bottom) */
        .hero-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(ellipse 70% 100% at 50% 50%, transparent 30%, rgba(0,0,0,0.65) 100%),
            linear-gradient(to bottom, rgba(13,13,13,0.45) 0%, transparent 25%, transparent 65%, rgba(13,13,13,0.90) 100%),
            linear-gradient(to right, rgba(13,13,13,0.70) 0%, transparent 20%, transparent 80%, rgba(13,13,13,0.70) 100%);
          z-index: 3;
        }

        /* Cinematic letterbox bars */
        .hero-letterbox-top,
        .hero-letterbox-bottom {
          position: absolute;
          left: 0; right: 0;
          height: 60px;
          pointer-events: none;
          z-index: 4;
        }
        .hero-letterbox-top {
          top: 0;
          background: linear-gradient(to bottom, rgba(13,13,13,0.85), transparent);
        }
        .hero-letterbox-bottom {
          bottom: 0;
          background: linear-gradient(to top, rgba(13,13,13,0.95), transparent);
        }

        /* Subtle noise grain overlay */
        .hero-grain {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 5;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          background-size: 180px;
        }

        /* Red accent light wash at center-bottom */
        .hero-redglow {
          position: absolute;
          bottom: -10%;
          left: 50%;
          transform: translateX(-50%);
          width: 70%;
          height: 55%;
          background: radial-gradient(ellipse at center, rgba(214,43,43,0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 4;
          animation: redglow-pulse 6s ease-in-out infinite;
        }

        @keyframes redglow-pulse {
          0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
          50%       { opacity: 1;   transform: translateX(-50%) scale(1.08); }
        }

        /* Floating dust particles */
        .hero-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 4;
          overflow: hidden;
        }
        .hero-particles span {
          position: absolute;
          border-radius: 50%;
          background: rgba(214, 43, 43, 0.55);
          animation: particle-float linear infinite;
          will-change: transform, opacity;
        }

        @keyframes particle-float {
          0%   { transform: translateY(100vh) translateX(0) scale(0); opacity: 0; }
          10%  { opacity: 1; transform: translateY(80vh) translateX(10px) scale(1); }
          90%  { opacity: 0.4; }
          100% { transform: translateY(-10vh) translateX(-15px) scale(0.5); opacity: 0; }
        }
      `}</style>

      <div className="hero-video-scene">

        {/* ── 3D video stage ── */}
        <div className="hero-video-stage">
          {/* Left panel — colonnades */}
          <VideoTile
            src={VIDEOS[2].src}
            accent={VIDEOS[2].accent}
            className="tile-left"
            delay={200}
          />

          {/* Center panel — Kaaba night (hero focal point) */}
          <VideoTile
            src={VIDEOS[0].src}
            accent={VIDEOS[0].accent}
            className="tile-center"
            delay={0}
          />

          {/* Right panel — pilgrims */}
          <VideoTile
            src={VIDEOS[1].src}
            accent={VIDEOS[1].accent}
            className="tile-right"
            delay={400}
          />
        </div>

        {/* ── Scene overlays ── */}
        <div className="hero-vignette" />
        <div className="hero-letterbox-top" />
        <div className="hero-letterbox-bottom" />
        <div className="hero-grain" />
        <div className="hero-redglow" />

        {/* Floating particles */}
        <div className="hero-particles" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              style={{
                left: `${5 + Math.random() * 90}%`,
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                animationDuration: `${8 + Math.random() * 12}s`,
                animationDelay: `${Math.random() * 10}s`,
                opacity: 0.4 + Math.random() * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
