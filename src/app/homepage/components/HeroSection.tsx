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
  tagKey: 'carousel.ai.tag',
  titleKey: 'carousel.ai.title',
  subtitleKey: 'carousel.ai.subtitle',
  href: '/portfolio#ai',
},
{
  id: 'commission',
  src: "https://images.unsplash.com/photo-1691317836447-2710cac29f1e",
  alt: 'Gold commemorative medal with intricate bas relief design',
  tagKey: 'carousel.commission.tag',
  titleKey: 'carousel.commission.title',
  subtitleKey: 'carousel.commission.subtitle',
  pulse: true,
  href: '/homepage#featured',
},
{
  id: '3d-models',
  src: 'https://img.rocket.new/generatedImages/rocket_gen_img_16e57863a-1768351656360.png',
  alt: 'Detailed 3D model of a commemorative coin with fine engraving',
  tagKey: 'carousel.3d.tag',
  titleKey: 'carousel.3d.title',
  subtitleKey: 'carousel.3d.subtitle',
  href: '/portfolio#3d',
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

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 10500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goToSlide = (idx: number) => {
    setActiveSlide(idx);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 10500);
  };

  const CARD_W = 307;
  const CARD_H = 250;
  const total = CAROUSEL_SLIDES.length;

  // Fixed positions for each stack slot (0=front/active, 1=middle, 2=back)
  const SLOTS = [
    { x: 72,  y: 118, rotate: -2,   z: 3 },
    { x: 157, y: 0,   rotate: 4,    z: 2 },
    { x: 0,   y: 6,   rotate: -5,   z: 1 },
  ];
  const CONTAINER_W = CARD_W + 157;
  const CONTAINER_H = CARD_H + 118;

  return (
    <section
      ref={sectionRef}
      className="relative flex items-start pb-36 overflow-hidden pt-[120px]">
      
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 50%, rgba(168,201,87,0.22) 0%, rgba(61,122,79,0.12) 40%, transparent 70%)'
        }}
        aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-10 items-start relative z-10">
        {/* LEFT: Typography */}
        <div className="lg:col-span-6 xl:col-span-6 space-y-8 text-center lg:text-left pr-4">
          <div className="reveal active">
            <span className="section-label">{t('hero.label')}</span>
          </div>

          <h1 className="reveal active stagger-1 font-display font-bold leading-[0.88] tracking-display" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            {t('hero.title1')}{' '}
            <br />
            <span className="italic text-gradient-animated" style={{ paddingRight: '0.2em' }}>{t('hero.title2')}</span>
            <br />
            <span className="italic text-gradient-animated" style={{ paddingRight: '0.2em' }}>{t('hero.title3')}</span>
          </h1>

          <p className="reveal active stagger-2 text-base text-foreground-muted leading-relaxed max-w-md mx-auto lg:mx-0">
            {t('hero.sub')}
          </p>

          <div className="reveal active stagger-3 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="/portfolio" className="btn-primary">
              {t('hero.cta1')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/homepage#shop" className="btn-outline">
              {t('hero.cta2')}
            </Link>
          </div>

          <div className="reveal active stagger-4 flex gap-10 pt-6 border-t border-primary/10 justify-center lg:justify-start">
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

        {/* RIGHT: Scattered Card Deck */}
        <div className="lg:col-span-6 xl:col-span-6 hidden md:flex items-center justify-center parallax-img pt-16">
          <div
            className="relative"
            style={{ width: CONTAINER_W, height: CONTAINER_H }}>
            {CAROUSEL_SLIDES.map((slide, idx) => {
              const stackPos = (idx - activeSlide + total) % total;
              const slot = SLOTS[stackPos];

              return (
                <div
                  key={slide.id}
                  onClick={() => stackPos !== 0 && goToSlide(idx)}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: CARD_W,
                    height: CARD_H,
                    transform: `translate(${slot.x}px, ${slot.y}px) rotate(${slot.rotate}deg)`,
                    zIndex: slot.z,
                    transition: 'transform 3s cubic-bezier(0.34, 1.15, 0.64, 1)',
                    cursor: stackPos !== 0 ? 'pointer' : 'default',
                    borderRadius: '1.25rem',
                    overflow: 'hidden',
                    boxShadow: '0 8px 30px rgba(13, 31, 18, 0.5)',
                  }}
                  className="shadow-green-lg border border-primary/15">

                  <AppImage
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={idx === 0} />

                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="tag-pill text-xs">{t(slide.tagKey)}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <Link
                      href={slide.href}
                      onClick={(e) => e.stopPropagation()}
                      className="group block hover:opacity-80 transition-opacity">
                      <p className="font-display text-sm font-semibold text-white leading-tight group-hover:underline underline-offset-2">{t(slide.titleKey)}</p>
                      <div className="flex items-center gap-2 mt-1">
                        {slide.pulse && <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
                        <span className="text-xs text-accent font-medium">{t(slide.subtitleKey)}</span>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Dot navigation */}
            <div
              className="absolute flex gap-1.5"
              style={{ bottom: -28, left: '50%', transform: 'translateX(-50%)' }}>
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-60">
        <span className="text-[15px] uppercase tracking-widest text-foreground-subtle">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>);

}
