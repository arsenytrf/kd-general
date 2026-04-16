"use client";

import { useBusiness } from "@/contexts/BusinessContext";
import ScrollReveal from "@/components/shared/ScrollReveal";

const stats = [
  { value: "15+", label: "Years building" },
  { value: "500+", label: "Projects delivered" },
  { value: "4.9★", label: "Google rating" },
  { value: "10", label: "Cities served" },
];

export default function StatsStrip() {
  const { galleryImages } = useBusiness();

  /* Pick 4 photos for the tiled backdrop */
  /* 2025 recent photos — strongest visuals */
  const backdrops = [2, 5, 7, 10].map((i) => galleryImages[i % galleryImages.length]);
  return (
    <section className="relative bg-sky-950 text-sand-50 overflow-hidden">
      {/* Photo mosaic backdrop — 4 tiles, low opacity, moss duotone */}
      <div className="absolute inset-0 grid grid-cols-4" aria-hidden="true">
        {backdrops.map((img, i) => (
          <div key={i} className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div
        className="absolute inset-0 bg-sky-950/[0.35]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-sand-50/15">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-1.5 py-12 md:py-16 px-3 text-center">
                <span className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-sand-50 tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="font-body text-[11px] uppercase tracking-[0.22em] text-sand-200/70 font-semibold mt-1">
                  {stat.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
