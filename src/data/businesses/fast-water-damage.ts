import type { BusinessConfig } from "@/types";

const u = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const config: BusinessConfig = {
  slug: "fast-water-damage",
  company: {
    name: "Fast Water Damage Restoration",
    shortName: "Fast Restoration",
    owner: "The Restoration Team",
    phone: "(509) 555-0200",
    phoneRaw: "5095550200",
    email: "info@fastwaterdamage.com",
    address: "Spokane, WA",
    city: "Spokane, WA 99201",
    location: "Spokane, Washington",
    serviceArea: "Spokane & Eastern WA",
    cities: [
      "Spokane",
      "Spokane Valley",
      "Liberty Lake",
      "Cheney",
      "Post Falls",
      "Coeur d'Alene",
    ],
    tagline: "Fast response. Full restoration.",
    description:
      "Fast Water Damage Restoration provides 24/7 emergency water extraction, flood cleanup, mold remediation, and full structural restoration across Spokane and Eastern Washington. When disaster strikes, we respond within the hour — because every minute counts.",
    formAction: "https://formspree.io/f/placeholder",
    hours: { weekday: "24/7 Emergency Service", weekend: "24/7 Emergency Service" },
    features: [
      "Licensed, Bonded & Insured",
      "60-minute emergency response",
      "IICRC-certified technicians",
      "Direct insurance billing",
    ],
    founded: 2022,
    rating: { stars: 4.9, count: "15+", source: "Google" },
    facebook: "",
  },
  services: [
    {
      title: "Water Extraction",
      description:
        "Industrial-grade pumps and extractors remove standing water fast — from basements, crawlspaces, and every level of your home.",
      icon: "Droplets",
      slug: "water-extraction",
      includes: [
        "Standing water removal",
        "Submersible pump deployment",
        "Carpet & pad extraction",
        "Crawlspace water removal",
        "Moisture mapping",
      ],
      image: u("photo-1607400201889-565b1ee75f8e"),
    },
    {
      title: "Flood Cleanup",
      description:
        "Complete flood damage cleanup — debris removal, sanitization, and content restoration to get your property back to livable condition.",
      icon: "Shield",
      slug: "flood-cleanup",
      includes: [
        "Debris & mud removal",
        "Content pack-out & storage",
        "Antimicrobial treatment",
        "Odor elimination",
        "Damage documentation for insurance",
      ],
      image: u("photo-1558618666-fcd25c85f82e"),
    },
    {
      title: "Mold Remediation",
      description:
        "Certified mold removal and prevention. We contain, remove, and treat affected areas to protect your health and your structure.",
      icon: "Wind",
      slug: "mold-remediation",
      includes: [
        "Mold inspection & testing",
        "Containment setup",
        "HEPA air filtration",
        "Mold removal & treatment",
        "Post-remediation verification",
      ],
      image: u("photo-1562259929-b4e1fd3aef09"),
    },
    {
      title: "Structural Drying",
      description:
        "Commercial-grade dehumidifiers and air movers placed strategically to dry walls, floors, and framing before secondary damage sets in.",
      icon: "Hammer",
      slug: "structural-drying",
      includes: [
        "Dehumidifier placement",
        "High-velocity air mover setup",
        "Daily moisture readings",
        "Wall cavity drying",
        "Hardwood floor mat drying",
      ],
      image: u("photo-1574359411659-15573a27fd0c"),
    },
    {
      title: "Water Damage Repair",
      description:
        "Once it's dry, we rebuild. Drywall, flooring, trim, paint — full restoration so it looks like nothing ever happened.",
      icon: "Wrench",
      slug: "water-damage-repair",
      includes: [
        "Drywall replacement",
        "Flooring restoration",
        "Trim & baseboard replacement",
        "Painting & texture matching",
        "Cabinet & countertop repair",
      ],
      image: u("photo-1585128792020-803d29415281"),
    },
    {
      title: "Sewage Cleanup",
      description:
        "Category 3 black water cleanup handled safely by trained technicians. Hazardous materials properly contained and disposed.",
      icon: "Building",
      slug: "sewage-cleanup",
      includes: [
        "Black water extraction",
        "Biohazard containment",
        "Antimicrobial treatment",
        "Affected material disposal",
        "Full sanitization & deodorization",
      ],
      image: u("photo-1621905252507-b35492cc74b4"),
    },
    {
      title: "Storm Damage Restoration",
      description:
        "Wind, rain, ice — whatever Mother Nature throws at your property, we handle the cleanup and the rebuild.",
      icon: "Flame",
      slug: "storm-damage-restoration",
      includes: [
        "Emergency board-up & tarping",
        "Water intrusion mitigation",
        "Debris removal",
        "Structural assessment",
        "Insurance claim assistance",
      ],
      image: u("photo-1504307651254-35680f356dfd"),
    },
    {
      title: "Fire Damage Restoration",
      description:
        "Smoke, soot, and structural fire damage restored from assessment through final rebuild. We coordinate the entire process.",
      icon: "HardHat",
      slug: "fire-damage-restoration",
      includes: [
        "Smoke & soot removal",
        "Structural stabilization",
        "Content cleaning & restoration",
        "Odor elimination (thermal fogging, ozone)",
        "Full reconstruction",
      ],
      image: u("photo-1581094794329-c8112a89af12"),
    },
  ],
  reviews: [
    {
      name: "Jennifer L.",
      project: "Water Extraction",
      quote:
        "Came home to a burst pipe and three inches of water in the basement. Called Fast Restoration at 11pm and they had a crew at my house by midnight. Pumps running, fans set up, and they saved most of our flooring. Unbelievable response time.",
    },
    {
      name: "Dave & Carol P.",
      project: "Flood Cleanup",
      quote:
        "Spring runoff flooded our finished basement. These guys handled everything — water removal, demo of the damaged drywall, drying, and then the rebuild. They even dealt with our insurance company directly. Made a nightmare manageable.",
    },
    {
      name: "Tina R.",
      project: "Mold Remediation",
      quote:
        "Found mold behind our bathroom wall during a remodel. Fast Restoration contained it immediately, ran HEPA filtration for three days, and cleared the whole area. Post-test came back clean. Professional and knowledgeable.",
    },
    {
      name: "Kevin M.",
      project: "Structural Drying",
      quote:
        "Dishwasher leaked for who knows how long before we noticed. They set up drying equipment, monitored moisture levels daily, and saved our hardwood floors. Thought we'd need full replacement but they pulled it off.",
    },
    {
      name: "Amanda S.",
      project: "Sewage Cleanup",
      quote:
        "Sewer backup in the basement — worst thing I've ever dealt with. The crew showed up in full PPE, handled the biohazard properly, sanitized everything, and the smell was completely gone. They treated the situation with zero judgment and total professionalism.",
    },
    {
      name: "Frank & Debbie T.",
      project: "Storm Damage Restoration",
      quote:
        "A tree came through our roof during a windstorm. Fast Restoration had our roof tarped within hours to stop further water damage, then handled the entire restoration process. Our house looks better than before the storm.",
    },
    {
      name: "Nathan B.",
      project: "Fire Damage Restoration",
      quote:
        "Kitchen fire that spread to the ceiling and attic. These guys handled smoke damage throughout the entire house, structural repairs, and got us back home two weeks ahead of the estimate. Their attention to detail on the smoke odor treatment was incredible.",
    },
    {
      name: "Lisa & Mark J.",
      project: "Water Damage Repair",
      quote:
        "After a major leak destroyed our kitchen ceiling and walls, Fast Restoration rebuilt everything — drywall, texture, paint, trim. You literally cannot tell anything happened. Seamless insurance coordination too.",
    },
  ],
  galleryImages: [
    { src: u("photo-1607400201889-565b1ee75f8e"), alt: "Water extraction equipment in action", tag: "Extraction" },
    { src: u("photo-1558618666-fcd25c85f82e"), alt: "Flood damage cleanup operation", tag: "Flood" },
    { src: u("photo-1562259929-b4e1fd3aef09"), alt: "Mold remediation containment setup", tag: "Mold" },
    { src: u("photo-1574359411659-15573a27fd0c"), alt: "Structural drying with industrial equipment", tag: "Drying" },
    { src: u("photo-1585128792020-803d29415281"), alt: "Water damage repair in progress", tag: "Repair" },
    { src: u("photo-1621905252507-b35492cc74b4"), alt: "Professional cleanup crew on site", tag: "Cleanup" },
    { src: u("photo-1504307651254-35680f356dfd"), alt: "Storm damage restoration project", tag: "Storm" },
    { src: u("photo-1581094794329-c8112a89af12"), alt: "Fire damage assessment and rebuild", tag: "Fire" },
    { src: u("photo-1632923057155-1c05a7cf3bb4"), alt: "Structural restoration work", tag: "Structural" },
    { src: u("photo-1541123603104-512919d6a96c"), alt: "Commercial water damage project", tag: "Commercial" },
    { src: u("photo-1600585154340-be6161a56a0c"), alt: "Restored interior after water damage", tag: "Restored" },
    { src: u("photo-1613545325278-f24b0cae1224"), alt: "Emergency response vehicle and equipment", tag: "Emergency" },
  ],
  heroImage: u("photo-1607400201889-565b1ee75f8e", 1600, 900),
  logoImage: "",
  theme: {
    category: "restoration",
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
