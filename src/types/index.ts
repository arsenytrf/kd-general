export interface Service {
  title: string;
  description: string;
  icon: string;
  slug: string;
  includes?: string[];
  image?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Review {
  name: string;
  project: string;
  quote: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  tag: string;
}

export interface CompanyData {
  name: string;
  shortName: string;
  owner: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: string;
  city: string;
  location: string;
  serviceArea: string;
  cities: string[];
  tagline: string;
  description: string;
  formAction: string;
  hours: { weekday: string; weekend: string };
  features: string[];
  founded: number;
  rating: { stars: number; count: string; source: string };
  facebook: string;
}

export interface BusinessConfig {
  slug: string;
  company: CompanyData;
  services: Service[];
  reviews: Review[];
  galleryImages: GalleryImage[];
  heroImage: string;
  logoImage: string;
  theme: {
    category: "contractor" | "mover" | "hvac" | "restoration";
    colors: {
      sky: Record<string, string>;
      sand: Record<string, string>;
      slate: Record<string, string>;
      accent: Record<string, string>;
      accentName: string;
    };
    fonts: {
      display: string;
      displayImport: string;
      body: string;
      bodyImport: string;
    };
    radius: "sharp" | "soft" | "rounded";
  };
  navLinks: NavLink[];
  ctaLink: NavLink;
}
