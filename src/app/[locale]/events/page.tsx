import { EventCard } from "@/components/events/EventCard";
import { InternalHero } from "@/components/shared/InternalHero";
import { contentRepository } from "@/lib/content/repository";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

const CURRENT_DATE_MS = Date.parse("2026-07-12T00:00:00.000Z");

export default async function EventsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const events = await contentRepository.getEvents(typedLocale);
  const upcoming = events.filter((event) => Date.parse(event.date) >= CURRENT_DATE_MS);
  const past = events.filter((event) => Date.parse(event.date) < CURRENT_DATE_MS);
  return (
    <>
      <InternalHero locale={typedLocale} title={typedLocale === "fa" ? "رویدادها" : "Events"} text={typedLocale === "fa" ? "نشست‌های تخصصی، رونمایی گزارش‌ها و میزگردهای اندیشکده." : "Forums, report launches, and institute roundtables."} />
      <section className="section section--ivory"><div className="container content-stack"><h2>{typedLocale === "fa" ? "آینده" : "Upcoming"}</h2><div className="event-list">{upcoming.map((item) => <EventCard key={item.id} item={item} locale={typedLocale} />)}</div><h2>{typedLocale === "fa" ? "گذشته" : "Past"}</h2><div className="event-list">{past.map((item) => <EventCard key={item.id} item={item} locale={typedLocale} />)}</div></div></section>
    </>
  );
}
