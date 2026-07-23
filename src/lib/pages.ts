import { pageContents, type PageContent, type PageSlug } from "@/data/pages";

export function getPageContent(slug: PageSlug): PageContent {
  return pageContents[slug];
}

export function getAllPageSlugs(): PageSlug[] {
  return Object.keys(pageContents) as PageSlug[];
}
