import { BadgeCheck, Radio, Route, Share2, type LucideIcon } from "lucide-react";
import { successIndicators } from "@/data/institute-profile";
import type { Locale } from "@/lib/i18n/config";

const icons: LucideIcon[] = [BadgeCheck, Radio, Share2, Route];

export function StatsPanel({ locale }: { locale: Locale }) {
  return (
    <section className="home-stats" aria-label={locale === "fa" ? "شاخص‌های موفقیت" : "Success indicators"}>
      <h2>{locale === "fa" ? "شاخص‌های موفقیت" : "Success Indicators"}</h2>
      <p>{locale === "fa" ? "چارچوب ارزیابی پیشرفت اندیشکده" : "How the institute evaluates progress"}</p>
      <div className="home-stats__grid">
        {successIndicators.map((indicator, index) => {
          const Icon = icons[index];
          return <article key={indicator.title.en}>
            <Icon aria-hidden="true" strokeWidth={1.6} />
            <strong>{indicator.title[locale]}</strong>
            <span>{indicator.text[locale]}</span>
          </article>;
        })}
      </div>
    </section>
  );
}
