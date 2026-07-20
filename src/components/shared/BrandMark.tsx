import Image, { getImageProps } from "next/image";
import { assetPath } from "@/lib/assets/path";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/dictionaries";

export function BrandMark({ locale, inverse = false, variant = "default" }: { locale: Locale; inverse?: boolean; variant?: "default" | "header" }) {
  if (variant === "header") {
    const { props: desktopLogo } = getImageProps({
      src: assetPath(locale === "fa" ? "/brand/igne-header-fa.webp" : "/brand/igne-header-en.webp"),
      alt: "",
      width: locale === "fa" ? 750 : 1190,
      height: 220,
      priority: true,
    });
    const { props: mobileLogo } = getImageProps({
      src: assetPath("/brand/igne-header-symbol.webp"),
      alt: "",
      width: 266,
      height: 220,
      priority: true,
    });

    return (
      <div className={`brand-mark brand-mark--header brand-mark--header-${locale}`} aria-label={t(locale, "brandFa")}>
        <picture className="brand-mark__header-picture">
          <source media="(max-width: 768px)" srcSet={mobileLogo.srcSet ?? mobileLogo.src} />
          <img {...desktopLogo} alt="" />
        </picture>
      </div>
    );
  }

  return (
    <div className={`brand-mark ${inverse ? "brand-mark--inverse" : ""}`} aria-label={t(locale, "brandFa")}>
      <span className="brand-mark__symbol" aria-hidden="true">
        <Image src={assetPath("/brand/igne-symbol.png")} alt="" width={92} height={72} priority />
      </span>
      <span className="brand-mark__text">
        <strong>{locale === "fa" ? t(locale, "brandFa") : t(locale, "brandEn")}</strong>
        <small>{locale === "fa" ? t(locale, "brandEn") : t(locale, "brandFa")}</small>
      </span>
    </div>
  );
}
