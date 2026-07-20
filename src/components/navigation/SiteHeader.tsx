"use client";

import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigationItems } from "@/data/navigation";
import { localeConfig, oppositeLocale, switchLocalePath } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/dictionaries";
import { BrandMark } from "../shared/BrandMark";
import { SearchDialog } from "./SearchDialog";

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const nextLocale = oppositeLocale(locale);

  useEffect(() => {
    const readyId = window.setTimeout(() => setReady(true), 0);
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(readyId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={`site-header ${compact ? "site-header--compact" : ""}`} data-ready={ready ? "true" : "false"}>
        <div className="site-header__inner">
          <Link href={`/${locale}`} className="site-header__brand">
            <BrandMark locale={locale} inverse variant="header" />
          </Link>
          <nav className="desktop-nav" aria-label={locale === "fa" ? "ناوبری اصلی" : "Main navigation"}>
            {navigationItems[locale].map(([label, href]) => (
              <Link key={href} href={href} className={pathname === href ? "is-active" : ""}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="site-header__actions">
            <button className="icon-button icon-button--light" type="button" onClick={() => setSearchOpen(true)} aria-label={t(locale, "search")}>
              <Search aria-hidden="true" size={19} />
            </button>
            <Link className="locale-switcher" href={switchLocalePath(pathname, nextLocale)} hrefLang={nextLocale}>
              {localeConfig[locale].switchLabel}
            </Link>
            <Link className="header-cta" href={`/${locale}/contact#newsletter`}>
              {t(locale, "newsletter")}
            </Link>
            <button className="mobile-menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="mobile-menu">
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
              <span className="sr-only">{locale === "fa" ? "منوی موبایل" : "Mobile menu"}</span>
            </button>
          </div>
        </div>
        <div id="mobile-menu" className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}>
          {navigationItems[locale].map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      </header>
      <SearchDialog locale={locale} open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
