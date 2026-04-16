"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useBusiness } from "@/contexts/BusinessContext";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ReviewsSection() {
  const { reviews, company, galleryImages } = useBusiness();

  /* Backdrop photos — low-opacity texture behind dark section */
  /* 2025 recent work for backdrop */
  const backdropPhotos = [3, 6, 9, 13].map((i) => galleryImages[i % galleryImages.length]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % reviews.length);
  }, []);

  const prev = () => {
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const current = reviews[index];

  return (
    <section
      className="relative bg-sky-950 text-sand-50 py-24 md:py-32 lg:py-40 overflow-hidden"
      aria-labelledby="reviews-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Photo mosaic backdrop, 4 tiles low-opacity */}
      <div className="absolute inset-0 grid grid-cols-4" aria-hidden="true">
        {backdropPhotos.map((img, i) => (
          <div key={i} className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
          </div>
        ))}
      </div>
      <div
        className="absolute inset-0 bg-sky-950/[0.35]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-clay-500" />
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-clay-300">
                Neighbors who&rsquo;ve hired us
              </span>
              <span className="w-6 h-px bg-clay-500" />
            </div>

            <h2
              id="reviews-heading"
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight leading-[1.02]"
            >
              {company.rating.stars}★ across{" "}
              {company.rating.count} Google reviews.
            </h2>
            <p className="mt-5 text-sand-200/75 text-base max-w-xl mx-auto leading-relaxed">
              Every quote below is from a real Google review. Names and projects unchanged.
            </p>
          </div>
        </ScrollReveal>

        {/* Review card */}
        <ScrollReveal delay={0.15}>
          <div className="relative">
            <Quote
              className="absolute -top-8 left-0 w-16 h-16 text-sand-50/[0.08]"
              aria-hidden="true"
              strokeWidth={1}
            />

            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-center px-2 md:px-12"
              >
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-clay-500 text-clay-500" />
                  ))}
                </div>

                <blockquote>
                  <p className="font-display text-xl sm:text-2xl md:text-[28px] leading-[1.45] italic text-sand-50 max-w-3xl mx-auto">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </blockquote>

                <figcaption className="mt-8 flex flex-col items-center gap-1.5">
                  <span className="font-display text-[17px] text-sand-50 font-bold">
                    {current.name}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-sand-300/70 font-semibold">
                    {current.project}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-8 mt-12">
              <button
                onClick={prev}
                className="p-3 rounded-sm border border-sand-50/20 text-sand-50/60 hover:text-sand-50 hover:border-sand-50/60 transition-colors duration-200"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-colors duration-300 ${
                      i === index ? "w-8 bg-clay-500" : "w-1.5 bg-sand-50/25 hover:bg-sand-50/50"
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-sm border border-sand-50/20 text-sand-50/60 hover:text-sand-50 hover:border-sand-50/60 transition-colors duration-200"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
