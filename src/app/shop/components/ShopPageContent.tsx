'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLang } from '@/components/LanguageContext';

const products = [
  {
    id: 1,
    title: 'Eagle Relief — STL File',
    type: 'Digital Download',
    price: '$29',
    img: '/assets/images/shop_product_1.svg',
    alt: 'Eagle bas relief 3D model STL file preview render',
    badge: 'Best Seller',
    description: 'High-quality bas relief 3D model ready for CNC machining and casting.',
  },
  {
    id: 2,
    title: 'Heritage Coin Pack (5 designs)',
    type: '3D Model Bundle',
    price: '$49',
    img: '/assets/images/portfolio_3d_3.svg',
    alt: 'Heritage coin collection 3D model bundle',
    badge: 'Bundle',
    description: 'Five unique commemorative coin designs in production-ready format.',
  },
  {
    id: 3,
    title: 'Verdant Dreamscape — Print',
    type: 'Fine Art Print',
    price: '$75',
    img: '/assets/images/portfolio_ai_1.svg',
    alt: 'AI-generated verdant dreamscape artwork',
    badge: 'Limited',
    description: 'Museum-quality fine art print of AI-generated landscape.',
  },
  {
    id: 4,
    title: 'Medal Base Template',
    type: 'Digital Download',
    price: '$19',
    img: '/assets/images/portfolio_3d_2.svg',
    alt: 'Professional medal base template',
    badge: null,
    description: 'Professional starting template for custom medal designs.',
  },
  {
    id: 5,
    title: 'Roman Panel Relief',
    type: 'Digital Download',
    price: '$35',
    img: '/assets/images/portfolio_3d_1.svg',
    alt: 'Roman-style bas relief panel',
    badge: 'New',
    description: 'Classical Roman-style decorative panel relief model.',
  },
  {
    id: 6,
    title: 'AI Concept Pack',
    type: 'Digital Download',
    price: '$25',
    img: '/assets/images/portfolio_ai_2.svg',
    alt: 'AI-generated concept art pack',
    badge: null,
    description: 'Collection of AI-generated concept art for inspiration.',
  },
];

export default function ShopPageContent() {
  const { t } = useLang();
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

  return (
    <section className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">{t('shop.label')}</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold mt-4 leading-tight tracking-display">
            {t('shop.title')}
          </h1>
          <p className="text-foreground-muted mt-4 max-w-xl mx-auto leading-relaxed">
            {t('shop.sub')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-bg-card rounded-3xl overflow-hidden border border-primary/10 shadow-green-sm hover:shadow-green-md transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <AppImage
                  src={product.img}
                  alt={product.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/30 to-transparent" />
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-accent text-foreground">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6 space-y-3">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-foreground-subtle font-medium">
                    {product.type}
                  </p>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                    {product.title}
                  </h3>
                  <p className="text-sm text-foreground-muted mt-2">{product.description}</p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-primary/10">
                  <span className="font-display text-2xl font-semibold text-primary">
                    {product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="btn-primary text-sm py-2 px-4"
                  >
                    {t('shop.addCart')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart indicator */}
        {cart.length > 0 && (
          <div className="fixed bottom-6 right-6 z-50">
            <div className="bg-primary text-white px-6 py-3 rounded-full shadow-green-lg flex items-center gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span className="font-semibold">{cart.length} items</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
