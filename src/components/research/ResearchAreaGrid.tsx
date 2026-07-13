import Link from "next/link";
import type { ResearchArea } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/config";
import { ResearchIcon } from "../icons/ResearchIcon";

export function ResearchAreaGrid({ locale, areas }: { locale: Locale; areas: ResearchArea[] }) {
  return (
    <div className="research-grid">
      {areas.map((area) => (
        <Link key={area.slug} className="research-card" href={`/${locale}/research/${area.slug}`}>
          <span className="research-card__icon"><ResearchIcon name={area.icon} /></span>
          <h3>{area.title[locale]}</h3>
          <p>{area.excerpt[locale]}</p>
        </Link>
      ))}
    </div>
  );
}
