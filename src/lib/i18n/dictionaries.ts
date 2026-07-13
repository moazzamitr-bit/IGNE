import type { Locale } from "./config";

export const dictionary = {
  fa: {
    brandFa: "اندیشکده حکمرانی و اقتصاد نوین",
    brandEn: "Institute for New Governance and Economy",
    acronym: "IGNE",
    tagline: "جایی که اندیشه تصمیم می‌سازد",
    newsletter: "عضویت در خبرنامه",
    search: "جست‌وجو",
    readMore: "جزئیات",
    download: "دریافت PDF",
    demo: "محتوای نمونه",
  },
  en: {
    brandFa: "اندیشکده حکمرانی و اقتصاد نوین",
    brandEn: "Institute for New Governance and Economy",
    acronym: "IGNE",
    tagline: "Where thought shapes decisions",
    newsletter: "Newsletter",
    search: "Search",
    readMore: "Details",
    download: "Download PDF",
    demo: "Demo content",
  },
} satisfies Record<Locale, Record<string, string>>;

export function t(locale: Locale, key: keyof (typeof dictionary)["fa"]): string {
  return dictionary[locale][key];
}
