'use client';
import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLang } from '@/components/LanguageContext';

type Filter3D = 'all' | 'basRelief' | 'medals' | 'coins' | 'souvenirs';

const works3D = [
{
  id: 1,
  title: 'Roman Eagle Panel',
  category: 'basRelief',
  year: '2026',
  size: 'large',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_176da824a-1773829116005.png",
  alt: 'Roman eagle bas relief panel with detailed feather textures and imperial iconography',
  dims: '320mm × 240mm'
},
{
  id: 2,
  title: 'Olympic Victory Medal',
  category: 'medals',
  year: '2026',
  size: 'small',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1937da5b1-1767454688495.png",
  alt: 'Olympic victory medal with running athlete relief and laurel wreath border',
  dims: '80mm diameter'
},
{
  id: 3,
  title: 'Heritage Taler 2026',
  category: 'coins',
  year: '2026',
  size: 'small',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1b67cee1d-1773829116345.png",
  alt: 'Heritage commemorative taler coin with portrait relief and ornamental border',
  dims: '40mm diameter'
},
{
  id: 4,
  title: 'Cathedral Souvenir Plate',
  category: 'souvenirs',
  year: '2025',
  size: 'medium',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_12b710358-1773829118650.png",
  alt: 'Cathedral souvenir decorative plate with architectural relief and gilded border',
  dims: '150mm diameter'
},
{
  id: 5,
  title: 'Victory Goddess Relief',
  category: 'basRelief',
  year: '2025',
  size: 'medium',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_136452186-1773829118876.png",
  alt: 'Victory goddess Nike bas relief in classical Greek style with flowing drapery',
  dims: '280mm × 200mm'
},
{
  id: 6,
  title: 'Military Honor Medal',
  category: 'medals',
  year: '2025',
  size: 'small',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1e25d4069-1766401911649.png",
  alt: 'Military honor medal with eagle and star relief in bronze finish',
  dims: '70mm diameter'
},
{
  id: 7,
  title: 'Silver Crown Coin',
  category: 'coins',
  year: '2025',
  size: 'small',
  img: "https://images.unsplash.com/photo-1642025613528-84dd7dbe1ee6",
  alt: 'Silver crown commemorative coin with royal portrait and heraldic reverse',
  dims: '38mm diameter'
},
{
  id: 8,
  title: 'City Skyline Magnet Set',
  category: 'souvenirs',
  year: '2024',
  size: 'small',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_14e4024c2-1773829117450.png",
  alt: 'City skyline souvenir magnet set with miniature architectural relief details',
  dims: '60mm × 40mm each'
}];


const filterKeys: {key: Filter3D;label: string;}[] = [
{ key: 'all', label: 'portfolio.filter.all' },
{ key: 'basRelief', label: 'portfolio.filter.basRelief' },
{ key: 'medals', label: 'portfolio.filter.medals' },
{ key: 'coins', label: 'portfolio.filter.coins' },
{ key: 'souvenirs', label: 'portfolio.filter.souvenirs' }];


export default function Portfolio3DSection() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Filter3D>('all');
  const [selected, setSelected] = useState<(typeof works3D)[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = filter === 'all' ? works3D : works3D.filter((w) => w.category === filter);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {if (e.isIntersecting) e.target.classList.add('active');}),
      { threshold: 0.05 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="3d" className="pt-8 pb-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-14 reveal">
          <div className="lg:col-span-7">
            <span className="section-label">{t('portfolio.3d.label')}</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3 leading-tight tracking-display">
              {t('portfolio.3d.title')}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-foreground-muted leading-relaxed">{t('portfolio.3d.sub')}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10 reveal stagger-2">
          {filterKeys.map((f) =>
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
            filter === f.key ?
            'bg-primary text-white shadow-green-sm' :
            'bg-bg-card border border-primary/20 text-foreground-muted hover:border-primary/40 hover:text-foreground'}`
            }>
            
              {t(f.label)}
            </button>
          )}
        </div>

        {/* Grid — varied sizes */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((work, idx) =>
          <div
            key={work.id}
            onClick={() => setSelected(work)}
            className={`reveal stagger-${idx % 5 + 1} break-inside-avoid portfolio-card group relative overflow-hidden rounded-3xl bg-bg-card border border-primary/10 shadow-green-sm cursor-pointer`}>
            
              <div className={`overflow-hidden ${work.size === 'large' ? 'aspect-[3/4]' : work.size === 'medium' ? 'aspect-square' : 'aspect-[4/3]'}`}>
                <AppImage
                src={work.img}
                alt={work.alt}
                fill
                className="object-cover" />
              
                <div className="card-overlay absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
                <div className="card-overlay absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="tag-pill text-[10px]">{work.category}</span>
                    <span className="text-[10px] text-white/50">{work.year}</span>
                  </div>
                  <p className="font-display text-lg font-semibold text-white">{work.title}</p>
                  <p className="text-xs text-white/60 mt-1">{work.dims}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox modal */}
      {selected &&
      <div
        className="fixed inset-0 z-50 bg-bg-dark/90 backdrop-blur-xl flex items-center justify-center p-6"
        onClick={() => setSelected(null)}>
        
          <div
          className="relative max-w-3xl w-full glass-card-dark rounded-4xl overflow-hidden shadow-green-lg"
          onClick={(e) => e.stopPropagation()}>
          
            <div className="aspect-[4/3] relative overflow-hidden">
              <AppImage
              src={selected.img}
              alt={selected.alt}
              fill
              className="object-cover"
              priority />
            
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-3">
                <span className="tag-pill">{selected.category}</span>
                <span className="text-sm text-foreground-subtle">{selected.year}</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-white">{selected.title}</h3>
              <p className="text-sm text-foreground-subtle mt-2">{selected.dims}</p>
            </div>
            <button
            onClick={() => setSelected(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close">
            
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>
        </div>
      }
    </section>);

}