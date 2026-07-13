import type { Locale } from "@/lib/i18n/config";

export function InternalHero({ locale, title, text }: { locale: Locale; title: string; text: string }) {
  return (
    <section className="internal-hero">
      <div className="container">
        <p>{locale === "fa" ? "اندیشکده حکمرانی و اقتصاد نوین" : "Institute for New Governance and Economy"}</p>
        <h1>{title}</h1>
        <div className="hero-rule" />
        <span>{text}</span>
      </div>
    </section>
  );
}
