import type { ResearchArea } from "@/lib/content/types";

export const researchAreas: ResearchArea[] = [
  {
    slug: "technology-innovation",
    icon: "innovation",
    title: { fa: "فناوری و نوآوری", en: "Technology and Innovation" },
    excerpt: { fa: "سیاست‌گذاری فناوری، اقتصاد دیجیتال و نظام نوآوری.", en: "Technology policy, digital economy, and innovation systems." },
    topics: { fa: ["اقتصاد دیجیتال", "نوآوری", "سرمایه انسانی"], en: ["Digital economy", "Innovation", "Human capital"] },
  },
  {
    slug: "international",
    icon: "globe",
    title: { fa: "بین‌الملل", en: "International Affairs" },
    excerpt: { fa: "دیپلماسی اقتصادی، همکاری منطقه‌ای و تحولات جهانی.", en: "Economic diplomacy, regional cooperation, and global shifts." },
    topics: { fa: ["دیپلماسی اقتصادی", "همکاری منطقه‌ای"], en: ["Economic diplomacy", "Regional cooperation"] },
  },
  {
    slug: "economic-infrastructure",
    icon: "infrastructure",
    title: { fa: "اقتصادی و زیربنایی", en: "Economy and Infrastructure" },
    excerpt: { fa: "سیاست اقتصادی، بهره‌وری، زیرساخت و توسعه پایدار.", en: "Economic policy, productivity, infrastructure, and sustainable development." },
    topics: { fa: ["بهره‌وری", "زیرساخت", "تنظیم‌گری"], en: ["Productivity", "Infrastructure", "Regulation"] },
  },
  {
    slug: "social-cultural",
    icon: "culture",
    title: { fa: "اجتماعی و فرهنگی", en: "Social and Cultural" },
    excerpt: { fa: "سرمایه اجتماعی، فرهنگ عمومی و حکمرانی اجتماعی.", en: "Social capital, public culture, and social governance." },
    topics: { fa: ["سرمایه اجتماعی", "فرهنگ عمومی"], en: ["Social capital", "Public culture"] },
  },
  {
    slug: "political-security",
    icon: "security",
    title: { fa: "سیاسی و امنیتی", en: "Political and Security" },
    excerpt: { fa: "کیفیت حکمرانی، امنیت ملی و آینده‌پژوهی نهادی.", en: "Governance quality, national security, and institutional foresight." },
    topics: { fa: ["حکمرانی", "آینده‌پژوهی"], en: ["Governance", "Foresight"] },
  },
  {
    slug: "legal-judicial",
    icon: "justice",
    title: { fa: "حقوقی و قضایی", en: "Legal and Judicial" },
    excerpt: { fa: "حکمرانی حقوقی، اصلاح نهادی و سیاست قضایی.", en: "Legal governance, institutional reform, and judicial policy." },
    topics: { fa: ["حکمرانی حقوقی", "اصلاح نهادی"], en: ["Legal governance", "Institutional reform"] },
  },
];
