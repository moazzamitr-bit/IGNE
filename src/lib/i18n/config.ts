export const locales = ["fa", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fa";

export const localeConfig: Record<Locale, { dir: "rtl" | "ltr"; label: string; switchLabel: string }> = {
  fa: { dir: "rtl", label: "فارسی", switchLabel: "EN" },
  en: { dir: "ltr", label: "English", switchLabel: "فا" },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function oppositeLocale(locale: Locale): Locale {
  return locale === "fa" ? "en" : "fa";
}

export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const parts = pathname.split("/");
  if (isLocale(parts[1] ?? "")) {
    parts[1] = nextLocale;
    return parts.join("/") || `/${nextLocale}`;
  }
  return `/${nextLocale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}
