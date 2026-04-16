import type { BusinessConfig } from "@/types";

const u = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const config: BusinessConfig = {
  slug: "nested-building",
  company: {
    name: "Nested Building LLC",
    shortName: "Nested Building",
    owner: "Ian Nesteruk",
    phone: "(509) 720-1517",
    phoneRaw: "5097201517",
    email: "info@nestedbuilding.com",
    address: "8520 W Mission Rd",
    city: "Spokane, WA 99224",
    location: "Spokane, Washington",
    serviceArea: "Greater Spokane",
    cities: [
      "Spokane",
      "Spokane Valley",
      "Cheney",
      "Airway Heights",
      "Medical Lake",
      "Liberty Lake",
    ],
    tagline: "Your vision, built from the ground up.",
    description:
      "Nested Building is a full-service construction company specializing in custom homes, remodels, and renovations across Greater Spokane. Founded by Ian Nesteruk, we bring meticulous attention to detail and transparent communication to every project — whether you're building from scratch or breathing new life into an existing space.",
    formAction: "https://formspree.io/f/placeholder",
    hours: { weekday: "Mon-Fri 8:00 AM – 5:00 PM", weekend: "Sat by appointment" },
    features: [
      "Licensed, bonded & insured",
      "Custom home specialist",
      "3D design renderings included",
      "Transparent fixed-price bids",
      "Owner on every job site",
    ],
    founded: 2023,
    rating: { stars: 4.9, count: "10+", source: "Google" },
    facebook: "",
  },
  services: [
    {
      title: "Custom Homes",
      description:
        "Ground-up custom home construction tailored to your lifestyle, lot, and budget. We handle everything from design coordination to final walkthrough.",
      icon: "Home",
      slug: "custom-homes",
      includes: [
        "Architectural coordination",
        "Site preparation & foundation",
        "Full structural build",
        "Interior & exterior finishes",
        "Final inspections & walkthrough",
      ],
      image: u("photo-1613545325278-f24b0cae1224"),
    },
    {
      title: "Kitchen Remodels",
      description:
        "Complete kitchen transformations — from dated galley kitchens to open, modern layouts with premium finishes.",
      icon: "PanelLeft",
      slug: "kitchen-remodels",
      includes: [
        "Cabinet design & installation",
        "Countertop fabrication",
        "Backsplash & tile work",
        "Appliance integration",
        "Electrical & plumbing updates",
      ],
      image: u("photo-1600596542815-ffad4c1539a9"),
    },
    {
      title: "Bathroom Remodels",
      description:
        "Spa-worthy bathroom renovations that maximize space, improve functionality, and add real value to your home.",
      icon: "RectangleHorizontal",
      slug: "bathroom-remodels",
      includes: [
        "Walk-in shower conversions",
        "Vanity & fixture upgrades",
        "Custom tile installation",
        "Heated flooring",
        "Ventilation improvements",
      ],
      image: u("photo-1562259929-b4e1fd3aef09"),
    },
    {
      title: "Basement Renovations",
      description:
        "Turn unused square footage into livable space — home theaters, in-law suites, offices, or rental units.",
      icon: "Building",
      slug: "basement-renovations",
      includes: [
        "Moisture mitigation",
        "Framing & insulation",
        "Egress window installation",
        "Electrical & HVAC routing",
        "Finish carpentry",
      ],
      image: u("photo-1600585154340-be6161a56a0c"),
    },
    {
      title: "Flooring",
      description:
        "Professional flooring installation across all materials — hardwood, tile, LVP, and engineered options.",
      icon: "Layers",
      slug: "flooring",
      includes: [
        "Hardwood & engineered wood",
        "Luxury vinyl plank",
        "Ceramic & porcelain tile",
        "Subfloor leveling & repair",
        "Transition strips & trim",
      ],
      image: u("photo-1600566753376-12c8ab7fb75b"),
    },
    {
      title: "Framing",
      description:
        "Structural framing for new construction, additions, and remodels — built square, plumb, and to code every time.",
      icon: "Blocks",
      slug: "framing",
      includes: [
        "New construction framing",
        "Addition framing",
        "Wall removal & headers",
        "Roof trusses & rafters",
        "Sheathing & vapor barriers",
      ],
      image: u("photo-1581094794329-c8112a89af12"),
    },
    {
      title: "Fencing",
      description:
        "Custom residential fencing that adds privacy, security, and curb appeal — wood, vinyl, and composite options.",
      icon: "Fence",
      slug: "fencing",
      includes: [
        "Cedar privacy fencing",
        "Vinyl & composite fencing",
        "Gate construction & hardware",
        "Post-hole drilling",
        "Old fence removal & haul-off",
      ],
      image: u("photo-1600573472592-401b489a3cdc"),
    },
    {
      title: "Patios & Outdoor Living",
      description:
        "Extend your living space outdoors with custom patios, pergolas, and covered entertaining areas.",
      icon: "Trees",
      slug: "patios",
      includes: [
        "Concrete & paver patios",
        "Pergola & shade structures",
        "Outdoor kitchen prep",
        "Fire pit installations",
        "Landscape integration",
      ],
      image: u("photo-1607400201889-565b1ee75f8e"),
    },
    {
      title: "Additions",
      description:
        "Seamless home additions that expand your footprint without sacrificing the character of your existing home.",
      icon: "Ruler",
      slug: "additions",
      includes: [
        "Architectural design coordination",
        "Foundation & structural work",
        "Roofline matching",
        "Interior finishing",
        "Permit management",
      ],
      image: u("photo-1503387762-592deb58ef4e"),
    },
    {
      title: "Demolition",
      description:
        "Safe, efficient interior and selective demolition for remodels, teardowns, and lot clearing.",
      icon: "Shovel",
      slug: "demolition",
      includes: [
        "Interior gut-outs",
        "Selective structural removal",
        "Debris hauling & disposal",
        "Asbestos-aware practices",
        "Site cleanup",
      ],
      image: u("photo-1504307651254-35680f356dfd"),
    },
  ],
  reviews: [
    {
      name: "Megan & Ryan P.",
      project: "Custom Home Build",
      quote:
        "Ian and his crew built our dream home from the ground up. What impressed us most was how involved Ian was personally — he wasn't just managing, he was on-site swinging a hammer. The attention to detail in our trim work and kitchen is something we notice every single day.",
    },
    {
      name: "Derek S.",
      project: "Kitchen Remodel",
      quote:
        "Nested Building turned our closed-off kitchen into an open-concept showpiece. They handled a load-bearing wall removal like it was nothing. The quartz countertops and custom island exceeded what we thought was possible for our budget.",
    },
    {
      name: "Patricia H.",
      project: "Bathroom Renovation",
      quote:
        "I had a very specific vision for my master bath — large format tile, frameless glass shower, freestanding tub. Ian took the time to understand exactly what I wanted and delivered it perfectly. Zero shortcuts.",
    },
    {
      name: "Brian & Kelly W.",
      project: "Basement Finish",
      quote:
        "Our basement was just concrete and cobwebs. Now it's a full apartment with a kitchenette, bedroom, and bathroom. Nested Building handled everything including the egress window. We're renting it out and it's already paying for itself.",
    },
    {
      name: "Steve M.",
      project: "Framing & Addition",
      quote:
        "Hired Nested for a two-story addition on our 1960s rancher. The framing was rock-solid and the new roofline matches the original perfectly — you'd never know it was added on. Passed every inspection first try.",
    },
    {
      name: "Lauren D.",
      project: "Fencing",
      quote:
        "We needed 180 feet of cedar privacy fencing done before our dogs moved in. Nested had it up in three days, and it looks incredible. Straight lines, solid posts, no gaps. Neighbors on both sides have already asked for Ian's number.",
    },
    {
      name: "Carlos R.",
      project: "Flooring Installation",
      quote:
        "Had engineered hardwood installed throughout our main level — about 900 square feet. The crew was meticulous about the layout and the transitions around our stone fireplace look seamless. Would absolutely hire again.",
    },
    {
      name: "Amanda J.",
      project: "Patio & Pergola",
      quote:
        "Nested built us a stamped concrete patio with a cedar pergola out back. It completely transformed our yard from 'meh' to the place everyone wants to hang out. The craftsmanship on the pergola is beautiful.",
    },
  ],
  galleryImages: [
    { src: u("photo-1613545325278-f24b0cae1224"), alt: "Modern custom home exterior at dusk", tag: "Custom Home" },
    { src: u("photo-1600596542815-ffad4c1539a9"), alt: "Completed kitchen remodel with island and pendant lighting", tag: "Kitchen" },
    { src: u("photo-1562259929-b4e1fd3aef09"), alt: "Luxury bathroom renovation with walk-in shower", tag: "Bathroom" },
    { src: u("photo-1581094794329-c8112a89af12"), alt: "Structural framing in progress", tag: "Framing" },
    { src: u("photo-1600585154340-be6161a56a0c"), alt: "Finished basement living space", tag: "Basement" },
    { src: u("photo-1607400201889-565b1ee75f8e"), alt: "Custom cedar deck and patio area", tag: "Outdoor" },
    { src: u("photo-1600573472592-401b489a3cdc"), alt: "Home exterior with new fencing", tag: "Fencing" },
    { src: u("photo-1595514535116-d12d1bae4915"), alt: "Blueprints and planning documents on table", tag: "Planning" },
    { src: u("photo-1503387762-592deb58ef4e"), alt: "Modern home with addition seamlessly integrated", tag: "Addition" },
  ],
  heroImage: u("photo-1613545325278-f24b0cae1224", 1600, 900),
  logoImage: "",
  theme: {
    category: "contractor",
    colors: {
      sky: {
        "50": "#EBF0F7",
        "100": "#D6E1EF",
        "200": "#B0C4DE",
        "300": "#7A9CC4",
        "400": "#4A76A8",
        "500": "#1B3A5C",
        "600": "#152E4A",
        "700": "#102339",
        "800": "#0C1A2B",
        "900": "#081220",
        "950": "#050C16",
      },
      sand: {
        "50": "#F6F7F9",
        "100": "#ECEEF2",
        "200": "#DFE2E8",
        "300": "#C5CAD4",
        "400": "#9BA3B2",
        "500": "#717A8C",
        "600": "#525B6C",
      },
      slate: {
        "50": "#F5F6F7",
        "100": "#EAECEE",
        "200": "#DBDEE2",
        "300": "#B5BAC2",
        "400": "#8B929E",
        "500": "#5D6474",
        "600": "#3E4450",
        "700": "#2B3040",
        "800": "#1C2030",
        "900": "#131724",
        "950": "#0C0F18",
      },
      accent: {
        "50": "#E3F2FD",
        "100": "#BBDEFB",
        "200": "#90CAF9",
        "300": "#64B5F6",
        "400": "#42A5F5",
        "500": "#1E88E5",
        "600": "#1565C0",
        "700": "#0D47A1",
      },
      accentName: "azure",
    },
    fonts: {
      display: "Archivo Black",
      displayImport:
        "https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap",
      body: "DM Sans",
      bodyImport:
        "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap",
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
