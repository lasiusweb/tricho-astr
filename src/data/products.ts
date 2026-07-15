import { getCollection } from "astro:content";

const ORDER = ["soil-recharge", "root-guard", "agni", "vaayu"];

export async function getProducts() {
  const entries = await getCollection("products");
  return entries
    .map((e) => ({ ...e.data, slug: e.id }))
    .sort((a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug));
}
