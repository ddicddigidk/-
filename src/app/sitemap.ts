import type { MetadataRoute } from "next";

const routes = [
  "",
  "/education",
  "/career",
  "/lectures",
  "/corporate-training",
  "/courses",
  "/insights",
  "/about",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
