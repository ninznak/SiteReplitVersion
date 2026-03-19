'use client';
import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLang } from '@/components/LanguageContext';

const articles = [
  {
    id: 1,
    category: 'Technique',
    title: 'Bas Relief Depth: Achieving Sub-Millimeter Precision in ZBrush',
    excerpt: 'How to calibrate your ZBrush brushes and subdivision levels to produce production-ready bas relief geometry for casting.',
    date: 'March 14, 2026',
    readTime: '8 min read',
    img: '/assets/images/news_article.svg',
    alt: 'ZBrush interface showing detailed bas relief sculpting',
    featured: true,
  },
  {
    id: 2,
    category: 'AI',
    title: 'Midjourney v7 for Numismatic Concept Art',
    excerpt: 'A workflow for generating coin and medal concept sketches with AI before committing to 3D production.',
    date: 'March 8, 2026',
    readTime: '6 min read',
    img: '/assets/images/portfolio_ai_1.svg',
    alt: 'AI-generated coin concept art',
    featured: false,
  },
  {
    id: 3,
    category: 'Industry',
    title: 'The 2026 Commemorative Medal Market: Trends & Commissions',
    excerpt: 'An overview of the current demand for custom medals, what clients want, and how to price your work.',
    date: 'Feb 28, 2026',
    readTime: '5 min read',
    img: '/assets/images/portfolio_3d_2.svg',
    alt: 'Collection of commemorative medals',
    featured: false,
  },
  {
    id: 4,
    category: 'AI',
    title: 'Sora & Kling: AI Video for 3D Model Presentations',
    excerpt: 'Using AI video tools to create cinematic turntable animations and contextual presentations for 3D models.',
    date: 'Feb 20, 2026',
    readTime: '7 min read',
    img: '/assets/images/portfolio_ai_2.svg',
    alt: 'AI video generation for 3D models',
    featured: false,
  },
  {
    id: 5,
    category: 'Tutorial',
    title: 'From Sketch to Production: A Complete Medal Design Workflow',
    excerpt: 'Step-by-step guide from initial concept sketch through 3D modeling to final production files.',
    date: 'Feb 15, 2026',
    readTime: '12 min read',
    img: '/assets/images/portfolio_3d_1.svg',
    alt: 'Medal design workflow tutorial',
    featured: false,
  },
  {
    id: 6,
    category: 'Business',
    title: 'Pricing Your 3D Work: A Practical Guide for Artists',
    excerpt: 'How to calculate fair prices for your 3D modeling services, including time estimation and material costs.',
    date: 'Feb 10, 2026',
    readTime: '9 min read',
    img: '/assets/images/news_article.svg',
    alt: 'Pricing guide for 3D artists',
    featured: false,
  },
];

export default function NewsPageContent() {
  const { t } = useLang();
  const featured = articles.find((a) => a.featured);
  const regular = articles.filter((a) => !a.featured);

  return (
    <section className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">{t('news.label')}</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold mt-4 leading-tight tracking-display">
            {t('news.title')}
          </h1>
          <p className="text-foreground-muted mt-4 max-w-xl mx-auto leading-relaxed">
            {t('news.sub')}
          </p>
        </div>

        {/* Featured Article */}
        {featured && (
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-3xl bg-bg-card border border-primary/10 shadow-green-sm cursor-pointer group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                  <AppImage
                    src={featured.img}
                    alt={featured.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="tag-pill">{featured.category}</span>
                    <span className="text-[10px] text-foreground-subtle">{featured.readTime}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground leading-snug mb-4">
                    {featured.title}
                  </h2>
                  <p className="text-foreground-muted leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-foreground-subtle uppercase tracking-widest">{featured.date}</span>
                    <button className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                      {t('news.readMore')}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regular.map((article) => (
            <div
              key={article.id}
              className="group bg-bg-card rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 hover:shadow-green-sm transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <AppImage
                  src={article.img}
                  alt={article.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-dark">{article.category}</span>
                  <span className="text-[10px] text-foreground-subtle">·</span>
                  <span className="text-[10px] text-foreground-subtle">{article.readTime}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground leading-snug mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-foreground-muted line-clamp-2">{article.excerpt}</p>
                <span className="text-[11px] text-foreground-subtle block mt-4">{article.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
