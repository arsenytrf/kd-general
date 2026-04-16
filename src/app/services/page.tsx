"use client";

import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Check,
  Home,
  Hammer,
  PanelLeft,
  Blocks,
  Fence,
  Paintbrush,
  Trees,
  Shovel,
  RectangleHorizontal,
  Wrench,
  HardHat,
  Ruler,
  Layers,
  Building,
  Shield,
  Thermometer,
  Wind,
  Droplets,
  Fan,
  Flame,
  Truck,
  Package,
  Box,
  MapPin,
  Clock,
  Star,
} from "lucide-react";

import { useBusiness } from "@/contexts/BusinessContext";
import Button from "@/components/shared/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CtaBanner from "@/components/home/CtaBanner";

const iconMap: Record<string, React.ElementType> = {
  Home, Hammer, PanelLeft, Blocks, Fence, Paintbrush, Trees, Shovel,
  RectangleHorizontal, Wrench, HardHat, Ruler, Layers, Building, Shield,
  Thermometer, Wind, Droplets, Fan, Flame, Truck, Package, Box, MapPin,
  Clock, Star,
};

export default function ServicesPage() {
  const { company, services } = useBusiness();

  return (
    <>
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-sky" aria-hidden="true" />
        <div className="pointer-events-none absolute -top-40 -right-24 w-[520px] h-[520px] rounded-full bg-sky-100/60 blur-3xl" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 pb-20 md:pt-32 md:pb-28">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[11px] font-body uppercase tracking-[0.22em] font-semibold">
            <Link href="/" className="text-slate-500 hover:text-sky-500 transition-colors">Home</Link>
            <span className="text-sand-300">&middot;</span>
            <span className="text-sky-500">Services</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-sky-500" />
                  <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-500">What we do</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="font-display font-bold uppercase tracking-tight leading-[1.02] text-[44px] sm:text-[56px] md:text-[68px] lg:text-[84px] text-slate-900">
                  One crew for<br />
                  <span className="text-sky-500">the whole property.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-slate-600 text-base md:text-[17px] max-w-2xl leading-relaxed mt-7">
                  {services.length} services, one team, one point of contact. {company.name} handles it all.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-3 mt-8">
                  <Button variant="sky" size="lg" href="/contact">Request a free estimate</Button>
                  <Button variant="outline" size="lg" href={`tel:${company.phoneRaw}`}>
                    <Phone className="w-4 h-4" />
                    {company.phone}
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3} direction="right" className="lg:col-span-4">
              <div className="hidden lg:flex flex-col gap-2 text-right">
                <span className="font-body text-[11px] uppercase tracking-[0.22em] text-slate-500 font-semibold">At a glance</span>
                <div className="text-[56px] font-display font-bold text-slate-900 leading-none tracking-tight">
                  {String(services.length).padStart(2, "0")}
                </div>
                <span className="font-body text-[13px] text-slate-600">services, one phone number</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-sand-200" aria-hidden="true" />
      </section>

      <section className="bg-sand-50 py-20 md:py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-28">
            {services.map((service, index) => {
              const isEven = index % 2 === 1;
              const number = String(index + 1).padStart(2, "0");
              const Icon = iconMap[service.icon] || Wrench;

              return (
                <div key={service.slug} id={service.slug} className="scroll-mt-28">
                  <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                      <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : ""}`}>
                        <div className="relative overflow-hidden group rounded-sm bg-sand-100 shadow-[0_30px_60px_-30px_rgba(26,24,20,0.2)] border border-sand-200">
                          <div className="relative aspect-[4/3]">
                            {service.image && (
                              /* eslint-disable-next-line @next/next/no-img-element */
                              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover img-warm transition-transform duration-700 group-hover:scale-[1.03]" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 via-transparent to-transparent" aria-hidden="true" />
                            <div className="absolute bottom-4 left-4 px-4 py-2 bg-sand-50/95 backdrop-blur-sm rounded-md">
                              <span className="font-display font-bold uppercase tracking-wider text-slate-700 text-[11px]">Service {number}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : ""}`}>
                        <div className="flex items-center gap-3 mb-5">
                          <span className="font-display text-[52px] font-light text-sky-500/30 leading-none">{number}</span>
                          <div className="w-11 h-11 rounded-md bg-sky-500/10 flex items-center justify-center text-sky-500">
                            <Icon className="w-5 h-5" strokeWidth={1.6} />
                          </div>
                        </div>

                        <h2 className="font-display text-[34px] sm:text-[42px] md:text-5xl font-bold uppercase text-slate-900 tracking-tight leading-[1.05] mb-5">
                          {service.title}
                        </h2>

                        <p className="text-slate-600 text-[15px] md:text-base leading-relaxed mb-7">{service.description}</p>

                        {service.includes && service.includes.length > 0 && (
                          <>
                            <span className="block font-body text-[11px] uppercase tracking-[0.22em] font-semibold text-slate-500 mb-3">What&rsquo;s included</span>
                            <ul className="space-y-2.5 mb-8">
                              {service.includes.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-[14px] text-slate-700">
                                  <Check className="w-4 h-4 text-clay-500 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        <Button href="/contact" variant="outline" size="md">
                          Start a quote for {service.title.toLowerCase()}
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </ScrollReveal>

                  {index !== services.length - 1 && (
                    <div className="mt-20 md:mt-28 max-w-md mx-auto rule-hair" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
