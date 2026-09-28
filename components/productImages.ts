// Product family key → photo in /public/images. Keys match messages products.items[].key.
export const productImages: Record<string, string> = {
  'kneeling-leveling': '/images/kneeling-leveling.jpg',
  compressors: '/images/compressors.jpg',
  dryers: '/images/dryers.jpg',
  'drain-valves': '/images/drain-valves.jpg',
  'air-suspension': '/images/air-suspension.jpg',
  manifolds: '/images/manifolds.jpg',
  solenoids: '/images/solenoids.jpg',
  'hydraulic-valves': '/images/hydraulic-valves.jpg',
  hose: '/images/hose.jpg',
  fittings: '/images/fittings.jpg'
};

// Clicking "Request a quote" on a product card preselects that family in the RFQ form.
export const FAMILY_EVENT = 'rilke:select-family';
