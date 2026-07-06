"use client";

import React from "react";

export default function Hero3D() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(13,92,74,0.22),_transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.35),transparent_60%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--foreground)]/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[color:var(--gold)]" />
              Premium Umrah • Hajj • Tours
            </p>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Travel with confidence — trusted guidance, seamless support.
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-[color:var(--foreground)]/75">
              Crafted for pilgrims from Karachi and beyond. Clear plans, caring assistance,
              and a premium journey from start to finish.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#package-wizard"
                className="rounded-full bg-[color:var(--emerald)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(13,92,74,0.25)] transition hover:brightness-110"
              >
                Create your package
              </a>
              <a
                href="#our-services"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-[color:var(--foreground)]/90 backdrop-blur transition hover:bg-white/10"
              >
                Explore services
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Local experts", "Trusted logistics", "24/7 support"].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <p className="text-sm font-semibold text-[color:var(--foreground)]">{t}</p>
                  <p className="mt-1 text-xs text-[color:var(--foreground)]/70">
                    Designed for peace of mind.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_70px_rgba(0,0,0,0.18)]">
              {/* Kaaba placeholder */}
              <div aria-hidden="true" className="absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.35),transparent_60%)]" />
                <div className="absolute left-1/2 top-1/2 h-44 w-28 -translate-x-1/2 -translate-y-1/2 rounded-b-xl rounded-t-md border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))] backdrop-blur" />
                <div className="absolute left-1/2 top-1/2 h-5 w-16 -translate-x-1/2 translate-y-16 rounded-full bg-[color:var(--emerald)]/80 blur" />
              </div>

              <div className="relative flex h-full flex-col justify-end p-6">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur">
                  <p className="text-sm font-semibold text-white">3D Hero (scaffold)</p>
                  <p className="mt-1 text-xs text-white/75">
                    R3F/Drei integration will replace this placeholder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

