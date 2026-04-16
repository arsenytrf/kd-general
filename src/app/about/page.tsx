"use client";

import Link from "next/link";
import { Phone, Handshake, Sparkles, ShieldCheck, ArrowRight, Quote as QuoteIcon } from "lucide-react";
import { useBusiness } from "@/contexts/BusinessContext";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CtaBanner from "@/components/home/CtaBanner";

const values = [
  {
    icon: Handshake,
    title: "The handshake holds",
    description: "If we said we'd be there Monday, we're there Monday. If we quoted the number, that's the number.",
  },
  {
    icon: Sparkles,
    title: "Clean as we go",
    description: "You shouldn't have to feel like your home is a job site. We clean up every evening before we leave.",
  },
  {
    icon: ShieldCheck,
    title: "Details done right",
    description: "Permits, inspections, insurance, warranty paperwork — the boring stuff that matters when it counts.",
  },
];

export default function AboutPage() {
  const { company, reviews, galleryImages } = useBusiness();
  const leadReview = reviews[0];
  const aboutImage = galleryImages[3] || galleryImages[0];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-sky" aria-hidden="true" />
        <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-clay-100/40 blur-3xl" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[11px] font-body uppercase tracking-[0.22em] font-semibold">
            <Link href="/" className="text-slate-500 hover:text-sky-500 transition-colors">Home</Link>
            <span className="text-sand-300">&middot;</span>
            <span className="text-sky-500">About</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-sky-500" />
                  <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-500">
                    About {company.shortName}
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="font-display font-bold uppercase tracking-tight leading-[1.02] text-[44px] sm:text-[56px] md:text-[68px] lg:text-[80px] text-slate-900">
                  A local crew.<br />
                  <span className="text-sky-500">Built on trust.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-slate-600 text-base md:text-[17px] max-w-xl leading-relaxed mt-7">
                  {company.name} was started by {company.owner} in {company.founded}. We serve {company.serviceArea} with {company.rating.count} {company.rating.source} reviews and a {company.rating.stars}-star rating. Our clients come back because we deliver on what we promise.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-3 mt-8">
                  <Button variant="sky" size="lg" href="/contact">Work with us</Button>
                  <Button variant="outline" size="lg" href={`tel:${company.phoneRaw}`}>
                    <Phone className="w-4 h-4" />
                    {company.phone}
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3} direction="right" className="lg:col-span-5">
              <div className="relative mx-auto lg:mx-0 max-w-sm">
                <div className="relative p-3 bg-sand-50 rounded-sm shadow-[0_24px_60px_-24px_rgba(26,24,20,0.25)] border border-sand-200">
                  <div className="relative overflow-hidden rounded-sm aspect-[3/4] bg-sand-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={aboutImage.src} alt={`${company.name} project`} className="absolute inset-0 w-full h-full object-cover img-warm" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
                  </div>
                  <div className="flex items-center justify-between pt-3 pb-1 px-1 text-[11px] font-body">
                    <span className="uppercase tracking-[0.2em] text-slate-500 font-semibold">Since {company.founded}</span>
                    <span className="font-display font-bold uppercase tracking-wider text-slate-600 text-[10px]">{company.location}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-sand-200" aria-hidden="true" />
      </section>

      {/* Owner letter */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-clay-500" />
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-clay-500">
                A note from {company.owner}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="font-display text-[22px] md:text-[26px] leading-[1.5] text-slate-800 space-y-6">
              <p>
                I started {company.name} because people around here deserve a contractor they can actually trust. No runaround, no surprise charges, no disappearing acts.
              </p>
              <p>
                We take care of {company.serviceArea} — and after {new Date().getFullYear() - company.founded} years of doing this, the thing I&rsquo;m most proud of is how many clients call us back for the next project. That&rsquo;s the only metric that matters.
              </p>
              <p>
                If you hire us once, we&rsquo;d like to still be your first call in ten years.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="font-display font-bold uppercase tracking-wider text-[28px] text-sky-500 leading-none">
                {company.owner}
              </span>
              <span className="h-px flex-1 max-w-[80px] bg-sand-300" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500 font-semibold">
                Founder &middot; {company.name}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand-50 py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader label="What we stand on" title="Three things, held hard." description="These aren't marketing lines. They're the things our reviews keep mentioning — so they're what we protect." light align="left" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {values.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="relative bg-slate-900/[0.06] border border-slate-900/10 rounded-lg p-8 h-full group transition-all duration-400 hover:border-sky-500/40 hover:bg-slate-900/[0.08]">
                    <div className="w-12 h-12 rounded-md bg-sky-500/10 flex items-center justify-center mb-5 text-sky-500 group-hover:bg-sky-500 group-hover:text-sand-50 transition-all duration-400">
                      <Icon className="w-5 h-5" strokeWidth={1.6} />
                    </div>
                    <h3 className="font-display text-[22px] font-bold text-slate-900 mb-3 tracking-tight leading-tight">{item.title}</h3>
                    <p className="text-[14px] text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pull testimonial */}
      {leadReview && (
        <section className="bg-sky-950 text-sand-50 py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
            <QuoteIcon className="w-12 h-12 mx-auto text-sand-50/15" strokeWidth={1} aria-hidden="true" />
            <blockquote className="mt-8">
              <p className="font-display text-2xl sm:text-3xl md:text-[36px] leading-[1.35] italic">
                &ldquo;{leadReview.quote}&rdquo;
              </p>
              <footer className="mt-8 flex items-center justify-center gap-3">
                <span className="w-8 h-px bg-clay-500" />
                <cite className="not-italic font-body text-[11px] uppercase tracking-[0.22em] text-clay-300 font-semibold">
                  {leadReview.name} &middot; {leadReview.project}
                </cite>
                <span className="w-8 h-px bg-clay-500" />
              </footer>
            </blockquote>

            <div className="mt-10">
              <Button variant="white" size="md" href="/contact">
                Start a project with us <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
