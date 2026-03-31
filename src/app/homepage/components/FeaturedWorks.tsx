'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLang } from '@/components/LanguageContext';
// =============================================================================
// ИЗОБРАЖЕНИЯ - Локальные или сетевые (см. src/config/images.ts)
// =============================================================================
import { networkImages, localImages, USE_LOCAL_IMAGES } from '@/config/images';

const IMAGES = USE_LOCAL_IMAGES ? localImages.featured : networkImages.featured;

const featured = [
  {
    id: 1,
    title: 'Bronze Victory Relief',
    medium: '3D Bas Relief',
    year: '2026',
    img: IMAGES.bronzeVictory,
    alt: 'Bronze victory goddess bas relief with wings spread in classical style',
  },
  {
    id: 2,
    title: 'Cosmic Weave',
    medium: 'AI Generative',
    year: '2026',
    img: IMAGES.cosmicWeave,
    alt: 'AI-generated cosmic weave of green and gold energy strands',
  },
  {
    id: 3,
    title: 'Numismatic Heritage Set',
    medium: '3D Coins',
    year: '2025',
    img: IMAGES.numismaticHeritage,
    alt: 'Heritage coin set with detailed portrait reliefs in silver and gold',
  },
  {
    id: 4,
    title: 'Verdant Machine',
    medium: 'AI Image',
    year: '2025',
    img: IMAGES.verdantMachine,
    alt: 'AI-generated mechanical organism with green organic growth patterns',
  },
];

export default function FeaturedWorks() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef?.current?.querySelectorAll('.reveal, .reveal-left');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('active');
        }),
      { threshold: 0.08 }
    );
    els?.forEach((el) => obs?.observe(el));
    return () => obs?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="featured"
      className="pt-14 pb-28 bg-bg-dark relative overflow-hidden z-10"
    >
      {/* Dark section orb glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(61,122,79,0.15) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="reveal">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
              {t('featured.label')}
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-white mt-3 leading-tight tracking-display">
              {t('featured.title')}
            </h2>
          </div>
          <p className="text-foreground-subtle text-sm max-w-xs leading-relaxed reveal stagger-2">
            March 2026 — selected works across both disciplines
          </p>
        </div>

        {/* Masonry 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            {[featured?.[0], featured?.[2]]?.map((item, idx) => (
              <div
                key={item?.id}
                className={`reveal stagger-${idx + 1} group relative overflow-hidden rounded-3xl border border-white/8 cursor-pointer`}
                style={{ marginTop: idx === 1 ? '40px' : '0' }}
              >
                <div className={`overflow-hidden ${idx === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
                  <AppImage
                    src={item?.img}
                    alt={item?.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-bg-dark/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-widest font-medium text-accent">
                      {item?.medium}
                    </span>
                    <span className="text-[10px] text-white/40">{item?.year}</span>
                  </div>
                  <p className="font-display text-xl font-semibold text-white">{item?.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Col 2 – offset */}
          <div className="flex flex-col gap-6 masonry-col-offset">
            {[featured?.[1], featured?.[3]]?.map((item, idx) => (
              <div
                key={item?.id}
                className={`reveal stagger-${idx + 2} group relative overflow-hidden rounded-3xl border border-white/8 cursor-pointer`}
              >
                <div className={`overflow-hidden ${idx === 0 ? 'aspect-[4/3]' : 'aspect-[4/5]'}`}>
                  <AppImage
                    src={item?.img}
                    alt={item?.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-bg-dark/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-widest font-medium text-accent">
                      {item?.medium}
                    </span>
                    <span className="text-[10px] text-white/40">{item?.year}</span>
                  </div>
                  <p className="font-display text-xl font-semibold text-white">{item?.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
