"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu } from "lucide-react";
import { cn } from "@/lib/cn";
import { useBusiness } from "@/contexts/BusinessContext";
import Logo from "@/components/shared/Logo";
import MobileDrawer from "./MobileDrawer";

export default function Navbar() {
  const { company, navLinks, ctaLink } = useBusiness();
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    setScrolled(currentY > 20);

    if (currentY > 200) {
      setHideNav(currentY > lastScrollY);
    } else {
      setHideNav(false);
    }

    setLastScrollY(currentY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
          hideNav && "-translate-y-full"
        )}
      >
        <nav
          className={cn(
            "transition-all duration-300",
            scrolled
              ? "bg-white/95 backdrop-blur-xl backdrop-saturate-150 border-b border-slate-900/5"
              : "bg-white"
          )}
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
            <Logo />

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-9">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative text-[14px] font-body font-medium transition-colors duration-300",
                      isActive
                        ? "text-sky-500"
                        : "text-slate-700 hover:text-sky-500"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-sky-500 rounded-full" />
                    )}
                  </Link>
                );
              })}

              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-center gap-2 text-[13px] font-medium text-slate-600 hover:text-sky-500 transition-colors duration-300"
              >
                <Phone className="h-3.5 w-3.5" />
                {company.phone}
              </a>

              <Link
                href={ctaLink.href}
                className="ml-1 px-6 py-2.5 bg-sky-500 hover:bg-sky-600 text-sand-50 text-[13px] font-body font-semibold tracking-wide rounded-sm transition-all duration-300 shadow-[0_4px_14px_-4px_rgba(44,74,62,0.35)] hover:shadow-[0_8px_20px_-4px_rgba(44,74,62,0.45)]"
              >
                Free estimate
              </Link>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="lg:hidden flex items-center gap-3">
              <a
                href={`tel:${company.phoneRaw}`}
                className="p-2 text-sky-500 hover:text-sky-600 transition-colors duration-300"
                aria-label="Call now"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                onClick={() => setDrawerOpen(true)}
                className="p-2 text-slate-700 hover:text-slate-900 transition-colors duration-300"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="h-[72px]" />

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
