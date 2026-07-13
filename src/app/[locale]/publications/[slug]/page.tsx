import Image from "next/image";
import { InternalHero } from "@/components/shared/InternalHero";
import { publications } from "@/data/publications";
import { contentRepository } from "@/lib/content/repository";
import { formatDate } from "@/lib/dates/format";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return publications.map((item) => ({ locale: item.locale, slug: item.slug }));
}

export default async function PublicationDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const item = await contentRepository.getPublicationBySlug(typedLocale, slug);
  if (!item) notFound();
  return (
    <>
      <InternalHero locale={typedLocale} title={item.title} text={item.excerpt} />
      <article className="section"><div className="container detail-layout"><Image src={item.image} alt="" width={900} height={506} /><div className="content-stack"><p className="meta-row">{item.type} · {formatDate(item.publishedAt, typedLocale)}</p><p>{item.excerpt}</p><p>{item.demo ? (typedLocale === "fa" ? "این صفحه با محتوای نمونه ساخته شده و پس از دریافت گزارش رسمی جایگزین می‌شود." : "This page uses demo content and will be replaced once official material is provided.") : ""}</p></div></div></article>
    </>
  );
}
