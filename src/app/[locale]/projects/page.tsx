import Link from "next/link";
import { InternalHero } from "@/components/shared/InternalHero";
import { contentRepository } from "@/lib/content/repository";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const projects = await contentRepository.getProjects(typedLocale);
  return <><InternalHero locale={typedLocale} title={typedLocale === "fa" ? "پروژه‌ها" : "Projects"} text={typedLocale === "fa" ? "پروژه‌های پژوهشی و سیاستی اندیشکده." : "Research and policy projects."} /><section className="section section--ivory"><div className="container card-grid">{projects.map((item) => <article className="axis-card" key={item.id}><span className="meta-row">{item.status}</span><h2><Link href={`/${typedLocale}/projects/${item.slug}`}>{item.title}</Link></h2><p>{item.excerpt}</p></article>)}</div></section></>;
}
