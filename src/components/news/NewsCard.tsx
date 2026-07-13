import Link from "next/link";
import type { NewsItem } from "@/lib/content/types";
import { formatDate } from "@/lib/dates/format";
import type { Locale } from "@/lib/i18n/config";

export function NewsCard({ item, locale }: { item: NewsItem; locale: Locale }) {
  return (
    <article className="news-card">
      <span className="meta-row">{item.category}</span>
      <h3><Link href={`/${locale}/news/${item.slug}`}>{item.title}</Link></h3>
      <p>{item.excerpt}</p>
      <small>{formatDate(item.publishedAt, locale)}</small>
    </article>
  );
}
