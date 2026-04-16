"use client";

import { Quote } from "lucide-react";
import { useBusiness } from "@/contexts/BusinessContext";
import ScrollReveal from "@/components/shared/ScrollReveal";
import Button from "@/components/shared/Button";

export default function OwnerStrip() {
  const { company, galleryImages } = useBusiness();
  /* A small visual stack of three photos next to Gabe's letter */
  /* 2025 strongest photos */
  const stack = [galleryImages[2] || galleryImages[0], galleryImages[5] || galleryImages[1], galleryImages[8] || galleryImages[2] || galleryImages[0]];

  return (
    <section className="relative bg-slate-50 py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-900/10" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-900/10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">

          {/* Photo stack — three offset portrait cards */}
          <ScrollReveal className="md:col-span-5">
            <div className="relative h-[420px] md:h-[480px]">
              {stack.map((img, i) => (
                <div
                  key={i}
                  className={`absolute w-[60%] aspect-[3/4] overflow-hidden rounded-sm bg-sand-100 shadow-[0_20px_50px_-25px_rgba(26,24,20,0.3)] border border-sand-50`}
                  style={{
                    top: `${i * 12}%`,
                    left: `${i * 18}%`,
                    zIndex: 10 - i,
                    transform: `rotate(${(i - 1) * 3}deg)`,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover img-warm"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Note from Gabe */}
          <ScrollReveal className="md:col-span-7" delay={0.15}>
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-px bg-clay-500" />
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-clay-500">
                  Meet the owner
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl md:text-[56px] leading-[1.02] text-slate-900 tracking-tight mb-8 uppercase">
                <span className="font-bold">{company.owner}</span>
                <span className="font-bold text-slate-700">
                  {" "}&amp; the crew.
                </span>
              </h2>

              <Quote
                className="absolute -top-2 left-[-14px] w-10 h-10 text-sky-500/15"
                aria-hidden="true"
                strokeWidth={1.2}
              />

              <p className="font-display text-[20px] sm:text-[22px] leading-[1.45] text-slate-800">
                I started {company.name} so homeowners here in the valley would have
                one number to call when something breaks — or when they&rsquo;re ready to
                make the place theirs.
              </p>
              <p className="mt-5 font-body text-[15px] leading-relaxed text-slate-600 max-w-xl">
                We show up when we said we would. We&rsquo;re honest about what the job
                needs — and what it doesn&rsquo;t. And we leave the property clean.
                That&rsquo;s the whole thing.
              </p>

              <div className="mt-7 flex items-center gap-4">
                <span className="font-display font-bold uppercase tracking-wider text-[22px] text-sky-500 leading-none">
                  {company.owner}
                </span>
                <span className="h-px flex-1 max-w-[60px] bg-slate-900/15" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500 font-semibold">
                  Founder · Since {company.founded}
                </span>
              </div>

              <div className="mt-8">
                <Button variant="ghost" size="sm" href="/about">
                  Read the full story →
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
