import { InternalHero } from "@/components/shared/InternalHero";
import { news } from "@/data/news";
import { contentRepository } from "@/lib/content/repository";
import { formatDate } from "@/lib/dates/format";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return news.map((item) => ({ locale: item.locale, slug: item.slug }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const item = await contentRepository.getNewsBySlug(typedLocale, slug);
  if (!item) notFound();
  return <><InternalHero locale={typedLocale} title={item.title} text={item.excerpt} /><section className="section"><div className="container content-stack"><p className="meta-row">{item.category} · {formatDate(item.publishedAt, typedLocale)}</p><p>{item.excerpt}</p></div></section></>;
}
