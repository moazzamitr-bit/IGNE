import { InternalHero } from "@/components/shared/InternalHero";
import { events } from "@/data/events";
import { contentRepository } from "@/lib/content/repository";
import { formatDate } from "@/lib/dates/format";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return events.map((event) => ({ locale: event.locale, slug: event.slug }));
}

export default async function EventDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const event = await contentRepository.getEventBySlug(typedLocale, slug);
  if (!event) notFound();
  return (
    <>
      <InternalHero locale={typedLocale} title={event.title} text={event.description} />
      <section className="section"><div className="container content-stack"><p className="meta-row">{formatDate(event.date, typedLocale)} · {event.time} · {event.format}</p><p>{event.location}</p><p>{event.registrationStatus === "soon" ? (typedLocale === "fa" ? "ثبت‌نام به‌زودی فعال می‌شود." : "Registration will open soon.") : event.registrationStatus}</p></div></section>
    </>
  );
}
