import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

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

export const collections = { blog };
