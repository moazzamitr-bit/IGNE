"use client";

import { Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { contentRepository } from "@/lib/content/repository";
import type { SearchResult } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/config";

export function SearchDialog({ locale, open, onClose }: { locale: Locale; open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 30);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, open]);

  useEffect(() => {
    let active = true;
    const id = window.setTimeout(async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }
      const next = await contentRepository.search(locale, query);
      if (active) setResults(next.slice(0, 8));
    }, 180);
    return () => {
      active = false;
      window.clearTimeout(id);
    };
  }, [locale, query]);

  const label = useMemo(() => (locale === "fa" ? "جست‌وجو در سایت" : "Search the site"), [locale]);

  if (!open) return null;

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="search-dialog" role="dialog" aria-modal="true" aria-label={label} onMouseDown={(event) => event.stopPropagation()}>
        <div className="search-dialog__bar">
          <Search aria-hidden="true" size={20} />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={locale === "fa" ? "عبارت موردنظر را وارد کنید" : "Type a keyword"}
            aria-label={label}
          />
          <button className="icon-button" type="button" onClick={onClose} aria-label={locale === "fa" ? "بستن" : "Close"}>
            <X aria-hidden="true" size={20} />
          </button>
        </div>
        <div className="search-dialog__results">
          {query && results.length === 0 ? <p>{locale === "fa" ? "نتیجه‌ای یافت نشد." : "No results found."}</p> : null}
          {results.map((item) => (
            <Link key={item.id} href={item.href} onClick={onClose} className="search-result">
              <span>{item.type}</span>
              <strong>{item.title}</strong>
              <small>{item.excerpt}</small>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
