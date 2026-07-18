import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { ContactForm } from "@/components/forms/ContactForm";
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
      <section className="section section--ivory">
        <div className="container contact-grid">
          <ContactForm locale={typedLocale} />
          <aside className="contact-note">
            <span>IGNE</span>
            <h2>{typedLocale === "fa" ? "مسیرهای همکاری" : "Ways to Collaborate"}</h2>
            <p>{typedLocale === "fa" ? "برای پیشنهاد پروژه پژوهشی، برگزاری نشست تخصصی، درخواست رسانه‌ای یا معرفی ظرفیت همکاری، موضوع مناسب را در فرم انتخاب کنید." : "Use the form for research proposals, expert sessions, media requests, or institutional collaboration."}</p>
            <ul><li>{typedLocale === "fa" ? "پژوهش و تحلیل سیاستی" : "Research and policy analysis"}</li><li>{typedLocale === "fa" ? "رویداد و گفت‌وگوی تخصصی" : "Events and expert dialogue"}</li><li>{typedLocale === "fa" ? "رسانه و انتشار دانش" : "Media and knowledge dissemination"}</li></ul>
          </aside>
        </div>
      </section>
      <NewsletterForm locale={typedLocale} />
    </>
  );
}
