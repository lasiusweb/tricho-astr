export interface ProductVariant {
  size: string;
  label: string;
  image: string;
  alt?: string;
}

export interface ProductData {
  slug: string;
  name: string;
  nameUpper: string;
  tagline: string;
  taglineLong: string;
  bestFor: string;
  description: string;
  youtubeUrl: string;
  variants: ProductVariant[];
}

export const productList: ProductData[] = [
  {
    slug: "soil-recharge",
    name: "Soil Recharge",
    nameUpper: "VANDHARA SOIL RECHARGE",
    tagline: "Beneficial Microbes Consortia",
    taglineLong: "Beneficial Microbes Consortia — Liquid Fermented Organic Manure",
    bestFor: "All field & vegetable crops needing soil revival and sustained nutrition.",
    description:
      "Transforms tired soil into living soil. Organic carbon + beneficial microbes deliver natural beneficial microbes consortia while building long-term fertility.",
    youtubeUrl: "",
    variants: [
      { size: "5L", label: "5 Litre", image: "/images/products/soil-recharge-5l.jpg", alt: "Vandhara Soil Recharge — 5 Litre" },
      { size: "20L", label: "20 Litre", image: "/images/products/soil-recharge-20l.jpg", alt: "Vandhara Soil Recharge — 20 Litre" },
      { size: "50L", label: "50 Litre", image: "/images/products/soil-recharge-50l.jpg", alt: "Vandhara Soil Recharge — 50 Litre" },
    ],
  },
  {
    slug: "root-guard",
    name: "Root Guard",
    nameUpper: "VANDHARA ROOT GUARD",
    tagline: "Root Disease Shield",
    taglineLong: "Root Disease Shield — Organic Root Protectant & Bio-stimulant",
    bestFor: "Disease-prone soils & high-value crops (tomato, chilli, banana, turmeric).",
    description:
      "Your crop's bodyguard. It fights root diseases, unlocks deep water & phosphorus, and boosts plant immunity — creating disease-resistant, drought-tough crops.",
    youtubeUrl: "",
    variants: [
      { size: "5L", label: "5 Litre", image: "/images/products/root-guard-5l.jpg", alt: "Vandhara Root Guard — 5 Litre" },
      { size: "20L", label: "20 Litre", image: "/images/products/root-guard-20l.jpg", alt: "Vandhara Root Guard — 20 Litre" },
      { size: "50L", label: "50 Litre", image: "/images/products/root-guard-50l.jpg", alt: "Vandhara Root Guard — 50 Litre" },
    ],
  },
  {
    slug: "agni",
    name: "Agni",
    nameUpper: "VANDHARA AGNI",
    tagline: "Growth Accelerator",
    taglineLong: "Growth Accelerator — Natural Plant Growth Regulator",
    bestFor: "Crops showing slow growth, yellow leaves, or needing a quick vigour boost (paddy, pulses, vegetables, horticulture).",
    description:
      "Mineral-rich, high-performance growth regulator. Wake up lazy crops in 7 days — triggers dark green growth, thicker leaves, and faster recovery from stress or yellowing.",
    youtubeUrl: "",
    variants: [
      { size: "5L", label: "5 Litre", image: "/images/products/agni-5l.jpg", alt: "Vandhara Agni — 5 Litre" },
      { size: "20L", label: "20 Litre", image: "/images/products/agni-20l.jpg", alt: "Vandhara Agni — 20 Litre" },
      { size: "50L", label: "50 Litre", image: "/images/products/agni-50l.jpg", alt: "Vandhara Agni — 50 Litre" },
    ],
  },
  {
    slug: "vaayu",
    name: "Vaayu",
    nameUpper: "VANDHARA VAAYU",
    tagline: "Nature's Pest Defence",
    taglineLong: "Nature's Pest Defence — Organic Pest Repellent",
    bestFor: "Integrated Pest Management in paddy, cotton, vegetables & fruit crops.",
    description:
      "Nature's pest defence system. Vandhara Vaayu restricts pests in the 1st and 2nd stages — protecting your crops without harming your family's health.",
    youtubeUrl: "",
    variants: [
      { size: "5L", label: "5 Litre", image: "/images/products/vaayu-5l.jpg", alt: "Vandhara Vaayu — 5 Litre" },
      { size: "20L", label: "20 Litre", image: "/images/products/vaayu-20l.jpg", alt: "Vandhara Vaayu — 20 Litre" },
      { size: "50L", label: "50 Litre", image: "/images/products/vaayu-50l.jpg", alt: "Vandhara Vaayu — 50 Litre" },
    ],
  },
];
