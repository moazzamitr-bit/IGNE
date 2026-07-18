import { ArrowLeft, ArrowRight } from "lucide-react";
import { InternalHero } from "@/components/shared/InternalHero";
import { developmentPhases, policyPath, stakeholderGroups, strategicAxes } from "@/data/institute-profile";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const Arrow = typedLocale === "fa" ? ArrowLeft : ArrowRight;

  return (
    <>
      <InternalHero
        locale={typedLocale}
        title={typedLocale === "fa" ? "اندیشکده‌ای برای نقطه‌های تصمیم" : "An Institute for Decision Points"}
        text={typedLocale === "fa" ? "معرفی مأموریت، محورهای راهبردی و مسیر تبدیل دانش به اثر سیاستی." : "Mission, strategic axes, and the path from knowledge to policy influence."}
      />
      <section className="section about-intro-section">
        <div className="container about-intro-grid">
          <div><span className="section-index">01</span><h2>{typedLocale === "fa" ? "چشم‌انداز" : "Vision"}</h2></div>
          <p>{typedLocale === "fa" ? "تبدیل شدن به یک مرجع فکری و تحلیلی برای فهم مسائل پیچیده حکمرانی، اقتصاد نوین، توسعه منطقه‌ای و آینده‌پژوهی؛ مرجعی که میان دانش تخصصی و تصمیم‌سازی عمومی ارتباطی مؤثر ایجاد می‌کند." : "To become a trusted analytical reference for complex questions in governance, new economy, regional development, and foresight, connecting specialist knowledge with public decision-making."}</p>
        </div>
        <div className="container about-intro-grid">
          <div><span className="section-index">02</span><h2>{typedLocale === "fa" ? "مأموریت" : "Mission"}</h2></div>
          <p>{typedLocale === "fa" ? "تولید دانش کاربردی، شکل‌دهی به گفت‌وگوهای تخصصی، توسعه شبکه‌ای از نخبگان و ذی‌نفعان و کمک به ارتقای کیفیت تصمیم‌سازی در مسیر پیشرفت ایران." : "To produce applied knowledge, convene specialist dialogue, build a network of experts and stakeholders, and help improve the quality of decisions supporting Iran's progress."}</p>
        </div>
      </section>
      <section className="section section--ivory about-axes-section">
        <div className="container">
          <h2>{typedLocale === "fa" ? "سه محور راهبردی" : "Three Strategic Axes"}</h2>
          <div className="about-axis-list">
            {strategicAxes.map((axis, index) => (
              <article key={axis.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{axis.title[typedLocale]}</h3><p>{axis.summary[typedLocale]}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section about-impact-section">
        <div className="container">
          <h2>{typedLocale === "fa" ? "منطق اثرگذاری" : "How Influence Is Built"}</h2>
          <div className="about-impact-path">
            {policyPath.map((step, index) => (
              <article key={step.title.en}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title[typedLocale]}</h3>
                <p>{step.text[typedLocale]}</p>
                {index < policyPath.length - 1 ? <Arrow aria-hidden="true" /> : null}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section about-roadmap-section">
        <div className="container about-roadmap-grid">
          <div>
            <span className="section-index">03</span>
            <h2>{typedLocale === "fa" ? "مسیر توسعه اندیشکده" : "Institute Development Path"}</h2>
            <p>{typedLocale === "fa" ? "چارچوب شش‌مرحله‌ای معرفی‌شده در سند راهبردی، رشد اندیشکده را از بنیان برند تا مرجعیت فکری ترسیم می‌کند." : "The six-phase framework in the strategic document traces growth from brand foundation to thought leadership."}</p>
          </div>
          <ol>{developmentPhases.map((phase, index) => <li key={phase.en}><span>{String(index + 1).padStart(2, "0")}</span>{phase[typedLocale]}</li>)}</ol>
        </div>
      </section>
      <section className="section section--ivory about-network-section">
        <div className="container about-network-grid">
          <div><span className="section-index">04</span><h2>{typedLocale === "fa" ? "شبکه هم‌افزایی" : "Stakeholder Network"}</h2></div>
          <ul>{stakeholderGroups.map((group) => <li key={group.en}>{group[typedLocale]}</li>)}</ul>
        </div>
      </section>
    </>
  );
}
