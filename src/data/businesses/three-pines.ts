import type { BusinessConfig } from "@/types";

const u = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const config: BusinessConfig = {
  slug: "three-pines",
  company: {
    name: "Three Pines Construction LLC",
    shortName: "Three Pines",
    owner: "The Three Pines Team",
    phone: "(509) 381-5132",
    phoneRaw: "5093815132",
    email: "info@threepines.com",
    address: "15215 E Marietta Ave A101",
    city: "Worley, ID 83876",
    location: "Worley, Idaho",
    serviceArea: "Spokane & Inland Empire",
    cities: [
      "Spokane",
      "Spokane Valley",
      "Cheney",
      "Worley",
      "Coeur d'Alene",
      "Post Falls",
    ],
    tagline: "Quality you can trust. Built to last.",
    description:
      "Three Pines Construction delivers dependable general contracting, carpentry, and remodeling services across the Spokane and Inland Empire region. We take pride in honest timelines, clean job sites, and work that stands up for decades — not just the warranty period.",
    formAction: "https://formspree.io/f/placeholder",
    hours: { weekday: "Mon-Fri 9:00 AM – 5:00 PM", weekend: "Sat-Sun Closed" },
    features: [
      "Licensed & insured",
      "Free on-site estimates",
      "Residential & light commercial",
      "Clean job sites guaranteed",
      "Locally owned & operated",
    ],
    founded: 2020,
    rating: { stars: 4.8, count: "15+", source: "Google" },
    facebook: "",
  },
  services: [
    {
      title: "General Contracting",
      description:
        "Full-scope project management from permits to punch list. We coordinate every trade so you don't have to.",
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
      title: "Carpentry",
      description:
        "Custom trim, built-ins, and structural carpentry that brings character and precision to every room.",
      icon: "Hammer",
      slug: "carpentry",
      includes: [
        "Crown molding & baseboards",
        "Custom shelving & built-ins",
        "Door & window installation",
        "Structural framing repairs",
        "Stair construction",
      ],
      image: u("photo-1581094794329-c8112a89af12"),
    },
    {
      title: "Roofing",
      description:
        "Reliable roof installations and repairs built to handle Pacific Northwest weather year after year.",
      icon: "Home",
      slug: "roofing",
      includes: [
        "Asphalt shingle installation",
        "Metal roofing",
        "Roof repairs & patching",
        "Gutter installation",
        "Storm damage restoration",
      ],
      image: u("photo-1574359411659-15573a27fd0c"),
    },
    {
      title: "Framing",
      description:
        "Solid structural framing for new builds, additions, and major remodels — the backbone of every great project.",
      icon: "Blocks",
      slug: "framing",
      includes: [
        "New construction framing",
        "Addition framing",
        "Load-bearing wall modifications",
        "Header & beam installation",
        "Sheathing & bracing",
      ],
      image: u("photo-1632923057155-1c05a7cf3bb4"),
    },
    {
      title: "Remodeling",
      description:
        "Kitchen, bathroom, and whole-home remodels that transform your space while respecting your budget.",
      icon: "Wrench",
      slug: "remodeling",
      includes: [
        "Kitchen renovations",
        "Bathroom upgrades",
        "Open-concept conversions",
        "Layout reconfiguration",
        "Finish selection assistance",
      ],
      image: u("photo-1560518883-ce09059eeffa"),
    },
    {
      title: "Flooring",
      description:
        "From hardwood to luxury vinyl, we install floors that look great and hold up to real life.",
      icon: "Layers",
      slug: "flooring",
      includes: [
        "Hardwood installation",
        "Luxury vinyl plank",
        "Tile & stone",
        "Subfloor repair",
        "Trim & transitions",
      ],
      image: u("photo-1600585154340-be6161a56a0c"),
    },
  ],
  reviews: [
    {
      name: "Mark T.",
      project: "Kitchen Remodel",
      quote:
        "Three Pines completely gutted and rebuilt our kitchen in under six weeks. The craftsmanship on the custom cabinetry is outstanding — every drawer glides perfectly. They stayed on budget and communicated every step of the way.",
    },
    {
      name: "Sarah & Dan L.",
      project: "Roof Replacement",
      quote:
        "We got three bids and Three Pines wasn't the cheapest, but they were the most thorough. They explained what needed to happen and why. Roof went on in two days, clean-up was spotless, and we haven't had a single issue since.",
    },
    {
      name: "Jeff K.",
      project: "Basement Framing",
      quote:
        "Hired them to frame out our basement for a future finish. Everything was plumb, square, and inspected without a single callback. Inspector actually complimented the work, which almost never happens.",
    },
    {
      name: "Lisa R.",
      project: "Bathroom Renovation",
      quote:
        "Our 1970s bathroom desperately needed updating. Three Pines handled everything — plumbing, tile, vanity, the works. It looks like a completely different house. Neighbors keep asking who did it.",
    },
    {
      name: "Tom W.",
      project: "General Contracting",
      quote:
        "We used Three Pines to manage our garage-to-ADU conversion. They handled permits, coordinated all the subs, and kept the project moving even when material delays hit. Genuinely professional operation.",
    },
    {
      name: "Angela M.",
      project: "Flooring Installation",
      quote:
        "Had LVP installed throughout our main floor — about 1,200 square feet. The crew was fast, careful with our furniture, and the transitions around the fireplace look custom. Very happy with the result.",
    },
    {
      name: "Chris B.",
      project: "Carpentry & Trim",
      quote:
        "Three Pines did all the interior trim on our new build after our original contractor bailed. Crown molding, baseboards, window casings — all tight, all clean. They saved our project timeline.",
    },
  ],
  galleryImages: [
    { src: u("photo-1504307651254-35680f356dfd"), alt: "Active construction site with crew at work", tag: "Construction" },
    { src: u("photo-1581094794329-c8112a89af12"), alt: "Precision wood framing on a residential project", tag: "Framing" },
    { src: u("photo-1574359411659-15573a27fd0c"), alt: "New roof installation in progress", tag: "Roofing" },
    { src: u("photo-1560518883-ce09059eeffa"), alt: "Modern home renovation in progress", tag: "Remodel" },
    { src: u("photo-1600596542815-ffad4c1539a9"), alt: "Clean modern kitchen after remodel", tag: "Kitchen" },
    { src: u("photo-1600566753376-12c8ab7fb75b"), alt: "Finished living room with new flooring", tag: "Flooring" },
    { src: u("photo-1632923057155-1c05a7cf3bb4"), alt: "Structural framing on a new addition", tag: "Framing" },
    { src: u("photo-1595514535116-d12d1bae4915"), alt: "Blueprint planning session with client", tag: "Planning" },
  ],
  heroImage: u("photo-1503387762-592deb58ef4e", 1600, 900),
  logoImage: "",
  theme: {
    category: "contractor",
    colors: {
      sky: {
        "50": "#EEF1EB",
        "100": "#DCE3D8",
        "200": "#C1CEBB",
        "300": "#9AAE92",
        "400": "#6E8A69",
        "500": "#2C4A3E",
        "600": "#223A31",
        "700": "#1A2D26",
        "800": "#13211C",
        "900": "#0F1F18",
        "950": "#0B1612",
      },
      sand: {
        "50": "#F5F5F3",
        "100": "#EAEAE6",
        "200": "#DDDDD8",
        "300": "#C4C4BC",
        "400": "#A0A098",
        "500": "#7A7A72",
        "600": "#5A5A54",
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
        "50": "#FFF3E0",
        "100": "#FFE0B2",
        "200": "#FFCC80",
        "300": "#FFB74D",
        "400": "#FFA726",
        "500": "#F57C00",
        "600": "#E65100",
        "700": "#BF360C",
      },
      accentName: "clay",
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
