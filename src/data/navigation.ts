import type { Locale } from "@/lib/i18n/config";

export const navigationItems = {
  fa: [
    ["خانه", "/fa"],
    ["درباره ما", "/fa/about"],
    ["حوزه‌های پژوهش", "/fa/research"],
    ["پروژه‌ها", "/fa/projects"],
    ["رویدادها", "/fa/events"],
    ["انتشارات", "/fa/publications"],
    ["اخبار و رسانه", "/fa/news"],
    ["تماس با ما", "/fa/contact"],
  ],
  en: [
    ["Home", "/en"],
    ["About", "/en/about"],
    ["Research Areas", "/en/research"],
    ["Projects", "/en/projects"],
    ["Events", "/en/events"],
    ["Publications", "/en/publications"],
    ["News & Media", "/en/news"],
    ["Contact", "/en/contact"],
  ],
} satisfies Record<Locale, [string, string][]>;
