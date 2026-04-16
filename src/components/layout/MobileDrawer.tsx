"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { useBusiness } from "@/contexts/BusinessContext";
import Logo from "@/components/shared/Logo";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} as const;

const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring" as const, damping: 30, stiffness: 300, mass: 0.8 },
  },
  exit: {
    x: "100%",
    transition: { type: "spring" as const, damping: 30, stiffness: 300, mass: 0.8 },
  },
} as const;

const linkVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 25, stiffness: 200, delay: 0.1 + i * 0.08 },
  }),
} as const;

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const { company, navLinks, ctaLink } = useBusiness();

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-slate-950/40 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          <motion.div
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm bg-slate-50 shadow-2xl overflow-y-auto flex flex-col"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-7 py-5">
              <div onClick={onClose}>
                <Logo />
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-500 hover:text-slate-900 transition-colors duration-300"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Hair divider */}
            <div className="mx-7 h-px bg-sand-300" />

            {/* Navigation links */}
            <nav className="px-7 pt-10 pb-8 space-y-5 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link href={link.href} onClick={onClose} className="block group">
                    <span className="font-display text-[40px] leading-[1.05] font-bold text-slate-900 group-hover:text-sky-500 transition-colors tracking-tight uppercase">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Divider */}
            <div className="mx-7 h-px bg-sand-300" />

            {/* Contact info */}
            <div className="px-7 py-6 space-y-3">
              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-center gap-3 text-slate-700 hover:text-sky-500 transition-colors duration-300"
              >
                <Phone className="h-4 w-4 text-sky-500 shrink-0" />
                <span className="text-sm font-medium">{company.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-600">
                <MapPin className="h-4 w-4 text-sky-500 shrink-0" />
                <span className="text-sm">{company.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Clock className="h-4 w-4 text-sky-500 shrink-0" />
                <span className="text-sm">{company.hours.weekday}</span>
              </div>
            </div>

            {/* Licensed badge */}
            <div className="mx-7 flex items-center gap-2.5 px-4 py-3 bg-sand-100 border border-sand-200 rounded-md">
              <span className="h-1.5 w-1.5 bg-sky-500 rounded-full" />
              <span className="text-[11px] text-sky-500 font-body font-semibold tracking-[0.2em] uppercase">
                Licensed · Bonded · Insured
              </span>
            </div>

            {/* CTA button */}
            <div className="px-7 py-7">
              <Link
                href={ctaLink.href}
                onClick={onClose}
                className="relative flex items-center justify-center gap-2 w-full py-4 bg-sky-500 hover:bg-sky-600 text-sand-50 font-body font-semibold text-sm rounded-sm overflow-hidden transition-colors group shadow-[0_8px_24px_-8px_rgba(44,74,62,0.45)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request a free estimate
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
