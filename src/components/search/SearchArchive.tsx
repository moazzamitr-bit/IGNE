"use client";

import Link from "next/link";
import { useMemo, useSyncExternalStore, type FormEvent } from "react";
import { events } from "@/data/events";
import { news } from "@/data/news";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { researchAreas } from "@/data/research-areas";
import type { SearchResult } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/config";
import { includesNormalized } from "@/lib/search/normalize";

function getSearchSnapshot() {
  if (typeof window === "undefined") return "";
  return window.location.search;
}

function getServerSearchSnapshot() {
  return "";
}

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function readQuery(search: string) {
  return new URLSearchParams(search).get("q") ?? "";
}

function searchContent(locale: Locale, query: string) {
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
}

export function SearchArchive({ locale }: { locale: Locale }) {
  const search = useSyncExternalStore(subscribe, getSearchSnapshot, getServerSearchSnapshot);
  const query = useMemo(() => readQuery(search), [search]);
  const results = useMemo(() => (query.trim() ? searchContent(locale, query) : []), [locale, query]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next = String(form.get("q") ?? "");
    const params = new URLSearchParams();
    if (next) params.set("q", next);
    window.history.replaceState(null, "", params.size ? `?${params.toString()}` : window.location.pathname);
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <div className="container content-stack">
      <form className="filter-bar" onSubmit={submit} key={query}>
        <input name="q" defaultValue={query} placeholder={locale === "fa" ? "عبارت جست‌وجو" : "Search query"} />
        <button className="button button--primary" type="submit">
          {locale === "fa" ? "جست‌وجو" : "Search"}
        </button>
      </form>
      {query && results.length === 0 ? <p>{locale === "fa" ? "نتیجه‌ای یافت نشد." : "No results found."}</p> : null}
      {results.map((item) => (
        <Link className="search-result" href={item.href} key={item.id}>
          <span>{item.type}</span>
          <strong>{item.title}</strong>
          <small>{item.excerpt}</small>
        </Link>
      ))}
    </div>
  );
}
