import { PublicationArchive } from "@/components/publications/PublicationArchive";
import { InternalHero } from "@/components/shared/InternalHero";
import { contentRepository } from "@/lib/content/repository";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export default async function PublicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const publications = await contentRepository.getPublications(typedLocale);

  return (
    <>
      <InternalHero locale={typedLocale} title={typedLocale === "fa" ? "انتشارات" : "Publications"} text={typedLocale === "fa" ? "گزارش‌ها، یادداشت‌ها و briefهای سیاستی اندیشکده." : "Reports, notes, and policy briefs from the institute."} />
      <section className="section section--ivory">
        <div className="container">
          <PublicationArchive locale={typedLocale} publications={publications} />
        </div>
      </section>
    </>
  );
}
