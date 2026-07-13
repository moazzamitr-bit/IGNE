"use client";

import { useMemo, useSyncExternalStore, type FormEvent } from "react";
import type { Publication } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/config";
import { includesNormalized } from "@/lib/search/normalize";
import { PublicationCard } from "./PublicationCard";

type Filters = {
  q: string;
  type: string;
  year: string;
};

const emptyFilters: Filters = { q: "", type: "", year: "" };

function parseFilters(search: string): Filters {
  if (!search) return emptyFilters;
  const params = new URLSearchParams(search);
  return {
    q: params.get("q") ?? "",
    type: params.get("type") ?? "",
    year: params.get("year") ?? "",
  };
}

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function getSearchSnapshot() {
  if (typeof window === "undefined") return "";
  return window.location.search;
}

function getServerSearchSnapshot() {
  return "";
}

function updateSearch(params: URLSearchParams) {
  window.history.replaceState(null, "", params.size ? `?${params.toString()}` : window.location.pathname);
  window.dispatchEvent(new Event("popstate"));
}

function readFormFilters(form: HTMLFormElement): Filters {
  const formData = new FormData(form);
  return {
    q: String(formData.get("q") ?? ""),
    type: String(formData.get("type") ?? ""),
    year: String(formData.get("year") ?? ""),
  };
}

function toSearchParams(filters: Filters) {
  const params = new URLSearchParams(window.location.search);
  params.delete("q");
  params.delete("type");
  params.delete("year");
  if (filters.q) params.set("q", filters.q);
  if (filters.type) params.set("type", filters.type);
  if (filters.year) params.set("year", filters.year);
  return params;
}

export function PublicationArchive({ locale, publications }: { locale: Locale; publications: Publication[] }) {
  const search = useSyncExternalStore(subscribe, getSearchSnapshot, getServerSearchSnapshot);
  const filters = useMemo(() => parseFilters(search), [search]);
  const types = useMemo(() => [...new Set(publications.map((item) => item.type))], [publications]);
  const years = useMemo(() => [...new Set(publications.map((item) => item.publishedAt.slice(0, 4)))], [publications]);
  const filtered = useMemo(
    () =>
      publications.filter((item) => {
        const queryMatch = filters.q ? includesNormalized(`${item.title} ${item.excerpt}`, filters.q) : true;
        const typeMatch = filters.type ? item.type === filters.type : true;
        const yearMatch = filters.year ? item.publishedAt.startsWith(filters.year) : true;
        return queryMatch && typeMatch && yearMatch;
      }),
    [filters, publications],
  );

  const applyFilters = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateSearch(toSearchParams(readFormFilters(event.currentTarget)));
  };

  return (
    <>
      <form className="filter-bar" onSubmit={applyFilters} key={`${filters.q}-${filters.type}-${filters.year}`}>
        <input name="q" defaultValue={filters.q} placeholder={locale === "fa" ? "جست‌وجو در انتشارات" : "Search publications"} />
        <select name="type" defaultValue={filters.type}>
          <option value="">{locale === "fa" ? "همه انواع" : "All types"}</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select name="year" defaultValue={filters.year}>
          <option value="">{locale === "fa" ? "همه سال‌ها" : "All years"}</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <button className="button button--primary" type="submit">
          {locale === "fa" ? "اعمال" : "Apply"}
        </button>
      </form>
      <div className="card-grid">{filtered.map((item) => <PublicationCard key={item.id} item={item} locale={locale} />)}</div>
    </>
  );
}
