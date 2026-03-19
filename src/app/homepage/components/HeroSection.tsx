'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { useLang } from '@/components/LanguageContext';

const CAROUSEL_SLIDES = [
{
  id: 'ai-content',
  src: 'https://img.rocket.new/generatedImages/rocket_gen_img_106584dfb-1764689812608.png',
  alt: 'AI-generated surreal landscape with green tones and organic shapes',
  tag: 'AI Content',
  title: 'Generative Art Series',
  subtitle: 'Neural Landscapes Vol.3'
},
{
  id: 'commission',
  src: "https://images.unsplash.com/photo-1691317836447-2710cac29f1e",
  alt: 'Gold commemorative medal with intricate bas relief design',
  tag: 'Latest Commission',
  title: 'Silver Relief Panel',
  subtitle: 'Custom Order · In Progress',
  pulse: true
},
{
  id: '3d-models',
  src: 'https://img.rocket.new/generatedImages/rocket_gen_img_16e57863a-1768351656360.png',
  alt: 'Detailed 3D model of a commemorative coin with fine engraving',
  tag: '3D Models',
  title: 'Bas Relief Collection',
  subtitle: '200+ Models Available'
}];


export default function HeroSection() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const section = sectionRef?.current;
    if (!section) return;
    const onScroll = () => {
      const scrollY = window.scrollY;
      const imgs = section?.querySelectorAll<HTMLElement>('.parallax-img');
      imgs?.forEach((img, i) => {
        const speed = i === 0 ? 0.12 : i === 1 ? 0.08 : 0.05;
        img.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goToSlide = (idx: number) => {
    setActiveSlide(idx);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 3500);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      
      {/* Radial glow behind hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 50%, rgba(168,201,87,0.22) 0%, rgba(61,122,79,0.12) 40%, transparent 70%)'
        }}
        aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* LEFT: Typography */}
        <div className="lg:col-span-6 xl:col-span-5 space-y-8">
          <div className="reveal active">
            <span className="section-label">{t('hero.label')}</span>
          </div>

          <h1 className="reveal active stagger-1 font-display leading-[0.88] tracking-display" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            {t('hero.title1')}{' '}
            <br />
            <span className="font-light italic text-primary">{t('hero.title2')}</span>
            <br />
            <span className="text-gradient-animated">{t('hero.title3')}</span>
          </h1>

          <p className="reveal active stagger-2 text-base text-foreground-muted leading-relaxed max-w-md">
            {t('hero.sub')}
          </p>

          <div className="reveal active stagger-3 flex flex-wrap gap-4">
            <Link href="/portfolio" className="btn-primary">
              {t('hero.cta1')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/homepage#shop" className="btn-outline">
              {t('hero.cta2')}
            </Link>
          </div>

          {/* Stats row */}
          <div className="reveal active stagger-4 flex gap-10 pt-6 border-t border-primary/10">
            {[
            { num: '200+', label: '3D Models' },
            { num: '50+', label: 'AI Projects' },
            { num: '12', label: 'Years Active' }]?.
            map((s) =>
            <div key={s?.label}>
                <p className="font-display text-3xl font-semibold text-foreground">{s?.num}</p>
                <p className="text-xs text-foreground-subtle uppercase tracking-widest mt-0.5">{s?.label}</p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Carousel */}
        <div className="lg:col-span-6 xl:col-span-7 relative h-[560px] hidden md:block">
          <div className="hero-carousel parallax-img">
            {CAROUSEL_SLIDES.map((slide, idx) =>
            <div
              key={slide.id}
              className={`hero-carousel-slide rounded-4xl overflow-hidden shadow-green-lg border border-primary/15 ${idx === activeSlide ? 'active' : ''}`}>
              
                <AppImage
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={idx === 0} />
              
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 via-transparent to-transparent" />
                {/* Tag */}
                <div className="absolute top-5 left-5">
                  <span className="tag-pill">{slide.tag}</span>
                </div>
                {/* Bottom info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display text-xl font-semibold text-white leading-tight">{slide.title}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    {slide.pulse && <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />}
                    <span className="text-xs text-accent font-medium">{slide.subtitle}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Dot navigation */}
            <div className="hero-carousel-dots">
              {CAROUSEL_SLIDES.map((_, idx) =>
              <button
                key={idx}
                className={`hero-carousel-dot ${idx === activeSlide ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`} />

              )}
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-60">
        <span className="text-[10px] uppercase tracking-widest text-foreground-subtle">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>);

}