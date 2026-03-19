'use client';
import React from 'react';
import { useLang } from '@/components/LanguageContext';

export default function PortfolioHero() {
  const { t } = useLang();

  return (
    <section className="relative pt-12 pb-4 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(168,201,87,0.1) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl text-center mx-auto">
          <span className="section-label block mb-4">{t('portfolio.hero.label')}</span>
          <h1 className="font-display leading-[0.88] tracking-display font-bold" style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}>
            <span className="text-foreground">{t('portfolio.hero.title1')}</span>{' '}
            <span className="italic text-gradient-animated" style={{ paddingRight: '0.2em' }}>{t('portfolio.hero.title2')}</span>
          </h1>
          <p className="text-lg text-foreground-muted mt-6 max-w-xl leading-relaxed mx-auto">
            {t('portfolio.hero.desc')}
          </p>
        </div>

        <div className="mt-6 h-px bg-gradient-to-r from-primary/30 via-accent/40 to-transparent" />
      </div>
    </section>
  );
}
