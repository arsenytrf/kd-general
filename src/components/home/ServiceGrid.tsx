"use client";

import Link from "next/link";
import {
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
} from "lucide-react";
import { useBusiness } from "@/contexts/BusinessContext";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";

const iconMap: Record<string, React.ElementType> = {
  Home,
  Hammer,
  PanelLeft,
  Blocks,
  Fence,
  Paintbrush,
  Trees,
  Shovel,
  RectangleHorizontal,
};

export default function ServiceGrid() {
  const { services } = useBusiness();

  return (
    <section className="bg-slate-50 py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="What we do"
            title="The whole property, one crew."
            description="We're a full-service outfit — exteriors, interiors, structural, and the ground around it. Hire us once for one thing, then call us when you need the next thing."
            light
            align="left"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <ScrollReveal key={service.slug} delay={i * 0.05}>
                <Link
                  href="/services"
                  className="group relative block overflow-hidden rounded-lg border border-slate-900/10 bg-slate-900/[0.06] transition-colors duration-300 hover:border-sky-500/40"
                >
                  {/* Photo — visible through, lighter wash */}
                  {service.image && (
                    <div className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity duration-500">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={service.image}
                        alt=""
                        className="w-full h-full object-cover img-warm"
                        aria-hidden="true"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-50/70 via-slate-50/40 to-slate-50/25" />
                    </div>
                  )}

                  <div className="relative p-7 md:p-8 flex flex-col h-full min-h-[260px]">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-11 h-11 rounded-md bg-slate-50 border border-slate-900/10 flex items-center justify-center text-sky-500">
                        <Icon className="w-5 h-5" strokeWidth={1.6} />
                      </div>
                      <span className="font-body text-[11px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="font-display text-[22px] md:text-[24px] font-bold text-slate-900 mb-3 leading-tight tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-[14px] text-slate-700 leading-relaxed flex-1">
                      {service.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-body uppercase tracking-[0.2em] text-sky-500 font-semibold">
                      See what&rsquo;s included →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
