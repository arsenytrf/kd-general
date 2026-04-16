"use client";

import { useBusiness } from "@/contexts/BusinessContext";
import ScrollReveal from "@/components/shared/ScrollReveal";

interface QuotePhotoProps {
  /** index into reviews array */
  reviewIndex?: number;
  /** index into galleryImages */
  imageIndex?: number;
}

/**
 * Full-width editorial break — large photo on the left,
 * pulled-out testimonial on the right. Replaces the old
 * ParallaxBreak with something earned by real content.
 */
export default function QuotePhoto({
  reviewIndex = 2,
  imageIndex = 13,
}: QuotePhotoProps) {
  const { galleryImages, reviews } = useBusiness();
  const review = reviews[reviewIndex % reviews.length];
  const image = galleryImages[imageIndex % galleryImages.length];

  return (
    <section className="relative bg-sky-950 text-sand-50 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
        {/* Photo side — full bleed */}
        <div className="relative min-h-[340px] lg:min-h-[600px] bg-sand-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* light wash */}
          <div className="absolute inset-0 bg-sky-950/20" />
        </div>

        {/* Quote side */}
        <div className="relative flex items-center px-8 md:px-14 lg:px-20 py-16 md:py-24">
          {/* tiled photo backdrop at very low opacity for texture */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `url(${galleryImages[(imageIndex + 3) % galleryImages.length].src})`,
              backgroundSize: "400px auto",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-sky-950/[0.40]"
            aria-hidden="true"
          />

          <ScrollReveal className="relative">
            <span className="inline-flex items-center gap-2.5 mb-6">
              <span className="w-6 h-px bg-clay-400" />
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-clay-300">
                From a neighbor
              </span>
            </span>

            <blockquote>
              <p className="font-display text-2xl sm:text-3xl md:text-[34px] italic leading-[1.35] text-sand-50">
                &ldquo;{review.quote}&rdquo;
              </p>
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-3">
              <span className="font-display text-[16px] text-sand-50 font-bold">
                {review.name}
              </span>
              <span className="w-4 h-px bg-sand-300/50" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-sand-300/70 font-semibold">
                {review.project}
              </span>
            </figcaption>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
