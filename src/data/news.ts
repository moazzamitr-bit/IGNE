import type { NewsItem } from "@/lib/content/types";

export const news: NewsItem[] = [
  {
    id: "news-fa-1",
    slug: "igne-media-room-demo",
    locale: "fa",
    title: "آغاز به‌روزرسانی اتاق رسانه اندیشکده",
    excerpt: "خبر نمونه برای نمایش ساختار صفحه اخبار؛ محتوای رسمی پس از تأمین داده جایگزین می‌شود.",
    category: "اخبار اندیشکده",
    publishedAt: "2026-06-02",
    image: "/images/media-studio.png",
    demo: true,
  },
  {
    id: "news-en-1",
    slug: "igne-media-room-demo",
    locale: "en",
    title: "IGNE Media Room Structure Prepared",
    excerpt: "Demo news item for the media page structure.",
    category: "Institute News",
    publishedAt: "2026-06-02",
    image: "/images/media-studio.png",
    demo: true,
  },
];
