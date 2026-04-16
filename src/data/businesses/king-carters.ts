import type { BusinessConfig } from "@/types";

const u = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const config: BusinessConfig = {
  slug: "king-carters",
  company: {
    name: "King Carters Moving Services LLC",
    shortName: "King Carters",
    owner: "Michael Carter",
    phone: "(206) 555-0300",
    phoneRaw: "2065550300",
    email: "info@kingcarters.com",
    address: "14205 SE 36th St, Ste 100",
    city: "Bellevue, WA 98006",
    location: "Bellevue, Washington",
    serviceArea: "Eastside & Greater Seattle",
    cities: [
      "Bellevue",
      "Redmond",
      "Kirkland",
      "Seattle",
      "Renton",
      "Issaquah",
      "Mercer Island",
    ],
    tagline: "Move like a king.",
    description:
      "King Carters is the Eastside's hungry, hustling moving crew. We handle local moves, junk removal, packing, and furniture assembly with speed and swagger. No corporate overhead, no surprise fees — just a hardworking team that treats your stuff like royalty.",
    formAction: "https://formspree.io/f/placeholder",
    hours: { weekday: "Mon-Sat 7:00 AM – 8:00 PM", weekend: "Sun by appointment" },
    features: [
      "Licensed, Bonded & Insured",
      "Flat-rate local moves",
      "Same-day availability",
      "No hidden fees — ever",
    ],
    founded: 2022,
    rating: { stars: 4.8, count: "8+", source: "Google" },
    facebook: "",
  },
  services: [
    {
      title: "Local Moving",
      description:
        "Moves under 50 miles are our sweet spot. Fast, careful, and priced fairly. Your couch is in good hands.",
      icon: "Truck",
      slug: "local-moving",
      includes: [
        "Apartment & house moves",
        "Furniture blanket wrapping",
        "Floor & wall protection",
        "Careful loading & stacking",
        "Same-day moves available",
      ],
      image: u("photo-1600585154526-990dced4db0d"),
    },
    {
      title: "Junk Removal",
      description:
        "Old furniture, appliances, garage clutter — we haul it away fast so you don't have to rent a dumpster or bribe your friends.",
      icon: "Package",
      slug: "junk-removal",
      includes: [
        "Furniture removal",
        "Appliance hauling",
        "Garage & basement cleanouts",
        "Construction debris",
        "Donation drop-off",
      ],
      image: u("photo-1558618666-fcd25c85f82e"),
    },
    {
      title: "Packing & Unpacking",
      description:
        "We pack it tight, label it right, and unpack at the other end. You just point and tell us where things go.",
      icon: "Box",
      slug: "packing-unpacking",
      includes: [
        "Full-service packing",
        "Partial packing",
        "Fragile item wrapping",
        "Box labeling & inventory",
        "Unpacking & box removal",
      ],
      image: u("photo-1600566753376-12c8ab7fb75b"),
    },
    {
      title: "Loading & Unloading",
      description:
        "Already have a truck or pod? We'll load it like Tetris masters and unload at the destination. Muscles for hire.",
      icon: "Shield",
      slug: "loading-unloading",
      includes: [
        "Truck loading",
        "Pod & container loading",
        "Storage unit loading",
        "Heavy item handling",
        "Efficient space utilization",
      ],
      image: u("photo-1600585154340-be6161a56a0c"),
    },
    {
      title: "Furniture Assembly",
      description:
        "IKEA nightmares? Bed frames? Standing desks? We assemble it all — fast, sturdy, and with zero leftover screws.",
      icon: "Clock",
      slug: "furniture-assembly",
      includes: [
        "IKEA & flatpack assembly",
        "Bed frame setup",
        "Desk & shelving assembly",
        "Disassembly for moves",
        "Wall mounting & anchoring",
      ],
      image: u("photo-1600573472592-401b489a3cdc"),
    },
    {
      title: "Apartment Moves",
      description:
        "Walkups, elevators, tight hallways — we've seen it all. Apartment moves are our specialty and we don't charge extra for stairs.",
      icon: "MapPin",
      slug: "apartment-moves",
      includes: [
        "Studio to 3-bedroom apartments",
        "Elevator reservations",
        "Stair carries (no extra charge)",
        "Building rule compliance",
        "Narrow hallway navigation",
      ],
      image: u("photo-1600596542815-ffad4c1539a9"),
    },
  ],
  reviews: [
    {
      name: "Alex T.",
      project: "Apartment Move — Bellevue",
      quote:
        "These guys moved my entire one-bedroom in under three hours. Third-floor walkup, no elevator. They didn't slow down once and not a single scratch on anything. King Carters is the real deal.",
    },
    {
      name: "Priya S.",
      project: "Local Move — Kirkland to Redmond",
      quote:
        "Michael and his crew were on time, friendly, and crazy efficient. They wrapped everything in blankets, protected all the doorways, and had us fully moved into our new place by lunch. Best movers I've used.",
    },
    {
      name: "Tom & Beth R.",
      project: "Junk Removal",
      quote:
        "Had a garage full of junk we'd been ignoring for years. King Carters cleared the whole thing in two hours. They even separated stuff for donation. Our garage is usable for the first time since we moved in.",
    },
    {
      name: "Jasmine L.",
      project: "Packing & Moving",
      quote:
        "Hired them for full-service packing and moving. They showed up with all the supplies, packed my entire apartment, and delivered everything to my new place the same day. Couldn't believe how fast they were.",
    },
    {
      name: "Derek M.",
      project: "Furniture Assembly",
      quote:
        "Had a ridiculous amount of IKEA furniture to assemble in my new apartment. What would have taken me a full weekend, they knocked out in about four hours. Everything solid, no wobbly shelves.",
    },
    {
      name: "Natalie C.",
      project: "Loading & Unloading",
      quote:
        "Rented my own truck but needed help loading. King Carters loaded it like a game of Tetris — they fit way more than I thought possible. Showed up at the new place and unloaded just as fast.",
    },
    {
      name: "Chris W.",
      project: "Studio Apartment Move",
      quote:
        "Quick, affordable, and careful. They moved my studio in about 90 minutes. The flat rate was exactly what they quoted — no surprise charges, no BS. Already recommended them to three friends.",
    },
    {
      name: "Samantha K.",
      project: "Local Move — Seattle to Issaquah",
      quote:
        "We were nervous about moving our piano. The King Carters crew handled it like it was their own. Wrapped it up, got it down a flight of stairs, and into the new house without a scratch. These guys know what they're doing.",
    },
  ],
  galleryImages: [
    { src: u("photo-1600585154526-990dced4db0d"), alt: "Moving truck packed and ready to roll", tag: "Moving" },
    { src: u("photo-1558618666-fcd25c85f82e"), alt: "Crew handling boxes during a local move", tag: "Loading" },
    { src: u("photo-1600585154340-be6161a56a0c"), alt: "New home ready for move-in day", tag: "Delivery" },
    { src: u("photo-1600596542815-ffad4c1539a9"), alt: "Organized apartment after unpacking", tag: "Unpacking" },
    { src: u("photo-1600566753376-12c8ab7fb75b"), alt: "Living room set up after a move", tag: "Setup" },
    { src: u("photo-1600573472592-401b489a3cdc"), alt: "Outdoor space at a new Eastside home", tag: "New Home" },
    { src: u("photo-1613545325278-f24b0cae1224"), alt: "Clean apartment after junk removal", tag: "Junk Removal" },
    { src: u("photo-1504307651254-35680f356dfd"), alt: "Team coordinating a move", tag: "Team" },
    { src: u("photo-1581094794329-c8112a89af12"), alt: "Furniture being carefully wrapped", tag: "Protection" },
    { src: u("photo-1585128792020-803d29415281"), alt: "Boxes stacked and labeled for transport", tag: "Packing" },
    { src: u("photo-1574359411659-15573a27fd0c"), alt: "Moving day in the Pacific Northwest", tag: "Moving" },
  ],
  heroImage: u("photo-1600585154526-990dced4db0d", 1600, 900),
  logoImage: "",
  theme: {
    category: "mover",
    colors: {
      sky: {
        "50": "#EDEDED",
        "100": "#DBDBDB",
        "200": "#BABABA",
        "300": "#939393",
        "400": "#6C6C6C",
        "500": "#333333",
        "600": "#292929",
        "700": "#1F1F1F",
        "800": "#171717",
        "900": "#111111",
        "950": "#0A0A0A",
      },
      sand: {
        "50": "#F6F6F6",
        "100": "#EDEDED",
        "200": "#E1E1E1",
        "300": "#C9C9C9",
        "400": "#A5A5A5",
        "500": "#808080",
        "600": "#5E5E5E",
      },
      slate: {
        "50": "#EDEDED",
        "100": "#DBDBDB",
        "200": "#BABABA",
        "300": "#939393",
        "400": "#6C6C6C",
        "500": "#333333",
        "600": "#292929",
        "700": "#1F1F1F",
        "800": "#171717",
        "900": "#111111",
        "950": "#0A0A0A",
      },
      accent: {
        "50": "#FFEBEE",
        "100": "#FFCDD2",
        "200": "#EF9A9A",
        "300": "#E57373",
        "400": "#EF5350",
        "500": "#E53935",
        "600": "#C62828",
        "700": "#B71C1C",
      },
      accentName: "ember",
    },
    fonts: {
      display: "Archivo Black",
      displayImport:
        "https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap",
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
  ctaLink: { label: "Get Free Quote", href: "/contact" },
};
