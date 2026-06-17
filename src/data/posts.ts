export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string;
  tags: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "why-soil-health-matters",
    title: "Why Soil Health Matters More Than Ever",
    excerpt: "Understanding the crucial role of soil microbiology in sustainable agriculture and how fermented organic liquids can restore degraded farmland.",
    date: "2026-01-15",
    author: "Vandhara Agrotech Team",
    content: `
      <p>India's agricultural soil is in crisis. Decades of chemical fertilizer overuse have depleted organic carbon, destroyed microbial diversity, and left vast tracts of farmland dependent on ever-increasing synthetic inputs.</p>
      <p>At Vandhara Agrotech, we believe the solution lies in working with nature, not against it. Our fermented organic liquids are designed to restore the biological engine of your soil — the complex community of bacteria, fungi, and other microorganisms that make nutrients available to plants.</p>
      <h2>The Numbers Don't Lie</h2>
      <p>Studies show that Indian soils have lost 50-70% of their organic carbon content over the past 50 years. This directly impacts water retention, nutrient cycling, and crop resilience. Organic matter is the foundation of soil health — and it must be rebuilt.</p>
      <h2>How Fermented Organic Liquids Help</h2>
      <p>Unlike raw compost or chemical fertilizers, fermented organic liquids deliver a concentrated dose of beneficial microbes, organic carbon, and micronutrients in a form that plants can access immediately. Products like Vandhara Soil Recharge provide:</p>
      <ul>
        <li>Ready-available beneficial microbes consortia</li>
        <li>High levels of organic carbon to feed soil biology</li>
        <li>Reduction of chemical fertilizer use by 30-40%</li>
        <li>Improved water holding capacity and drought resilience</li>
      </ul>
      <p>The journey to regenerative agriculture starts with a single step: choosing to feed the soil, not just the plant.</p>
    `,
    tags: ["soil health", "organic farming", "regenerative agriculture"],
  },
  {
    slug: "benefits-of-cbg-plant",
    title: "Turning Waste into Worth: Our CBG Plant Story",
    excerpt: "How our Compressed Bio-Gas plant extracts clean energy while creating premium organic inputs from agricultural waste.",
    date: "2026-02-10",
    author: "Vandhara Agrotech Team",
    content: `
      <p>At the heart of our manufacturing process lies our Compressed Bio-Gas (CBG) plant — a facility that embodies our commitment to a circular economy.</p>
      <p>We collect animal dung, Napier grass, and other agro-waste from local sources. Instead of letting this material go to waste (or worse, being burned), we feed it into our CBG plant where it undergoes anaerobic digestion.</p>
      <h2>Clean Energy First</h2>
      <p>The primary output of our CBG plant is compressed bio-gas — a clean, renewable energy source that can replace fossil fuels. This reduces our carbon footprint and contributes to India's energy transition goals.</p>
      <h2>The Real Treasure: Post-CBG Digestate</h2>
      <p>What many don't realize is that the nutrient-rich digestate left after biogas extraction is even more valuable. This material is the starting point for our premium organic liquid fertilizers.</p>
      <p>The digestate undergoes controlled windrow composting, where we carefully manage temperature, moisture, and microbial activity to maximize organic value. The result is a carbon-rich, microbe-dense foundation for products like Vandhara Soil Recharge and Root Guard.</p>
      <h2>Zero Waste, Maximum Value</h2>
      <p>Nothing in our process goes to waste. Every byproduct is either composted, upcycled, or converted into energy. This is sustainability in action — and it's the only way we know how to operate.</p>
    `,
    tags: ["CBG", "biogas", "sustainability", "circular economy"],
  },
];
