import { getCollection, type CollectionEntry } from "astro:content";

export const INSIGHT_TOPICS = {
  "governance-perspective": "Governance perspective",
  "portfolio-risk": "Portfolio risk observation",
  "sector-intelligence": "Sector intelligence",
  "operational-discussion": "Operational discussion",
  "executive-reflection": "Executive reflection",
} as const;

export type InsightTopic = keyof typeof INSIGHT_TOPICS;

export const INSIGHT_TOPIC_ORDER: InsightTopic[] = [
  "governance-perspective",
  "portfolio-risk",
  "sector-intelligence",
  "operational-discussion",
  "executive-reflection",
];

export function insightSlug(entry: { id: string }) {
  return entry.id.replace(/\.mdx?$/i, "").split("/").pop()!;
}

export function topicLabel(topic: InsightTopic) {
  return INSIGHT_TOPICS[topic];
}

export async function getPublishedInsights() {
  const all = await getCollection("insights", ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function groupInsightsByTopic(posts: CollectionEntry<"insights">[]) {
  const grouped = new Map<InsightTopic, CollectionEntry<"insights">[]>();

  for (const topic of INSIGHT_TOPIC_ORDER) {
    grouped.set(topic, []);
  }

  for (const post of posts) {
    const topic = post.data.topic;
    grouped.get(topic)?.push(post);
  }

  return INSIGHT_TOPIC_ORDER.map((topic) => ({
    topic,
    label: topicLabel(topic),
    posts: grouped.get(topic) ?? [],
  })).filter((section) => section.posts.length > 0);
}
