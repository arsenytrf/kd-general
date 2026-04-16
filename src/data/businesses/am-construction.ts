import type { BusinessConfig } from "@/types";

const u = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const config: BusinessConfig = {
  slug: "am-construction",
  company: {
    name: "AM Construction LLC",
    shortName: "AM Construction",
    owner: "Desiree Asbury",
    phone: "(208) 819-1065",
    phoneRaw: "2088191065",
    email: "info@amconstruction.com",
    address: "1760 E Velora Dr",
    city: "Post Falls, ID 83854",
    location: "Post Falls, Idaho",
    serviceArea: "North Idaho & Spokane",
    cities: [
      "Post Falls",
      "Coeur d'Alene",
      "Hayden",
      "Rathdrum",
      "Spokane",
      "Spokane Valley",
    ],
    tagline: "Your roof. Our priority.",
    description:
      "AM Construction is North Idaho's go-to roofing and exterior specialist. With a 10-year craftsmanship warranty and an A+ BBB rating, we deliver reliable roofing, siding, and gutter work backed by a team that treats your home like our own. Available 24/7 for emergencies.",
    formAction: "https://formspree.io/f/placeholder",
    hours: { weekday: "24/7", weekend: "24/7" },
    features: [
      "Licensed, Bonded & Insured",
      "10-year craftsmanship warranty",
      "A+ BBB rated",
      "24/7 emergency service",
    ],
    founded: 2010,
    rating: { stars: 4.9, count: "20+", source: "Google" },
    facebook: "",
  },
  services: [
    {
      title: "Roofing",
      description:
        "Our bread and butter. Full roof replacements, new installations, and re-roofs done right — with materials built for the Pacific Northwest.",
      icon: "Home",
      slug: "roofing",
      includes: [
        "Asphalt shingle roofing",
        "Metal roofing",
        "Flat roof systems",
        "Cedar shake",
        "Roof inspections",
      ],
      image: u("photo-1574359411659-15573a27fd0c"),
    },
    {
      title: "Residential Remodeling",
      description:
        "From kitchens to full-home renovations, we bring the same precision we put on your roof to every room inside.",
      icon: "Wrench",
      slug: "residential-remodeling",
      includes: [
        "Kitchen remodels",
        "Bathroom renovations",
        "Interior upgrades",
        "Flooring installation",
        "Finish carpentry",
      ],
      image: u("photo-1600596542815-ffad4c1539a9"),
    },
    {
      title: "Commercial Remodeling",
      description:
        "Tenant improvements, office refreshes, and commercial renovations delivered on time with minimal business disruption.",
      icon: "Building",
      slug: "commercial-remodeling",
      includes: [
        "Office buildouts",
        "Retail renovations",
        "Tenant improvements",
        "Commercial flooring",
        "Code compliance upgrades",
      ],
      image: u("photo-1504307651254-35680f356dfd"),
    },
    {
      title: "Siding",
      description:
        "Protect and transform your home's exterior with professional siding installation. We work with vinyl, fiber cement, and wood options.",
      icon: "PanelLeft",
      slug: "siding",
      includes: [
        "Vinyl siding",
        "Fiber cement (Hardie Board)",
        "Wood siding",
        "Siding repair",
        "Trim & fascia",
      ],
      image: u("photo-1600585154340-be6161a56a0c"),
    },
    {
      title: "Gutters",
      description:
        "Seamless gutter installation and repair that keeps water where it belongs — away from your foundation.",
      icon: "Layers",
      slug: "gutters",
      includes: [
        "Seamless gutter installation",
        "Gutter guards",
        "Downspout routing",
        "Gutter repair",
        "Gutter cleaning",
      ],
      image: u("photo-1585128792020-803d29415281"),
    },
    {
      title: "Skylights",
      description:
        "Bring natural light into your home with expertly installed skylights — leak-free and energy efficient.",
      icon: "Star",
      slug: "skylights",
      includes: [
        "Skylight installation",
        "Tubular skylights",
        "Skylight replacement",
        "Flashing & waterproofing",
        "Energy-efficient options",
      ],
      image: u("photo-1613545325278-f24b0cae1224"),
    },
    {
      title: "Roof Repair",
      description:
        "Leaks, storm damage, missing shingles — we diagnose the problem fast and fix it right. No upselling, no games.",
      icon: "Shield",
      slug: "roof-repair",
      includes: [
        "Leak detection & repair",
        "Shingle replacement",
        "Flashing repair",
        "Vent & pipe boot replacement",
        "Insurance claim assistance",
      ],
      image: u("photo-1632923057155-1c05a7cf3bb4"),
    },
    {
      title: "Emergency Tarping",
      description:
        "Storm hit? Tree through the roof? We respond fast with emergency tarping to protect your home until permanent repairs can be made.",
      icon: "HardHat",
      slug: "emergency-tarping",
      includes: [
        "24/7 emergency response",
        "Temporary tarping",
        "Water damage prevention",
        "Storm damage assessment",
        "Insurance documentation",
      ],
      image: u("photo-1558618666-fcd25c85f82e"),
    },
  ],
  reviews: [
    {
      name: "Rachel D.",
      project: "Full Roof Replacement",
      quote:
        "AM Construction replaced our entire roof in two days flat. The crew was professional, cleaned up every nail, and the new architectural shingles look incredible. Desiree kept us informed the whole time.",
    },
    {
      name: "Mike & Jen P.",
      project: "Siding Installation",
      quote:
        "We went with Hardie Board siding and couldn't be happier. The install was clean, the color is perfect, and our home looks brand new from the street. Worth every penny.",
    },
    {
      name: "David L.",
      project: "Emergency Tarping",
      quote:
        "A tree came through our roof during a windstorm at 2 AM. Called AM Construction and they had a crew out by sunrise with a tarp up before the rain hit. They literally saved our home from water damage.",
    },
    {
      name: "Nancy K.",
      project: "Gutter Installation",
      quote:
        "Had seamless gutters installed around our entire house plus gutter guards. Water flows perfectly now — no more ice dams in winter. Quick, clean work.",
    },
    {
      name: "Steve R.",
      project: "Roof Repair",
      quote:
        "Found a leak in our living room ceiling. AM Construction came out the next day, found the problem — failed flashing around a vent pipe — and had it fixed in under an hour. Fair price, honest work.",
    },
    {
      name: "Tina M.",
      project: "Kitchen Remodel",
      quote:
        "Didn't even know AM did remodeling until a neighbor recommended them. They completely redid our kitchen — new cabinets, countertops, tile backsplash. The attention to detail was just as good as their roofing work.",
    },
    {
      name: "Brian W.",
      project: "Commercial Roofing",
      quote:
        "AM handled the roof on our new warehouse in Spokane Valley. They worked around our schedule, didn't disrupt operations, and the TPO membrane is holding up perfectly after two winters.",
    },
    {
      name: "Patricia H.",
      project: "Skylight Installation",
      quote:
        "Two skylights installed in our master bedroom and it completely transformed the space. Not a drop of water after months of Northwest rain. These folks know what they're doing.",
    },
  ],
  galleryImages: [
    { src: u("photo-1574359411659-15573a27fd0c"), alt: "New roof installation in progress", tag: "Roofing" },
    { src: u("photo-1504307651254-35680f356dfd"), alt: "Commercial construction project", tag: "Commercial" },
    { src: u("photo-1632923057155-1c05a7cf3bb4"), alt: "Roof repair work underway", tag: "Repair" },
    { src: u("photo-1558618666-fcd25c85f82e"), alt: "Emergency tarping after storm damage", tag: "Emergency" },
    { src: u("photo-1600585154340-be6161a56a0c"), alt: "Completed home with new siding", tag: "Siding" },
    { src: u("photo-1585128792020-803d29415281"), alt: "Gutter installation in progress", tag: "Gutters" },
    { src: u("photo-1613545325278-f24b0cae1224"), alt: "Skylight installation bringing in natural light", tag: "Skylight" },
    { src: u("photo-1600596542815-ffad4c1539a9"), alt: "Modern kitchen after renovation", tag: "Remodel" },
    { src: u("photo-1541123603104-512919d6a96c"), alt: "Commercial building project", tag: "Commercial" },
    { src: u("photo-1600566753376-12c8ab7fb75b"), alt: "Interior renovation completed", tag: "Interior" },
    { src: u("photo-1581094794329-c8112a89af12"), alt: "Residential framing and structure work", tag: "Framing" },
    { src: u("photo-1562259929-b4e1fd3aef09"), alt: "Exterior stonework detail", tag: "Exterior" },
    { src: u("photo-1607400201889-565b1ee75f8e"), alt: "Foundation and concrete work", tag: "Foundation" },
    { src: u("photo-1503387762-592deb58ef4e"), alt: "Aerial view of roofing project", tag: "Roofing" },
  ],
  heroImage: u("photo-1574359411659-15573a27fd0c", 1600, 900),
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
      display: "Bebas Neue",
      displayImport:
        "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap",
      body: "DM Sans",
      bodyImport:
        "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap",
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
