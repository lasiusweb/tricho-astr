export interface ProductData {
  slug: string;
  name: string;
  tagline: string;
  taglineLong: string;
  bestFor: string;
  description: string;
  benefit: string;
  dosage: string;
  application: string;
  variant: { size: string; label: string };
  farmerBenefits: string[];
  applicationMethods: { method: string; description: string }[];
  methodSectionTitle?: string;
  dosageScheduleTitle?: string;
  dosageCards: { label: string; value: string; footnote?: string; wide?: boolean }[];
  howToApply?: string[];
  dealerCategory: string;
  dealerExtra: string;
  faqs: { question: string; answer: string }[];
  image?: string;
  youtubeUrl?: string;
  category: string;
}

export const productList: ProductData[] = [
  {
    slug: "soil-recharge",
    name: "Soil Recharge",
    tagline: "Beneficial Microbes Consortia",
    taglineLong: "Beneficial Microbes Consortia — Liquid Fermented Organic Manure",
    bestFor: "All field & vegetable crops needing soil revival and sustained nutrition.",
    description:
      "Transforms tired soil into living soil. Organic carbon + beneficial microbes deliver natural beneficial microbes consortia while building long-term fertility.",
    benefit: "Reduces chemical fertilizer use by 30-40%",
    dosage: "3-5 L/acre",
    application: "Soil drench, fertigation, or broadcast",
    variant: { size: "5L", label: "5 Litre" },
    farmerBenefits: [
      "Provides readily available source of Beneficial Microbes consortia, micronutrients and organic matter to boost soil fertility",
      "Enriches soil life &amp; structure",
      "High levels of Organic Carbon (OC)",
      "Reduces chemical fertilizer use by <strong>30-40%</strong>",
      "Improves water holding capacity &rarr; drought resilience",
    ],
    applicationMethods: [
      { method: "Soil Drench", description: "Mix 3-5 L in 200 L water &rarr; drench near plant base" },
      { method: "Fertigation", description: "Inject directly into drip irrigation system" },
      { method: "Broadcast", description: "Mix with irrigation water during field flooding" },
    ],
    dosageCards: [
      { label: "Dosage per Acre", value: "3-5 Litres" },
      { label: "Time of Application", value: "Early morning (6-9 AM) or late evening (4-6 PM)", footnote: "Avoid: Midday heat (&gt;35&deg;C) &amp; heavy rain days" },
      { label: "Interval", value: "Every 10-15 days during crop season", footnote: "First dose: 15 days after transplanting/sowing" },
      { label: "Recommended Crops", value: "All Horticulture &amp; Agriculture Crops" },
    ],
    howToApply: [
      "Take 2 litre of Vandhara Soil Recharge in 100 litre water tank",
      "Stir well for 2 minutes",
      "Spray near roots OR inject through drip system",
    ],
    image: "/images/products/soil-recharge/placeholder-800.svg",
    youtubeUrl: undefined,
    category: "Soil Health",
    dealerCategory: "Liquid Fermented Organic Manure",
    dealerExtra: "Training &amp; Marketing Support available for channel partners",
    faqs: [
      { question: "How is Soil Recharge different from chemical fertilizers?", answer: "Soil Recharge is a fermented organic liquid manure that feeds soil microbes and builds long-term fertility, whereas chemical fertilizers provide a quick nutrient hit but degrade soil health over time." },
      { question: "Can I use Soil Recharge with chemical fertilizers?", answer: "Yes. In fact, regular use can reduce your chemical fertilizer requirement by 30-40% while improving soil health." },
      { question: "What crops is it suitable for?", answer: "All horticulture and agriculture crops including vegetables, fruits, paddy, pulses, cotton, and plantation crops." },
    ],
  },
  {
    slug: "root-guard",
    name: "Root Guard",
    tagline: "Root Disease Shield",
    taglineLong: "Root Disease Shield — Organic Root Protectant & Bio-stimulant",
    bestFor: "Disease-prone soils & high-value crops (tomato, chilli, banana, turmeric).",
    description:
      "Your crop's bodyguard. It fights root diseases, unlocks deep water & phosphorus, and boosts plant immunity — creating disease-resistant, drought-tough crops.",
    benefit: "Prevents root rot & suppresses soil-borne diseases",
    dosage: "3-5 L/acre",
    application: "Soil drench, fertigation, seed treatment",
    variant: { size: "5L", label: "5 Litre" },
    farmerBenefits: [
      "Prevents root rot fungi <em>(Fusarium, Rhizoctonia)</em>",
      "Extends root reach 1000x &rarr; unlocks deep phosphorus &amp; water",
      "Enhanced drought resilience &amp; plant immunity &rarr; fewer diseases",
      "Organic Carbon feeds microbes for long-term soil health",
      "Suppresses soil-borne diseases",
    ],
    applicationMethods: [
      { method: "Soil Drench", description: "Mix 3-5 L in 200 L water &rarr; drench near roots" },
      { method: "Fertigation", description: "Inject through drip irrigation at transplanting" },
      { method: "Seed Treatment", description: "Mix 100 ml in 1 L water &rarr; dip seeds before sowing" },
    ],
    dosageCards: [
      { label: "Dosage per Acre", value: "3-5 Litres (split into 2-3 applications)" },
      { label: "Time of Application", value: "Best at transplanting/sowing stage", footnote: "Mix with compost/organic manure or apply directly to soil and nurseries" },
      { label: "Interval", value: "First dose at transplanting &rarr; repeat every 30 days (max 3 doses/season)" },
      { label: "Recommended Crops", value: "All Horticulture &amp; Agriculture Crops" },
    ],
    howToApply: [
      "Take 3 litres of Vandhara Root Guard in 150 litre water tank",
      "Stir gently (do not aerate heavily &ndash; protects microbes)",
      "Drench soil near roots within 2 hours of mixing",
    ],
    image: "/images/products/root-guard/placeholder-800.svg",
    youtubeUrl: undefined,
    category: "Root Health",
    dealerCategory: "Liquid Organic Root Protectant &amp; Bio-stimulant",
    dealerExtra: "High demand in: Tomato, chilli, banana, turmeric growing regions",
    faqs: [
      { question: "What diseases does Root Guard prevent?", answer: "Root Guard is effective against root rot fungi including Fusarium and Rhizoctonia, and helps suppress other soil-borne diseases." },
      { question: "Can I use it as a seed treatment?", answer: "Yes. Mix 100 ml in 1 L of water and dip seeds before sowing for early protection." },
      { question: "How often should I apply Root Guard?", answer: "First dose at transplanting, then repeat every 30 days. Maximum 3 doses per crop season." },
    ],
  },
  {
    slug: "agni",
    name: "Agni",
    tagline: "Growth Accelerator",
    taglineLong: "Growth Accelerator — Natural Plant Growth Regulator",
    bestFor: "Crops showing slow growth, yellow leaves, or needing a quick vigour boost (paddy, pulses, vegetables, horticulture).",
    description:
      "Mineral-rich, high-performance growth regulator. Wake up lazy crops in 7 days — triggers dark green growth, thicker leaves, and faster recovery from stress or yellowing.",
    benefit: "Triggers dark green growth in 7 days",
    dosage: "2-3 L/acre (drip) / 20ml/L (foliar)",
    application: "Foliar spray or drip irrigation",
    variant: { size: "5L", label: "5 Litre" },
    farmerBenefits: [
      "Natural growth hormones for faster growth and stress tolerance",
      "Improves nutrient uptake",
      "Prevents yellowing, boosts photosynthesis and better yield",
      "Improves leaf thickness &amp; disease resistance",
    ],
    applicationMethods: [
      { method: "Foliar Spray", description: "3 ml per litre of water. Spray evenly on leaves until runoff (both sides)" },
      { method: "Drip Application", description: "2-3 Litres per Acre" },
    ],
    dosageCards: [
      { label: "Dosage per Acre", value: "Foliar: 3ml/L water | Drip: 2-3 Litres" },
      { label: "Time of Application", value: "Early morning before 10 AM OR late evening after 4 PM", footnote: "Never spray during midday heat or when rain expected within 4 hrs" },
      { label: "Interval", value: "Every 15-20 days during active growth", footnote: "Key stages: 15 DAS &rarr; Pre-flowering &rarr; Fruit setting" },
      { label: "Recommended Crops", value: "All Horticulture &amp; Agriculture Crops" },
    ],
    image: "/images/products/agni/placeholder-800.svg",
    youtubeUrl: undefined,
    category: "Growth",
    dealerCategory: "Natural Plant Growth Regulator",
    dealerExtra: "Fast-moving SKU for paddy, vegetable, and horticulture growers",
    faqs: [
      { question: "How quickly will I see results with Agni?", answer: "Most farmers notice visible greening and thicker leaves within 7 days of application." },
      { question: "Can I use Agni during flowering?", answer: "Yes. Apply at pre-flowering and fruit setting stages for best results." },
      { question: "What dilution should I use for foliar spray?", answer: "Mix 3 ml per litre of water. Spray evenly on both upper and lower leaf surfaces until runoff." },
    ],
  },
  {
    slug: "vaayu",
    name: "Vaayu",
    tagline: "Nature's Pest Defence",
    taglineLong: "Nature's Pest Defence — Organic Pest Repellent",
    bestFor: "Integrated Pest Management in paddy, cotton, vegetables & fruit crops.",
    description:
      "Nature's pest defence system. Vandhara Vaayu restricts pests in the 1st and 2nd stages — protecting your crops without harming your family's health.",
    benefit: "Restricts pests in 1st & 2nd stage",
    dosage: "3-5 L/acre",
    application: "Foliar spray or soil drench",
    variant: { size: "5L", label: "5 Litre" },
    farmerBenefits: [
      "Restricts pests in 1st and 2nd stage of development in all crops",
      "Safe for crops, farmers, and the environment",
      "Ideal for Integrated Pest Management (IPM) programmes",
      "Zero synthetic chemicals at any stage",
    ],
    applicationMethods: [
      { method: "Foliar Spray", description: "3-5 Litres per acre (in 150-200 L water)" },
      { method: "Soil Drench", description: "3-5 Litres per acre (in 200 L water)" },
    ],
    methodSectionTitle: "Method of Application &amp; Dosage",
    dosageScheduleTitle: "Schedule &amp; Timing",
    dosageCards: [
      { label: "Time of Application", value: "Early morning (6-9 AM) &ndash; when humidity is high", footnote: "Avoid spraying when temperature &gt;35&deg;C or rain expected within 6 hrs" },
      { label: "Interval", value: "First spray at pest sighting &rarr; repeat after 15 days if needed", footnote: "Max 3 sprays per crop season" },
      { label: "Recommended Crops &amp; Target Pests", value: "All Horticulture &amp; Agriculture Crops", wide: true },
    ],
    howToApply: [
      "Fill sprayer with half water",
      "Add 2-3 litres Vandhara Vaayu (for 200 L sprayer)",
      "Fill remaining water &amp; shake gently",
      "Spray thoroughly on leaves (underside too) OR drench soil",
    ],
    image: "/images/products/vaayu/placeholder-800.svg",
    youtubeUrl: undefined,
    category: "Pest Control",
    dealerCategory: "Organic Pest Repellent",
    dealerExtra: "High demand in: Paddy, cotton, vegetable growing regions",
    faqs: [
      { question: "What pests does Vaayu control?", answer: "Vandhara Vaayu restricts pests in the 1st and 2nd stages of development across all crops. It is most effective as part of an Integrated Pest Management (IPM) programme." },
      { question: "Is Vaayu safe for beneficial insects?", answer: "Yes. As an organic formulation with zero synthetic chemicals, it is safer for beneficial insects, crops, and farmers compared to chemical pesticides when used as directed." },
      { question: "How many sprays are needed per season?", answer: "First spray at pest sighting, repeat after 15 days if needed. Maximum 3 sprays per crop season." },
    ],
  },
];
