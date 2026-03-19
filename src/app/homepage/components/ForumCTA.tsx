'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLang } from '@/components/LanguageContext';

const threads = [
  {
    id: 1,
    title: 'Best settings for bas relief in Blender 4.3?',
    author: 'Mikhail Sorokin',
    replies: 14,
    category: '3D Modeling',
    time: '2h ago',
  },
  {
    id: 2,
    title: 'Sharing: AI prompt pack for coin design concepts',
    author: 'Elena Vasileva',
    replies: 28,
    category: 'AI Content',
    time: '5h ago',
  },
  {
    id: 3,
    title: 'Commission pricing guide for 2026 — discussion',
    author: 'Dmitri Kovalev',
    replies: 41,
    category: 'Business',
    time: '1d ago',
  },
];

export default function ForumCTA() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef?.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.1 }
    );
    els?.forEach((el) => obs?.observe(el));
    return () => obs?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="forum" className="pt-14 pb-28 bg-bg-dark relative overflow-hidden z-10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 70% 40%, rgba(168,201,87,0.1) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: CTA */}
          <div className="lg:col-span-5 space-y-8 reveal-left">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">{t('forum.label')}</span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mt-4 leading-tight tracking-display">
                {t('forum.title')}
              </h2>
            </div>
            <p className="text-foreground-subtle leading-relaxed">{t('forum.sub')}</p>

            {/* Stats */}
            <div className="flex gap-10 pt-6 border-t border-white/10">
              {[
                { num: '1.2K', label: 'Members' },
                { num: '340+', label: 'Threads' },
                { num: '4.8K', label: 'Posts' },
              ]?.map((s) => (
                <div key={s?.label}>
                  <p className="font-display text-2xl font-semibold text-white">{s?.num}</p>
                  <p className="text-[10px] uppercase tracking-widest text-foreground-subtle mt-0.5">{s?.label}</p>
                </div>
              ))}
            </div>

            <Link href="/forum" className="btn-accent">
              {t('forum.join')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          {/* Right: Thread previews */}
          <div className="lg:col-span-7 flex flex-col gap-4 reveal-right">
            {threads?.map((thread, idx) => (
              <div
                key={thread?.id}
                className={`reveal stagger-${idx + 1} glass-card-dark rounded-2xl p-5 hover:border-accent/30 transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="tag-pill text-[10px]">{thread?.category}</span>
                      <span className="text-[10px] text-foreground-subtle">{thread?.time}</span>
                    </div>
                    <h4 className="font-display text-base font-semibold text-white group-hover:text-accent transition-colors leading-snug">
                      {thread?.title}
                    </h4>
                    <p className="text-[11px] text-foreground-subtle mt-1">by {thread?.author}</p>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <span className="font-display text-xl font-semibold text-accent">{thread?.replies}</span>
                    <span className="text-[10px] uppercase tracking-widest text-foreground-subtle">replies</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Blurred preview of more */}
            <div className="relative overflow-hidden rounded-2xl glass-card-dark p-5 opacity-50 select-none" aria-hidden="true">
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent z-10" />
              <h4 className="font-display text-base font-semibold text-white">
                How to combine ZBrush and AI in a single pipeline...
              </h4>
              <p className="text-[11px] text-foreground-subtle mt-1">by Anastasia Morozova</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}