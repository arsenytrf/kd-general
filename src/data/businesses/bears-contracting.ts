import type { BusinessConfig } from "@/types";

const u = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const config: BusinessConfig = {
  slug: "bears-contracting",
  company: {
    name: "Bear's General Contracting LLC",
    shortName: "Bear's Contracting",
    owner: "The Bear's Team",
    phone: "(208) 625-1303",
    phoneRaw: "2086251303",
    email: "info@bearscontracting.com",
    address: "Coeur d'Alene",
    city: "Coeur d'Alene, ID 83816",
    location: "Coeur d'Alene, Idaho",
    serviceArea: "North Idaho",
    cities: [
      "Coeur d'Alene",
      "Post Falls",
      "Hayden",
      "Harrison",
      "Kellogg",
      "Spirit Lake",
    ],
    tagline: "Build it. Remodel it. Fix it.",
    description:
      "Bear's General Contracting tackles residential projects across North Idaho with straightforward pricing, clean work, and zero runaround. From full remodels to concrete slabs and everything in between, we show up on time, communicate clearly, and deliver results you can see and feel.",
    formAction: "https://formspree.io/f/placeholder",
    hours: { weekday: "Mon-Fri 8:00 AM – 5:00 PM", weekend: "Sat by appointment" },
    features: [
      "Licensed, Bonded & Insured",
      "Free detailed estimates",
      "Locally owned & operated",
      "Transparent project pricing",
    ],
    founded: 2021,
    rating: { stars: 4.7, count: "5+", source: "Google" },
    facebook: "",
  },
  services: [
    {
      title: "General Contracting",
      description:
        "Full project management from demo to final walkthrough. We coordinate every trade so you get one point of contact and zero headaches.",
      icon: "HardHat",
      slug: "general-contracting",
      includes: [
        "Project planning & scheduling",
        "Permit coordination",
        "Subcontractor management",
        "Quality inspections",
        "Budget tracking",
      ],
      image: u("photo-1504307651254-35680f356dfd"),
    },
    {
      title: "Home Remodeling",
      description:
        "Whole-home transformations that make your space work the way you live. We handle the vision and the execution.",
      icon: "Wrench",
      slug: "home-remodeling",
      includes: [
        "Open-concept conversions",
        "Layout reconfiguration",
        "Interior upgrades",
        "Flooring installation",
        "Paint & finish work",
      ],
      image: u("photo-1600566753376-12c8ab7fb75b"),
    },
    {
      title: "Kitchen Remodels",
      description:
        "The heart of your home deserves better than builder-grade. Custom kitchens designed around how you actually cook and live.",
      icon: "Paintbrush",
      slug: "kitchen-remodels",
      includes: [
        "Cabinet installation",
        "Countertop fabrication & install",
        "Tile backsplashes",
        "Lighting upgrades",
        "Appliance coordination",
      ],
      image: u("photo-1600596542815-ffad4c1539a9"),
    },
    {
      title: "Bathroom Remodels",
      description:
        "From outdated to outstanding. Tile, fixtures, vanities, and waterproofing done right the first time.",
      icon: "Ruler",
      slug: "bathroom-remodels",
      includes: [
        "Shower & tub installations",
        "Custom tile work",
        "Vanity & fixture upgrades",
        "Waterproofing",
        "Heated flooring",
      ],
      image: u("photo-1613545325278-f24b0cae1224"),
    },
    {
      title: "Additions",
      description:
        "Need more space? We build seamless additions that look like they were always part of the original home.",
      icon: "Home",
      slug: "additions",
      includes: [
        "Room additions",
        "Garage conversions",
        "Sunroom builds",
        "Second-story additions",
        "Foundation work",
      ],
      image: u("photo-1632923057155-1c05a7cf3bb4"),
    },
    {
      title: "Decks",
      description:
        "Custom decks built to handle North Idaho's seasons. Composite, cedar, or pressure-treated — your call.",
      icon: "Fence",
      slug: "decks",
      includes: [
        "Composite decking",
        "Cedar & wood decks",
        "Railing systems",
        "Pergolas & covers",
        "Deck repair & staining",
      ],
      image: u("photo-1600573472592-401b489a3cdc"),
    },
    {
      title: "Concrete Work",
      description:
        "Driveways, patios, walkways, and foundations poured and finished to last through freeze-thaw cycles.",
      icon: "Layers",
      slug: "concrete-work",
      includes: [
        "Driveways & walkways",
        "Patio slabs",
        "Foundations",
        "Stamped & decorative concrete",
        "Concrete repair",
      ],
      image: u("photo-1607400201889-565b1ee75f8e"),
    },
    {
      title: "Siding & Fencing",
      description:
        "Protect your property and define your space with quality siding and fencing built to handle the elements.",
      icon: "PanelLeft",
      slug: "siding-fencing",
      includes: [
        "Vinyl & fiber cement siding",
        "Wood & composite fencing",
        "Privacy fences",
        "Gate installation",
        "Siding repair",
      ],
      image: u("photo-1585128792020-803d29415281"),
    },
  ],
  reviews: [
    {
      name: "Jake T.",
      project: "Kitchen Remodel",
      quote:
        "Bear's team completely transformed our dated kitchen. New cabinets, quartz countertops, subway tile backsplash — the works. They were communicative, on time, and the final result blew us away.",
    },
    {
      name: "Amanda R.",
      project: "Bathroom Remodel",
      quote:
        "Had both bathrooms redone and the tile work is flawless. They even suggested a niche in the shower that we didn't think of — love it. Clean crew, fair price.",
    },
    {
      name: "Chris & Laura M.",
      project: "Deck Build",
      quote:
        "We wanted a wraparound composite deck and Bear's made it happen in under two weeks. It's level, the railing is solid, and we practically live out there now during summer.",
    },
    {
      name: "Paul D.",
      project: "Home Addition",
      quote:
        "Added a master suite to our rancher. You honestly can't tell where the old house ends and the new addition begins — that's how seamless it is. Great team to work with.",
    },
    {
      name: "Megan S.",
      project: "General Contracting",
      quote:
        "Used Bear's to manage our full renovation after buying a fixer-upper in Hayden. They coordinated plumbing, electrical, drywall — everything. Kept us in the loop the entire time.",
    },
    {
      name: "Tony B.",
      project: "Concrete Patio",
      quote:
        "Had a stamped concrete patio poured out back. The pattern and color came out exactly like the sample. Two seasons in and it still looks brand new. Would hire again in a heartbeat.",
    },
  ],
  galleryImages: [
    { src: u("photo-1504307651254-35680f356dfd"), alt: "Construction crew at work on a project", tag: "Construction" },
    { src: u("photo-1600596542815-ffad4c1539a9"), alt: "Modern kitchen remodel completed", tag: "Kitchen" },
    { src: u("photo-1613545325278-f24b0cae1224"), alt: "Custom bathroom with modern tile work", tag: "Bathroom" },
    { src: u("photo-1632923057155-1c05a7cf3bb4"), alt: "Framing for a home addition", tag: "Addition" },
    { src: u("photo-1600573472592-401b489a3cdc"), alt: "Composite deck with mountain views", tag: "Deck" },
    { src: u("photo-1607400201889-565b1ee75f8e"), alt: "Stamped concrete patio installation", tag: "Concrete" },
    { src: u("photo-1600566753376-12c8ab7fb75b"), alt: "Living room after full remodel", tag: "Remodel" },
    { src: u("photo-1585128792020-803d29415281"), alt: "New siding installation on home exterior", tag: "Siding" },
    { src: u("photo-1581094794329-c8112a89af12"), alt: "Precision framing on residential project", tag: "Framing" },
    { src: u("photo-1600585154340-be6161a56a0c"), alt: "Completed home exterior with landscaping", tag: "Exterior" },
    { src: u("photo-1574359411659-15573a27fd0c"), alt: "Roof work during home renovation", tag: "Roofing" },
    { src: u("photo-1562259929-b4e1fd3aef09"), alt: "Stone and masonry work detail", tag: "Masonry" },
  ],
  heroImage: u("photo-1541123603104-512919d6a96c", 1600, 900),
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
      display: "Oswald",
      displayImport:
        "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap",
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
