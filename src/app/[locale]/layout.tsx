import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { isLocale, localeConfig, type Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return [{ locale: "fa" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: typedLocale === "fa" ? "اندیشکده حکمرانی و اقتصاد نوین" : "Institute for New Governance and Economy",
    alternateName: "IGNE",
    url: `https://igne.ir/${typedLocale}`,
    slogan: typedLocale === "fa" ? "جایی که اندیشه تصمیم می‌سازد" : "Where thought shapes decisions",
  };
  return (
    <div lang={typedLocale} dir={localeConfig[typedLocale].dir} className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <a className="skip-link" href="#main-content">{typedLocale === "fa" ? "پرش به محتوا" : "Skip to content"}</a>
      <SiteHeader locale={typedLocale} />
      <main id="main-content">{children}</main>
      <SiteFooter locale={typedLocale} />
    </div>
  );
}
