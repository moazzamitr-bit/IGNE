import { InternalHero } from "@/components/shared/InternalHero";
import { researchAreas } from "@/data/research-areas";
import { contentRepository } from "@/lib/content/repository";
import { locales, isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.flatMap((locale) => researchAreas.map((area) => ({ locale, slug: area.slug })));
}

export default async function ResearchDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const area = await contentRepository.getResearchAreaBySlug(slug);
  if (!area) notFound();
  const typedLocale = locale as Locale;
  return (
    <>
      <InternalHero locale={typedLocale} title={area.title[typedLocale]} text={area.excerpt[typedLocale]} />
      <section className="section"><div className="container content-stack"><h2>{typedLocale === "fa" ? "موضوعات" : "Topics"}</h2><ul className="topic-list">{area.topics[typedLocale].map((topic) => <li key={topic}>{topic}</li>)}</ul></div></section>
    </>
  );
}
