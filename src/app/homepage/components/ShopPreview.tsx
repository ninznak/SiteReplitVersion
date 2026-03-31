'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLang } from '@/components/LanguageContext';
// =============================================================================
// ИЗОБРАЖЕНИЯ - Локальные или сетевые (см. src/config/images.ts)
// =============================================================================
import { networkImages, localImages, USE_LOCAL_IMAGES } from '@/config/images';

const IMAGES = USE_LOCAL_IMAGES ? localImages.shop : networkImages.shop;

const products = [
  {
    id: 1,
    title: 'Eagle Relief — STL File',
    type: 'Digital Download',
    price: '$29',
    img: IMAGES.eagleRelief,
    alt: 'Eagle bas relief3D model STL file preview render',
    badge: 'Best Seller',
  },
  {
    id: 2,
    title: 'Heritage Coin Pack (5 designs)',
    type: '3D Model Bundle',
    price: '$49',
    img: IMAGES.heritageCoin,
    alt: 'Heritage coin collection3D model bundle with five unique designs',
    badge: 'Bundle',
  },
  {
    id: 3,
    title: 'Verdant Dreamscape — Print',
    type: 'Fine Art Print',
    price: '$75',
    img: IMAGES.verdantDreamscape,
    alt: 'AI-generated verdant dreamscape artwork available as fine art print',
    badge: 'Limited',
  },
  {
    id: 4,
    title: 'Medal Base Template',
    type: 'Digital Download',
    price: '$19',
    img: IMAGES.medalTemplate,
    alt: 'Professional medal base template3D model for custom medal design',
    badge: null,
  },
];

export default function ShopPreview() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef?.current?.querySelectorAll('.reveal');
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
    <section ref={sectionRef} id="shop" className="pt-14 pb-28 bg-white/40 relative z-10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(168,201,87,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="reveal">
            <span className="section-label">{t('shop.label')}</span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold mt-3 leading-tight tracking-display">
              {t('shop.title')}
            </h2>
            <p className="text-foreground-muted mt-3 max-w-md leading-relaxed">{t('shop.sub')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products?.map((product, idx) => (
            <div
              key={product?.id}
              className={`reveal stagger-${idx + 1} group portfolio-card bg-bg-card rounded-3xl overflow-hidden border border-primary/10 shadow-green-sm`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <AppImage src={product?.img} alt={product?.alt} fill className="object-cover" />

                <div className="card-overlay absolute inset-0 bg-gradient-to-t from-bg-dark/50 to-transparent" />
                {product?.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-accent text-foreground">
                      {product?.badge}
                    </span>
                  </div>
                )}
                {/* Quick add overlay */}
                <div className="card-overlay absolute inset-x-0 bottom-0 p-4 flex justify-end">
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-accent transition-colors">
                    <svg
                      width="16"
                      height="16"
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

              {/* Info */}
              <div className="p-5 space-y-3">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-foreground-subtle font-medium">
                    {product?.type}
                  </p>
                  <h4 className="font-display text-base font-semibold text-foreground mt-1 leading-snug">
                    {product?.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-semibold text-primary">
                    {product?.price}
                  </span>
                  <button className="btn-primary text-xs py-2 px-4">{t('shop.addCart')}</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a href="/shop" className="btn-outline inline-flex">
            {t('shop.viewAll')}
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
    </section>
  );
}
