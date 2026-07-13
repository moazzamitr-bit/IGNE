import { EmptyState } from "@/components/shared/EmptyState";
import { InternalHero } from "@/components/shared/InternalHero";
import { assetPath } from "@/lib/assets/path";
import { contentRepository } from "@/lib/content/repository";
import { isLocale, type Locale } from "@/lib/i18n/config";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ExpertsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const experts = await contentRepository.getExperts(typedLocale);
  return <><InternalHero locale={typedLocale} title={typedLocale === "fa" ? "شبکه متخصصان" : "Expert Network"} text={typedLocale === "fa" ? "پروفایل متخصصان پس از دریافت اطلاعات واقعی منتشر می‌شود." : "Expert profiles will be published once verified information is provided."} /><section className="section section--ivory"><div className="container image-feature"><Image src={assetPath("/images/expert-network-library.png")} alt="" width={900} height={563} /><div><h2>{typedLocale === "fa" ? "فضای همکاری و گفت‌وگو" : "A Space for Collaboration"}</h2><p>{typedLocale === "fa" ? "شبکه متخصصان پس از دریافت اطلاعات معتبر، با پروفایل‌های واقعی و قابل استناد تکمیل می‌شود." : "The expert network will be completed with verified, real profiles once data is provided."}</p></div></div><div className="container">{experts.length === 0 ? <EmptyState title={typedLocale === "fa" ? "اطلاعات متخصصان در حال تکمیل است" : "Expert information is being completed"} text={typedLocale === "fa" ? "برای جلوگیری از تولید نام یا تصویر غیرواقعی، این بخش فعلاً به‌صورت وضعیت خالی نمایش داده می‌شود." : "To avoid invented names or photos, this section currently shows an empty state."} /> : null}</div></section></>;
}
