export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string;
  tags: string[];
  image?: string;
  readingTime: string;
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
    image: undefined,
    readingTime: "3 min read",
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
    image: undefined,
    readingTime: "3 min read",
  },
  {
    slug: "kharif-soil-preparation-guide",
    title: "Preparing Your Soil for Kharif Season: A Practical Guide",
    excerpt: "Get your fields ready for monsoon planting with these soil preparation tips using organic inputs for healthier crops and better yields.",
    date: "2026-03-20",
    author: "Vandhara Agrotech Team",
    content: `
      <p>The Kharif season is India's most important cropping period. With the monsoon rains just weeks away, now is the time to prepare your soil so it can make the most of every drop of rain and every nutrient you apply.</p>
      <h2>Step 1: Test Your Soil First</h2>
      <p>Before adding anything, know what you're working with. A simple soil test tells you the pH, organic carbon content, and available nutrients. Most agricultural extension offices offer testing at minimal cost. Focus on:</p>
      <ul>
        <li><strong>pH level:</strong> Ideal range is 6.0-7.5 for most crops</li>
        <li><strong>Organic carbon:</strong> Should be above 0.5% — below that means your soil is starving</li>
        <li><strong>Available NPK:</strong> Know your baseline before adding more</li>
      </ul>
      <h2>Step 2: Apply Organic Matter Early</h2>
      <p>Organic inputs like Vandhara Soil Recharge need time to work with soil microbes. Apply 2-3 weeks before the first monsoon shower so the beneficial microbes establish themselves in the root zone. This gives them a head start before the crop goes in.</p>
      <h2>Step 3: Plan Your Fertilizer Strategy</h2>
      <p>The biggest mistake farmers make is applying chemical fertilizers immediately after organic inputs. Let the biology work first. A good approach:</p>
      <ul>
        <li><strong>Basal dose:</strong> Vandhara Soil Recharge + well-decomposed FYM</li>
        <li><strong>Top dressing:</strong> Reduce your usual chemical dose by 30% and supplement with Vandhara Agni at key growth stages</li>
        <li><strong>Pest management:</strong> Have Vandhara Vaayu ready for early pest detection — catching pests in stage 1-2 prevents outbreaks</li>
      </ul>
      <h2>Step 4: Don't Forget Drainage</h2>
      <p>Kharif means heavy rain. Ensure your field has proper drainage channels. Waterlogged soil destroys beneficial microbial activity and leads to root diseases. If you've had root rot issues before, apply Vandhara Root Guard at transplanting as a preventive measure.</p>
      <p>Preparing your soil properly before the monsoon means healthier crops, fewer pest problems, and better yields — all while reducing your input costs.</p>
    `,
    tags: ["kharif", "soil preparation", "monsoon", "organic farming"],
    image: undefined,
    readingTime: "5 min read",
  },
  {
    slug: "organic-tomato-pest-control",
    title: "Organic Pest Control for Tomato Farmers: What Actually Works",
    excerpt: "Practical, chemical-free pest management strategies for tomato crops — from root protection to foliar care.",
    date: "2026-04-05",
    author: "Vandhara Agrotech Team",
    content: `
      <p>Tomato is one of India's most valuable vegetable crops, but it's also one of the most pest-prone. From damping off in the nursery to fruit borer in the mature plant, the list of threats is long. The good news: organic pest control works when you use the right approach at the right time.</p>
      <h2>Start at the Roots</h2>
      <p>Most tomato problems begin in the soil. Root rot caused by <em>Fusarium</em> and <em>Rhizoctonia</em> fungi can wipe out entire nurseries. Prevention is far more effective than cure:</p>
      <ul>
        <li>Treat seeds with Vandhara Root Guard before sowing (100 ml per litre of water, dip seeds for 15 minutes)</li>
        <li>Drench the nursery beds with Root Guard 3-5 days before transplanting</li>
        <li>Ensure your beds are raised — tomatoes hate wet feet</li>
      </ul>
      <h2>Early Detection Is Everything</h2>
      <p>In tomato farming, waiting until you see visible pest damage means you've already lost yield. Train yourself and your workers to spot early signs:</p>
      <ul>
        <li><strong>Yellowing lower leaves:</strong> Early blight or nutrient deficiency — apply Vandhara Agni as a foliar spray</li>
        <li><strong>Leaf curling:</strong> Aphid or whitefly presence — spray Vandhara Vaayu immediately</li>
        <li><strong>Wilting during the day:</strong> Could be root issues — check for waterlogging and apply Root Guard</li>
      </ul>
      <h2>IPM: The Smart Farmer's Approach</h2>
      <p>Integrated Pest Management (IPM) combines multiple strategies so pests never get the upper hand. For tomatoes:</p>
      <ul>
        <li>Use <strong>trap crops</strong> like marigold around the field boundary — they attract pests away from your tomatoes</li>
        <li>Apply <strong>Vandhara Vaayu</strong> at first pest sighting — it restricts pests in their 1st and 2nd developmental stages</li>
        <li>Maintain <strong>predator insect populations</strong> by avoiding broad-spectrum chemical sprays</li>
        <li>Rotate <strong>between organic and biological controls</strong> to prevent resistance</li>
      </ul>
      <h2>The 7-Day Rule</h2>
      <p>After any foliar application — whether organic or chemical — wait 7 days before applying a different product. This prevents interactions and lets you accurately assess whether the treatment worked.</p>
      <p>Many tomato farmers who switch to organic pest management report healthier plants, better soil, and fewer recurring pest problems season after season. The key is consistency and timing.</p>
    `,
    tags: ["tomato", "pest control", "IPM", "organic farming"],
    image: undefined,
    readingTime: "5 min read",
  },
  {
    slug: "switch-to-organic-fertilizers",
    title: "How to Switch from Chemical to Organic Fertilizers: A Step-by-Step Guide",
    excerpt: "A practical roadmap for Indian farmers transitioning to organic inputs without losing yield during the transition period.",
    date: "2026-05-01",
    author: "Vandhara Agrotech Team",
    content: `
      <p>Every farmer knows the problem: chemical fertilizers give quick results but over time the soil becomes dependent, yields plateau, and input costs keep rising. Switching to organic feels risky — what if yields drop during the transition?</p>
      <p>The truth is, with the right approach, you can transition without losing a single season. Here's how.</p>
      <h2>Phase 1: The Overlap Season (First Crop)</h2>
      <p>Don't go cold turkey. In your first season, simply <strong>reduce</strong> your chemical fertilizer dose by 30-40% and supplement with Vandhara Soil Recharge. The chemical inputs still feed the plant, while the organic inputs begin rebuilding your soil biology. Most farmers see no yield difference in this phase — and some see improvement.</p>
      <h2>Phase 2: The Building Season (Second Crop)</h2>
      <p>By the second season, your soil biology has started to recover. Reduce chemical inputs by another 20%. Add Vandhara Agni as a foliar spray at key growth stages — it triggers natural growth hormones that help plants make better use of available nutrients. At this stage, you're at roughly 40-50% of your original chemical use.</p>
      <h2>Phase 3: The Maintenance Season (Third Crop Onwards)</h2>
      <p>By the third season, your soil should be producing significant nutrients on its own through microbial activity. Most farmers reach a steady state using:</p>
      <ul>
        <li><strong>Vandhara Soil Recharge</strong> — 3-5 L/acre at the start of the season to maintain microbial populations</li>
        <li><strong>Vandhara Root Guard</strong> — at transplanting if you're growing disease-prone crops</li>
        <li><strong>Vandhara Agni</strong> — foliar spray every 15-20 days during active growth</li>
        <li><strong>Vandhara Vaayu</strong> — only when pests appear, not as a preventive</li>
        <li>Chemical fertilizers — only 20-30% of your original dose, applied only if soil tests show specific deficiencies</li>
      </ul>
      <h2>What to Watch For</h2>
      <p>During transition, monitor these signs closely:</p>
      <ul>
        <li><strong>Leaf colour:</strong> Slight yellowing in early transition is normal — Vandhara Agni corrects it within 7 days</li>
        <li><strong>Pest pressure:</strong> May increase slightly as natural predator populations re-establish — use Vaayu at first sighting</li>
        <li><strong>Soil texture:</strong> Within 2-3 seasons, you'll notice the soil feels softer and holds moisture longer</li>
      </ul>
      <h2>The Cost Benefit</h2>
      <p>Most farmers who complete the transition report 25-35% lower input costs and comparable or better yields. The real benefit, however, is long-term: your soil becomes self-improving rather than dependent on external inputs.</p>
      <p>Vandhara Agrotech products are FCO and NPOP certified, so you can use them with confidence on any crop.</p>
    `,
    tags: ["organic transition", "chemical-free farming", "fertilizer strategy"],
    image: undefined,
    readingTime: "6 min read",
  },
];
