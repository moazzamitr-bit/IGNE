import { ArrowLeft, ArrowRight, BookOpenText, ChartNoAxesCombined, MessageSquareText, SearchCheck, Target } from "lucide-react";
import Image from "next/image";
import { policyPath } from "@/data/institute-profile";
import { assetPath } from "@/lib/assets/path";
import type { Locale } from "@/lib/i18n/config";

const icons = [SearchCheck, BookOpenText, MessageSquareText, ChartNoAxesCombined, Target];

export function PolicyPathSection({ locale }: { locale: Locale }) {
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;
  return (
    <section className="policy-path-section">
      <div className="container policy-path-intro">
        <div>
          <h2>{locale === "fa" ? "از دانش تا اثرگذاری در سیاست" : "From Knowledge to Policy Influence"}</h2>
          <p>{locale === "fa" ? "مدل کاری اندیشکده، پژوهش را به گفت‌وگو و گزینه‌های قابل اقدام برای تصمیم‌سازان پیوند می‌دهد." : "Our working model connects research with dialogue and actionable options for decision-makers."}</p>
        </div>
        <div className="policy-path-intro__media" aria-hidden="true">
          <Image src={assetPath("/images/mission-policy-impact.png")} alt="" fill sizes="(min-width: 1024px) 42vw, 100vw" />
        </div>
      </div>
      <div className="container policy-path">
        {policyPath.map((step, index) => {
          const Icon = icons[index];
          return (
            <article className="policy-path__step" key={step.title.en}>
              <div className="policy-path__number">{String(index + 1).padStart(2, "0")}</div>
              <Icon aria-hidden="true" strokeWidth={1.4} />
              <h3>{step.title[locale]}</h3>
              <p>{step.text[locale]}</p>
              {index < policyPath.length - 1 ? <Arrow className="policy-path__arrow" aria-hidden="true" strokeWidth={1.3} /> : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
