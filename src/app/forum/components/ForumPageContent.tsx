'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/components/LanguageContext';

const threads = [
  {
    id: 1,
    title: 'Best settings for bas relief in Blender 4.3?',
    author: 'Mikhail Sorokin',
    authorAvatar: 'MS',
    replies: 14,
    views: 234,
    category: '3D Modeling',
    time: '2h ago',
    pinned: true,
  },
  {
    id: 2,
    title: 'Sharing: AI prompt pack for coin design concepts',
    author: 'Elena Vasileva',
    authorAvatar: 'EV',
    replies: 28,
    views: 456,
    category: 'AI Content',
    time: '5h ago',
    pinned: false,
  },
  {
    id: 3,
    title: 'Commission pricing guide for 2026 — discussion',
    author: 'Dmitri Kovalev',
    authorAvatar: 'DK',
    replies: 41,
    views: 892,
    category: 'Business',
    time: '1d ago',
    pinned: false,
  },
  {
    id: 4,
    title: 'ZBrush vs Blender for medal design - your thoughts?',
    author: 'Anna Petrova',
    authorAvatar: 'AP',
    replies: 19,
    views: 312,
    category: '3D Modeling',
    time: '2d ago',
    pinned: false,
  },
  {
    id: 5,
    title: 'Midjourney v7 prompts for numismatic art',
    author: 'Sergei Volkov',
    authorAvatar: 'SV',
    replies: 33,
    views: 567,
    category: 'AI Content',
    time: '3d ago',
    pinned: false,
  },
  {
    id: 6,
    title: 'Looking for CNC machining partner in Europe',
    author: 'Olga Ivanova',
    authorAvatar: 'OI',
    replies: 8,
    views: 145,
    category: 'Collaboration',
    time: '4d ago',
    pinned: false,
  },
];

const categories = ['All', '3D Modeling', 'AI Content', 'Business', 'Collaboration'];

export default function ForumPageContent() {
  const { t } = useLang();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredThreads = threads.filter((thread) => {
    const matchesCategory = activeCategory === 'All' || thread.category === activeCategory;
    const matchesSearch = thread.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="pt-10 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">{t('forum.label')}</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold mt-4 leading-tight tracking-display">
            {t('forum.title')}
          </h1>
          <p className="text-foreground-muted mt-4 max-w-xl mx-auto leading-relaxed">
            {t('forum.sub')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { num: '1.2K', label: 'Members' },
            { num: '340+', label: 'Threads' },
            { num: '4.8K', label: 'Posts' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-4 text-center">
              <p className="font-display text-2xl font-semibold text-foreground">{stat.num}</p>
              <p className="text-[10px] uppercase tracking-widest text-foreground-subtle mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search threads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input w-full"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-green-sm'
                    : 'bg-bg-card border border-primary/20 text-foreground-muted hover:border-primary/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* New Thread Button */}
        <div className="flex justify-end mb-6">
          <Link href="/sign-up-login" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            New Thread
          </Link>
        </div>

        {/* Threads List */}
        <div className="space-y-3">
          {filteredThreads.map((thread) => (
            <div
              key={thread.id}
              className="glass-card rounded-2xl p-5 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-semibold text-primary">{thread.authorAvatar}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {thread.pinned && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-accent/20 text-accent-dark font-semibold">PINNED</span>
                    )}
                    <span className="tag-pill text-[10px]">{thread.category}</span>
                    <span className="text-[10px] text-foreground-subtle">{thread.time}</span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {thread.title}
                  </h3>
                  <p className="text-[11px] text-foreground-subtle mt-1">by {thread.author}</p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 flex-shrink-0">
                  <div className="text-center">
                    <p className="font-display text-lg font-semibold text-primary">{thread.replies}</p>
                    <p className="text-[9px] uppercase tracking-widest text-foreground-subtle">replies</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-lg font-semibold text-foreground-muted">{thread.views}</p>
                    <p className="text-[9px] uppercase tracking-widest text-foreground-subtle">views</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredThreads.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground-muted">No threads found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
