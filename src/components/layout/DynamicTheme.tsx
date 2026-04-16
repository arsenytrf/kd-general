"use client";

import { useBusiness } from "@/contexts/BusinessContext";

/** Injects business-specific CSS custom properties at runtime.
 *  This overrides the @theme defaults in globals.css per-business. */
export default function DynamicTheme() {
  const { theme } = useBusiness();
  const { colors, fonts, radius: r } = theme;

  const radiusMap = {
    sharp: { xs: "0px", sm: "2px", md: "3px", lg: "4px", xl: "6px", "2xl": "8px", "3xl": "10px", "4xl": "12px" },
    soft: { xs: "2px", sm: "4px", md: "6px", lg: "10px", xl: "14px", "2xl": "18px", "3xl": "22px", "4xl": "26px" },
    rounded: { xs: "4px", sm: "6px", md: "8px", lg: "12px", xl: "16px", "2xl": "20px", "3xl": "24px", "4xl": "9999px" },
  };

  const rad = radiusMap[r];

  /* Build CSS variable overrides */
  const vars: Record<string, string> = {};

  /* Colors */
  for (const [shade, hex] of Object.entries(colors.sky)) {
    vars[`--color-sky-${shade}`] = hex;
  }
  for (const [shade, hex] of Object.entries(colors.sand)) {
    vars[`--color-sand-${shade}`] = hex;
  }
  for (const [shade, hex] of Object.entries(colors.slate)) {
    vars[`--color-slate-${shade}`] = hex;
  }
  for (const [shade, hex] of Object.entries(colors.accent)) {
    vars[`--color-clay-${shade}`] = hex;
  }

  /* Fonts */
  vars["--font-display"] = `"${fonts.display}", Impact, "Arial Narrow", sans-serif`;
  vars["--font-body"] = `"${fonts.body}", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;

  /* Radius */
  vars["--radius-xs"] = rad.xs;
  vars["--radius-sm"] = rad.sm;
  vars["--radius-md"] = rad.md;
  vars["--radius-lg"] = rad.lg;
  vars["--radius-xl"] = rad.xl;
  vars["--radius-2xl"] = rad["2xl"];
  vars["--radius-3xl"] = rad["3xl"];
  vars["--radius-4xl"] = rad["4xl"];

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `:root { ${Object.entries(vars)
          .map(([k, v]) => `${k}: ${v}`)
          .join("; ")} }`,
      }}
    />
  );
}
