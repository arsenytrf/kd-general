import type { BusinessConfig } from "@/types";

const u = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const config: BusinessConfig = {
  slug: "specialty-construction",
  company: {
    name: "Specialty Construction Systems, Ltd.",
    shortName: "Specialty Construction",
    owner: "Dan Mattern",
    phone: "(208) 773-2933",
    phoneRaw: "2087732933",
    email: "info@specialtyconstruction.com",
    address: "991 Innovation Way",
    city: "Post Falls, ID 83854",
    location: "Post Falls, Idaho",
    serviceArea: "Idaho, Washington & Montana",
    cities: [
      "Post Falls",
      "Coeur d'Alene",
      "Spokane",
      "Sandpoint",
      "Moscow",
      "Missoula",
    ],
    tagline: "Precision interior systems. Since 1995.",
    description:
      "Specialty Construction Systems has been delivering commercial-grade interior finishing across the Inland Northwest for nearly three decades. From metal framing and drywall on office towers to acoustical ceilings in hospitals and EIFS on hotel exteriors, we bring industrial precision and reliable project execution to every build.",
    formAction: "https://formspree.io/f/placeholder",
    hours: { weekday: "Mon-Fri 6:00 AM – 4:30 PM", weekend: "Closed" },
    features: [
      "Licensed, Bonded & Insured",
      "30+ years commercial experience",
      "Multi-state operations",
      "Union & non-union crews available",
    ],
    founded: 1995,
    rating: { stars: 4.7, count: "5+", source: "Google" },
    facebook: "",
  },
  services: [
    {
      title: "Interior Metal Framing",
      description:
        "Light-gauge and structural metal stud framing for commercial interiors — offices, hospitals, hotels, and tenant improvements.",
      icon: "Blocks",
      slug: "interior-metal-framing",
      includes: [
        "Light-gauge steel framing",
        "Load-bearing metal stud walls",
        "Shaft wall systems",
        "Curtain wall framing",
        "Seismic bracing",
      ],
      image: u("photo-1632923057155-1c05a7cf3bb4"),
    },
    {
      title: "Drywall Installation",
      description:
        "Large-scale drywall hanging, taping, and finishing for commercial projects. Level 4 and Level 5 finishes available.",
      icon: "PanelLeft",
      slug: "drywall-installation",
      includes: [
        "Board hanging & fastening",
        "Taping & mudding",
        "Level 4 & Level 5 finishes",
        "Moisture-resistant board",
        "Fire-rated assemblies",
      ],
      image: u("photo-1581094794329-c8112a89af12"),
    },
    {
      title: "Acoustical Ceilings",
      description:
        "Suspended ceiling systems engineered for sound control, aesthetics, and accessibility in commercial environments.",
      icon: "Layers",
      slug: "acoustical-ceilings",
      includes: [
        "Grid & tile systems",
        "Direct-mount ceilings",
        "Specialty acoustical panels",
        "Concealed spline systems",
        "Cloud & baffle installations",
      ],
      image: u("photo-1574359411659-15573a27fd0c"),
    },
    {
      title: "Wall Panels",
      description:
        "Decorative and functional wall panel systems for lobbies, conference rooms, and high-traffic commercial spaces.",
      icon: "RectangleHorizontal",
      slug: "wall-panels",
      includes: [
        "FRP panels",
        "Wood veneer panels",
        "Fabric-wrapped panels",
        "Impact-resistant systems",
        "Custom panel layouts",
      ],
      image: u("photo-1600585154340-be6161a56a0c"),
    },
    {
      title: "EIFS",
      description:
        "Exterior Insulation and Finish Systems — energy-efficient, weather-resistant cladding for commercial building exteriors.",
      icon: "Building",
      slug: "eifs",
      includes: [
        "EIFS installation",
        "Drainage EIFS systems",
        "Expansion joint detailing",
        "Sealant & flashing integration",
        "Repair & restoration",
      ],
      image: u("photo-1503387762-592deb58ef4e"),
    },
    {
      title: "Painting",
      description:
        "Commercial painting at scale — interiors, exteriors, and specialty coatings applied by experienced crews on tight timelines.",
      icon: "Paintbrush",
      slug: "painting",
      includes: [
        "Interior commercial painting",
        "Exterior commercial painting",
        "Epoxy & specialty coatings",
        "Spray & roll applications",
        "Color matching & consulting",
      ],
      image: u("photo-1560518883-ce09059eeffa"),
    },
    {
      title: "Plastering",
      description:
        "Traditional and synthetic plaster systems for commercial interiors requiring a refined, seamless finish.",
      icon: "Ruler",
      slug: "plastering",
      includes: [
        "Three-coat plaster systems",
        "Veneer plaster",
        "Synthetic plaster finishes",
        "Ornamental plaster repair",
        "High-build texture coatings",
      ],
      image: u("photo-1613545325278-f24b0cae1224"),
    },
    {
      title: "Insulation",
      description:
        "Thermal and acoustical insulation for walls, ceilings, and mechanical systems in commercial construction.",
      icon: "Shield",
      slug: "insulation",
      includes: [
        "Batt & blanket insulation",
        "Spray foam insulation",
        "Blown-in insulation",
        "Mechanical pipe insulation",
        "Fire-rated insulation assemblies",
      ],
      image: u("photo-1621905252507-b35492cc74b4"),
    },
    {
      title: "Steel Fabrication",
      description:
        "Custom steel fabrication for structural and architectural elements — brackets, embeds, and specialty framing components.",
      icon: "Hammer",
      slug: "steel-fabrication",
      includes: [
        "Custom bracket fabrication",
        "Embed plates",
        "Structural steel connections",
        "Miscellaneous metals",
        "Shop drawings & coordination",
      ],
      image: u("photo-1504307651254-35680f356dfd"),
    },
    {
      title: "Fireproofing",
      description:
        "Spray-applied and board fireproofing systems to meet code-required fire ratings on structural steel and assemblies.",
      icon: "Flame",
      slug: "fireproofing",
      includes: [
        "Spray-applied fireproofing (SFRM)",
        "Intumescent coatings",
        "Fire-rated board systems",
        "UL assembly compliance",
        "Inspection coordination",
      ],
      image: u("photo-1541123603104-512919d6a96c"),
    },
    {
      title: "Wall Coverings",
      description:
        "Commercial-grade wall coverings — vinyl, fabric, and specialty materials installed with precision in high-standard environments.",
      icon: "Fence",
      slug: "wall-coverings",
      includes: [
        "Vinyl wall covering",
        "Fabric wall covering",
        "Specialty & custom prints",
        "Surface preparation",
        "Seam-free large-format installation",
      ],
      image: u("photo-1600566753376-12c8ab7fb75b"),
    },
  ],
  reviews: [
    {
      name: "Brian K., GC Project Manager",
      project: "Office Tower Interior",
      quote:
        "Specialty Construction framed and finished 14 floors of a downtown Spokane office tower. Their coordination with the other trades was seamless, and the Level 5 drywall finish was flawless. They're our go-to for any project that demands precision.",
    },
    {
      name: "Linda S., Architect",
      project: "Hospital Renovation",
      quote:
        "We specified complex acoustical ceiling systems and EIFS for a hospital expansion. Specialty handled both scopes without a single RFI on the ceiling layout. Their field teams understand drawings — rare in this industry.",
    },
    {
      name: "Dave R., Developer",
      project: "Hotel Build",
      quote:
        "Dan and his crew handled all interior finishes on a 120-room hotel — framing, drywall, ceilings, painting, the works. On a project that size, consistency is everything. Every room looked identical. That's hard to achieve and they made it look easy.",
    },
    {
      name: "Mark T., Construction Manager",
      project: "Tenant Improvement",
      quote:
        "Used Specialty for a fast-track TI in Post Falls. 15,000 sq ft of metal framing, drywall, and ACT in four weeks. They hit every milestone. When you're on a tight schedule, these are the guys you want on the job.",
    },
    {
      name: "Jennifer P., Facility Manager",
      project: "School Renovation",
      quote:
        "Specialty Construction did all the acoustical ceiling work and wall panels in our school renovation. They worked around our schedule, kept the jobsite clean and safe around students, and the finished product looks fantastic. Very professional operation.",
    },
    {
      name: "Robert M., GC Superintendent",
      project: "Medical Office Build",
      quote:
        "Fireproofing, insulation, framing, and drywall — Specialty self-performed all of it on a 40,000 sq ft medical office. Having one sub handle that many scopes simplified coordination massively. Quality was excellent across the board.",
    },
  ],
  galleryImages: [
    { src: u("photo-1632923057155-1c05a7cf3bb4"), alt: "Commercial metal framing installation", tag: "Framing" },
    { src: u("photo-1581094794329-c8112a89af12"), alt: "Large-scale drywall finishing", tag: "Drywall" },
    { src: u("photo-1574359411659-15573a27fd0c"), alt: "Acoustical ceiling grid installation", tag: "Ceilings" },
    { src: u("photo-1503387762-592deb58ef4e"), alt: "Commercial EIFS exterior system", tag: "EIFS" },
    { src: u("photo-1504307651254-35680f356dfd"), alt: "Steel fabrication shop work", tag: "Steel" },
    { src: u("photo-1560518883-ce09059eeffa"), alt: "Commercial interior painting", tag: "Painting" },
    { src: u("photo-1541123603104-512919d6a96c"), alt: "Fireproofing application on steel", tag: "Fireproofing" },
    { src: u("photo-1600585154340-be6161a56a0c"), alt: "Wall panel installation in lobby", tag: "Panels" },
    { src: u("photo-1621905252507-b35492cc74b4"), alt: "Insulation installation in commercial space", tag: "Insulation" },
    { src: u("photo-1613545325278-f24b0cae1224"), alt: "Plastering and finishing work", tag: "Plaster" },
    { src: u("photo-1600566753376-12c8ab7fb75b"), alt: "Commercial wall covering installation", tag: "Wall Covering" },
    { src: u("photo-1562259929-b4e1fd3aef09"), alt: "Completed commercial interior space", tag: "Finished" },
    { src: u("photo-1607400201889-565b1ee75f8e"), alt: "Multi-story commercial project", tag: "Commercial" },
    { src: u("photo-1585128792020-803d29415281"), alt: "Detail of specialty finish work", tag: "Detail" },
  ],
  heroImage: u("photo-1503387762-592deb58ef4e", 1600, 900),
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
      display: "Archivo",
      displayImport:
        "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&display=swap",
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
