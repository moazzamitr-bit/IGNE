import { ResearchAreaGrid } from "@/components/research/ResearchAreaGrid";
import { InternalHero } from "@/components/shared/InternalHero";
import { contentRepository } from "@/lib/content/repository";
import { isLocale, type Locale } from "@/lib/i18n/config";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ResearchPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const areas = await contentRepository.getResearchAreas();
  return (
    <>
      <InternalHero locale={typedLocale} title={typedLocale === "fa" ? "حوزه‌های پژوهش" : "Research Areas"} text={typedLocale === "fa" ? "معماری پژوهشی اندیشکده در شش حوزه اصلی سازمان یافته است." : "The institute's research architecture is organized around six domains."} />
      <section className="section section--ivory">
        <div className="container image-feature">
          <Image src="/images/research-analysis-studio.png" alt="" width={900} height={563} />
          <div>
            <h2>{typedLocale === "fa" ? "اتاق تحلیل سیاستی" : "Policy Analysis Studio"}</h2>
            <p>{typedLocale === "fa" ? "فضایی برای پیوند داده، آینده‌پژوهی، تحلیل اقتصادی و طراحی گزینه‌های سیاستی." : "A space connecting data, foresight, economic analysis, and policy option design."}</p>
          </div>
        </div>
        <div className="container"><ResearchAreaGrid locale={typedLocale} areas={areas} /></div>
      </section>
    </>
  );
}
