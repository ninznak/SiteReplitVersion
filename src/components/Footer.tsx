'use client';
import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { useLang } from './LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative z-10 border-t border-primary/10 bg-white/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Arc Browser Split Pattern */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Left: Logo + Tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <AppLogo size={32} />
              <span className="font-display text-lg font-semibold text-foreground">
                KurilenkoArt
              </span>
            </div>
            <p className="text-sm text-foreground-subtle max-w-xs leading-relaxed">
              {t('footer.tagline')}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="text-foreground-subtle hover:text-primary transition-colors"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Behance"
                className="text-foreground-subtle hover:text-primary transition-colors"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.726-3h3.457c-.069-1.647-.75-2.53-1.767-2.53-.973 0-1.59.893-1.69 2.53zM6.648 5c-.742 0-1.376.046-1.648.132v3.66h1.648c1.389 0 2.286-.636 2.286-1.9 0-1.25-.897-1.892-2.286-1.892zm.065 5.712H5v4.031h1.713c1.449 0 2.499-.643 2.499-2.016 0-1.374-1.05-2.015-2.499-2.015zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="ArtStation"
                className="text-foreground-subtle hover:text-primary transition-colors"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.164-1.333H9.19L21.598 22.54l1.92-3.325c.302-.497.482-1.075.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Links compact */}
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <div className="flex flex-col gap-2.5">
              <Link
                href="/portfolio"
                className="text-[13px] font-medium text-foreground-muted hover:text-foreground transition-colors"
              >
                {t('nav.portfolio')}
              </Link>
              <Link
                href="/news"
                className="text-[13px] font-medium text-foreground-muted hover:text-foreground transition-colors"
              >
                {t('nav.news')}
              </Link>
              <Link
                href="/about"
                className="text-[13px] font-medium text-foreground-muted hover:text-foreground transition-colors"
              >
                About
              </Link>
            </div>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/shop"
                className="text-[13px] font-medium text-foreground-muted hover:text-foreground transition-colors"
              >
                {t('nav.shop')}
              </Link>
              <Link
                href="/forum"
                className="text-[13px] font-medium text-foreground-muted hover:text-foreground transition-colors"
              >
                {t('nav.forum')}
              </Link>
              <Link
                href="/homepage#contact"
                className="text-[13px] font-medium text-foreground-muted hover:text-foreground transition-colors"
              >
                {t('nav.contact')}
              </Link>
            </div>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/sign-up-login"
                className="text-[13px] font-medium text-foreground-muted hover:text-foreground transition-colors"
              >
                {t('nav.login')}
              </Link>
              <a
                href="#"
                className="text-[13px] font-medium text-foreground-muted hover:text-foreground transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-[13px] font-medium text-foreground-muted hover:text-foreground transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] uppercase tracking-widest text-foreground-subtle">
            © 2026 KurilenkoArt. All rights reserved.
          </p>
          <p className="text-[11px] text-foreground-subtle">
            3D Modeling · AI Content · Digital Art
          </p>
        </div>
      </div>
    </footer>
  );
}
