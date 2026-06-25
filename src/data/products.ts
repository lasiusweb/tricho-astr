export interface ProductData {
  slug: string;
  name: string;
  nameUpper: string;
  tagline: string;
  taglineLong: string;
  bestFor: string;
  description: string;
  benefit: string;
  dosage: string;
  application: string;
  youtubeUrl: string;
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
    benefit: "Reduces chemical fertilizer use by 30-40%",
    dosage: "3-5 L/acre",
    application: "Soil drench, fertigation, or broadcast",
    youtubeUrl: "",
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
    benefit: "Prevents root rot & suppresses soil-borne diseases",
    dosage: "3-5 L/acre",
    application: "Soil drench, fertigation, seed treatment",
    youtubeUrl: "",
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
    benefit: "Triggers dark green growth in 7 days",
    dosage: "2-3 L/acre (drip) / 20ml/L (foliar)",
    application: "Foliar spray or drip irrigation",
    youtubeUrl: "",
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
    benefit: "Restricts pests in 1st & 2nd stage",
    dosage: "3-5 L/acre",
    application: "Foliar spray or soil drench",
    youtubeUrl: "",
  },
];
