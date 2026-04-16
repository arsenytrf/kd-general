"use client";

import { Phone, ClipboardCheck, Wrench, ThumbsUp, ArrowRight } from "lucide-react";
import { useBusiness } from "@/contexts/BusinessContext";
import ScrollReveal from "@/components/shared/ScrollReveal";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "The walkthrough",
    description:
      "Free on-site visit. Gabe listens, asks the right questions, and checks what the job actually needs — no upsell theater.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "The quote",
    description:
      "A written estimate with clear line items. No change-order surprises later. If we find something, we call before we touch it.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "The build",
    description:
      "Our crew on your property, with daily updates. We keep site clean each evening so your place still feels like home.",
  },
  {
    number: "04",
    icon: ThumbsUp,
    title: "The final walk",
    description:
      "We walk the finished work with you. Punch list anything that's off. You don't sign off until it's right.",
  },
];

export default function ProcessTimeline() {
  const { galleryImages } = useBusiness();

  /* Backdrop mosaic */
  /* 2025 recent work for backdrop */
  const backdrops = [4, 8, 11, 1].map((i) => galleryImages[i % galleryImages.length]);
  return (
    <section className="relative bg-sky-950 text-sand-50 py-28 md:py-36 lg:py-44 overflow-hidden">
      {/* Photo backdrop mosaic */}
      <div className="absolute inset-0 grid grid-cols-4" aria-hidden="true">
        {backdrops.map((img, i) => (
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

      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(247,243,236,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(247,243,236,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-sky-950/[0.30]"
        aria-hidden="true"
      />

      {/* Ambient accent */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-sky-500/15 blur-3xl rounded-full" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-clay-500/10 blur-3xl rounded-full" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-clay-500" />
              <span className="font-body text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-clay-300">
                Our process
              </span>
              <span className="w-8 h-px bg-clay-500" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold uppercase tracking-tight leading-[1.02] text-sand-50">
              Four steps.
              <br />
              <span className="text-clay-400">No runaround.</span>
            </h2>
            <p className="mt-6 text-sand-200/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              Every project follows the same path — from your first call to the
              final walk.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          <div
            className="hidden lg:block absolute top-[56px] left-[12.5%] right-[12.5%] h-px"
            aria-hidden="true"
          >
            <svg className="w-full h-px overflow-visible" preserveAspectRatio="none">
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="rgba(247,243,236,0.4)"
                strokeWidth="1.5"
                strokeDasharray="6 10"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.number} delay={i * 0.1}>
                  <div className="relative">
                    <span
                      className="absolute -top-10 left-1/2 -translate-x-1/2 font-display text-[160px] md:text-[180px] font-light leading-none select-none pointer-events-none text-sand-50/[0.08]"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>

                    <div className="relative flex flex-col items-center text-center pt-6">
                      <div className="relative mb-8">
                        <div className="w-[112px] h-[112px] rounded-full bg-sky-800/60 border border-sand-50/15 flex items-center justify-center backdrop-blur-sm">
                          <Icon
                            className="w-9 h-9 text-sand-50"
                            strokeWidth={1.4}
                          />
                        </div>

                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-clay-500 text-sand-50 font-body text-[10px] font-semibold uppercase tracking-[0.22em] rounded-full">
                          Step {step.number}
                        </div>
                      </div>

                      <h3 className="font-display text-2xl md:text-[26px] font-bold text-sand-50 mb-4 leading-tight tracking-tight">
                        {step.title}
                      </h3>

                      <p className="text-[14px] text-sand-200/80 leading-relaxed max-w-[260px]">
                        {step.description}
                      </p>

                      {i < steps.length - 1 && (
                        <div className="lg:hidden mt-10 text-sand-50/30">
                          <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-20 md:mt-28 flex items-center justify-center gap-5">
            <span className="font-body text-[11px] uppercase tracking-[0.22em] text-sand-300/60 font-semibold">
              First call
            </span>
            <span className="flex-1 max-w-xs h-px bg-gradient-to-r from-transparent via-sand-200/40 to-transparent" />
            <span className="font-body text-[11px] uppercase tracking-[0.22em] text-sand-300/60 font-semibold">
              Keys back
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
