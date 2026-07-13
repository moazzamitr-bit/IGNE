import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

export function MissionSection({ locale }: { locale: Locale }) {
  return (
    <section className="mission-section">
      <div className="container mission-section__grid">
        <div className="mission-copy">
          <h2>{locale === "fa" ? "درباره اندیشکده" : "About the Institute"}</h2>
          <p>{locale === "fa" ? "ماموریت ما تبدیل شدن به مرجع فکری و تحلیلی در حوزه‌های حکمرانی، اقتصاد نوین، توسعه منطقه‌ای و آینده‌پژوهی؛ از طریق تولید دانش کاربردی، توسعه شبکه تخصصی و اثرگذاری بر سیاست‌گذاری‌های کلان کشور است." : "Our mission is to become a trusted analytical reference in governance, new economy, regional development, and foresight through applied knowledge, expert networks, and policy influence."}</p>
          <Link href={`/${locale}/about`} className="mission-link">
            {locale === "fa" ? "بیشتر بخوانید" : "Read more"}
          </Link>
        </div>
        <div className="mission-emblem">
          <Image src="/images/mission-policy-impact.png" alt="" width={900} height={563} sizes="(min-width: 1024px) 58vw, 100vw" loading="eager" />
        </div>
      </div>
    </section>
  );
}
