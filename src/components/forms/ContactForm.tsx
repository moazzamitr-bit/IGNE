"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n/config";

export function ContactForm({ locale }: { locale: Locale }) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMessage("");
      setError(locale === "fa" ? "لطفاً یک ایمیل معتبر وارد کنید." : "Please enter a valid email address.");
      return;
    }
    setError("");
    setMessage(locale === "fa" ? "پیام شما ثبت شد. این فرم در نسخه نمایشی، ارسال را شبیه‌سازی می‌کند." : "Your message has been recorded. Submission is simulated in this demo version.");
    event.currentTarget.reset();
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label><span>{locale === "fa" ? "نام و نام خانوادگی" : "Full name"}</span><input name="name" autoComplete="name" required /></label>
      <label><span>{locale === "fa" ? "ایمیل" : "Email"}</span><input name="email" type="email" autoComplete="email" required /></label>
      <label>
        <span>{locale === "fa" ? "دلیل تماس" : "Reason for contact"}</span>
        <select name="reason" defaultValue="" required>
          <option value="" disabled>{locale === "fa" ? "یک گزینه را انتخاب کنید" : "Choose an option"}</option>
          <option value="research">{locale === "fa" ? "همکاری پژوهشی" : "Research collaboration"}</option>
          <option value="media">{locale === "fa" ? "رسانه و ارتباطات" : "Media and communications"}</option>
          <option value="event">{locale === "fa" ? "رویداد و نشست تخصصی" : "Events and expert sessions"}</option>
        </select>
      </label>
      <label><span>{locale === "fa" ? "پیام" : "Message"}</span><textarea name="message" rows={5} required /></label>
      <button className="button button--primary" type="submit">{locale === "fa" ? "ثبت پیام" : "Submit message"}</button>
      <div aria-live="polite">{error ? <p className="form-error">{error}</p> : null}{message ? <p className="form-success">{message}</p> : null}</div>
    </form>
  );
}
