import { FileText, Handshake, Network, UsersRound, type LucideIcon } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";

type StatItem = [label: string, value: string, Icon: LucideIcon];

const stats: Record<Locale, StatItem[]> = {
  fa: [
    ["پژوهشگران و عضو هیئت علمی", "در حال تکمیل", UsersRound],
    ["انتشارات و گزارش‌ها", "در حال تکمیل", FileText],
    ["پروژه‌های پژوهشی", "در حال تکمیل", Network],
    ["همکاران و شرکای تخصصی", "در حال تکمیل", Handshake],
  ],
  en: [
    ["Researchers and fellows", "To be completed", UsersRound],
    ["Publications and reports", "To be completed", FileText],
    ["Research projects", "To be completed", Network],
    ["Specialized partners", "To be completed", Handshake],
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
