"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { validateEmail } from "@/lib/validation/newsletter";

export function NewsletterForm({ locale }: { locale: Locale }) {
  const [email, setEmail] = useState("");
  const [trap, setTrap] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 0);
    return () => window.clearTimeout(id);
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (trap) return;
    const validation = validateEmail(email);
    if (validation) {
      setError(locale === "fa" ? "لطفاً یک ایمیل معتبر وارد کنید." : "Please enter a valid email.");
      setState("error");
      return;
    }
    setState("loading");
    await new Promise((resolve) => window.setTimeout(resolve, 450));
    setState("success");
    setError("");
  };

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="container newsletter-frame">
        <div>
          <h2>{locale === "fa" ? "در خبرنامه ما عضو شوید" : "Join Our Newsletter"}</h2>
          <p>{locale === "fa" ? "آخرین پژوهش‌ها، رویدادها، گزارش‌ها و تحلیل‌های اندیشکده را دریافت کنید." : "Receive the institute's latest research, events, reports, and analysis."}</p>
        </div>
        <form onSubmit={onSubmit} noValidate data-ready={ready ? "true" : "false"}>
          <label className="sr-only" htmlFor="newsletter-email">{locale === "fa" ? "ایمیل" : "Email"}</label>
          <input id="newsletter-email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={locale === "fa" ? "ایمیل خود را وارد کنید" : "Enter your email"} aria-invalid={state === "error"} aria-describedby="newsletter-message" />
          <input className="honeypot" value={trap} onChange={(event) => setTrap(event.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <button className="button button--primary" type="submit" disabled={state === "loading"}>{state === "loading" ? (locale === "fa" ? "در حال ارسال" : "Sending") : (locale === "fa" ? "عضویت" : "Subscribe")}</button>
          <p id="newsletter-message" aria-live="polite" className={state === "error" ? "form-error" : "form-success"}>
            {state === "error" ? error : state === "success" ? (locale === "fa" ? "عضویت شما ثبت شد." : "You are subscribed.") : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
