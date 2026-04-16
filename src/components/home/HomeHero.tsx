"use client";

import { useRef, useEffect } from "react";
import { Phone, ArrowDown, Star } from "lucide-react";
import { useBusiness } from "@/contexts/BusinessContext";
import Button from "@/components/shared/Button";

export default function HomeHero() {
  const { company, heroImage } = useBusiness();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let ctx: ReturnType<typeof import("gsap").default.context> | undefined;

    async function init() {
      const { default: gsap } = await import("gsap");
      if (!el) return;

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo("[data-hero-eyebrow]", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 })
          .fromTo("[data-hero-headline] > span", { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 }, "-=0.4")
          .fromTo("[data-hero-sub]", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
          .fromTo("[data-hero-cta] > *", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, "-=0.4")
          .fromTo("[data-hero-photo]", { opacity: 0, y: 24, rotateZ: -1 }, { opacity: 1, y: 0, rotateZ: 2, duration: 1.2 }, "-=0.9")
          .fromTo("[data-hero-meta]", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.5");
      }, el);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative bg-slate-50 overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* warm gradient mesh */}
      <div className="absolute inset-0 gradient-mesh-sky" aria-hidden="true" />

      {/* soft ambient blobs */}
      <div
        className="pointer-events-none absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-sky-100/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-180px] left-[-120px] w-[420px] h-[420px] rounded-full bg-clay-100/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-10 md:pt-14 lg:pt-20 pb-16 md:pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left — editorial copy */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div data-hero-eyebrow className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-sky-500" />
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-500">
                {company.features[0]} · {company.location}
              </span>
            </div>

            {/* Headline — serif display */}
            <h1
              id="hero-headline"
              data-hero-headline
              className="font-display font-bold uppercase text-slate-900 tracking-tight leading-[1.02] text-[44px] sm:text-[56px] md:text-[68px] lg:text-[84px]"
            >
              <span className="block">{company.tagline.split(".")[0]}.</span>
              <span className="block text-sky-500">
                {company.tagline.split(".")[1]?.trim() || company.shortName}.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              data-hero-sub
              className="mt-7 text-slate-600 text-base md:text-[17px] leading-relaxed max-w-[560px]"
            >
              {company.description}
            </p>

            {/* CTAs */}
            <div data-hero-cta className="mt-9 flex flex-wrap items-center gap-3">
              <Button variant="sky" size="lg" href="/contact">
                Request a free estimate
              </Button>
              <Button variant="outline" size="lg" href={`tel:${company.phoneRaw}`}>
                <Phone className="w-4 h-4" />
                {company.phone}
              </Button>
            </div>

            {/* Meta row */}
            <div
              data-hero-meta
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-slate-500"
            >
              <span className="inline-flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-clay-500 text-clay-500" />
                <Star className="w-3.5 h-3.5 fill-clay-500 text-clay-500" />
                <Star className="w-3.5 h-3.5 fill-clay-500 text-clay-500" />
                <Star className="w-3.5 h-3.5 fill-clay-500 text-clay-500" />
                <Star className="w-3.5 h-3.5 fill-clay-500 text-clay-500" />
                <span className="ml-1 font-medium text-slate-700">
                  {company.rating.stars}
                </span>
                <span>· {company.rating.count} Google reviews</span>
              </span>
              <span className="hidden sm:inline w-px h-4 bg-sand-300" />
              <span>Licensed · Bonded · Insured</span>
              <span className="hidden sm:inline w-px h-4 bg-sand-300" />
              <span>Since {company.founded}</span>
            </div>

            {/* Scroll hint (desktop) */}
            <div className="hidden lg:flex mt-14 items-center gap-2 text-slate-400 text-[11px] font-body uppercase tracking-[0.22em]">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              <span>Scroll</span>
            </div>
          </div>

          {/* Right — framed portrait photo card */}
          <div className="lg:col-span-5">
            <div data-hero-photo className="relative mx-auto lg:mx-0 max-w-sm">
              {/* Clay keyline mat */}
              <div className="relative p-3 bg-sand-50 rounded-sm shadow-[0_24px_60px_-24px_rgba(26,24,20,0.25)] border border-sand-200 ring-1 ring-slate-900/[0.03]">
                <div className="relative overflow-hidden rounded-sm aspect-[3/4] bg-sand-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={heroImage}
                    alt={`Recent ${company.name} project`}
                    className="absolute inset-0 w-full h-full object-cover img-warm"
                  />
                  {/* subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
                </div>

                {/* caption plate */}
                <div className="flex items-center justify-between pt-3 pb-1 px-1 text-[11px] font-body">
                  <span className="uppercase tracking-[0.2em] text-slate-500 font-semibold">
                    Recent work · No. 01
                  </span>
                  <span className="font-display font-bold uppercase tracking-wider text-slate-600 text-[10px]">
                    {company.location}
                  </span>
                </div>
              </div>

              {/* Floating review badge */}
              <div className="absolute -left-4 sm:-left-8 bottom-10 bg-sky-950 text-sand-50 rounded-sm px-4 py-3 shadow-xl max-w-[230px] border border-sky-800">
                <div className="flex items-center gap-1 mb-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-clay-500 text-clay-500" />
                  ))}
                </div>
                <p className="text-[12px] leading-snug text-sand-100/90">
                  &ldquo;Honest fair quote, squeezed me in last minute, done in days.&rdquo;
                </p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-sand-300/70 font-semibold">
                  K. Norgaard · Roofing
                </p>
              </div>

              {/* Small "Since 2010" stamp */}
              <div className="hidden md:flex absolute -top-5 -right-5 bg-clay-500 text-sand-50 rounded-full w-20 h-20 flex-col items-center justify-center shadow-lg rotate-[8deg] border-4 border-sand-50">
                <span className="font-display font-bold uppercase text-[11px] opacity-80">Since</span>
                <span className="font-display font-semibold text-lg leading-none">
                  {company.founded}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-sand-200" aria-hidden="true" />
    </section>
  );
}
