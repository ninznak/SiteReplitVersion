'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLang } from '@/components/LanguageContext';
// =============================================================================
// ИЗОБРАЖЕНИЯ - Локальные или сетевые (см. src/config/images.ts)
// =============================================================================
import { networkImages, localImages, USE_LOCAL_IMAGES } from '@/config/images';

const IMAGES = USE_LOCAL_IMAGES ? localImages.news : networkImages.news;

const articles = [
  {
    id: 1,
    category: 'Technique',
    title: 'Bas Relief Depth: Achieving Sub-Millimeter Precision in ZBrush',
    excerpt:
      'How to calibrate your ZBrush brushes and subdivision levels to produce production-ready bas relief geometry for casting.',
    date: 'March14,2026',
    readTime: '8 min read',
    img: IMAGES.basRelief,
    alt: 'ZBrush interface showing detailed bas relief sculpting with wireframe overlay',
    featured: true,
  },
  {
    id: 2,
    category: 'AI',
    title: 'Midjourney v7 for Numismatic Concept Art',
    excerpt:
      'A workflow for generating coin and medal concept sketches with AI before committing to3D production.',
    date: 'March8,2026',
    readTime: '6 min read',
    img: IMAGES.midjourney,
    alt: 'AI-generated coin concept art showing multiple design iterations',
    featured: false,
  },
  {
    id: 3,
    category: 'Industry',
    title: 'The2026 Commemorative Medal Market: Trends & Commissions',
    excerpt:
      'An overview of the current demand for custom medals, what clients want, and how to price your work.',
    date: 'Feb28,2026',
    readTime: '5 min read',
    img: IMAGES.medalsVelvet,
    alt: 'Collection of commemorative medals displayed on dark velvet background',
    featured: false,
  },
  {
    id: 4,
    category: 'AI',
    title: 'Sora & Kling: AI Video for3D Model Presentations',
    excerpt:
      'Using AI video tools to create cinematic turntable animations and contextual presentations for3D models.',
    date: 'Feb20,2026',
    readTime: '7 min read',
    img: IMAGES.aiVideo,
    alt: 'AI video generation interface showing3D model animation frames',
    featured: false,
  },
];

export default function NewsArticles() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef?.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
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

  const featured = articles?.[0];
  const secondary = articles?.slice(1);

  return (
    <section ref={sectionRef} id="news" className="pt-14 pb-28 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="reveal">
            <span className="section-label">{t('news.label')}</span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold mt-3 leading-tight tracking-display">
              {t('news.title')}
            </h2>
          </div>
          <p className="text-foreground-muted text-sm max-w-xs leading-relaxed reveal stagger-2">
            {t('news.sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured big article */}
          <div className="lg:col-span-7 reveal-left group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl bg-bg-card border border-primary/10 shadow-green-sm h-full">
              <div className="aspect-[16/10] overflow-hidden">
                <AppImage
                  src={featured?.img}
                  alt={featured?.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-bg-dark/10 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="tag-pill">{featured?.category}</span>
                  <span className="text-[10px] text-white/60">{featured?.readTime}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-white leading-snug mb-3">
                  {featured?.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-5 max-w-lg">
                  {featured?.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-white/40 uppercase tracking-widest">
                    {featured?.date}
                  </span>
                  <button className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors">
                    {t('news.readMore')}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary articles */}
          <div className="lg:col-span-5 flex flex-col gap-5 reveal-right">
            {secondary?.map((article, idx) => (
              <div
                key={article?.id}
                className={`reveal stagger-${idx + 1} group cursor-pointer flex gap-5 p-5 rounded-2xl bg-bg-card border border-primary/10 hover:border-primary/30 hover:shadow-green-sm transition-all duration-300`}
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <AppImage
                    src={article?.img}
                    alt={article?.alt}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-center gap-1.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-dark">
                      {article?.category}
                    </span>
                    <span className="text-[10px] text-foreground-subtle">·</span>
                    <span className="text-[10px] text-foreground-subtle">{article?.readTime}</span>
                  </div>
                  <h4 className="font-display text-base font-semibold text-foreground leading-snug line-clamp-2">
                    {article?.title}
                  </h4>
                  <span className="text-[11px] text-foreground-subtle">{article?.date}</span>
                </div>
              </div>
            ))}

            <a href="/news" className="btn-outline w-full justify-center mt-2 inline-flex">
              {t('news.viewAll')}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
