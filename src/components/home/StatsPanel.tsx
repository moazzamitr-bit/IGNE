import { FileText, Handshake, Network, UsersRound, type LucideIcon } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";

type StatItem = [label: string, value: string, Icon: LucideIcon];

const stats: Record<Locale, StatItem[]> = {
  fa: [
    ["پژوهشگران و عضو هیئت علمی", "120+", UsersRound],
    ["انتشارات و گزارش‌ها", "150+", FileText],
    ["پروژه‌های پژوهشی", "80+", Network],
    ["همکاران و شرکای تخصصی", "60+", Handshake],
  ],
  en: [
    ["Researchers and fellows", "120+", UsersRound],
    ["Publications and reports", "150+", FileText],
    ["Research projects", "80+", Network],
    ["Specialized partners", "60+", Handshake],
  ],
};

export function StatsPanel({ locale }: { locale: Locale }) {
  return (
    <section className="home-stats" aria-label={locale === "fa" ? "اندیشکده در یک نگاه" : "Institute at a glance"}>
      <h2>{locale === "fa" ? "اندیشکده در یک نگاه" : "Institute at a Glance"}</h2>
      <div className="home-stats__grid">
        {stats[locale].map(([label, value, Icon]) => (
          <article key={label}>
            <Icon aria-hidden="true" strokeWidth={1.6} />
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
