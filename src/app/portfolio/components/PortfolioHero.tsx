'use client';
import React from 'react';
import { useLang } from '@/components/LanguageContext';

export default function PortfolioHero() {
  const { t } = useLang();

  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(168,201,87,0.1) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <span className="section-label block mb-4">Portfolio 2026</span>
          <h1 className="font-display leading-[0.88] tracking-display font-semibold" style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}>
            <span className="text-foreground">Craft &</span>{' '}
            <span className="italic text-gradient-animated">Intelligence</span>
          </h1>
          <p className="text-lg text-foreground-muted mt-6 max-w-xl leading-relaxed">
            12 years of 3D modeling — bas relief, medals, coins, and souvenirs — alongside an evolving AI content practice.
          </p>
        </div>

        {/* Divider line */}
        <div className="mt-16 h-px bg-gradient-to-r from-primary/30 via-accent/40 to-transparent" />
      </div>
    </section>
  );
}