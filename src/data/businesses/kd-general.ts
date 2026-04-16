import type { BusinessConfig } from "@/types";

export const config: BusinessConfig = {
  slug: "kd-general",
  company: {
    name: "KD General Construction LLC",
    shortName: "KD General",
    owner: "Konstantin Dudrov",
    phone: "(509) 260-9276",
    phoneRaw: "5092609276",
    email: "info@kdgeneralconstruction.com",
    address: "16215 W Pinebluff Rd",
    city: "Nine Mile Falls, WA 99026",
    location: "Nine Mile Falls, Washington",
    serviceArea: "Spokane & North Idaho",
    cities: [
      "Nine Mile Falls",
      "Spokane",
      "Spokane Valley",
      "Airway Heights",
      "Medical Lake",
      "Cheney",
    ],
    tagline: "Built right the first time.",
    description:
      "KD General Construction is a full-service remodeling and construction company serving Spokane and North Idaho. From kitchens and bathrooms to whole-home renovations and custom flooring, we bring over a decade of hands-on experience to every project. Owner-operated, detail-driven, and built on repeat clients.",
    formAction: "https://formspree.io/f/placeholder",
    hours: { weekday: "Mon-Fri 8:00 AM – 5:00 PM", weekend: "Sat by appointment" },
    features: [
      "Licensed, Bonded & Insured",
      "Owner on every job site",
      "Free in-home estimates",
      "10+ years in business",
    ],
    founded: 2015,
    rating: { stars: 5.0, count: "20+", source: "Google" },
    facebook: "",
  },
  services: [
    {
      title: "General Construction",
      description:
        "Ground-up builds and large-scale renovations managed from permits through final walkthrough. One point of contact, no runaround.",
      icon: "HardHat",
      slug: "general-construction",
      includes: [
        "New construction",
        "Structural modifications",
        "Permit management",
        "Subcontractor coordination",
        "Final inspections",
      ],
      image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGSSCzB04YsWt8speHGVVsowfqPXQ6_706kTHUSMYz6-oTouMFogiElxOGV-_XuiOuR3D-JgRyVjPbfKPHfFTrZWpBaP1fmFvbwUtiGQkVsvmTcYh4Pyr1QoJnFf01en54-PTMLgw=w1200-h900-k-no",
    },
    {
      title: "Kitchen Remodel",
      description:
        "Complete kitchen transformations — custom cabinetry, countertops, backsplash, plumbing, and electrical all under one roof.",
      icon: "Home",
      slug: "kitchen-remodel",
      includes: [
        "Cabinet installation",
        "Countertop fabrication & install",
        "Backsplash tile work",
        "Plumbing relocation",
        "Lighting & electrical upgrades",
      ],
      image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGyUlUeEZRMzAH_5TfWcA7pHAKb8-ZDnJnzNdFaSt43KXtK1iTYksEaRqJkxkNx0i3mavu7SctzVTPF_ZZV8gvOJK4SXXKsa2Sl9JJukygoDu8y1e7SBy4ozFUtAVfB8y2WS0_W=w1200-h900-k-no",
    },
    {
      title: "Bathroom Remodel",
      description:
        "From outdated to outstanding. Walk-in showers, soaking tubs, custom tile, and vanities built to last.",
      icon: "Wrench",
      slug: "bathroom-remodel",
      includes: [
        "Shower & tub installation",
        "Custom tile work",
        "Vanity & fixture upgrades",
        "Heated flooring",
        "Waterproofing & ventilation",
      ],
      image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE02eMFx7SdNrwmvdaSx2J7Ss0-JyaOr23yt-pWO0w9bdJut0uKEjmFov8-AuwHokFphD6Esd_zNMtPBHeG4grTiQG2cohvjRjTwDGFcCUwmjpUcGkM7hsDuGR9T64HTfVnTkWy=w1200-h900-k-no",
    },
    {
      title: "Basement Remodel",
      description:
        "Turn unused square footage into livable space — home theaters, bedrooms, bars, or in-law suites.",
      icon: "Blocks",
      slug: "basement-remodel",
      includes: [
        "Framing & insulation",
        "Egress window installation",
        "Flooring & drywall",
        "Electrical & plumbing rough-in",
        "Custom built-ins",
      ],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80",
    },
    {
      title: "Whole Home Remodel",
      description:
        "Comprehensive renovations that reimagine your entire living space. We coordinate every phase so it flows seamlessly.",
      icon: "Building",
      slug: "whole-home-remodel",
      includes: [
        "Open-concept conversions",
        "Full interior redesign",
        "Structural modifications",
        "Systems upgrades (HVAC, electrical, plumbing)",
        "Finish selection & installation",
      ],
      image: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=800&h=600&fit=crop&q=80",
    },
    {
      title: "Additions",
      description:
        "Need more room? We build additions that blend seamlessly with your existing home — no awkward transitions.",
      icon: "RectangleHorizontal",
      slug: "additions",
      includes: [
        "Room additions",
        "Second-story additions",
        "Garage conversions",
        "Sunroom & covered patio builds",
        "Foundation & structural work",
      ],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80",
    },
    {
      title: "Custom Flooring",
      description:
        "Ceramic, hardwood, laminate, or vinyl plank — installed with precision and finished clean. No shortcuts.",
      icon: "Layers",
      slug: "custom-flooring",
      includes: [
        "Ceramic & porcelain tile",
        "Hardwood installation & refinishing",
        "Laminate flooring",
        "Luxury vinyl plank (LVP)",
        "Subfloor prep & leveling",
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&q=80",
    },
    {
      title: "Demolition",
      description:
        "Safe, efficient demolition for interior gut jobs and site preparation. We handle disposal and leave you a clean slate.",
      icon: "Hammer",
      slug: "demolition",
      includes: [
        "Interior selective demolition",
        "Full gut demolition",
        "Debris hauling & disposal",
        "Hazmat assessment coordination",
        "Site prep for new construction",
      ],
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop&q=80",
    },
  ],
  reviews: [
    {
      name: "Alex P.",
      project: "Kitchen Remodel",
      quote:
        "Konstantin and his crew completely transformed our kitchen. New cabinets, quartz counters, tile backsplash — the whole nine. They finished ahead of schedule and the attention to detail was next level. Can't recommend KD General enough.",
    },
    {
      name: "Rachel M.",
      project: "Bathroom Renovation",
      quote:
        "We had two bathrooms remodeled and both turned out incredible. The tile work in the master shower is like something out of a magazine. Konstantin was there every day making sure everything was perfect.",
    },
    {
      name: "Brian & Jess K.",
      project: "Basement Remodel",
      quote:
        "Turned our unfinished basement into a full entertainment space with a wet bar and guest bedroom. The crew was professional, clean, and easy to work with. The project came in right on budget.",
    },
    {
      name: "Dmitri S.",
      project: "Whole Home Remodel",
      quote:
        "We bought a 1960s ranch and KD General basically rebuilt the interior from scratch. New layout, new everything. Konstantin managed all the subs and kept the project moving even when supply chain issues hit. Incredible work.",
    },
    {
      name: "Linda W.",
      project: "Custom Flooring",
      quote:
        "Had hardwood installed throughout the main floor and LVP in the basement. Transitions are seamless, not a single creak. These guys know flooring — way better than the big box store installers we used before.",
    },
    {
      name: "Mike & Tanya R.",
      project: "Addition",
      quote:
        "KD General built a 400 sq ft addition off our master bedroom. The new space matches the original house perfectly — you'd never know it was added on. Permit process, framing, finishing — they handled everything.",
    },
    {
      name: "Steve G.",
      project: "General Construction",
      quote:
        "Used KD for a major structural repair and partial rebuild after discovering rot in our subfloor and walls. They were honest about what needed to happen, didn't upsell us, and the repair is rock solid. Trustworthy crew.",
    },
  ],
  galleryImages: [
    { src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGSSCzB04YsWt8speHGVVsowfqPXQ6_706kTHUSMYz6-oTouMFogiElxOGV-_XuiOuR3D-JgRyVjPbfKPHfFTrZWpBaP1fmFvbwUtiGQkVsvmTcYh4Pyr1QoJnFf01en54-PTMLgw=w1200-h900-k-no", alt: "Project work", tag: "Exterior" },
    { src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGyUlUeEZRMzAH_5TfWcA7pHAKb8-ZDnJnzNdFaSt43KXtK1iTYksEaRqJkxkNx0i3mavu7SctzVTPF_ZZV8gvOJK4SXXKsa2Sl9JJukygoDu8y1e7SBy4ozFUtAVfB8y2WS0_W=w1200-h900-k-no", alt: "Project work", tag: "Construction" },
    { src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE02eMFx7SdNrwmvdaSx2J7Ss0-JyaOr23yt-pWO0w9bdJut0uKEjmFov8-AuwHokFphD6Esd_zNMtPBHeG4grTiQG2cohvjRjTwDGFcCUwmjpUcGkM7hsDuGR9T64HTfVnTkWy=w1200-h900-k-no", alt: "Project work", tag: "Residential" },
    { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80", alt: "Project work", tag: "Remodel" },
    { src: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=800&h=600&fit=crop&q=80", alt: "Project work", tag: "Interior" },
    { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80", alt: "Project work", tag: "Framing" },
    { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&q=80", alt: "Project work", tag: "Roofing" },
    { src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop&q=80", alt: "Project work", tag: "Exterior" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80", alt: "Project work", tag: "Remodel" },
    { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80", alt: "Project work", tag: "Interior" },
    { src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop&q=80", alt: "Project work", tag: "Roofing" },
    { src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop&q=80", alt: "Project work", tag: "Construction" },
  ],
  heroImage: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGSSCzB04YsWt8speHGVVsowfqPXQ6_706kTHUSMYz6-oTouMFogiElxOGV-_XuiOuR3D-JgRyVjPbfKPHfFTrZWpBaP1fmFvbwUtiGQkVsvmTcYh4Pyr1QoJnFf01en54-PTMLgw=w1600-h1200-k-no",
  logoImage: "",
  theme: {
    category: "contractor",
    colors: {
      sky: {
        "50": "#F5ECEE",
        "100": "#EBD8DD",
        "200": "#D4ACB6",
        "300": "#BA7D8D",
        "400": "#9B5468",
        "500": "#6B2036",
        "600": "#571A2D",
        "700": "#431424",
        "800": "#320F1B",
        "900": "#260B14",
        "950": "#1A080E",
      },
      sand: {
        "50": "#FAF8F6",
        "100": "#F2EDE8",
        "200": "#E8E1D9",
        "300": "#D4C9BB",
        "400": "#B5A896",
        "500": "#8F8272",
        "600": "#696052",
      },
      slate: {
        "50": "#F7F5F5",
        "100": "#EEEBEA",
        "200": "#E0DCDA",
        "300": "#BDB7B3",
        "400": "#918A85",
        "500": "#635C57",
        "600": "#433E3B",
        "700": "#2F2B29",
        "800": "#1E1C1A",
        "900": "#141211",
        "950": "#0C0B0A",
      },
      accent: {
        "50": "#FFF9E6",
        "100": "#FFF0BF",
        "200": "#FFE699",
        "300": "#FFD966",
        "400": "#FFCC33",
        "500": "#E6B800",
        "600": "#CC9900",
        "700": "#997300",
      },
      accentName: "gold",
    },
    fonts: {
      display: "Archivo",
      displayImport:
        "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&display=swap",
      body: "Inter",
      bodyImport:
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    },
    radius: "sharp",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  ctaLink: { label: "Get Free Estimate", href: "/contact" },
};
