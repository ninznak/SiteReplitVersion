'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { useLang } from '@/components/LanguageContext';

const works3D = [
  {
    id: 1,
    title: 'Roman Eagle Relief',
    category: 'Bas Relief',
    img: 'https://images.unsplash.com/photo-1681206660391-b3677d0a0d12',
    alt: 'Ancient Roman eagle bas relief sculpture with detailed feather texture',
    size: 'large',
  },
  {
    id: 2,
    title: 'Olympic Medal 2026',
    category: 'Medal',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_1262420c6-1772592735957.png',
    alt: 'Gold Olympic commemorative medal with athletic figure in relief',
    size: 'small',
  },
  {
    id: 3,
    title: 'Heritage Coin Series',
    category: 'Coin',
    img: 'https://images.unsplash.com/photo-1666706129826-e351b5ec8688',
    alt: 'Series of silver commemorative coins with portrait relief designs',
    size: 'small',
  },
  {
    id: 4,
    title: 'City Souvenir Plate',
    category: 'Souvenir',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_16e11bde9-1773829119788.png',
    alt: 'Decorative souvenir plate with city skyline bas relief in bronze',
    size: 'medium',
  },
];

const worksAI = [
  {
    id: 5,
    title: 'Verdant Dreamscape',
    category: 'AI Image',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_15b94d666-1772885546195.png',
    alt: 'AI-generated surreal green forest dreamscape with ethereal lighting',
    size: 'large',
  },
  {
    id: 6,
    title: 'Neural Architecture',
    category: 'AI Image',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_19f8fe7fc-1772547120162.png',
    alt: 'AI-generated abstract neural network architecture visualization',
    size: 'small',
  },
  {
    id: 7,
    title: 'Biomorphic Flow',
    category: 'AI Video',
    img: 'https://images.unsplash.com/photo-1727973261131-51e0662bfae5',
    alt: 'AI-generated biomorphic flowing shapes in green and gold palette',
    size: 'small',
  },
  {
    id: 8,
    title: 'Ancient Future',
    category: 'AI Image',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_137a2edde-1773829116626.png',
    alt: 'AI-generated fusion of ancient sculpture aesthetics with futuristic design',
    size: 'medium',
  },
];

export default function PortfolioPreview() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<'3d' | 'ai'>('3d');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef?.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('active');
        }),
      { threshold: 0.1 }
    );
    els?.forEach((el) => obs?.observe(el));
    return () => obs?.disconnect();
  }, []);

  const works = activeTab === '3d' ? works3D : worksAI;

  return (
    <section ref={sectionRef} id="portfolio" className="pt-6 pb-28 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 reveal">
            <span className="section-label">{t('portfolio.label')}</span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold leading-tight tracking-display">
              {t('portfolio.title')}
            </h2>
            <p className="text-base text-foreground-muted max-w-lg leading-relaxed">
              {t('portfolio.sub')}
            </p>
          </div>

          {/* Tabs */}
          <div className="reveal stagger-2 flex gap-2 p-1 bg-white/80 border border-primary/15 rounded-xl backdrop-blur-sm self-start md:self-auto">
            <button
              onClick={() => setActiveTab('3d')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === '3d'
                  ? 'bg-primary text-white shadow-green-sm'
                  : 'text-foreground-muted hover:text-foreground'
              }`}
            >
              {t('portfolio.tab3d')}
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'ai'
                  ? 'bg-primary text-white shadow-green-sm'
                  : 'text-foreground-muted hover:text-foreground'
              }`}
            >
              {t('portfolio.tabAI')}
            </button>
          </div>
        </div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 reveal stagger-2">
          {/* Large card */}
          <div className="md:col-span-7 portfolio-card group relative overflow-hidden rounded-3xl bg-bg-card border border-primary/10 shadow-green-sm cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden">
              <AppImage src={works?.[0]?.img} alt={works?.[0]?.alt} fill className="object-cover" />

              <div className="card-overlay absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
              <div className="card-overlay absolute bottom-0 left-0 right-0 p-8">
                <span className="tag-pill mb-3 block w-fit">{works?.[0]?.category}</span>
                <p className="font-display text-2xl font-semibold text-white">
                  {works?.[0]?.title}
                </p>
              </div>
            </div>
          </div>

          {/* Right column: 2 stacked */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {[works?.[1], works?.[2]]?.map((w) => (
              <div
                key={w?.id}
                className="portfolio-card group relative overflow-hidden rounded-3xl bg-bg-card border border-primary/10 shadow-green-sm cursor-pointer flex-1"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <AppImage src={w?.img} alt={w?.alt} fill className="object-cover" />

                  <div className="card-overlay absolute inset-0 bg-gradient-to-t from-bg-dark/70 via-transparent to-transparent" />
                  <div className="card-overlay absolute bottom-0 left-0 right-0 p-5">
                    <span className="tag-pill mb-2 block w-fit">{w?.category}</span>
                    <p className="font-display text-lg font-semibold text-white">{w?.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom wide card */}
          <div className="md:col-span-12 portfolio-card group relative overflow-hidden rounded-3xl bg-bg-card border border-primary/10 shadow-green-sm cursor-pointer">
            <div className="aspect-[21/7] overflow-hidden">
              <AppImage src={works?.[3]?.img} alt={works?.[3]?.alt} fill className="object-cover" />

              <div className="card-overlay absolute inset-0 bg-gradient-to-t from-bg-dark/70 via-transparent to-transparent" />
              <div className="card-overlay absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                <div>
                  <span className="tag-pill mb-3 block w-fit">{works?.[3]?.category}</span>
                  <p className="font-display text-2xl font-semibold text-white">
                    {works?.[3]?.title}
                  </p>
                </div>
                <Link href="/portfolio" className="btn-accent text-sm">
                  {t('portfolio.viewAll')}
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
