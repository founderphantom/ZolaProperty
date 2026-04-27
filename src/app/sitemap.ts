import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    "", "how-it-works", "services", "areas-we-serve", "reviews",
    "recently-leased", "about", "faq", "contact", "privacy", "terms",
  ];
  return routes.map((r) => ({
    url: `${SITE.url}${r ? `/${r}` : ""}`,
    lastModified,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
