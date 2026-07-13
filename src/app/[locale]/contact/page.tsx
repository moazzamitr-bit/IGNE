import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { InternalHero } from "@/components/shared/InternalHero";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  return (
    <>
      <InternalHero locale={typedLocale} title={typedLocale === "fa" ? "تماس با ما" : "Contact"} text={typedLocale === "fa" ? "برای همکاری، رسانه، پژوهش و ارتباط سازمانی با ما در تماس باشید." : "Reach out for collaboration, media, research, and institutional contact."} />
      <section className="section section--ivory"><div className="container contact-grid"><form className="contact-form"><input placeholder={typedLocale === "fa" ? "نام و نام خانوادگی" : "Full name"} /><input placeholder={typedLocale === "fa" ? "ایمیل" : "Email"} /><select defaultValue=""><option value="" disabled>{typedLocale === "fa" ? "دلیل تماس" : "Reason for contact"}</option><option>{typedLocale === "fa" ? "همکاری پژوهشی" : "Research collaboration"}</option><option>{typedLocale === "fa" ? "رسانه" : "Media"}</option></select><textarea placeholder={typedLocale === "fa" ? "پیام" : "Message"} rows={5} /><button className="button button--primary" type="button">{typedLocale === "fa" ? "ارسال پیام" : "Send message"}</button></form><div className="map-placeholder">{typedLocale === "fa" ? "نقشه پس از دریافت آدرس دقیق فعال می‌شود." : "Map will be enabled after the exact address is provided."}</div></div></section>
      <NewsletterForm locale={typedLocale} />
    </>
  );
}
