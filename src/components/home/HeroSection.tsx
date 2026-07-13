import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assets/path";
import type { Locale } from "@/lib/i18n/config";

export function HeroSection({ locale }: { locale: Locale }) {
  return (
    <section className="hero-section">
      <div className="hero-section__media" aria-hidden="true">
        <Image src={assetPath("/images/tehran-alborz-hero.png")} alt="" fill preload loading="eager" sizes="(min-width: 1024px) 58vw, 100vw" />
      </div>
      <div className="container hero-section__inner">
        <div className="hero-slider" aria-hidden="true"><span /><span /><span /></div>
        <div className="hero-copy">
          <p>{locale === "fa" ? "جایی که" : "Where"}</p>
          <h1>{locale === "fa" ? "اندیشه تصمیم می‌سازد" : "Thought Shapes Decisions"}</h1>
          <div className="hero-rule" />
          <p className="hero-copy__lead">
            {locale === "fa"
              ? "اندیشکده حکمرانی و اقتصاد نوین، نهادی مستقل و غیرانتفاعی است که با هدف تولید دانش راهبردی، توسعه حکمرانی و کمک به تصمیم‌سازی‌های کلان کشور فعالیت می‌کند."
              : "The Institute for New Governance and Economy is an independent non-profit institution producing strategic knowledge and supporting high-level decision-making."}
          </p>
          <div className="hero-actions">
            <Link className="button button--primary" href={`/${locale}/about`}>{locale === "fa" ? "درباره اندیشکده" : "About IGNE"}</Link>
            <Link className="button button--secondary" href={`/${locale}/research`}>{locale === "fa" ? "حوزه‌های پژوهش" : "Research Areas"}</Link>
          </div>
        </div>
      </div>
      <span className="scroll-indicator" aria-hidden="true" />
    </section>
  );
}
