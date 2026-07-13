import { InternalHero } from "@/components/shared/InternalHero";
import { projects } from "@/data/projects";
import { contentRepository } from "@/lib/content/repository";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((item) => ({ locale: item.locale, slug: item.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const item = await contentRepository.getProjectBySlug(typedLocale, slug);
  if (!item) notFound();
  return <><InternalHero locale={typedLocale} title={item.title} text={item.excerpt} /><section className="section"><div className="container content-stack"><p className="meta-row">{item.category} · {item.status}</p><p>{item.demo ? (typedLocale === "fa" ? "این پروژه نمونه است و با داده رسمی جایگزین می‌شود." : "This is demo project content.") : ""}</p></div></section></>;
}
