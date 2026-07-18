import type { Locale } from "@/lib/i18n/config";

type Localized = Record<Locale, string>;

export type StrategicAxis = {
  id: "governance" | "new-economy" | "regional-development";
  title: Localized;
  summary: Localized;
  topics: Record<Locale, string[]>;
};

export const strategicAxes: StrategicAxis[] = [
  {
    id: "governance",
    title: { fa: "حکمرانی و کیفیت حکمرانی", en: "Governance and Governance Quality" },
    summary: {
      fa: "تحلیل سازوکارهای تصمیم‌گیری، ارزیابی کیفیت نهادی و ارائه راهکارهای اجرایی برای حکمرانی پاسخ‌گو و کارآمد.",
      en: "Analyzing decision systems, institutional quality, and practical routes toward responsive, effective governance.",
    },
    topics: {
      fa: ["تحلیل سیاست عمومی", "اصلاح نهادی", "حکمرانی داده‌محور"],
      en: ["Public policy analysis", "Institutional reform", "Data-informed governance"],
    },
  },
  {
    id: "new-economy",
    title: { fa: "اقتصاد نوین، دانش‌بنیان و نوآور", en: "New, Knowledge-Based Economy" },
    summary: {
      fa: "بررسی پیشران‌های اقتصاد دانش‌بنیان، تحول دیجیتال و آینده فناوری برای تقویت بهره‌وری و ظرفیت نوآوری کشور.",
      en: "Studying the knowledge economy, digital transformation, and emerging technology to strengthen productivity and innovation.",
    },
    topics: {
      fa: ["اقتصاد دیجیتال", "فناوری و نوآوری", "سرمایه انسانی"],
      en: ["Digital economy", "Technology and innovation", "Human capital"],
    },
  },
  {
    id: "regional-development",
    title: { fa: "توسعه منطقه‌ای و حکمرانی محلی", en: "Regional Development and Local Governance" },
    summary: {
      fa: "ارائه الگوها و سیاست‌هایی برای توسعه متوازن مناطق، تقویت ظرفیت‌های محلی و پیوند برنامه‌ریزی ملی با واقعیت سرزمین.",
      en: "Developing policy models for balanced regions, stronger local capacity, and closer links between national plans and place.",
    },
    topics: {
      fa: ["آمایش سرزمین", "اقتصاد منطقه‌ای", "حکمرانی محلی"],
      en: ["Spatial planning", "Regional economy", "Local governance"],
    },
  },
];

export const policyPath = [
  {
    title: { fa: "صورت‌بندی مسئله", en: "Frame the issue" },
    text: { fa: "شناخت دقیق مسئله و ذی‌نفعان آن", en: "Define the challenge and its stakeholders" },
  },
  {
    title: { fa: "تولید دانش", en: "Produce knowledge" },
    text: { fa: "پژوهش، تحلیل داده و آینده‌پژوهی", en: "Research, evidence, and foresight" },
  },
  {
    title: { fa: "گفت‌وگوی تخصصی", en: "Convene dialogue" },
    text: { fa: "پیوند دیدگاه‌های علمی و اجرایی", en: "Connect academic and practical insight" },
  },
  {
    title: { fa: "توصیه سیاستی", en: "Shape policy options" },
    text: { fa: "تبدیل یافته‌ها به گزینه‌های قابل اقدام", en: "Turn findings into actionable options" },
  },
  {
    title: { fa: "اثرگذاری و یادگیری", en: "Influence and learn" },
    text: { fa: "انتشار، تعامل و ارزیابی بازخورد", en: "Publish, engage, and learn from feedback" },
  },
] satisfies Array<{ title: Localized; text: Localized }>;

export const developmentPhases = [
  { fa: "هویت و بنیان برند", en: "Brand foundation" },
  { fa: "تولید و انتشار دانش تخصصی", en: "Knowledge production and dissemination" },
  { fa: "توسعه رسانه‌ای", en: "Media expansion" },
  { fa: "ایجاد شبکه هم‌افزایی و تعامل", en: "Stakeholder engagement" },
  { fa: "اثرگذاری سیاستی", en: "Policy influence" },
  { fa: "مرجعیت فکری", en: "Thought leadership" },
] satisfies Localized[];

export const stakeholderGroups = [
  { fa: "دانشگاه‌ها و مراکز پژوهشی", en: "Universities and research centers" },
  { fa: "سیاست‌گذاران و نهادهای حاکمیتی", en: "Policymakers and public institutions" },
  { fa: "بخش خصوصی و تشکل‌های تخصصی", en: "Private sector and professional bodies" },
  { fa: "رسانه‌ها و جامعه مدنی", en: "Media and civil society" },
  { fa: "شبکه‌های علمی و بین‌المللی", en: "Scientific and international networks" },
] satisfies Localized[];

export const successIndicators = [
  {
    title: { fa: "برند", en: "Brand" },
    text: { fa: "شناخت و اعتماد به جایگاه علمی اندیشکده", en: "Recognition and trust in the institute's analytical role" },
  },
  {
    title: { fa: "رسانه", en: "Media" },
    text: { fa: "گسترش دسترسی به تحلیل‌ها و روایت‌های تخصصی", en: "Wider access to specialist analysis and narratives" },
  },
  {
    title: { fa: "شبکه", en: "Network" },
    text: { fa: "کیفیت تعامل میان نخبگان، تصمیم‌سازان و جامعه", en: "Quality of exchange among experts, decision-makers, and society" },
  },
  {
    title: { fa: "اثرگذاری", en: "Influence" },
    text: { fa: "ورود ایده‌ها و پیشنهادها به گفت‌وگوی سیاستی", en: "Policy ideas entering serious public and institutional dialogue" },
  },
] satisfies Array<{ title: Localized; text: Localized }>;
