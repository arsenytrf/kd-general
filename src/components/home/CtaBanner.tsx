"use client";

import { Phone, ArrowRight } from "lucide-react";
import { useBusiness } from "@/contexts/BusinessContext";
import Button from "@/components/shared/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function CtaBanner() {
  const { company, galleryImages } = useBusiness();

  /* Backdrop photo — full-bleed behind the CTA card */
  /* 2025 recent work */
  const backdrop = galleryImages[2] || galleryImages[0];
  return (
    <section className="relative bg-slate-50 py-24 md:py-32 lg:py-40 overflow-hidden" aria-label="Start a project">
      {/* full-bleed photo backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={backdrop.src}
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 via-slate-50/20 to-slate-50/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="relative bg-sky-950 text-sand-50 rounded-sm overflow-hidden shadow-[0_40px_80px_-40px_rgba(15,31,24,0.45)] border border-sky-800">
          {/* photo inside card */}
          <div className="absolute inset-0 opacity-60" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={(galleryImages[7] || galleryImages[0]).src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute inset-0 bg-sky-950/[0.35]"
            aria-hidden="true"
          />
          <div
            className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-clay-500/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative px-8 md:px-14 lg:px-20 py-16 md:py-20 lg:py-24 text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2.5 mb-6">
                <span className="w-6 h-px bg-clay-500" />
                <span className="font-body text-[11px] uppercase tracking-[0.22em] font-semibold text-clay-300">
                  Ready when you are
                </span>
                <span className="w-6 h-px bg-clay-500" />
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold uppercase tracking-tight leading-[1.02] text-sand-50">
                Let&rsquo;s take a look
                <br />
                <span className="text-clay-300">at your place.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 md:mt-8 text-base md:text-lg text-sand-200/80 max-w-xl mx-auto leading-relaxed">
                Free estimates across {company.serviceArea}. Honest quote,
                clear timeline, no pressure.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-10 md:mt-12">
                <Button variant="white" size="lg" href="/contact">
                  Request a free estimate
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  href={`tel:${company.phoneRaw}`}
                  className="!text-sand-50 hover:!bg-sand-50/10"
                >
                  <Phone className="w-4 h-4" />
                  {company.phone}
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
