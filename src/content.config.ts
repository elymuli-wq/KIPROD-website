import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const insightTopic = z.enum([
  "governance-perspective",
  "portfolio-risk",
  "sector-intelligence",
  "operational-discussion",
  "executive-reflection",
]);

const insights = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/insights" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    topic: insightTopic,
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const faculty = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/faculty" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    subtitle: z.string().optional(),
    order: z.number(),
    specializations: z.array(z.string()),
    keyStrength: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights, faculty };

