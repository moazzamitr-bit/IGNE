import { Landmark, Network, Radio, School, UsersRound } from "lucide-react";
import Link from "next/link";
import { stakeholderGroups } from "@/data/institute-profile";
import type { Locale } from "@/lib/i18n/config";

const icons = [School, Landmark, UsersRound, Radio, Network];

export function CollaborationPanel({ locale }: { locale: Locale }) {
  return (
    <section className="collaboration-panel" aria-labelledby="collaboration-title">
      <h2 id="collaboration-title">{locale === "fa" ? "با چه کسانی همکاری می‌کنیم" : "Who We Work With"}</h2>
      <p>{locale === "fa" ? "شبکه‌ای برای هم‌افزایی میان دانش، تجربه و تصمیم." : "A network connecting knowledge, experience, and decisions."}</p>
      <div className="collaboration-panel__list">
        {stakeholderGroups.map((group, index) => {
          const Icon = icons[index];
          return <div key={group.en}><Icon aria-hidden="true" strokeWidth={1.5} /><span>{group[locale]}</span></div>;
        })}
      </div>
      <Link className="text-link" href={`/${locale}/contact`}>{locale === "fa" ? "آغاز همکاری" : "Start a collaboration"}</Link>
    </section>
  );
}
