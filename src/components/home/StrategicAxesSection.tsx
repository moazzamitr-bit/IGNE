import { Building2, Lightbulb, MapPinned, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { strategicAxes } from "@/data/institute-profile";
import type { Locale } from "@/lib/i18n/config";

const icons: Record<(typeof strategicAxes)[number]["id"], LucideIcon> = {
  governance: Building2,
  "new-economy": Lightbulb,
  "regional-development": MapPinned,
};

export function StrategicAxesSection({ locale }: { locale: Locale }) {
  return (
    <section className="section strategic-axes-section">
      <div className="container">
        <SectionHeading
          title={locale === "fa" ? "محورهای راهبردی" : "Strategic Axes"}
          text={locale === "fa" ? "سه محور به‌هم‌پیوسته برای فهم مسائل پیچیده و طراحی راه‌حل‌های قابل اجرا." : "Three connected lenses for understanding complex challenges and designing practical responses."}
        />
        <div className="strategic-axes">
          {strategicAxes.map((axis, index) => {
            const Icon = icons[axis.id];
            return (
              <article className="strategic-axis" key={axis.id}>
                <div className="strategic-axis__topline">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon aria-hidden="true" strokeWidth={1.45} />
                </div>
                <h3>{axis.title[locale]}</h3>
                <p>{axis.summary[locale]}</p>
                <ul>{axis.topics[locale].map((topic) => <li key={topic}>{topic}</li>)}</ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
