import { events } from "@/data/events";
import { experts } from "@/data/experts";
import { news } from "@/data/news";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { researchAreas } from "@/data/research-areas";
import { includesNormalized } from "@/lib/search/normalize";
import type { ContentRepository, SearchResult } from "./types";

export const contentRepository: ContentRepository = {
  async getPublications(locale) {
    return publications.filter((item) => item.locale === locale);
  },
  async getPublicationBySlug(locale, slug) {
    return publications.find((item) => item.locale === locale && item.slug === slug) ?? null;
  },
  async getEvents(locale) {
    return events.filter((item) => item.locale === locale);
  },
  async getEventBySlug(locale, slug) {
    return events.find((item) => item.locale === locale && item.slug === slug) ?? null;
  },
  async getNews(locale) {
    return news.filter((item) => item.locale === locale);
  },
  async getNewsBySlug(locale, slug) {
    return news.find((item) => item.locale === locale && item.slug === slug) ?? null;
  },
  async getProjects(locale) {
    return projects.filter((item) => item.locale === locale);
  },
  async getProjectBySlug(locale, slug) {
    return projects.find((item) => item.locale === locale && item.slug === slug) ?? null;
  },
  async getResearchAreas() {
    return researchAreas;
  },
  async getResearchAreaBySlug(slug) {
    return researchAreas.find((item) => item.slug === slug) ?? null;
  },
  async getExperts(locale) {
    return experts.filter((item) => item.locale === locale);
  },
  async search(locale, query) {
    const results: SearchResult[] = [];
    const pushIf = (condition: string, result: SearchResult) => {
      if (includesNormalized(condition, query)) results.push(result);
    };

    for (const item of publications.filter((entry) => entry.locale === locale)) {
      pushIf(`${item.title} ${item.excerpt} ${item.tags.join(" ")}`, {
        id: item.id,
        type: "publication",
        title: item.title,
        excerpt: item.excerpt,
        href: `/${locale}/publications/${item.slug}`,
      });
    }
    for (const item of events.filter((entry) => entry.locale === locale)) {
      pushIf(`${item.title} ${item.description}`, {
        id: item.id,
        type: "event",
        title: item.title,
        excerpt: item.description,
        href: `/${locale}/events/${item.slug}`,
      });
    }
    for (const item of news.filter((entry) => entry.locale === locale)) {
      pushIf(`${item.title} ${item.excerpt}`, {
        id: item.id,
        type: "news",
        title: item.title,
        excerpt: item.excerpt,
        href: `/${locale}/news/${item.slug}`,
      });
    }
    for (const item of projects.filter((entry) => entry.locale === locale)) {
      pushIf(`${item.title} ${item.excerpt}`, {
        id: item.id,
        type: "project",
        title: item.title,
        excerpt: item.excerpt,
        href: `/${locale}/projects/${item.slug}`,
      });
    }
    for (const item of researchAreas) {
      pushIf(`${item.title[locale]} ${item.excerpt[locale]} ${item.topics[locale].join(" ")}`, {
        id: item.slug,
        type: "research",
        title: item.title[locale],
        excerpt: item.excerpt[locale],
        href: `/${locale}/research/${item.slug}`,
      });
    }
    return results;
  },
};
