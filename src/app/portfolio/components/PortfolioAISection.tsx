'use client';
import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLang } from '@/components/LanguageContext';

type FilterAI = 'all' | 'images' | 'video';

const worksAI = [
{
  id: 1,
  title: 'Verdant Dreamscape',
  category: 'images',
  year: '2026',
  size: 'large',
  model: 'Midjourney v7',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1f1654b46-1770360805322.png",
  alt: 'AI-generated verdant dreamscape with towering organic green structures and ethereal mist'
},
{
  id: 2,
  title: 'Neural Architecture',
  category: 'images',
  year: '2026',
  size: 'small',
  model: 'Stable Diffusion XL',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_13f77e0fe-1772815067249.png",
  alt: 'AI-generated abstract neural network architecture with green data flow visualization'
},
{
  id: 3,
  title: 'Biomorphic Flow',
  category: 'video',
  year: '2026',
  size: 'medium',
  model: 'Sora',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_14da9bc3f-1773829114254.png",
  alt: 'AI-generated biomorphic flowing organism animation still frame with green luminescence'
},
{
  id: 4,
  title: 'Ancient Future',
  category: 'images',
  year: '2025',
  size: 'small',
  model: 'Midjourney v6',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_14735af4e-1773829120209.png",
  alt: 'AI-generated fusion of ancient Hellenistic sculpture with futuristic chrome and neon'
},
{
  id: 5,
  title: 'Coin Concept Series',
  category: 'images',
  year: '2025',
  size: 'small',
  model: 'DALL-E 3',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_120aab381-1773829115265.png",
  alt: 'AI-generated coin design concept series showing multiple numismatic style variations'
},
{
  id: 6,
  title: 'Relief Meditation',
  category: 'video',
  year: '2025',
  size: 'large',
  model: 'Kling AI',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_18acfea93-1773829115688.png",
  alt: 'AI-generated meditative video loop of bas relief surface transforming and flowing'
}];


const filterKeys: {key: FilterAI;label: string;}[] = [
{ key: 'all', label: 'portfolio.filter.all' },
{ key: 'images', label: 'portfolio.filter.images' },
{ key: 'video', label: 'portfolio.filter.video' }];


export default function PortfolioAISection() {
  const { t } = useLang();
  const [filter, setFilter] = useState<FilterAI>('all');
  const [selected, setSelected] = useState<(typeof worksAI)[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = filter === 'all' ? worksAI : worksAI.filter((w) => w.category === filter);

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
    <section ref={sectionRef} id="ai" className="py-20 bg-bg-dark relative overflow-hidden z-10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 60% 40%, rgba(168,201,87,0.08) 0%, transparent 70%)' }}
        aria-hidden="true" />
      

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-14 reveal">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent block">{t('portfolio.ai.label')}</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mt-3 leading-tight tracking-display">
              {t('portfolio.ai.title')}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-foreground-subtle leading-relaxed">{t('portfolio.ai.sub')}</p>
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
            'bg-accent text-foreground shadow-accent-sm' :
            'bg-white/10 border border-white/15 text-foreground-subtle hover:border-white/30 hover:text-white'}`
            }>
            
              {t(f.label)}
            </button>
          )}
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {filtered.map((work, idx) => {
            const colSpan =
            work.size === 'large' ? 'md:col-span-7' :
            work.size === 'medium' ? 'md:col-span-5' : 'md:col-span-4';

            return (
              <div
                key={work.id}
                onClick={() => setSelected(work)}
                className={`${colSpan} reveal stagger-${idx % 4 + 1} group portfolio-card relative overflow-hidden rounded-3xl border border-white/10 cursor-pointer`}>
                
                <div className={`overflow-hidden ${work.size === 'large' ? 'aspect-[4/3]' : work.size === 'medium' ? 'aspect-square' : 'aspect-[3/4]'}`}>
                  <AppImage
                    src={work.img}
                    alt={work.alt}
                    fill
                    className="object-cover" />
                  
                  <div className="card-overlay absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-bg-dark/20 to-transparent" />

                  {/* Video badge */}
                  {work.category === 'video' &&
                  <div className="absolute top-5 left-5 w-10 h-10 rounded-full bg-accent/90 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
                    </div>
                  }

                  <div className="card-overlay absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="tag-pill text-[10px]">{work.model}</span>
                      <span className="text-[10px] text-white/50">{work.year}</span>
                    </div>
                    <p className="font-display text-lg font-semibold text-white">{work.title}</p>
                  </div>
                </div>
              </div>);

          })}
        </div>
      </div>

      {/* Lightbox */}
      {selected &&
      <div
        className="fixed inset-0 z-50 bg-bg-dark/95 backdrop-blur-xl flex items-center justify-center p-6"
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
            
              {selected.category === 'video' &&
            <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center shadow-accent-md">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
                  </div>
                </div>
            }
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-3">
                <span className="tag-pill">{selected.model}</span>
                <span className="text-sm text-foreground-subtle">{selected.year}</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-white">{selected.title}</h3>
              <p className="text-sm text-foreground-subtle mt-1 capitalize">{selected.category}</p>
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