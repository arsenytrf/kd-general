"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { BusinessConfig } from "@/types";

const BusinessContext = createContext<BusinessConfig | null>(null);

export function BusinessProvider({
  value,
  children,
}: {
  value: BusinessConfig;
  children: ReactNode;
}) {
  return (
    <BusinessContext.Provider value={value}>
      {children}
    </BusinessContext.Provider>
  );
}

export function useBusiness(): BusinessConfig {
  const ctx = useContext(BusinessContext);
  if (!ctx) throw new Error("useBusiness must be used within a BusinessProvider");
  return ctx;
}
