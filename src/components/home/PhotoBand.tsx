"use client";

import { useBusiness } from "@/contexts/BusinessContext";

interface PhotoBandProps {
  /** starting index into galleryImages */
  offset?: number;
  /** how many photos to show */
  count?: number;
  /** optional filter by tag */
  tag?: string;
  /** add a hairline eyebrow label above the band */
  eyebrow?: string;
}

/**
 * Full-bleed photo strip — no padding, no gaps, edge-to-edge.
 * Used between major sections to break color rhythm with imagery.
 */
export default function PhotoBand({
  offset = 0,
  count = 5,
  tag,
  eyebrow,
}: PhotoBandProps) {
  const { galleryImages } = useBusiness();

  const pool = tag
    ? galleryImages.filter((i) => i.tag === tag)
    : galleryImages;

  const slice = pool.slice(offset, offset + count);
  if (slice.length === 0) return null;

  return (
    <section className="relative bg-slate-50" aria-hidden="true">
      {eyebrow && (
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 pb-8">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-sky-500" />
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-500">
              {eyebrow}
            </span>
          </div>
        </div>
      )}

      <div
        className={`grid grid-cols-2 md:grid-cols-${Math.min(count, 6)} w-full`}
        style={{
          gridTemplateColumns: `repeat(${slice.length}, minmax(0, 1fr))`,
        }}
      >
        {slice.map((img, i) => (
          <div
            key={img.src + i}
            className="relative aspect-[3/4] md:aspect-square overflow-hidden bg-sand-100"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover img-warm"
            />
            {/* subtle cold edge so the strip reads as one band */}
            {i < slice.length - 1 && (
              <span
                className="absolute top-0 right-0 bottom-0 w-px bg-slate-950/10"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
