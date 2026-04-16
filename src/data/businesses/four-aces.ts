import type { BusinessConfig } from "@/types";

const u = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const config: BusinessConfig = {
  slug: "four-aces",
  company: {
    name: "4 Aces Construction",
    shortName: "4 Aces",
    owner: "John Wallace",
    phone: "(509) 370-9295",
    phoneRaw: "5093709295",
    email: "info@fouraces.com",
    address: "2708 N Napa St",
    city: "Spokane, WA 99207",
    location: "Spokane, Washington",
    serviceArea: "Spokane & Inland Empire",
    cities: [
      "Spokane",
      "Spokane Valley",
      "Mead",
      "Hillyard",
      "Deer Park",
      "Cheney",
      "Post Falls",
    ],
    tagline: "Nearly 50 years of craftsmanship.",
    description:
      "4 Aces Construction has been building and remodeling homes across Spokane since 1976. Under John Wallace's leadership, we've earned a reputation for uncompromising quality, fair pricing, and the kind of old-school work ethic that's hard to find. When we build it, it stays built.",
    formAction: "https://formspree.io/f/placeholder",
    hours: { weekday: "Mon-Fri 7:00 AM – 5:00 PM", weekend: "Sat by appointment" },
    features: [
      "Serving Spokane since 1976",
      "Licensed, bonded & insured",
      "Family owned & operated",
      "Free detailed estimates",
      "Warranty on all workmanship",
    ],
    founded: 1976,
    rating: { stars: 5.0, count: "7+", source: "Google" },
    facebook: "",
  },
  services: [
    {
      title: "Kitchen Remodels",
      description:
        "Full-scale kitchen renovations from layout redesign to final trim. We've remodeled hundreds of Spokane kitchens over five decades.",
      icon: "PanelLeft",
      slug: "kitchen-remodels",
      includes: [
        "Custom cabinetry & refacing",
        "Granite & quartz countertops",
        "Island construction",
        "Plumbing & electrical updates",
        "Backsplash & tile work",
      ],
      image: u("photo-1621905252507-b35492cc74b4"),
    },
    {
      title: "Bathroom Remodels",
      description:
        "From simple tub-to-shower conversions to gut-and-rebuild master baths, we handle every detail.",
      icon: "RectangleHorizontal",
      slug: "bathroom-remodels",
      includes: [
        "Shower & tub installation",
        "Custom tile work",
        "Vanity & fixture upgrades",
        "Accessibility modifications",
        "Plumbing rework",
      ],
      image: u("photo-1562259929-b4e1fd3aef09"),
    },
    {
      title: "Additions",
      description:
        "Expand your home's footprint with seamless additions that match your existing architecture and exceed code requirements.",
      icon: "Ruler",
      slug: "additions",
      includes: [
        "Room additions",
        "Second-story additions",
        "Sunroom construction",
        "Foundation work",
        "Permit coordination",
      ],
      image: u("photo-1600573472592-401b489a3cdc"),
    },
    {
      title: "Basement Remodels",
      description:
        "Unlock your home's hidden potential with a fully finished basement — bedrooms, dens, home theaters, or rental units.",
      icon: "Building",
      slug: "basement-remodels",
      includes: [
        "Framing & insulation",
        "Egress windows",
        "Bathroom rough-in & finish",
        "Flooring installation",
        "Ceiling & lighting",
      ],
      image: u("photo-1600585154340-be6161a56a0c"),
    },
    {
      title: "Shops & Garages",
      description:
        "Custom-built detached shops and garages — from basic storage to fully insulated workshops with power.",
      icon: "Home",
      slug: "shops-garages",
      includes: [
        "Concrete slab foundations",
        "Steel & wood framing",
        "Overhead door installation",
        "Electrical wiring",
        "Insulation & finishing",
      ],
      image: u("photo-1504307651254-35680f356dfd"),
    },
    {
      title: "Tile & Stone",
      description:
        "Expert tile installation for floors, showers, backsplashes, and feature walls — precision cuts and lasting grout lines.",
      icon: "Layers",
      slug: "tile",
      includes: [
        "Floor tile installation",
        "Shower & tub surrounds",
        "Backsplash design & install",
        "Natural stone work",
        "Waterproof membrane systems",
      ],
      image: u("photo-1541123603104-512919d6a96c"),
    },
    {
      title: "Concrete",
      description:
        "Foundations, flatwork, driveways, and patios — poured and finished by crews who've been doing this for decades.",
      icon: "Shovel",
      slug: "concrete",
      includes: [
        "Driveways & walkways",
        "Patio slabs",
        "Foundation pours",
        "Stamped & decorative concrete",
        "Concrete repair & resurfacing",
      ],
      image: u("photo-1558618666-fcd25c85f82e"),
    },
    {
      title: "Decks",
      description:
        "Custom wood and composite decks built for Spokane's climate — from simple platforms to multi-level entertaining spaces.",
      icon: "Fence",
      slug: "decks",
      includes: [
        "Pressure-treated wood decks",
        "Composite & Trex decking",
        "Railing systems",
        "Stair construction",
        "Deck resurfacing & repair",
      ],
      image: u("photo-1607400201889-565b1ee75f8e"),
    },
    {
      title: "Framing",
      description:
        "Structural framing for new builds and remodels — the critical foundation that everything else depends on.",
      icon: "Blocks",
      slug: "framing",
      includes: [
        "New construction framing",
        "Remodel framing",
        "Load-bearing wall work",
        "Roof framing & trusses",
        "Sheathing & bracing",
      ],
      image: u("photo-1632923057155-1c05a7cf3bb4"),
    },
    {
      title: "Fencing",
      description:
        "Privacy, security, and curb appeal — we build fences that stand straight and last through Spokane winters.",
      icon: "Fence",
      slug: "fencing",
      includes: [
        "Cedar privacy fencing",
        "Chain link fencing",
        "Gate construction",
        "Post replacement",
        "Full fence line clearing",
      ],
      image: u("photo-1600573472592-401b489a3cdc"),
    },
  ],
  reviews: [
    {
      name: "Roger & Diane P.",
      project: "Kitchen & Bathroom Remodel",
      quote:
        "We've used 4 Aces twice now — once for the kitchen, once for the master bath. Both times, John and his crew delivered exactly what they promised, on time and on budget. After 48 years in business, these guys know every trick in the book.",
    },
    {
      name: "Mike L.",
      project: "Garage Build",
      quote:
        "Had a 30x40 detached shop built. Concrete slab, full electrical, insulated walls. The crew was efficient and professional — finished ahead of schedule. The slab is dead level and the framing is rock solid.",
    },
    {
      name: "Janet K.",
      project: "Basement Finish",
      quote:
        "4 Aces transformed our unfinished basement into a beautiful living space with two bedrooms and a full bath. The egress window work was done perfectly and passed inspection without a hitch. It's like we gained a whole new floor.",
    },
    {
      name: "Tony B.",
      project: "Concrete Driveway",
      quote:
        "Replaced our crumbling driveway with a new pour — stamped border with a broom finish center. Looks fantastic and the drainage grade is perfect. These guys clearly have decades of experience with concrete.",
    },
    {
      name: "Karen & Bill S.",
      project: "Deck Construction",
      quote:
        "John built us a gorgeous composite deck off our back door. Multi-level with built-in benches and aluminum railing. It's been through two Spokane winters now and still looks brand new. Worth every penny.",
    },
    {
      name: "David T.",
      project: "Home Addition",
      quote:
        "We needed a master suite addition on our 1970s rancher. 4 Aces matched the roofline perfectly and the new space feels like it was always part of the house. The tile work in the bathroom is next-level.",
    },
    {
      name: "Susan R.",
      project: "Tile Work",
      quote:
        "Hired 4 Aces to retile our entire main floor and both bathrooms. The large format tile in the living area is flawless — not a single lippage issue. Their tile setter is a true craftsman.",
    },
  ],
  galleryImages: [
    { src: u("photo-1621905252507-b35492cc74b4"), alt: "Complete kitchen remodel with custom cabinetry", tag: "Kitchen" },
    { src: u("photo-1562259929-b4e1fd3aef09"), alt: "Modern bathroom renovation with custom tilework", tag: "Bathroom" },
    { src: u("photo-1558618666-fcd25c85f82e"), alt: "Freshly poured concrete driveway and walkway", tag: "Concrete" },
    { src: u("photo-1607400201889-565b1ee75f8e"), alt: "Multi-level composite deck with railing", tag: "Deck" },
    { src: u("photo-1632923057155-1c05a7cf3bb4"), alt: "Structural framing on residential project", tag: "Framing" },
    { src: u("photo-1600585154340-be6161a56a0c"), alt: "Finished basement with living area", tag: "Basement" },
    { src: u("photo-1541123603104-512919d6a96c"), alt: "Custom tile and stone installation", tag: "Tile" },
    { src: u("photo-1504307651254-35680f356dfd"), alt: "Active construction site for new garage build", tag: "Shops" },
  ],
  heroImage: u("photo-1504307651254-35680f356dfd", 1600, 900),
  logoImage: "",
  theme: {
    category: "contractor",
    colors: {
      sky: {
        "50": "#F0EFED",
        "100": "#E0DEDA",
        "200": "#C2BFBA",
        "300": "#9A9690",
        "400": "#6E6A63",
        "500": "#2D2B28",
        "600": "#231F1D",
        "700": "#1A1816",
        "800": "#131110",
        "900": "#0E0D0C",
        "950": "#090808",
      },
      sand: {
        "50": "#F7F6F4",
        "100": "#EDECE9",
        "200": "#E1DFDB",
        "300": "#C9C6C0",
        "400": "#A5A19A",
        "500": "#807C76",
        "600": "#5E5B56",
      },
      slate: {
        "50": "#F5F5F4",
        "100": "#EAEAE9",
        "200": "#DBDBD9",
        "300": "#B7B6B3",
        "400": "#8A8986",
        "500": "#5C5B58",
        "600": "#3D3C3A",
        "700": "#2A2928",
        "800": "#1A1A19",
        "900": "#111110",
        "950": "#0A0A09",
      },
      accent: {
        "50": "#FFF8E1",
        "100": "#FFECB3",
        "200": "#FFE082",
        "300": "#FFD54F",
        "400": "#FFCA28",
        "500": "#FFB300",
        "600": "#FFA000",
        "700": "#FF8F00",
      },
      accentName: "amber",
    },
    fonts: {
      display: "Bebas Neue",
      displayImport:
        "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap",
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
