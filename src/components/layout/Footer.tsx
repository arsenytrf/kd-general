"use client";

import Link from "next/link";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { useBusiness } from "@/contexts/BusinessContext";
import Logo from "@/components/shared/Logo";

export default function Footer() {
  const { company, services, navLinks } = useBusiness();
  return (
    <footer className="bg-sky-950 text-sand-50 relative">
      {/* Hair accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-sand-300/30" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-14">
          {/* Brand */}
          <div className="md:col-span-4">
            <Logo tone="light" />
            <p className="mt-5 text-[14px] text-sand-200/75 leading-relaxed max-w-sm">
              {company.description}
            </p>

            <div className="mt-6 inline-flex items-center gap-2.5 px-3.5 py-2 border border-sand-50/15 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-clay-500" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-sand-100">
                Licensed · Bonded · Insured
              </span>
            </div>
          </div>

          {/* Pages */}
          <div className="md:col-span-2">
            <h3 className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-sand-300/70 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-sand-100/80 hover:text-sand-50 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-sand-300/70 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/services"
                    className="text-[14px] text-sand-100/80 hover:text-sand-50 transition-colors duration-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-sand-300/70 mb-4">
              Reach us
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-start gap-2.5 text-[14px] text-sand-100/80 hover:text-sand-50 transition-colors duration-300"
              >
                <Phone className="h-3.5 w-3.5 text-clay-500 mt-1 shrink-0" />
                <span>{company.phone}</span>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-start gap-2.5 text-[14px] text-sand-100/80 hover:text-sand-50 transition-colors duration-300 break-all"
              >
                <Mail className="h-3.5 w-3.5 text-clay-500 mt-1 shrink-0" />
                <span>{company.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-[14px] text-sand-100/80">
                <MapPin className="h-3.5 w-3.5 text-clay-500 mt-1 shrink-0" />
                <span>
                  {company.address}
                  <br />
                  {company.city}
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-[14px] text-sand-100/80">
                <Clock className="h-3.5 w-3.5 text-clay-500 mt-1 shrink-0" />
                <span>
                  {company.hours.weekday}
                  <br />
                  {company.hours.weekend}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Service area tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-sand-300/70 mr-1 py-1">
            Proudly serving
          </span>
          {company.cities.map((city) => (
            <span
              key={city}
              className="px-2.5 py-1 text-[11px] text-sand-100/90 bg-sand-50/[0.04] border border-sand-50/10 rounded-md"
            >
              {city}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-7 border-t border-sand-50/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-sand-300/60">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="font-display font-bold uppercase tracking-wider">
            Built with care. Left clean.
          </p>
        </div>
      </div>
    </footer>
  );
}
