"use client";

import { useState } from "react";
import { useBusiness } from "@/contexts/BusinessContext";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";

const categories = ["All", "Roofing", "Exterior", "Foundation", "Fencing", "Remodel"];

export default function ProjectGallery() {
  const { galleryImages } = useBusiness();
  const [filter, setFilter] = useState("All");

  const visible = filter === "All"
    ? galleryImages
    : galleryImages.filter((img) =>
        img.tag.toLowerCase().includes(filter.toLowerCase())
        || (filter === "Exterior" && ["Siding", "Paint", "Exterior"].includes(img.tag))
      );

  return (
    <section className="bg-slate-50 py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
            <SectionHeader
              label="Recent work"
              title="Real projects. Real properties."
              description="A slice of the last few years — from tear-offs to finish carpentry."
              light
              align="left"
              className="mb-0"
            />

            {/* Filter */}
            <div className="flex flex-wrap items-center gap-1.5 md:shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-sm text-[12px] font-body font-medium transition-colors duration-200 ${
                    filter === cat
                      ? "bg-sky-500 text-sand-50 border border-sky-500"
                      : "bg-transparent text-slate-600 border border-slate-900/15 hover:border-sky-500 hover:text-sky-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Masonry-style grid — NO scale-on-hover. Filter shift only. */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {visible.slice(0, 24).map((img, i) => {
            const isLarge = i === 0 || i === 7;
            const isTall = i === 3 || i === 10 || i === 16;

            return (
              <ScrollReveal
                key={`${img.src}-${filter}`}
                delay={Math.min(i * 0.03, 0.4)}
                className={`${
                  isLarge ? "md:col-span-2 md:row-span-2" : ""
                } ${isTall ? "row-span-2" : ""}`}
              >
                <figure className="relative overflow-hidden group h-full min-h-[200px] bg-sand-100 rounded-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover img-warm transition-[filter] duration-500 group-hover:saturate-110 group-hover:contrast-105"
                  />

                  {/* Caption — persistent on dark gradient bottom, no slide */}
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent pt-12 pb-3 px-4">
                    <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-sand-50/80">
                      {img.tag}
                    </span>
                  </figcaption>
                </figure>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
