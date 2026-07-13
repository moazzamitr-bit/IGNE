import type { Locale } from "../i18n/config";

export type PublicationType =
  | "گزارش سیاستی"
  | "گزارش پژوهشی"
  | "یادداشت تحلیلی"
  | "Policy Brief"
  | "Article"
  | "Special Dossier"
  | "Infographic"
  | "Video"
  | "Podcast";

export type Publication = {
  id: string;
  slug: string;
  locale: Locale;
  title: string;
  excerpt: string;
  type: PublicationType;
  category: string;
  author?: string;
  publishedAt: string;
  image: string;
  pdfUrl?: string;
  featured: boolean;
  tags: string[];
  demo?: boolean;
};

export type Event = {
  id: string;
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  format: string;
  speakers: string[];
  image: string;
  registrationStatus: "open" | "closed" | "soon";
  capacity?: string;
  registrationUrl?: string;
  reportUrl?: string;
  gallery: string[];
  files: string[];
  demo?: boolean;
};

export type NewsItem = {
  id: string;
  slug: string;
  locale: Locale;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  image: string;
  demo?: boolean;
};

export type Project = {
  id: string;
  slug: string;
  locale: Locale;
  title: string;
  excerpt: string;
  category: string;
  status: string;
  demo?: boolean;
};

export type ResearchArea = {
  slug: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  topics: Record<Locale, string[]>;
  icon: "innovation" | "globe" | "infrastructure" | "culture" | "security" | "justice";
};

export type Expert = {
  id: string;
  slug: string;
  locale: Locale;
  name?: string;
  title?: string;
  area?: string;
  bio?: string;
  image?: string;
};

export type SearchResult = {
  id: string;
  type: "publication" | "event" | "news" | "project" | "research" | "expert";
  title: string;
  excerpt: string;
  href: string;
};

export interface ContentRepository {
  getPublications(locale: Locale): Promise<Publication[]>;
  getPublicationBySlug(locale: Locale, slug: string): Promise<Publication | null>;
  getEvents(locale: Locale): Promise<Event[]>;
  getEventBySlug(locale: Locale, slug: string): Promise<Event | null>;
  getNews(locale: Locale): Promise<NewsItem[]>;
  getNewsBySlug(locale: Locale, slug: string): Promise<NewsItem | null>;
  getProjects(locale: Locale): Promise<Project[]>;
  getProjectBySlug(locale: Locale, slug: string): Promise<Project | null>;
  getResearchAreas(): Promise<ResearchArea[]>;
  getResearchAreaBySlug(slug: string): Promise<ResearchArea | null>;
  getExperts(locale: Locale): Promise<Expert[]>;
  search(locale: Locale, query: string): Promise<SearchResult[]>;
}
