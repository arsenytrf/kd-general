import type { BusinessConfig } from "@/types";

const u = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const config: BusinessConfig = {
  slug: "hvac-spokane",
  company: {
    name: "HVAC Contractor And Services",
    shortName: "HVAC Spokane",
    owner: "The HVAC Spokane Team",
    phone: "(509) 555-0100",
    phoneRaw: "5095550100",
    email: "info@hvacspokane.com",
    address: "Spokane, WA",
    city: "Spokane, WA 99201",
    location: "Spokane, Washington",
    serviceArea: "Greater Spokane",
    cities: [
      "Spokane",
      "Spokane Valley",
      "Liberty Lake",
      "Cheney",
      "Airway Heights",
      "Medical Lake",
    ],
    tagline: "Comfort in every season.",
    description:
      "HVAC Contractor And Services keeps Spokane homes and businesses comfortable year-round. From AC installation and furnace repair to duct cleaning and emergency service, our certified technicians deliver fast, reliable HVAC solutions you can count on.",
    formAction: "https://formspree.io/f/placeholder",
    hours: { weekday: "Mon-Fri 7:00 AM – 6:00 PM", weekend: "Emergency service available" },
    features: [
      "Licensed, Bonded & Insured",
      "24/7 emergency service",
      "Free estimates on installations",
      "EPA-certified technicians",
    ],
    founded: 2021,
    rating: { stars: 4.8, count: "12+", source: "Google" },
    facebook: "",
  },
  services: [
    {
      title: "AC Installation",
      description:
        "Right-sized cooling systems installed by certified techs. We match the unit to your home so you get efficiency without overpaying.",
      icon: "Fan",
      slug: "ac-installation",
      includes: [
        "Load calculation & system sizing",
        "Central AC installation",
        "Ductless mini-split systems",
        "Thermostat setup & programming",
        "Post-install performance testing",
      ],
      image: u("photo-1585771724684-38269d6639fd"),
    },
    {
      title: "Heating Systems",
      description:
        "Furnaces, heat pumps, and radiant systems designed to keep you warm through Spokane winters without blowing up your energy bill.",
      icon: "Flame",
      slug: "heating-systems",
      includes: [
        "Gas & electric furnace installation",
        "Heat pump systems",
        "Radiant floor heating",
        "Boiler installation",
        "Zoning systems",
      ],
      image: u("photo-1631545806609-b5e9a4a6e2d1"),
    },
    {
      title: "Furnace Repair",
      description:
        "Furnace acting up? We diagnose fast, fix right, and get your heat back on — usually same day.",
      icon: "Wrench",
      slug: "furnace-repair",
      includes: [
        "Ignition & pilot light repair",
        "Blower motor replacement",
        "Heat exchanger inspection",
        "Thermocouple replacement",
        "Gas valve repair",
      ],
      image: u("photo-1581094271901-8022df4466f9"),
    },
    {
      title: "Duct Cleaning",
      description:
        "Clear out years of dust, allergens, and debris from your ductwork. Breathe cleaner air and improve system efficiency overnight.",
      icon: "Wind",
      slug: "duct-cleaning",
      includes: [
        "Full duct system inspection",
        "High-powered vacuum cleaning",
        "Sanitizing treatment",
        "Vent cover cleaning",
        "Before & after airflow testing",
      ],
      image: u("photo-1585771724684-38269d6639fd"),
    },
    {
      title: "Heat Pumps",
      description:
        "Energy-efficient heating and cooling in one system. We install, repair, and maintain all major heat pump brands.",
      icon: "Thermometer",
      slug: "heat-pumps",
      includes: [
        "Air-source heat pump install",
        "Ductless heat pump systems",
        "Heat pump repair & diagnostics",
        "Seasonal maintenance plans",
        "Rebate & incentive guidance",
      ],
      image: u("photo-1631545806609-b5e9a4a6e2d1"),
    },
    {
      title: "Thermostat Installation",
      description:
        "Smart thermostats, programmable thermostats, or simple replacements — properly wired and configured for your system.",
      icon: "Thermometer",
      slug: "thermostat-installation",
      includes: [
        "Smart thermostat setup (Nest, Ecobee)",
        "Wi-Fi thermostat installation",
        "Multi-zone thermostat wiring",
        "Compatibility verification",
        "App setup & training",
      ],
      image: u("photo-1581094271901-8022df4466f9"),
    },
    {
      title: "AC Maintenance",
      description:
        "Annual tune-ups that prevent breakdowns, extend equipment life, and keep your warranty valid.",
      icon: "Shield",
      slug: "ac-maintenance",
      includes: [
        "Refrigerant level check",
        "Coil cleaning",
        "Electrical connection inspection",
        "Drain line clearing",
        "Performance benchmarking",
      ],
      image: u("photo-1585771724684-38269d6639fd"),
    },
    {
      title: "Emergency HVAC Repair",
      description:
        "No heat in January? AC dead in August? We respond fast with 24/7 emergency service across greater Spokane.",
      icon: "HardHat",
      slug: "emergency-hvac-repair",
      includes: [
        "24/7 dispatch",
        "Same-day diagnostics",
        "Temporary heating/cooling solutions",
        "Priority parts sourcing",
        "After-hours service",
      ],
      image: u("photo-1581094271901-8022df4466f9"),
    },
  ],
  reviews: [
    {
      name: "Karen D.",
      project: "AC Installation",
      quote:
        "Had a new central AC system installed before summer hit. The crew was professional, explained everything clearly, and the system runs whisper-quiet. Our energy bill actually went down compared to the old unit.",
    },
    {
      name: "Robert & Amy L.",
      project: "Furnace Repair",
      quote:
        "Our furnace quit on a Saturday night in December. They had a tech at our house within two hours and got it running again that same night. Lifesavers — literally.",
    },
    {
      name: "James T.",
      project: "Heat Pump Installation",
      quote:
        "Switched from a gas furnace to a heat pump and couldn't be happier. The team handled everything including the rebate paperwork. Heating and cooling in one system just makes sense.",
    },
    {
      name: "Maria C.",
      project: "Duct Cleaning",
      quote:
        "We'd never had our ducts cleaned in 15 years of owning the house. The amount of dust they pulled out was horrifying. Noticeable difference in air quality the same day. Worth every penny.",
    },
    {
      name: "Paul H.",
      project: "Thermostat Installation",
      quote:
        "Quick and easy smart thermostat install. The tech made sure it was compatible with our system, set up the app on our phones, and showed us how to use the scheduling features. Very thorough.",
    },
    {
      name: "Susan W.",
      project: "AC Maintenance",
      quote:
        "Signed up for their annual maintenance plan. Tech comes out every spring, tunes everything up, and catches small issues before they become expensive. Peace of mind for a fair price.",
    },
    {
      name: "Derek M.",
      project: "Heating System",
      quote:
        "Replaced our ancient boiler with a high-efficiency furnace. The difference is night and day — house heats evenly now and our gas bill dropped significantly. Professional install, clean work area, no complaints.",
    },
  ],
  galleryImages: [
    { src: u("photo-1585771724684-38269d6639fd"), alt: "HVAC system installation in progress", tag: "Installation" },
    { src: u("photo-1631545806609-b5e9a4a6e2d1"), alt: "Modern heating system setup", tag: "Heating" },
    { src: u("photo-1581094271901-8022df4466f9"), alt: "HVAC technician performing repairs", tag: "Repair" },
    { src: u("photo-1558618666-fcd25c85f82e"), alt: "Residential AC unit installation", tag: "Cooling" },
    { src: u("photo-1574359411659-15573a27fd0c"), alt: "Ductwork inspection and cleaning", tag: "Ducts" },
    { src: u("photo-1607400201889-565b1ee75f8e"), alt: "Smart thermostat on modern wall", tag: "Thermostat" },
    { src: u("photo-1562259929-b4e1fd3aef09"), alt: "Heat pump outdoor unit installed", tag: "Heat Pump" },
    { src: u("photo-1600585154340-be6161a56a0c"), alt: "Clean indoor air quality testing", tag: "Air Quality" },
    { src: u("photo-1504307651254-35680f356dfd"), alt: "Commercial HVAC project", tag: "Commercial" },
    { src: u("photo-1621905252507-b35492cc74b4"), alt: "Furnace maintenance checkup", tag: "Maintenance" },
  ],
  heroImage: u("photo-1585771724684-38269d6639fd", 1600, 900),
  logoImage: "",
  theme: {
    category: "hvac",
    colors: {
      sky: {
        "50": "#ECEEF2",
        "100": "#D9DDE5",
        "200": "#B8BFCC",
        "300": "#8E99AB",
        "400": "#677488",
        "500": "#3D4A5C",
        "600": "#313B4A",
        "700": "#262D39",
        "800": "#1C212B",
        "900": "#141820",
        "950": "#0D1016",
      },
      sand: {
        "50": "#F8F7F5",
        "100": "#F0EDE9",
        "200": "#E4E0DA",
        "300": "#CCC5BB",
        "400": "#ABA296",
        "500": "#847C72",
        "600": "#615B53",
      },
      slate: {
        "50": "#F6F6F7",
        "100": "#EDEDEE",
        "200": "#DDDEE0",
        "300": "#BABCC0",
        "400": "#8D9098",
        "500": "#606469",
        "600": "#40444A",
        "700": "#2D3036",
        "800": "#1D2026",
        "900": "#13151A",
        "950": "#0B0C10",
      },
      accent: {
        "50": "#FFF3E0",
        "100": "#FFE0B2",
        "200": "#FFCC80",
        "300": "#FFB74D",
        "400": "#FFA726",
        "500": "#FF9100",
        "600": "#FF6D00",
        "700": "#E65100",
      },
      accentName: "tangerine",
    },
    fonts: {
      display: "Oswald",
      displayImport:
        "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap",
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
