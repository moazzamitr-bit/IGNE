import type { MetadataRoute } from "next";
import { publications } from "@/data/publications";
import { events } from "@/data/events";
import { news } from "@/data/news";
import { projects } from "@/data/projects";
import { researchAreas } from "@/data/research-areas";
import { locales } from "@/lib/i18n/config";

export const dynamic = "force-static";

const base = "https://igne.ir";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/research", "/publications", "/projects", "/events", "/news", "/experts", "/contact", "/search"];
  const urls: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const route of staticRoutes) urls.push({ url: `${base}/${locale}${route}`, lastModified: new Date() });
  }
  for (const item of researchAreas) for (const locale of locales) urls.push({ url: `${base}/${locale}/research/${item.slug}` });
  for (const item of publications) urls.push({ url: `${base}/${item.locale}/publications/${item.slug}`, lastModified: item.publishedAt });
  for (const item of events) urls.push({ url: `${base}/${item.locale}/events/${item.slug}`, lastModified: item.date });
  for (const item of news) urls.push({ url: `${base}/${item.locale}/news/${item.slug}`, lastModified: item.publishedAt });
  for (const item of projects) urls.push({ url: `${base}/${item.locale}/projects/${item.slug}` });
  return urls;
}
