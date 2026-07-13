import Image from "next/image";
import Link from "next/link";
import type { Event } from "@/lib/content/types";
import { formatDate } from "@/lib/dates/format";
import type { Locale } from "@/lib/i18n/config";

export function EventCard({ item, locale }: { item: Event; locale: Locale }) {
  return (
    <article className="event-card">
      <Image src={item.image} alt="" width={320} height={190} />
      <div>
        <span className="meta-row">{item.format}{item.demo ? ` · ${locale === "fa" ? "محتوای نمونه" : "Demo content"}` : ""}</span>
        <h3><Link href={`/${locale}/events/${item.slug}`}>{item.title}</Link></h3>
        <p>{item.description}</p>
        <small>{formatDate(item.date, locale)} · {item.time}</small>
      </div>
    </article>
  );
}
