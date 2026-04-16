import type { BusinessConfig } from "@/types";

const u = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const config: BusinessConfig = {
  slug: "king-kling",
  company: {
    name: "King Kling Construction",
    shortName: "King Kling",
    owner: "Joshua Kling Sr.",
    phone: "(509) 558-7251",
    phoneRaw: "5095587251",
    email: "info@kingkling.com",
    address: "8104 N Excell Drive",
    city: "Spokane, WA 99208",
    location: "Spokane, Washington",
    serviceArea: "Spokane Metro",
    cities: [
      "Spokane",
      "Spokane Valley",
      "Mead",
      "Airway Heights",
      "Nine Mile Falls",
      "Deer Park",
    ],
    tagline: "Your vision, our reality.",
    description:
      "King Kling Construction specializes in flooring, decks, remodels, and exterior upgrades across the Spokane Metro area. Founded by Joshua Kling Sr., we bring hands-on craftsmanship and responsive communication to every job — whether it's a single bathroom refresh or a full siding replacement. Available seven days a week because your project doesn't wait.",
    formAction: "https://formspree.io/f/placeholder",
    hours: { weekday: "Mon-Sun 6:00 AM – 10:00 PM", weekend: "Mon-Sun 6:00 AM – 10:00 PM" },
    features: [
      "Available 7 days a week",
      "Licensed & insured",
      "Free estimates",
      "Owner on every job",
      "Trex certified installer",
    ],
    founded: 2019,
    rating: { stars: 5.0, count: "1+", source: "Google" },
    facebook: "",
  },
  services: [
    {
      title: "Hard-Surface Flooring",
      description:
        "Expert installation of tile, stone, and ceramic flooring — precision layout, clean grout lines, and surfaces built to last.",
      icon: "Layers",
      slug: "hard-surface-flooring",
      includes: [
        "Ceramic & porcelain tile",
        "Natural stone installation",
        "Subfloor preparation",
        "Heated floor systems",
        "Grout & sealing",
      ],
      image: u("photo-1600566753376-12c8ab7fb75b"),
    },
    {
      title: "Vinyl Plank Flooring",
      description:
        "Luxury vinyl plank that looks like real hardwood at a fraction of the cost — waterproof, durable, and installed with precision.",
      icon: "Layers",
      slug: "vinyl-plank",
      includes: [
        "LVP selection assistance",
        "Subfloor leveling",
        "Click-lock installation",
        "Transition strips & trim",
        "Furniture moving included",
      ],
      image: u("photo-1600585154340-be6161a56a0c"),
    },
    {
      title: "Deck Building",
      description:
        "Custom Trex composite decks and traditional wood decks engineered for Spokane's freeze-thaw cycles.",
      icon: "Fence",
      slug: "deck-building",
      includes: [
        "Trex composite decking",
        "Pressure-treated wood decks",
        "Custom railing systems",
        "Multi-level designs",
        "Permit coordination",
      ],
      image: u("photo-1607400201889-565b1ee75f8e"),
    },
    {
      title: "Shower & Bath Remodels",
      description:
        "Complete shower and bathtub transformations — from basic tub swaps to custom tile walk-in showers with frameless glass.",
      icon: "RectangleHorizontal",
      slug: "shower-bath-remodels",
      includes: [
        "Tub-to-shower conversions",
        "Custom tile showers",
        "Frameless glass installation",
        "Fixture & faucet upgrades",
        "Waterproofing systems",
      ],
      image: u("photo-1562259929-b4e1fd3aef09"),
    },
    {
      title: "Siding",
      description:
        "New siding installation and replacement that protects your home and dramatically boosts curb appeal.",
      icon: "PanelLeft",
      slug: "siding",
      includes: [
        "Vinyl siding installation",
        "Fiber cement (HardiPlank)",
        "LP SmartSide",
        "House wrap & moisture barrier",
        "Trim & soffit work",
      ],
      image: u("photo-1600573472592-401b489a3cdc"),
    },
    {
      title: "Windows",
      description:
        "Energy-efficient window replacement that cuts your heating bills and makes your home more comfortable year-round.",
      icon: "RectangleHorizontal",
      slug: "windows",
      includes: [
        "Double & triple pane windows",
        "Vinyl & fiberglass frames",
        "Full-frame replacement",
        "Insert replacements",
        "Trim & casing finishing",
      ],
      image: u("photo-1503387762-592deb58ef4e"),
    },
    {
      title: "Roofing",
      description:
        "Reliable roof replacement and repairs — asphalt, metal, and architectural shingles installed to manufacturer spec.",
      icon: "Home",
      slug: "roofing",
      includes: [
        "Asphalt shingle roofing",
        "Metal roofing",
        "Tear-off & disposal",
        "Underlayment & ice shield",
        "Ridge vent & ventilation",
      ],
      image: u("photo-1574359411659-15573a27fd0c"),
    },
    {
      title: "Kitchen Remodels",
      description:
        "Full kitchen renovations from demo to final trim — updated layouts, new cabinets, countertops, and flooring.",
      icon: "Wrench",
      slug: "kitchen-remodels",
      includes: [
        "Cabinet installation",
        "Countertop fabrication",
        "Tile backsplash",
        "Flooring installation",
        "Lighting & electrical",
      ],
      image: u("photo-1621905252507-b35492cc74b4"),
    },
    {
      title: "General Handyman",
      description:
        "No job too small — drywall patches, door installs, trim work, and the dozens of fixes your house has been waiting for.",
      icon: "Hammer",
      slug: "handyman",
      includes: [
        "Drywall repair & patching",
        "Door & hardware installation",
        "Trim & molding",
        "Shelving & storage",
        "Minor plumbing & electrical",
      ],
      image: u("photo-1541123603104-512919d6a96c"),
    },
  ],
  reviews: [
    {
      name: "Travis & Amber C.",
      project: "LVP Flooring",
      quote:
        "Joshua installed luxury vinyl plank throughout our entire main floor — kitchen, living room, and hallway. The work was meticulous and he finished faster than quoted. The floor looks incredible and has already survived two kids and a dog without a scratch.",
    },
    {
      name: "Mike D.",
      project: "Trex Deck",
      quote:
        "Had a 14x18 Trex deck built off the back of our house. Joshua handled everything from permits to final inspection. The composite decking looks amazing and I love that I'll never have to stain it. Solid build, clean job site.",
    },
    {
      name: "Crystal P.",
      project: "Shower Remodel",
      quote:
        "Converted our old fiberglass tub/shower combo into a walk-in tile shower with a rain head and frameless glass door. It completely transformed our bathroom. Joshua's tile work is precision — every line is straight, every corner is perfect.",
    },
    {
      name: "Randy B.",
      project: "Siding Replacement",
      quote:
        "Our 30-year-old vinyl siding was warped and cracked everywhere. King Kling stripped it all off, installed new house wrap, and put up HardiPlank. The house looks 20 years newer. Neighbors can't believe it's the same place.",
    },
    {
      name: "Jessica L.",
      project: "Kitchen Remodel",
      quote:
        "Joshua did our kitchen remodel — new cabinets, quartz counters, subway tile backsplash, and LVP flooring. He was available to answer questions at all hours, which was really reassuring for our first big renovation. End result is beautiful.",
    },
    {
      name: "Doug M.",
      project: "Window Replacement",
      quote:
        "Replaced 12 windows throughout our house. The difference in comfort and noise reduction is immediately noticeable. Installation was clean — no damage to drywall or trim. Our heating bill dropped noticeably the first month.",
    },
  ],
  galleryImages: [
    { src: u("photo-1600566753376-12c8ab7fb75b"), alt: "Luxury vinyl plank flooring installation", tag: "Flooring" },
    { src: u("photo-1607400201889-565b1ee75f8e"), alt: "Custom Trex composite deck", tag: "Deck" },
    { src: u("photo-1562259929-b4e1fd3aef09"), alt: "Walk-in tile shower with frameless glass", tag: "Bathroom" },
    { src: u("photo-1600573472592-401b489a3cdc"), alt: "New siding installation on residential home", tag: "Siding" },
    { src: u("photo-1574359411659-15573a27fd0c"), alt: "Roofing installation in progress", tag: "Roofing" },
    { src: u("photo-1621905252507-b35492cc74b4"), alt: "Modern kitchen remodel with quartz countertops", tag: "Kitchen" },
    { src: u("photo-1541123603104-512919d6a96c"), alt: "Interior renovation and handyman work", tag: "Handyman" },
    { src: u("photo-1600585154340-be6161a56a0c"), alt: "Finished living space with new flooring", tag: "Interior" },
  ],
  heroImage: u("photo-1607400201889-565b1ee75f8e", 1600, 900),
  logoImage: "",
  theme: {
    category: "contractor",
    colors: {
      sky: {
        "50": "#EBF5F4",
        "100": "#D6EBE9",
        "200": "#B0D9D5",
        "300": "#7DC0BA",
        "400": "#4FA79F",
        "500": "#1A6B63",
        "600": "#15564F",
        "700": "#10423D",
        "800": "#0C312D",
        "900": "#092522",
        "950": "#061917",
      },
      sand: {
        "50": "#FAF9F7",
        "100": "#F2EFE9",
        "200": "#E8E3DA",
        "300": "#D4CCBD",
        "400": "#B5AA97",
        "500": "#8F8472",
        "600": "#696052",
      },
      slate: {
        "50": "#F5F6F6",
        "100": "#EBEDED",
        "200": "#DCDEDE",
        "300": "#B8BBBB",
        "400": "#8A8E8E",
        "500": "#5C6060",
        "600": "#3D4141",
        "700": "#2A2D2D",
        "800": "#1A1C1C",
        "900": "#111212",
        "950": "#0A0B0B",
      },
      accent: {
        "50": "#FFF0ED",
        "100": "#FFDDD6",
        "200": "#FFC1B3",
        "300": "#FF9E88",
        "400": "#FF7A5C",
        "500": "#FF5733",
        "600": "#E64426",
        "700": "#BF3319",
      },
      accentName: "coral",
    },
    fonts: {
      display: "Oswald",
      displayImport:
        "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap",
      body: "Source Sans 3",
      bodyImport:
        "https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600;700&display=swap",
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
