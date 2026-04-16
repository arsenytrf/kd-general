import type { BusinessConfig } from "@/types";

const u = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const config: BusinessConfig = {
  slug: "four-seasons-moving",
  company: {
    name: "Four Seasons Moving & Storage LLC",
    shortName: "Four Seasons Moving",
    owner: "Savanna",
    phone: "(206) 734-2398",
    phoneRaw: "2067342398",
    email: "info@fourseasonsmovingstorage.com",
    address: "978 Industry Dr, Ste 220",
    city: "Tukwila, WA 98188",
    location: "Tukwila, Washington",
    serviceArea: "Greater Seattle & Puget Sound",
    cities: [
      "Tukwila",
      "Seattle",
      "Bellevue",
      "Renton",
      "Kent",
      "Federal Way",
      "Tacoma",
      "Everett",
    ],
    tagline: "Moving made simple.",
    description:
      "Four Seasons Moving & Storage is a women-owned moving company serving the Greater Seattle and Puget Sound area. We specialize in stress-free residential and commercial moves with careful handling, transparent pricing, and a team that genuinely cares about your belongings.",
    formAction: "https://formspree.io/f/placeholder",
    hours: { weekday: "Mon-Sat 7:00 AM – 7:00 PM", weekend: "Sun Closed" },
    features: [
      "Licensed, Bonded & Insured",
      "Women-owned business",
      "Free in-home estimates",
      "No hidden fees — transparent pricing",
    ],
    founded: 2019,
    rating: { stars: 4.7, count: "11+", source: "Google" },
    facebook: "",
  },
  services: [
    {
      title: "Local Residential Moving",
      description:
        "Apartment, condo, or house — we handle your local move with care. Every piece wrapped, every corner protected, every box accounted for.",
      icon: "Truck",
      slug: "local-residential-moving",
      includes: [
        "Furniture disassembly & reassembly",
        "Blanket wrapping & protection",
        "Careful loading & unloading",
        "Floor & doorway protection",
        "Same-day moves available",
      ],
      image: u("photo-1600585154526-990dced4db0d"),
    },
    {
      title: "Long-Distance Moving",
      description:
        "Relocating out of state? We coordinate every mile of your long-distance move with detailed planning and real-time communication.",
      icon: "MapPin",
      slug: "long-distance-moving",
      includes: [
        "Interstate relocations",
        "Detailed inventory tracking",
        "Custom crating for fragile items",
        "Dedicated move coordinator",
        "Delivery window scheduling",
      ],
      image: u("photo-1558618666-fcd25c85f82e"),
    },
    {
      title: "Commercial & Office Moves",
      description:
        "Minimize downtime with a commercial move planned around your schedule. We handle cubicles, conference rooms, and server racks alike.",
      icon: "Package",
      slug: "commercial-office-moves",
      includes: [
        "Office furniture disassembly",
        "IT equipment handling",
        "After-hours & weekend moves",
        "Cubicle & workstation setup",
        "Minimal business disruption",
      ],
      image: u("photo-1600585154340-be6161a56a0c"),
    },
    {
      title: "Packing & Unpacking",
      description:
        "Don't want to deal with boxes? Our team packs everything with care and unpacks at your new place so you can skip straight to settling in.",
      icon: "Box",
      slug: "packing-unpacking",
      includes: [
        "Full-service packing",
        "Partial packing options",
        "Specialty item wrapping",
        "Unpacking & debris removal",
        "Packing materials provided",
      ],
      image: u("photo-1600566753376-12c8ab7fb75b"),
    },
    {
      title: "Storage Solutions",
      description:
        "Need a place to keep your things? Short-term or long-term, our secure storage keeps your belongings safe and accessible.",
      icon: "Shield",
      slug: "storage-solutions",
      includes: [
        "Climate-controlled units",
        "Short & long-term options",
        "Secure facility access",
        "Inventory management",
        "Pick-up & delivery",
      ],
      image: u("photo-1600596542815-ffad4c1539a9"),
    },
    {
      title: "Furniture Assembly",
      description:
        "From IKEA flatpacks to heirloom bed frames, we assemble and disassemble furniture so you don't have to fight with an Allen wrench.",
      icon: "Clock",
      slug: "furniture-assembly",
      includes: [
        "Bed frame assembly",
        "Desk & shelving setup",
        "IKEA & flatpack furniture",
        "Disassembly for moves",
        "Hardware organization",
      ],
      image: u("photo-1600573472592-401b489a3cdc"),
    },
  ],
  reviews: [
    {
      name: "Jessica L.",
      project: "Local Move — Seattle to Renton",
      quote:
        "Four Seasons moved our entire 3-bedroom house in one day. The crew was so careful with our furniture — not a single scratch. Savanna checked in throughout the day to make sure everything was on track.",
    },
    {
      name: "Marcus T.",
      project: "Office Relocation",
      quote:
        "We moved our 20-person office over a weekend and were fully operational Monday morning. They labeled every box, set up every desk, and even reconnected our monitors. Incredible service.",
    },
    {
      name: "Emily & Ryan K.",
      project: "Long-Distance Move — Seattle to Portland",
      quote:
        "Moving out of state is stressful enough. Four Seasons made the logistics disappear. Everything arrived on time, nothing was damaged, and the price was exactly what they quoted.",
    },
    {
      name: "Diane W.",
      project: "Packing & Moving",
      quote:
        "I hired them for full-service packing and moving. They packed my entire apartment in three hours — crystal, artwork, everything — with more care than I would have taken myself. Worth every cent.",
    },
    {
      name: "Kevin R.",
      project: "Storage & Move",
      quote:
        "Needed to store everything for two months between selling and closing. Four Seasons handled pickup, storage, and delivery to my new place seamlessly. Not one item missing or damaged.",
    },
    {
      name: "Sarah M.",
      project: "Apartment Move — Bellevue",
      quote:
        "Third-floor walkup apartment. These movers didn't complain once. They were fast, efficient, and wrapped everything in blankets. I've used other movers before — Four Seasons is on a different level.",
    },
    {
      name: "James P.",
      project: "Furniture Assembly",
      quote:
        "Had them assemble a bunch of IKEA furniture after our move. What would have taken me an entire weekend, they knocked out in a few hours. Everything sturdy and perfectly put together.",
    },
    {
      name: "Linda C.",
      project: "Local Move — Kent to Federal Way",
      quote:
        "The movers arrived right on time, worked efficiently, and were so polite. They even helped us rearrange heavy furniture at the new house until we were happy with the layout. Highly recommend.",
    },
  ],
  galleryImages: [
    { src: u("photo-1600585154526-990dced4db0d"), alt: "Moving truck being loaded with furniture", tag: "Moving" },
    { src: u("photo-1558618666-fcd25c85f82e"), alt: "Professional movers handling boxes carefully", tag: "Packing" },
    { src: u("photo-1600585154340-be6161a56a0c"), alt: "Modern home ready for move-in", tag: "Residential" },
    { src: u("photo-1600596542815-ffad4c1539a9"), alt: "Organized storage unit with labeled boxes", tag: "Storage" },
    { src: u("photo-1600566753376-12c8ab7fb75b"), alt: "Living room being set up after a move", tag: "Unpacking" },
    { src: u("photo-1600573472592-401b489a3cdc"), alt: "Outdoor space at a new home", tag: "New Home" },
    { src: u("photo-1613545325278-f24b0cae1224"), alt: "Bathroom in a freshly moved-into home", tag: "Interior" },
    { src: u("photo-1504307651254-35680f356dfd"), alt: "Team coordinating a commercial move", tag: "Commercial" },
    { src: u("photo-1581094794329-c8112a89af12"), alt: "Careful handling of large furniture pieces", tag: "Furniture" },
    { src: u("photo-1585128792020-803d29415281"), alt: "Packing supplies and organized boxes", tag: "Packing" },
    { src: u("photo-1574359411659-15573a27fd0c"), alt: "Moving crew working on a rainy Seattle day", tag: "Moving" },
    { src: u("photo-1562259929-b4e1fd3aef09"), alt: "Wrapped furniture ready for transport", tag: "Protection" },
  ],
  heroImage: u("photo-1600585154526-990dced4db0d", 1600, 900),
  logoImage: "",
  theme: {
    category: "mover",
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
  ctaLink: { label: "Get Free Quote", href: "/contact" },
};
