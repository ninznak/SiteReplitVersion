'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useLang } from '@/components/LanguageContext';

export default function ContactSection() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration point — connect to email service or API here
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-28 relative z-10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 30% 60%, rgba(61,122,79,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-5 space-y-8 reveal-left">
            <div>
              <span className="section-label">{t('contact.label')}</span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4 leading-tight tracking-display">
                {t('contact.title')}
              </h2>
            </div>
            <p className="text-foreground-muted leading-relaxed">{t('contact.sub')}</p>

            {/* Contact details */}
            <div className="space-y-5 pt-4">
              {[
                { icon: '✉', label: 'Email', value: 'hello@creativesphere.art' },
                { icon: '🌍', label: 'Based in', value: 'Moscow, Russia · Available worldwide' },
                { icon: '⏱', label: 'Response', value: 'Within 24 hours' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-foreground-subtle">{item.label}</p>
                    <p className="text-sm font-medium text-foreground mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 reveal-right">
            {submitted ? (
              <div className="glass-card rounded-3xl p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto text-3xl">
                  ✓
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">Message Sent!</h3>
                <p className="text-foreground-muted">I'll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn-outline mt-4">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-foreground-muted mb-2 uppercase tracking-widest">
                      {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Alexander Petrov"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground-muted mb-2 uppercase tracking-widest">
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="form-input"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground-muted mb-2 uppercase tracking-widest">
                    {t('contact.subject')}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Custom medal commission"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground-muted mb-2 uppercase tracking-widest">
                    {t('contact.message')}
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t('contact.message')}
                    className="form-input resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  {t('contact.send')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}