import React from "react";

const services = [
  {
    title: "Umrah packages",
    desc: "Premium itineraries with clear timelines and caring support.",
  },
  {
    title: "Hajj assistance",
    desc: "Guidance through every step — from planning to departure.",
  },
  {
    title: "Islamic tours",
    desc: "Curated visits for meaningful experiences and comfortable logistics.",
  },
];

export default function HomepageSections() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-16">
      <section id="our-services" className="py-10 sm:py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Our services
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-[color:var(--foreground)]/75">
              Modern travel experience paired with trusted guidance.
            </p>
          </div>
          <div className="hidden sm:block">
            <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-[color:var(--foreground)]/85 backdrop-blur">
              Premium • Reliable • Caring
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--foreground)]/75">
                {s.desc}
              </p>
              <div className="mt-5 h-1 w-14 rounded-full bg-[color:var(--gold)]/80" />
            </article>
          ))}
        </div>
      </section>

      {/* Package wizard anchor for later steps */}
      <section id="package-wizard" className="py-10 sm:py-14">
        <div className="rounded-3xl border border-white/10 bg-[radial-gradient(ellipse_at_top,rgba(13,92,74,0.20),transparent_55%)] p-7">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Create Your Own Package
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[color:var(--foreground)]/75">
            Multi-step wizard scaffold will be added next (RHF + Zod + progress + localStorage).
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-[color:var(--foreground)]/90">
              Coming soon
            </div>
            <div className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-[color:var(--foreground)]/90">
              Premium build
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

