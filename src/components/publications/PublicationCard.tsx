import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Publication } from "@/lib/content/types";
import { formatDate } from "@/lib/dates/format";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/dictionaries";

export function PublicationCard({ item, locale }: { item: Publication; locale: Locale }) {
  return (
    <article className="publication-card">
      <div className="publication-card__image">
        <Image src={item.image} alt="" fill sizes="(min-width: 1024px) 22vw, 80vw" loading={item.featured ? "eager" : "lazy"} />
      </div>
      <div className="publication-card__body">
        <span className="meta-row">{item.type}{item.demo ? ` · ${t(locale, "demo")}` : ""}</span>
        <h3><Link href={`/${locale}/publications/${item.slug}`}>{item.title}</Link></h3>
        <p>{item.excerpt}</p>
        <small>{formatDate(item.publishedAt, locale)} · {item.author}</small>
        <div className="publication-card__links">
          <Link href={`/${locale}/publications/${item.slug}`}>{t(locale, "readMore")}</Link>
          {item.pdfUrl ? <Link href={item.pdfUrl}><Download aria-hidden="true" size={15} /> {t(locale, "download")}</Link> : null}
        </div>
      </div>
    </article>
  );
}
