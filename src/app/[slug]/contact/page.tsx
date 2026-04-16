"use client";

import Link from "next/link";
import { Phone, MapPin, Clock, Mail, ShieldCheck, ArrowRight } from "lucide-react";
import { useBusiness } from "@/contexts/BusinessContext";
import Button from "@/components/shared/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import QuoteForm from "@/components/contact/QuoteForm";

export default function ContactPage() {
  const { company } = useBusiness();

  const contactCards = [
    { icon: Phone, label: "Call", value: company.phone, href: `tel:${company.phoneRaw}`, note: "Real person, not a call center" },
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}`, note: "For quotes and project questions" },
    { icon: MapPin, label: "Location", value: `${company.address}, ${company.city}`, href: undefined, note: "Visits by appointment" },
    { icon: Clock, label: "Hours", value: company.hours.weekday, href: undefined, note: company.hours.weekend },
  ];

  const mapQuery = encodeURIComponent(`${company.address}, ${company.city}`);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <>
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-sky" aria-hidden="true" />
        <div className="pointer-events-none absolute -top-32 -right-24 w-[500px] h-[500px] rounded-full bg-sky-100/60 blur-3xl" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 pb-14 md:pt-32 md:pb-16">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[11px] font-body uppercase tracking-[0.22em] font-semibold">
            <Link href="/" className="text-slate-500 hover:text-sky-500 transition-colors">Home</Link>
            <span className="text-sand-300">&middot;</span>
            <span className="text-sky-500">Contact</span>
          </nav>

          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-sky-500" />
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-500">Let&rsquo;s talk</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="font-display font-bold uppercase tracking-tight leading-[1.02] text-[44px] sm:text-[56px] md:text-[68px] lg:text-[80px] text-slate-900">
                Tell us about <span className="text-sky-500">your project.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-slate-600 text-base md:text-[17px] max-w-xl leading-relaxed mt-7">
                Free estimate, clear written quote, no pressure. Call us directly or fill out the form below.
              </p>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-sand-200" aria-hidden="true" />
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal>
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2.5 mb-3">
                    <span className="w-5 h-px bg-clay-500" />
                    <span className="font-body text-[11px] uppercase tracking-[0.22em] text-clay-500 font-semibold">Direct lines</span>
                  </span>
                  <h2 className="font-display text-[32px] md:text-[40px] font-bold uppercase text-slate-900 tracking-tight leading-tight">
                    Reach {company.owner}.
                  </h2>
                </div>
              </ScrollReveal>

              {contactCards.map((card, i) => {
                const Icon = card.icon;
                const inner = (
                  <div className="flex items-start gap-4 p-5 bg-slate-900/[0.06] border border-slate-900/10 hover:border-sky-500/50 hover:bg-slate-900/[0.08] transition-all duration-300 rounded-lg group">
                    <div className="shrink-0 w-11 h-11 rounded-md bg-sky-500/10 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-sand-50 transition-all duration-400">
                      <Icon className="w-5 h-5" strokeWidth={1.6} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-[10px] font-body uppercase tracking-[0.22em] text-slate-500 font-semibold mb-1">{card.label}</span>
                      <span className="block font-display text-[17px] font-medium text-slate-900">{card.value}</span>
                      <span className="block text-[12px] text-slate-500 mt-1">{card.note}</span>
                    </div>
                    {card.href && <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500 transition-colors shrink-0 mt-3" />}
                  </div>
                );

                return (
                  <ScrollReveal key={card.label} delay={i * 0.06}>
                    {card.href ? <a href={card.href} className="block">{inner}</a> : inner}
                  </ScrollReveal>
                );
              })}

              <ScrollReveal delay={0.3}>
                <div className="flex items-center gap-2.5 pt-3">
                  <span className="w-8 h-8 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-500">
                    <ShieldCheck className="w-4 h-4" strokeWidth={1.6} />
                  </span>
                  <span className="text-[12px] uppercase tracking-[0.2em] font-semibold text-slate-600">
                    {company.features[0]}
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.35}>
                <div className="pt-4">
                  <Button variant="sky" size="md" href={`tel:${company.phoneRaw}`}>
                    <Phone className="w-4 h-4" />
                    Call {company.phone}
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal delay={0.1}>
                <QuoteForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-sand-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-flex items-center gap-2.5 mb-4">
                <span className="w-5 h-px bg-sky-500" />
                <span className="font-body text-[11px] uppercase tracking-[0.22em] text-sky-500 font-semibold">Where we are</span>
                <span className="w-5 h-px bg-sky-500" />
              </span>
              <h2 className="font-display text-[34px] sm:text-[42px] md:text-5xl font-bold uppercase text-slate-900 tracking-tight leading-[1.03]">
                Serving {company.serviceArea}.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative overflow-hidden rounded-sm border border-sand-200 shadow-[0_24px_60px_-30px_rgba(26,24,20,0.2)]">
              <iframe src={mapSrc} width="100%" height="460" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${company.name} — ${company.city}`} className="w-full block" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {company.cities.map((city) => (
                <span key={city} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-700 bg-slate-900/[0.06] border border-slate-900/10 rounded-sm">
                  <MapPin className="w-3 h-3 text-clay-500" />
                  {city}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
