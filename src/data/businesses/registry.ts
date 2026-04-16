import type { BusinessConfig } from "@/types";
import { config as business } from "./kd-general";

const businesses: Record<string, BusinessConfig> = {
  "kd-general": business,
};

export function getBusinessData(slug: string): BusinessConfig | undefined {
  return businesses[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(businesses);
}

export function getAllBusinesses(): BusinessConfig[] {
  return Object.values(businesses);
}
