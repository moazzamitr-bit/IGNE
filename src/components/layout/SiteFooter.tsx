import Link from "next/link";
import { navigationItems } from "@/data/navigation";
import { researchAreas } from "@/data/research-areas";
import { settings } from "@/data/settings";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/dictionaries";
import { BrandMark } from "../shared/BrandMark";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <BrandMark locale={locale} inverse />
          <p>{locale === "fa" ? "نهادی مستقل و غیرانتفاعی برای تولید دانش راهبردی و کمک به تصمیم‌سازی‌های کلان کشور." : "An independent non-profit institute connecting strategic knowledge with public decision-making."}</p>
        </div>
        <div>
          <h2>{locale === "fa" ? "دسترسی سریع" : "Quick Links"}</h2>
          {navigationItems[locale].slice(1, 6).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </div>
        <div>
          <h2>{locale === "fa" ? "حوزه‌های پژوهش" : "Research Areas"}</h2>
          {researchAreas.slice(0, 6).map((area) => <Link key={area.slug} href={`/${locale}/research/${area.slug}`}>{area.title[locale]}</Link>)}
        </div>
        <div>
          <h2>{locale === "fa" ? "اطلاعات تماس" : "Contact"}</h2>
          {settings.contact.address[locale] && settings.contact.address[locale] !== "در حال تکمیل" && settings.contact.address[locale] !== "To be completed" ? <p>{settings.contact.address[locale]}</p> : null}
          {settings.contact.email ? <p>{settings.contact.email}</p> : null}
          {settings.contact.phone ? <p>{settings.contact.phone}</p> : null}
          <Link href={`/${locale}/contact`}>{locale === "fa" ? "فرم ارتباط با اندیشکده" : "Contact the institute"}</Link>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© 2026 {t(locale, "acronym")}</span>
        <Link href={`/${locale === "fa" ? "en" : "fa"}`}>{locale === "fa" ? "English version" : "نسخه فارسی"}</Link>
      </div>
    </footer>
  );
}
