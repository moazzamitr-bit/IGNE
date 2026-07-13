"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import type { Publication } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/config";
import { PublicationCard } from "./PublicationCard";

export function PublicationRail({ items, locale }: { items: Publication[]; locale: Locale }) {
  const railRef = useRef<HTMLDivElement>(null);
  const move = (direction: number) => {
    railRef.current?.scrollBy({ left: direction * 340, behavior: "smooth" });
  };
  return (
    <div className="publication-rail">
      <div className="rail-controls">
        <button type="button" onClick={() => move(locale === "fa" ? 1 : -1)} aria-label={locale === "fa" ? "قبلی" : "Previous"}><ChevronLeft aria-hidden="true" /></button>
        <button type="button" onClick={() => move(locale === "fa" ? -1 : 1)} aria-label={locale === "fa" ? "بعدی" : "Next"}><ChevronRight aria-hidden="true" /></button>
      </div>
      <div className="publication-rail__track" ref={railRef} tabIndex={0}>
        {items.map((item) => <PublicationCard key={item.id} item={item} locale={locale} />)}
      </div>
    </div>
  );
}
