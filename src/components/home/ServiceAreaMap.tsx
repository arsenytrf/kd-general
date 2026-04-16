"use client";

import { MapPin } from "lucide-react";
import { useBusiness } from "@/contexts/BusinessContext";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ServiceAreaMap() {
  const { company } = useBusiness();

  return (
    <section
      className="relative bg-slate-50 py-24 md:py-32 lg:py-40 overflow-hidden"
      aria-labelledby="area-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Where we work"
            title={`Rooted in ${company.location}. Serving the area.`}
            description={`We proudly serve ${company.serviceArea}. If your property is nearby and we didn't list it below, call and ask.`}
            light
          />
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
          {company.cities.map((city, i) => (
            <ScrollReveal key={city} delay={Math.min(i * 0.04, 0.5)}>
              <div className="flex items-center gap-2 px-5 py-3 md:px-6 md:py-3.5 border border-slate-900/10 bg-slate-900/[0.06] rounded-sm">
                <MapPin className="w-3.5 h-3.5 text-clay-500 shrink-0" />
                <span className="font-display text-base md:text-lg font-bold text-slate-800">
                  {city}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-center text-slate-600 text-sm mt-12 max-w-xl mx-auto leading-relaxed">
            Don&rsquo;t see your neighborhood? We probably still cover it —{" "}
            <a
              href={`tel:${company.phoneRaw}`}
              className="text-sky-500 hover:text-sky-600 underline underline-offset-4 decoration-slate-900/20 transition-colors"
            >
              call {company.phone}
            </a>
            {" "}and we&rsquo;ll tell you straight.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
