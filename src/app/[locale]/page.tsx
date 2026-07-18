import { EventCard } from "@/components/events/EventCard";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { HeroSection } from "@/components/home/HeroSection";
import { MissionSection } from "@/components/home/MissionSection";
import { StatsPanel } from "@/components/home/StatsPanel";
import { StrategicAxesSection } from "@/components/home/StrategicAxesSection";
import { PolicyPathSection } from "@/components/home/PolicyPathSection";
import { CollaborationPanel } from "@/components/home/CollaborationPanel";
import { PublicationRail } from "@/components/publications/PublicationRail";
import { ResearchAreaGrid } from "@/components/research/ResearchAreaGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { contentRepository } from "@/lib/content/repository";
import { isLocale, type Locale } from "@/lib/i18n/config";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const [areas, publications, events] = await Promise.all([
    contentRepository.getResearchAreas(),
    contentRepository.getPublications(typedLocale),
    contentRepository.getEvents(typedLocale),
  ]);

  return (
    <>
      <HeroSection locale={typedLocale} />
      <StrategicAxesSection locale={typedLocale} />
      <PolicyPathSection locale={typedLocale} />
      <section className="section section--ivory">
        <div className="container">
          <SectionHeading
            title={typedLocale === "fa" ? "حوزه‌های پژوهش" : "Research Areas"}
            text={typedLocale === "fa" ? "شش قلمرو پژوهشی که پیوند اندیشه، سیاست‌گذاری و اجرا را شکل می‌دهند." : "Six research domains linking knowledge, policymaking, and action."}
          />
          <ResearchAreaGrid locale={typedLocale} areas={areas} />
          <div className="center-action">
            <Link className="button button--dark" href={`/${typedLocale}/research`}>
              {typedLocale === "fa" ? "مشاهده همه حوزه‌ها" : "View all areas"}
            </Link>
          </div>
        </div>
      </section>
      <MissionSection locale={typedLocale} />
      <section className="section publication-section">
        <div className="container">
          <SectionHeading title={typedLocale === "fa" ? "جدیدترین انتشارات" : "Latest Publications"} action={{ label: typedLocale === "fa" ? "مشاهده همه" : "View all", href: `/${typedLocale}/publications` }} />
          <PublicationRail locale={typedLocale} items={publications.filter((item) => item.featured)} />
        </div>
      </section>
      <section className="section section--ivory home-bottom-section">
        <div className="container home-insight-grid">
          <CollaborationPanel locale={typedLocale} />
          <div>
            <SectionHeading title={typedLocale === "fa" ? "رویدادهای پیش رو" : "Upcoming Events"} action={{ label: typedLocale === "fa" ? "همه رویدادها" : "All events", href: `/${typedLocale}/events` }} />
            <div className="event-list">{events.slice(0, 3).map((event) => <EventCard key={event.id} item={event} locale={typedLocale} />)}</div>
          </div>
          <StatsPanel locale={typedLocale} />
        </div>
      </section>
      <NewsletterForm locale={typedLocale} />
    </>
  );
}
