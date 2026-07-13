import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/dictionaries";

export function BrandMark({ locale, inverse = false }: { locale: Locale; inverse?: boolean }) {
  return (
    <div className={`brand-mark ${inverse ? "brand-mark--inverse" : ""}`} aria-label={t(locale, "brandFa")}>
      <span className="brand-mark__symbol" aria-hidden="true">
        <Image src="/brand/igne-symbol.png" alt="" width={92} height={72} priority />
      </span>
      <span className="brand-mark__text">
        <strong>{locale === "fa" ? t(locale, "brandFa") : t(locale, "brandEn")}</strong>
        <small>{locale === "fa" ? t(locale, "brandEn") : t(locale, "brandFa")}</small>
      </span>
    </div>
  );
}
