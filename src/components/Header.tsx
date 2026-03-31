'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { useLang } from './LanguageContext';

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/portfolio', label: t('nav.portfolio') },
    { href: '/shop', label: t('nav.shop') },
    { href: '/news', label: t('nav.news') },
    { href: '/forum', label: t('nav.forum') },
    { href: '/about', label: 'About' },
    { href: '/homepage#contact', label: t('nav.contact') },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-primary/10 shadow-green-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center gap-2.5 z-50">
            <AppLogo size={36} />
            <span className="font-display text-xl font-semibold tracking-tight text-foreground hidden sm:block">
              KurilenkoArt
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks?.map((l) => (
              <Link
                key={l?.href}
                href={l?.href}
                className="nav-link text-[13px] font-medium text-foreground-muted hover:text-foreground transition-colors"
              >
                {l?.label}
              </Link>
            ))}
          </div>

          {/* Right side: Lang + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 mr-2">
              <button
                className={`lang-btn ${lang === 'ru' ? 'active' : ''}`}
                onClick={() => setLang('ru')}
              >
                RU
              </button>
              <span className="text-foreground-subtle text-xs">/</span>
              <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>
            <Link href="/sign-up-login" className="btn-outline text-sm py-2 px-5">
              {t('nav.login')}
            </Link>
            <Link href="/homepage#shop" className="btn-primary text-sm py-2 px-5">
              {t('nav.shop')}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden z-50 p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks?.map((l, i) => (
            <Link
              key={l?.href}
              href={l?.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-4xl font-semibold text-foreground hover:text-primary transition-colors"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {l?.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 mt-6">
            <button
              className={`lang-btn text-base ${lang === 'ru' ? 'active' : ''}`}
              onClick={() => setLang('ru')}
            >
              RU
            </button>
            <span className="text-foreground-subtle">/</span>
            <button
              className={`lang-btn text-base ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <Link
            href="/sign-up-login"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-2"
          >
            {t('nav.login')}
          </Link>
        </div>
      </div>
    </>
  );
}
