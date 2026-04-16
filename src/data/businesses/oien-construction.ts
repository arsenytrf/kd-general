import type { BusinessConfig } from "@/types";

const u = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const config: BusinessConfig = {
  slug: "oien-construction",
  company: {
    name: "Oien Construction Inc.",
    shortName: "Oien Construction",
    owner: "Dale Oien",
    phone: "(360) 340-1981",
    phoneRaw: "3603401981",
    email: "info@oienconstruction.com",
    address: "773 Grand Fir Dr",
    city: "Athol, ID 83801",
    location: "Athol, Idaho",
    serviceArea: "North Idaho & Spokane",
    cities: [
      "Athol",
      "Coeur d'Alene",
      "Post Falls",
      "Sandpoint",
      "Hayden",
      "Rathdrum",
    ],
    tagline: "Quality homes. Honest work.",
    description:
      "Oien Construction has been building and remodeling homes across North Idaho for over two decades. From custom new builds to kitchen remodels and ADUs, owner Dale Oien brings a craftsman's eye and a builder's discipline to every project. No shortcuts, no surprises — just solid work that stands the test of time.",
    formAction: "https://formspree.io/f/placeholder",
    hours: { weekday: "Mon-Fri 7:30 AM – 5:00 PM", weekend: "Sat by appointment" },
    features: [
      "Licensed, Bonded & Insured",
      "20+ years of experience",
      "Owner-operated",
      "Custom home specialist",
    ],
    founded: 2005,
    rating: { stars: 5.0, count: "10+", source: "Google" },
    facebook: "",
  },
  services: [
    {
      title: "New Home Construction",
      description:
        "Custom homes built from the ground up. We work with your architect or our design partners to deliver the home you've been planning.",
      icon: "Home",
      slug: "new-home-construction",
      includes: [
        "Custom floor plan execution",
        "Foundation & framing",
        "Finish carpentry & trim",
        "Trade coordination",
        "Final walkthrough & punch list",
      ],
      image: u("photo-1503387762-592deb58ef4e"),
    },
    {
      title: "Kitchen Remodels",
      description:
        "Full kitchen renovations that transform the heart of your home — cabinets, counters, layout changes, and everything in between.",
      icon: "PanelLeft",
      slug: "kitchen-remodels",
      includes: [
        "Cabinet design & installation",
        "Countertop selection & install",
        "Island builds",
        "Plumbing & electrical upgrades",
        "Backsplash & finishing details",
      ],
      image: u("photo-1600596542815-ffad4c1539a9"),
    },
    {
      title: "Bathroom Remodels",
      description:
        "From simple updates to full gut-and-rebuild bathrooms. Tile, fixtures, vanities, and waterproofing done right.",
      icon: "Wrench",
      slug: "bathroom-remodels",
      includes: [
        "Custom tile showers",
        "Freestanding tub installation",
        "Vanity & mirror upgrades",
        "Heated floors",
        "Proper ventilation & waterproofing",
      ],
      image: u("photo-1600573472592-401b489a3cdc"),
    },
    {
      title: "Basement Remodels",
      description:
        "Convert raw square footage into finished living space. Bedrooms, rec rooms, home offices, or rental units.",
      icon: "Blocks",
      slug: "basement-remodels",
      includes: [
        "Framing & insulation",
        "Egress windows",
        "Bathroom rough-in & finish",
        "Flooring & drywall",
        "Built-in storage",
      ],
      image: u("photo-1632923057155-1c05a7cf3bb4"),
    },
    {
      title: "Whole Home Remodels",
      description:
        "Major renovations that reimagine your entire home. We manage every trade and every detail from demo to final paint.",
      icon: "Building",
      slug: "whole-home-remodels",
      includes: [
        "Complete interior redesign",
        "Structural modifications",
        "Systems upgrades",
        "Open-concept conversions",
        "Comprehensive project management",
      ],
      image: u("photo-1560518883-ce09059eeffa"),
    },
    {
      title: "Additions",
      description:
        "Vertical or horizontal additions that expand your living space while blending seamlessly with your existing home.",
      icon: "RectangleHorizontal",
      slug: "additions",
      includes: [
        "Room additions",
        "Second-story additions",
        "Bump-outs & extensions",
        "Garage additions",
        "Foundation & structural engineering",
      ],
      image: u("photo-1541123603104-512919d6a96c"),
    },
    {
      title: "ADUs",
      description:
        "Accessory dwelling units — guest houses, in-law suites, or rental units built to code and designed for comfort.",
      icon: "Fence",
      slug: "adus",
      includes: [
        "Detached ADU construction",
        "Garage conversions",
        "Permit & zoning navigation",
        "Full kitchen & bath builds",
        "Utility connections",
      ],
      image: u("photo-1613545325278-f24b0cae1224"),
    },
    {
      title: "Yard Work",
      description:
        "Grading, retaining walls, fencing, and outdoor living spaces that extend your home into the Idaho landscape.",
      icon: "Trees",
      slug: "yard-work",
      includes: [
        "Grading & drainage",
        "Retaining walls",
        "Fence installation",
        "Deck & patio builds",
        "Landscape preparation",
      ],
      image: u("photo-1600585154340-be6161a56a0c"),
    },
  ],
  reviews: [
    {
      name: "Mike & Sharon D.",
      project: "New Home Construction",
      quote:
        "Dale built our dream home on a lakefront lot in Athol. From foundation to finish, the craftsmanship was exceptional. He caught design issues before they became problems and delivered a home that exceeded our expectations. We've recommended him to everyone we know.",
    },
    {
      name: "Patricia W.",
      project: "Kitchen Remodel",
      quote:
        "Our 1990s kitchen was completely transformed. New layout, custom cabinets, gorgeous quartz counters. Dale was hands-on the entire project and his attention to detail is remarkable. The kitchen is now the best room in the house.",
    },
    {
      name: "Tom & Beth H.",
      project: "Bathroom Remodel",
      quote:
        "Had the master bath completely redone — walk-in tile shower, freestanding tub, double vanity. The tile work alone is worth the investment. Dale and his crew were respectful of our home and finished on schedule.",
    },
    {
      name: "Greg R.",
      project: "Basement Remodel",
      quote:
        "Finished our daylight basement into a full apartment for rental income. Bedroom, bathroom, kitchenette, separate entrance. The build quality is identical to the main floor — you'd never know it was an add-on. Already has a tenant.",
    },
    {
      name: "Nancy L.",
      project: "ADU",
      quote:
        "Dale built a detached ADU on our property for my mother. It's a beautiful 600 sq ft cottage with everything she needs. He handled the permits, which were tricky in our area, and built it to the same standard as our main home.",
    },
    {
      name: "John & Karen S.",
      project: "Addition",
      quote:
        "Added a 500 sq ft great room and covered deck to our home. The transition between old and new is seamless — matching siding, roofline, and interior finishes. Dale's experience really shows in how he handles the connection points.",
    },
    {
      name: "Chris B.",
      project: "Whole Home Remodel",
      quote:
        "Bought a fixer-upper in Hayden and Oien Construction did a complete gut remodel. New layout, new systems, everything. Dale managed the whole project while we lived out of state. Came back to a completely different house. Couldn't be happier.",
    },
    {
      name: "Sarah M.",
      project: "Yard Work",
      quote:
        "Dale's crew built a beautiful retaining wall system on our sloped lot and graded the yard for proper drainage. The wall is rock solid and looks great. They also built a small patio area that we use constantly.",
    },
  ],
  galleryImages: [
    { src: u("photo-1503387762-592deb58ef4e"), alt: "Custom home build in North Idaho", tag: "New Build" },
    { src: u("photo-1600596542815-ffad4c1539a9"), alt: "Modern kitchen remodel with island", tag: "Kitchen" },
    { src: u("photo-1600573472592-401b489a3cdc"), alt: "Custom tile master bathroom", tag: "Bathroom" },
    { src: u("photo-1632923057155-1c05a7cf3bb4"), alt: "Basement framing in progress", tag: "Basement" },
    { src: u("photo-1560518883-ce09059eeffa"), alt: "Whole home renovation", tag: "Remodel" },
    { src: u("photo-1541123603104-512919d6a96c"), alt: "Home addition framing", tag: "Addition" },
    { src: u("photo-1613545325278-f24b0cae1224"), alt: "Completed ADU guest cottage", tag: "ADU" },
    { src: u("photo-1600585154340-be6161a56a0c"), alt: "Outdoor living space and patio", tag: "Outdoor" },
    { src: u("photo-1504307651254-35680f356dfd"), alt: "Active construction site progress", tag: "Construction" },
    { src: u("photo-1581094794329-c8112a89af12"), alt: "Structural framing detail", tag: "Framing" },
    { src: u("photo-1600566753376-12c8ab7fb75b"), alt: "Finished living room interior", tag: "Interior" },
    { src: u("photo-1574359411659-15573a27fd0c"), alt: "Exterior construction detail", tag: "Exterior" },
    { src: u("photo-1562259929-b4e1fd3aef09"), alt: "Custom deck and railing", tag: "Deck" },
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
