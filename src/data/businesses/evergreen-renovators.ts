import type { BusinessConfig } from "@/types";

const u = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const config: BusinessConfig = {
  slug: "evergreen-renovators",
  company: {
    name: "Evergreen Renovators LLC",
    shortName: "Evergreen Renovators",
    owner: "Diane Cristinzio",
    phone: "(509) 935-0758",
    phoneRaw: "5099350758",
    email: "info@evergreenrenovators.com",
    address: "3272 Bulldog Creek Rd UNIT B",
    city: "Valley, WA 99181",
    location: "Valley, Washington",
    serviceArea: "Spokane & surrounding areas",
    cities: [
      "Spokane",
      "Spokane Valley",
      "Valley",
      "Chewelah",
      "Deer Park",
      "Colville",
      "Newport",
    ],
    tagline: "Family-owned. Quality-driven.",
    description:
      "Evergreen Renovators is a family-owned remodeling and painting company serving Spokane and the surrounding areas. Led by Diane Cristinzio, we specialize in interior and exterior transformations — from fresh paint to full-scale renovations. We treat every home like it's our own, because reputation is everything in a small community.",
    formAction: "https://formspree.io/f/placeholder",
    hours: { weekday: "Mon-Fri 8:00 AM – 5:00 PM", weekend: "Sat-Sun Closed" },
    features: [
      "Family owned & operated",
      "Licensed & insured",
      "Interior & exterior specialists",
      "Color consultation included",
      "Eco-friendly paint options",
    ],
    founded: 2020,
    rating: { stars: 4.7, count: "8+", source: "Google" },
    facebook: "",
  },
  services: [
    {
      title: "Interior Painting",
      description:
        "Professional interior painting with meticulous prep work, clean lines, and finishes that hold up to daily life.",
      icon: "Paintbrush",
      slug: "interior-painting",
      includes: [
        "Wall & ceiling painting",
        "Trim & baseboard painting",
        "Cabinet painting & refinishing",
        "Drywall repair & patching",
        "Color consultation",
      ],
      image: u("photo-1585128792020-803d29415281"),
    },
    {
      title: "Exterior Painting",
      description:
        "Weather-resistant exterior painting that protects your investment and gives your home serious curb appeal.",
      icon: "Home",
      slug: "exterior-painting",
      includes: [
        "Full exterior painting",
        "Siding preparation & repair",
        "Deck & fence staining",
        "Power washing",
        "Caulking & weatherproofing",
      ],
      image: u("photo-1600573472592-401b489a3cdc"),
    },
    {
      title: "Kitchen Renovations",
      description:
        "Complete kitchen overhauls — new layouts, modern finishes, and thoughtful design that works for how you actually cook and live.",
      icon: "PanelLeft",
      slug: "kitchen-renovations",
      includes: [
        "Cabinet replacement & refacing",
        "Countertop installation",
        "Backsplash tile work",
        "Lighting design & fixtures",
        "Plumbing & appliance hookups",
      ],
      image: u("photo-1600596542815-ffad4c1539a9"),
    },
    {
      title: "Bathroom Renovations",
      description:
        "From powder rooms to master suites, we create bathrooms that balance beauty with bulletproof functionality.",
      icon: "RectangleHorizontal",
      slug: "bathroom-renovations",
      includes: [
        "Shower & tub remodels",
        "Custom tile design",
        "Vanity & mirror installation",
        "Fixture upgrades",
        "Exhaust & ventilation",
      ],
      image: u("photo-1562259929-b4e1fd3aef09"),
    },
    {
      title: "Custom Decks & Fences",
      description:
        "Outdoor structures built to handle Eastern Washington's climate — from cedar privacy fences to composite entertaining decks.",
      icon: "Fence",
      slug: "decks-fences",
      includes: [
        "Composite & wood decks",
        "Cedar privacy fencing",
        "Pergolas & shade structures",
        "Railing systems",
        "Staining & sealing",
      ],
      image: u("photo-1607400201889-565b1ee75f8e"),
    },
    {
      title: "Basement Remodel",
      description:
        "Transform your basement from forgotten storage into finished living space — bedrooms, offices, entertainment areas, or rental units.",
      icon: "Building",
      slug: "basement-remodel",
      includes: [
        "Framing & insulation",
        "Drywall & finishing",
        "Flooring installation",
        "Bathroom & kitchenette builds",
        "Egress window installation",
      ],
      image: u("photo-1600585154340-be6161a56a0c"),
    },
    {
      title: "Whole Home Remodel",
      description:
        "Comprehensive renovations that reimagine your entire home — updated layouts, modern systems, and cohesive design from front door to back.",
      icon: "Wrench",
      slug: "whole-home-remodel",
      includes: [
        "Layout reconfiguration",
        "Electrical & plumbing updates",
        "Flooring throughout",
        "Kitchen & bath renovations",
        "Finish carpentry & trim",
      ],
      image: u("photo-1560518883-ce09059eeffa"),
    },
    {
      title: "Additions",
      description:
        "Need more space? We design and build additions that blend with your home's existing character while adding the rooms you need.",
      icon: "Ruler",
      slug: "additions",
      includes: [
        "Design & planning",
        "Foundation & structural work",
        "Roofline integration",
        "Interior finishing",
        "Permit management",
      ],
      image: u("photo-1503387762-592deb58ef4e"),
    },
  ],
  reviews: [
    {
      name: "Rachel M.",
      project: "Interior Painting",
      quote:
        "Diane's team painted our entire main floor — living room, kitchen, hallway, and three bedrooms. The prep work was incredible. They patched every nail hole, caulked every gap, and the cut-in lines along the ceiling are razor sharp. Our house feels brand new.",
    },
    {
      name: "Greg & Lisa T.",
      project: "Kitchen Renovation",
      quote:
        "We hired Evergreen for a full kitchen gut-and-rebuild. They removed a wall, installed new cabinets, quartz counters, and a beautiful tile backsplash. Diane was on-site almost every day making sure everything was perfect. Couldn't be happier.",
    },
    {
      name: "Bob H.",
      project: "Exterior Painting",
      quote:
        "They painted our two-story farmhouse exterior — siding, trim, shutters, and the wrap-around porch. The prep work alone took two days, which tells you they don't cut corners. Paint job has been through a full year of weather and still looks fresh.",
    },
    {
      name: "Michelle D.",
      project: "Bathroom Renovation",
      quote:
        "Our 1990s master bath was dated and cramped. Evergreen opened it up, installed a gorgeous walk-in tile shower, and added a double vanity. The tile work in the shower is art — herringbone accent wall, perfectly mitered edges. Love it.",
    },
    {
      name: "Tim & Sandy W.",
      project: "Deck Build",
      quote:
        "Had a 16x20 composite deck built off our back sliding door. The crew was professional, clean, and fast. The railing detail and the way they handled the multi-level steps is really well thought out. Already planning a pergola addition with them.",
    },
    {
      name: "Nora K.",
      project: "Whole Home Remodel",
      quote:
        "We bought a fixer and hired Evergreen to remodel the whole thing — new floors, paint, both bathrooms, kitchen cabinets, the works. Diane kept everything coordinated and on schedule. The transformation is unbelievable. Best decision we made.",
    },
    {
      name: "Carl J.",
      project: "Basement Finish",
      quote:
        "Evergreen finished our basement — two bedrooms, a bathroom, and a family room. The drywall work is smooth as glass and the LVP flooring looks high-end. Passed all inspections without issues. Very professional crew.",
    },
    {
      name: "Anne P.",
      project: "Interior & Exterior Painting",
      quote:
        "Hired Evergreen for both interior and exterior painting. They power-washed the outside, scraped and primed everything, then painted. Inside, they did all the common areas and five bedrooms. Consistent quality throughout — no drips, no misses.",
    },
  ],
  galleryImages: [
    { src: u("photo-1585128792020-803d29415281"), alt: "Professional interior painting with clean lines", tag: "Painting" },
    { src: u("photo-1600596542815-ffad4c1539a9"), alt: "Renovated kitchen with modern cabinetry", tag: "Kitchen" },
    { src: u("photo-1562259929-b4e1fd3aef09"), alt: "Custom bathroom renovation with tile shower", tag: "Bathroom" },
    { src: u("photo-1607400201889-565b1ee75f8e"), alt: "Composite deck with built-in seating", tag: "Deck" },
    { src: u("photo-1600573472592-401b489a3cdc"), alt: "Freshly painted home exterior", tag: "Exterior" },
    { src: u("photo-1560518883-ce09059eeffa"), alt: "Whole home renovation in progress", tag: "Remodel" },
    { src: u("photo-1600585154340-be6161a56a0c"), alt: "Finished basement living space", tag: "Basement" },
    { src: u("photo-1600566753376-12c8ab7fb75b"), alt: "Completed living room with new paint and flooring", tag: "Interior" },
  ],
  heroImage: u("photo-1585128792020-803d29415281", 1600, 900),
  logoImage: "",
  theme: {
    category: "contractor",
    colors: {
      sky: {
        "50": "#ECF0EC",
        "100": "#D9E1D9",
        "200": "#B6C6B6",
        "300": "#8DA68D",
        "400": "#688468",
        "500": "#365436",
        "600": "#2B432B",
        "700": "#213321",
        "800": "#182618",
        "900": "#121D12",
        "950": "#0C140C",
      },
      sand: {
        "50": "#F7F6F4",
        "100": "#EDECEA",
        "200": "#E1DFDB",
        "300": "#C9C5C0",
        "400": "#A5A19B",
        "500": "#807C77",
        "600": "#5E5B57",
      },
      slate: {
        "50": "#F5F5F5",
        "100": "#EBEBEB",
        "200": "#DCDCDC",
        "300": "#B8B8B8",
        "400": "#8A8A8A",
        "500": "#5C5C5C",
        "600": "#3D3D3D",
        "700": "#2A2A2A",
        "800": "#1A1A1A",
        "900": "#111111",
        "950": "#0A0A0A",
      },
      accent: {
        "50": "#FBF0E8",
        "100": "#F5DCC9",
        "200": "#ECC4A3",
        "300": "#DFA576",
        "400": "#D28A4E",
        "500": "#B26B30",
        "600": "#8F5526",
        "700": "#6D411D",
      },
      accentName: "copper",
    },
    fonts: {
      display: "Playfair Display",
      displayImport:
        "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap",
      body: "Lato",
      bodyImport:
        "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap",
    },
    radius: "soft",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  ctaLink: { label: "Get Free Estimate", href: "/contact" },
};
