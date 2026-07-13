import { MissionSection } from "@/components/home/MissionSection";
import { InternalHero } from "@/components/shared/InternalHero";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

const steps = {
  fa: ["هویت و بنیان برند", "تولید و انتشار دانش", "توسعه رسانه‌ای", "ایجاد شبکه هم‌افزایی و تعامل", "اثرگذاری سیاستی", "مرجعیت فکری"],
  en: ["Brand foundation", "Knowledge production", "Media development", "Network building", "Policy impact", "Thought leadership"],
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  return (
    <>
      <InternalHero locale={typedLocale} title={typedLocale === "fa" ? "درباره ما" : "About IGNE"} text={typedLocale === "fa" ? "معرفی مأموریت، چشم‌انداز و مدل اثرگذاری اندیشکده." : "Mission, vision, and the institute's policy impact model."} />
      <section className="section">
        <div className="container content-stack">
          <h2>{typedLocale === "fa" ? "معرفی اندیشکده" : "Institute Overview"}</h2>
          <p>{typedLocale === "fa" ? "اندیشکده حکمرانی و اقتصاد نوین برای پیوند میان پژوهش کاربردی، شبکه متخصصان و تصمیم‌سازی عمومی طراحی شده است." : "IGNE is designed to connect applied research, expert networks, and public decision-making."}</p>
          <h2>{typedLocale === "fa" ? "مدل اثرگذاری" : "Impact Model"}</h2>
          <div className="axis-grid">{steps[typedLocale].map((step, index) => <article className="axis-card" key={step}><span>{index + 1}</span><h3>{step}</h3></article>)}</div>
        </div>
      </section>
      <MissionSection locale={typedLocale} />
    </>
  );
}
