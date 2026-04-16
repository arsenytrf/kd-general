import type { BusinessConfig } from "@/types";

const u = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const config: BusinessConfig = {
  slug: "cataldo-construction",
  company: {
    name: "Cataldo Construction Company LLC",
    shortName: "Cataldo Construction",
    owner: "Alan Cannaday",
    phone: "(208) 771-8485",
    phoneRaw: "2087718485",
    email: "info@cataldoconstruction.com",
    address: "42356 Silver Valley Rd",
    city: "Kingston, ID 83839",
    location: "Kingston, Idaho",
    serviceArea: "Silver Valley & North Idaho",
    cities: [
      "Kingston",
      "Coeur d'Alene",
      "Kellogg",
      "Wallace",
      "Post Falls",
      "Hayden",
    ],
    tagline: "30+ years building Idaho right.",
    description:
      "Cataldo Construction has been a cornerstone of the Silver Valley building community since 1990. From custom homes and commercial builds to expert masonry and concrete work, we bring three decades of hands-on craftsmanship to every project. Our reputation is built on doing it right the first time.",
    formAction: "https://formspree.io/f/placeholder",
    hours: { weekday: "Mon-Fri 8:00 AM – 6:00 PM", weekend: "Sat-Sun Closed" },
    features: [
      "Licensed, Bonded & Insured",
      "30+ years of experience",
      "Free on-site estimates",
      "Residential & commercial expertise",
    ],
    founded: 1990,
    rating: { stars: 4.8, count: "15+", source: "Google" },
    facebook: "",
  },
  services: [
    {
      title: "Residential Remodeling",
      description:
        "Transform your home with renovations that respect your vision and your budget. Kitchens, bathrooms, whole-home — we do it all.",
      icon: "Wrench",
      slug: "residential-remodeling",
      includes: [
        "Kitchen renovations",
        "Bathroom remodels",
        "Basement finishing",
        "Open-concept conversions",
        "Finish selection guidance",
      ],
      image: u("photo-1600596542815-ffad4c1539a9"),
    },
    {
      title: "Commercial Remodeling",
      description:
        "Office buildouts, retail refreshes, and tenant improvements delivered on schedule with minimal disruption to your business.",
      icon: "Building",
      slug: "commercial-remodeling",
      includes: [
        "Office buildouts",
        "Retail renovations",
        "Tenant improvements",
        "ADA compliance upgrades",
        "Commercial flooring",
      ],
      image: u("photo-1504307651254-35680f356dfd"),
    },
    {
      title: "Masonry",
      description:
        "Expert brick, block, and stone work that stands the test of time. From retaining walls to fireplaces, we lay it right.",
      icon: "Blocks",
      slug: "masonry",
      includes: [
        "Brick & block construction",
        "Stone veneer installation",
        "Fireplace construction",
        "Retaining walls",
        "Chimney repair",
      ],
      image: u("photo-1562259929-b4e1fd3aef09"),
    },
    {
      title: "Concrete",
      description:
        "Foundations, driveways, patios, and flatwork poured and finished with precision. Built to handle Idaho's freeze-thaw cycles.",
      icon: "Layers",
      slug: "concrete",
      includes: [
        "Foundations & footings",
        "Driveways & walkways",
        "Patios & slabs",
        "Stamped concrete",
        "Concrete repair",
      ],
      image: u("photo-1607400201889-565b1ee75f8e"),
    },
    {
      title: "New Residential Construction",
      description:
        "Custom homes built from the ground up with the care and attention only three decades of experience can deliver.",
      icon: "Home",
      slug: "new-residential-construction",
      includes: [
        "Custom home building",
        "Floor plan consultation",
        "Permit management",
        "Foundation to finish",
        "Energy-efficient builds",
      ],
      image: u("photo-1600585154340-be6161a56a0c"),
    },
    {
      title: "New Commercial Construction",
      description:
        "Ground-up commercial builds managed from permits to punch list. We keep your project on time and on budget.",
      icon: "HardHat",
      slug: "new-commercial-construction",
      includes: [
        "Design-build coordination",
        "Commercial foundations",
        "Steel & wood framing",
        "Code compliance",
        "Project management",
      ],
      image: u("photo-1541123603104-512919d6a96c"),
    },
    {
      title: "Decks",
      description:
        "Custom decks built for Idaho living — from cedar and composite to multi-level entertainment spaces.",
      icon: "Fence",
      slug: "decks",
      includes: [
        "Composite decking",
        "Cedar & wood decks",
        "Multi-level designs",
        "Railing systems",
        "Deck repair & refinishing",
      ],
      image: u("photo-1600573472592-401b489a3cdc"),
    },
    {
      title: "Renovations",
      description:
        "Breathe new life into aging structures. We handle everything from structural repairs to cosmetic upgrades.",
      icon: "Paintbrush",
      slug: "renovations",
      includes: [
        "Structural repairs",
        "Interior upgrades",
        "Exterior facelifts",
        "Window & door replacement",
        "Insulation upgrades",
      ],
      image: u("photo-1585128792020-803d29415281"),
    },
  ],
  reviews: [
    {
      name: "Dennis P.",
      project: "New Home Build",
      quote:
        "Alan and his crew built our forever home from the ground up. Every detail was handled with care — the foundation work alone told us we'd hired the right team. Came in on budget and ahead of schedule.",
    },
    {
      name: "Karen & Steve M.",
      project: "Kitchen Remodel",
      quote:
        "We'd been putting off our kitchen remodel for years. Cataldo made the whole process painless. They protected our floors, cleaned up every day, and the finished kitchen looks like it belongs in a magazine.",
    },
    {
      name: "Bob R.",
      project: "Concrete Driveway",
      quote:
        "Had them pour a new driveway and a patio out back. Both came out perfectly flat with clean edges. It's been through two Idaho winters now and not a single crack. These guys know concrete.",
    },
    {
      name: "Michelle T.",
      project: "Masonry Work",
      quote:
        "They rebuilt our crumbling retaining wall and added a stone veneer to the front of our house. The craftsmanship is impeccable — neighbors stop to compliment it regularly.",
    },
    {
      name: "Jim H.",
      project: "Commercial Buildout",
      quote:
        "Cataldo handled our office buildout in downtown Kellogg. They navigated the permits, coordinated every sub, and delivered a space our team actually loves working in. True professionals.",
    },
    {
      name: "Linda W.",
      project: "Deck Construction",
      quote:
        "Our composite deck turned out beautifully. The multi-level design gives us so much more usable outdoor space. Alan's team even suggested a layout change that ended up being way better than our original plan.",
    },
    {
      name: "Gary S.",
      project: "Bathroom Renovation",
      quote:
        "Renovated both bathrooms in our 1985 home. Cataldo handled plumbing, tile, everything. The tile work in the master shower is precise — no lippage, clean grout lines. You can tell they've been doing this for decades.",
    },
  ],
  galleryImages: [
    { src: u("photo-1504307651254-35680f356dfd"), alt: "Construction crew working on a commercial project", tag: "Commercial" },
    { src: u("photo-1541123603104-512919d6a96c"), alt: "New commercial building under construction", tag: "New Build" },
    { src: u("photo-1503387762-592deb58ef4e"), alt: "Aerial view of a construction site", tag: "Construction" },
    { src: u("photo-1581094794329-c8112a89af12"), alt: "Precision framing on a residential home", tag: "Framing" },
    { src: u("photo-1562259929-b4e1fd3aef09"), alt: "Expert masonry and stonework", tag: "Masonry" },
    { src: u("photo-1607400201889-565b1ee75f8e"), alt: "Fresh concrete pour for a foundation", tag: "Concrete" },
    { src: u("photo-1600585154340-be6161a56a0c"), alt: "Completed custom home exterior", tag: "New Home" },
    { src: u("photo-1600596542815-ffad4c1539a9"), alt: "Modern kitchen renovation completed", tag: "Remodel" },
    { src: u("photo-1600566753376-12c8ab7fb75b"), alt: "Living room after full renovation", tag: "Renovation" },
    { src: u("photo-1600573472592-401b489a3cdc"), alt: "Custom composite deck with railing", tag: "Deck" },
    { src: u("photo-1585128792020-803d29415281"), alt: "Interior renovation in progress", tag: "Renovation" },
    { src: u("photo-1632923057155-1c05a7cf3bb4"), alt: "Structural framing for an addition", tag: "Framing" },
    { src: u("photo-1613545325278-f24b0cae1224"), alt: "Finished bathroom with modern tile work", tag: "Bathroom" },
    { src: u("photo-1574359411659-15573a27fd0c"), alt: "Roofing work on a residential project", tag: "Roofing" },
  ],
  heroImage: u("photo-1503387762-592deb58ef4e", 1600, 900),
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
