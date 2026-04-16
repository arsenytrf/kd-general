"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { useBusiness } from "@/contexts/BusinessContext";

interface LogoProps {
  tone?: "dark" | "light";
  className?: string;
}

export default function Logo({ tone = "dark", className }: LogoProps) {
  const { logoImage, company } = useBusiness();
  const isDark = tone === "dark";

  /* Split name into primary + secondary (e.g. "Three Pines" + "Construction") */
  const words = company.name.split(" ");
  const lastWord = words.length > 1 ? words.pop() : "";
  const mainWords = words.join(" ");

  return (
    <Link href="/" className={cn("inline-flex items-center gap-3 group", className)} aria-label={`${company.name} — home`}>
      <span className="flex flex-col leading-[1.05]">
        <span className={cn("font-display font-bold uppercase text-[16px] tracking-wider", isDark ? "text-slate-900" : "text-sand-50")}>
          {mainWords || company.shortName}
        </span>
        {lastWord && (
          <span className={cn("font-body text-[9.5px] font-semibold uppercase tracking-[0.22em] mt-0.5", isDark ? "text-sky-500" : "text-sand-200/80")}>
            {lastWord}
          </span>
        )}
      </span>
    </Link>
  );
}
