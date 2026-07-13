import { NewsCard } from "@/components/news/NewsCard";
import { InternalHero } from "@/components/shared/InternalHero";
import { contentRepository } from "@/lib/content/repository";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const items = await contentRepository.getNews(typedLocale);
  return <><InternalHero locale={typedLocale} title={typedLocale === "fa" ? "اخبار و رسانه" : "News and Media"} text={typedLocale === "fa" ? "اخبار اندیشکده، معرفی‌ها، گزارش نشست‌ها و حضور رسانه‌ای." : "Institute news, event coverage, interviews, video, and audio."} /><section className="section section--ivory"><div className="container news-list">{items.map((item) => <NewsCard key={item.id} item={item} locale={typedLocale} />)}</div></section></>;
}
