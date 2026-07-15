import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    readingTime: z.string().optional(),
  }),
});

const products = defineCollection({
  loader: file("./src/data/products.json"),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    taglineLong: z.string(),
    bestFor: z.string(),
    description: z.string(),
    benefit: z.string(),
    dosage: z.string(),
    application: z.string(),
    variant: z.object({ size: z.string(), label: z.string() }),
    farmerBenefits: z.array(z.string()),
    applicationMethods: z.array(
      z.object({ method: z.string(), description: z.string() })
    ),
    methodSectionTitle: z.string().optional(),
    dosageScheduleTitle: z.string().optional(),
    dosageCards: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
        footnote: z.string().optional(),
        wide: z.boolean().optional(),
      })
    ),
    howToApply: z.array(z.string()).optional(),
    dealerCategory: z.string(),
    dealerExtra: z.string(),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
    image: z.string().optional(),
    youtubeUrl: z.string().optional(),
    category: z.string(),
  }),
});

export const collections = { blog, products };
