/* Curated Unsplash photos by trade — high-quality, free, hotlinkable.
   Format: https://images.unsplash.com/photo-{ID}?w={width}&h={height}&fit=crop&q=80
   All images are free to use commercially under the Unsplash License. */

const u = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const stockPhotos = {
  /* ---- GENERAL CONTRACTOR ---- */
  contractor: {
    hero: u("photo-1504307651254-35680f356dfd", 1200, 900),
    gallery: [
      { src: u("photo-1504307651254-35680f356dfd"), alt: "Residential construction project", tag: "Exterior" },
      { src: u("photo-1541123603104-512919d6a96c"), alt: "Home renovation in progress", tag: "Remodel" },
      { src: u("photo-1503387762-592deb58ef4e"), alt: "Modern home construction", tag: "Exterior" },
      { src: u("photo-1581094794329-c8112a89af12"), alt: "Framing and structural work", tag: "Framing" },
      { src: u("photo-1621905252507-b35492cc74b4"), alt: "Kitchen remodel project", tag: "Remodel" },
      { src: u("photo-1562259929-b4e1fd3aef09"), alt: "Bathroom renovation", tag: "Remodel" },
      { src: u("photo-1585128792020-803d29415281"), alt: "Exterior painting project", tag: "Exterior" },
      { src: u("photo-1607400201889-565b1ee75f8e"), alt: "New deck construction", tag: "Exterior" },
      { src: u("photo-1558618666-fcd25c85f82e"), alt: "Concrete foundation work", tag: "Foundation" },
      { src: u("photo-1574359411659-15573a27fd0c"), alt: "Roofing installation", tag: "Roofing" },
      { src: u("photo-1632923057155-1c05a7cf3bb4"), alt: "New construction framing", tag: "Framing" },
      { src: u("photo-1600585154340-be6161a56a0c"), alt: "Finished luxury interior", tag: "Remodel" },
      { src: u("photo-1600596542815-ffad4c1539a9"), alt: "Modern kitchen completed", tag: "Remodel" },
      { src: u("photo-1600566753376-12c8ab7fb75b"), alt: "Living room renovation", tag: "Remodel" },
      { src: u("photo-1600573472592-401b489a3cdc"), alt: "Exterior home view", tag: "Exterior" },
    ],
  },

  /* ---- ROOFING ---- */
  roofing: {
    hero: u("photo-1574359411659-15573a27fd0c", 1200, 900),
    gallery: [
      { src: u("photo-1574359411659-15573a27fd0c"), alt: "Roofing installation", tag: "Roofing" },
      { src: u("photo-1632823471565-1ecdf5c6d7b6"), alt: "Shingle roof completed", tag: "Roofing" },
      { src: u("photo-1600585154340-be6161a56a0c"), alt: "Finished home exterior", tag: "Exterior" },
      { src: u("photo-1504307651254-35680f356dfd"), alt: "Construction site", tag: "Exterior" },
      { src: u("photo-1558618666-fcd25c85f82e"), alt: "Foundation and structure", tag: "Foundation" },
      { src: u("photo-1607400201889-565b1ee75f8e"), alt: "Deck and exterior work", tag: "Exterior" },
      { src: u("photo-1600573472592-401b489a3cdc"), alt: "Beautiful home exterior", tag: "Exterior" },
      { src: u("photo-1585128792020-803d29415281"), alt: "Exterior paint job", tag: "Exterior" },
      { src: u("photo-1600596542815-ffad4c1539a9"), alt: "Interior renovation", tag: "Remodel" },
      { src: u("photo-1621905252507-b35492cc74b4"), alt: "Kitchen project", tag: "Remodel" },
    ],
  },

  /* ---- HVAC ---- */
  hvac: {
    hero: u("photo-1585771724684-38269d6639fd", 1200, 900),
    gallery: [
      { src: u("photo-1585771724684-38269d6639fd"), alt: "HVAC system installation", tag: "HVAC" },
      { src: u("photo-1581094271901-8022df4466f9"), alt: "Ductwork installation", tag: "HVAC" },
      { src: u("photo-1631545806609-b5e9a4a6e2d1"), alt: "AC unit maintenance", tag: "Cooling" },
      { src: u("photo-1558618666-fcd25c85f82e"), alt: "Commercial HVAC work", tag: "HVAC" },
      { src: u("photo-1600585154340-be6161a56a0c"), alt: "Climate-controlled home", tag: "Heating" },
      { src: u("photo-1600573472592-401b489a3cdc"), alt: "Residential HVAC service", tag: "HVAC" },
      { src: u("photo-1504307651254-35680f356dfd"), alt: "Construction site", tag: "Commercial" },
      { src: u("photo-1621905252507-b35492cc74b4"), alt: "Modern kitchen with HVAC", tag: "Heating" },
      { src: u("photo-1600596542815-ffad4c1539a9"), alt: "Energy efficient home", tag: "Cooling" },
      { src: u("photo-1600566753376-12c8ab7fb75b"), alt: "Comfortable interior", tag: "Heating" },
    ],
  },

  /* ---- WATER DAMAGE RESTORATION ---- */
  restoration: {
    hero: u("photo-1504307651254-35680f356dfd", 1200, 900),
    gallery: [
      { src: u("photo-1504307651254-35680f356dfd"), alt: "Restoration project", tag: "Restoration" },
      { src: u("photo-1541123603104-512919d6a96c"), alt: "Home repair in progress", tag: "Repair" },
      { src: u("photo-1558618666-fcd25c85f82e"), alt: "Foundation waterproofing", tag: "Waterproofing" },
      { src: u("photo-1581094794329-c8112a89af12"), alt: "Structural repair", tag: "Structural" },
      { src: u("photo-1600585154340-be6161a56a0c"), alt: "Restored home", tag: "Restoration" },
      { src: u("photo-1600596542815-ffad4c1539a9"), alt: "Interior restoration", tag: "Interior" },
      { src: u("photo-1585128792020-803d29415281"), alt: "Exterior restoration", tag: "Exterior" },
      { src: u("photo-1562259929-b4e1fd3aef09"), alt: "Bathroom restoration", tag: "Interior" },
      { src: u("photo-1621905252507-b35492cc74b4"), alt: "Kitchen restoration", tag: "Interior" },
      { src: u("photo-1600573472592-401b489a3cdc"), alt: "Home exterior after restoration", tag: "Exterior" },
    ],
  },

  /* ---- DRYWALL ---- */
  drywall: {
    hero: u("photo-1581094794329-c8112a89af12", 1200, 900),
    gallery: [
      { src: u("photo-1581094794329-c8112a89af12"), alt: "Drywall framing work", tag: "Drywall" },
      { src: u("photo-1541123603104-512919d6a96c"), alt: "Interior construction", tag: "Drywall" },
      { src: u("photo-1632923057155-1c05a7cf3bb4"), alt: "New construction interior", tag: "Framing" },
      { src: u("photo-1504307651254-35680f356dfd"), alt: "Construction project", tag: "Commercial" },
      { src: u("photo-1600585154340-be6161a56a0c"), alt: "Finished interior", tag: "Finished" },
      { src: u("photo-1600596542815-ffad4c1539a9"), alt: "Modern kitchen drywall", tag: "Finished" },
      { src: u("photo-1600566753376-12c8ab7fb75b"), alt: "Living space completed", tag: "Finished" },
      { src: u("photo-1585128792020-803d29415281"), alt: "Exterior finish work", tag: "Exterior" },
      { src: u("photo-1562259929-b4e1fd3aef09"), alt: "Bathroom finish", tag: "Finished" },
      { src: u("photo-1621905252507-b35492cc74b4"), alt: "Kitchen complete", tag: "Finished" },
    ],
  },

  /* ---- MOVING COMPANY ---- */
  mover: {
    hero: u("photo-1600585154526-990dced4db0d", 1200, 900),
    gallery: [
      { src: u("photo-1600585154526-990dced4db0d"), alt: "Moving boxes packed", tag: "Packing" },
      { src: u("photo-1558618666-fcd25c85f82e"), alt: "Moving truck loading", tag: "Loading" },
      { src: u("photo-1600573472592-401b489a3cdc"), alt: "Beautiful new home", tag: "Residential" },
      { src: u("photo-1600585154340-be6161a56a0c"), alt: "Home interior", tag: "Residential" },
      { src: u("photo-1600596542815-ffad4c1539a9"), alt: "Kitchen setup", tag: "Residential" },
      { src: u("photo-1600566753376-12c8ab7fb75b"), alt: "Living room setup", tag: "Residential" },
      { src: u("photo-1504307651254-35680f356dfd"), alt: "Commercial move", tag: "Commercial" },
      { src: u("photo-1541123603104-512919d6a96c"), alt: "Office relocation", tag: "Commercial" },
      { src: u("photo-1621905252507-b35492cc74b4"), alt: "Kitchen unpacking", tag: "Unpacking" },
      { src: u("photo-1562259929-b4e1fd3aef09"), alt: "Bathroom setup", tag: "Unpacking" },
    ],
  },
} as const;
