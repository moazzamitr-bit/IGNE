import { SearchArchive } from "@/components/search/SearchArchive";
import { InternalHero } from "@/components/shared/InternalHero";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export default async function SearchPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  return <><InternalHero locale={typedLocale} title={typedLocale === "fa" ? "جست‌وجو" : "Search"} text={typedLocale === "fa" ? "جست‌وجو در انتشارات، اخبار، رویدادها، پروژه‌ها و حوزه‌های پژوهش." : "Search publications, news, events, projects, and research areas."} /><section className="section section--ivory"><SearchArchive locale={typedLocale} /></section></>;
}
