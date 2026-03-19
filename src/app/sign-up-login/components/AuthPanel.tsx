'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import AppLogo from '@/components/ui/AppLogo';
import { useLang } from '@/components/LanguageContext';

type Tab = 'signin' | 'signup';

export default function AuthPanel() {
  const { t } = useLang();
  const [tab, setTab] = useState<Tab>('signin');
  const [signInForm, setSignInForm] = useState({ email: '', password: '' });
  const [signUpForm, setSignUpForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [showPass, setShowPass] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration point — connect to auth provider here
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration point — connect to auth provider here
  };

  const previewImages = [
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1b4066df5-1773829115770.png",
    alt: 'Roman eagle bas relief sculpture detail'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_14cb90d9c-1773829115170.png",
    alt: 'AI-generated verdant dreamscape artwork'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1908d9cb1-1773829118436.png",
    alt: 'Heritage commemorative coin collection'
  }];


  return (
    <div className="min-h-screen flex">
      {/* LEFT: Atmospheric visual panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-bg-dark flex-col justify-between p-12">
        {/* Deep green atmospheric background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0D1F12 0%, #162B1C 40%, #1E3D28 70%, #0D1F12 100%)'
          }}
          aria-hidden="true" />
        
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 40% 50%, rgba(168,201,87,0.12) 0%, transparent 70%)'
          }}
          aria-hidden="true" />
        

        {/* Floating orbs within panel */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(61,122,79,0.2) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'orbFloat 18s ease-in-out infinite'
          }}
          aria-hidden="true" />
        
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(168,201,87,0.15) 0%, transparent 70%)',
            filter: 'blur(30px)',
            animation: 'orbFloat 24s ease-in-out infinite',
            animationDelay: '-10s'
          }}
          aria-hidden="true" />
        

        {/* Content */}
        <div className="relative z-10">
          <Link href="/homepage" className="flex items-center gap-2.5">
            <AppLogo size={36} />
            <span className="font-display text-xl font-semibold text-white tracking-tight">CreativeSphere</span>
          </Link>
        </div>

        {/* Portfolio montage */}
        <div className="relative z-10 flex-1 flex items-center justify-center py-12">
          <div className="relative w-full max-w-sm">
            {/* Back card */}
            <div
              className="absolute -top-4 -right-4 w-48 h-60 rounded-3xl overflow-hidden border border-white/10 shadow-green-lg"
              style={{ transform: 'rotate(6deg)' }}>
              
              <AppImage
                src={previewImages[2].src}
                alt={previewImages[2].alt}
                fill
                className="object-cover" />
              
              <div className="absolute inset-0 bg-bg-dark/30" />
            </div>

            {/* Mid card */}
            <div
              className="absolute -bottom-4 -left-4 w-40 h-52 rounded-3xl overflow-hidden border border-white/10 shadow-green-lg"
              style={{ transform: 'rotate(-5deg)' }}>
              
              <AppImage
                src={previewImages[1].src}
                alt={previewImages[1].alt}
                fill
                className="object-cover" />
              
              <div className="absolute inset-0 bg-bg-dark/30" />
            </div>

            {/* Front card */}
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-white/15 shadow-green-lg z-10">
              <AppImage
                src={previewImages[0].src}
                alt={previewImages[0].alt}
                fill
                className="object-cover"
                priority />
              
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="tag-pill text-[10px] mb-2 block w-fit">3D Bas Relief</span>
                <p className="font-display text-lg font-semibold text-white">Roman Eagle Panel</p>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -top-6 -left-6 glass-card-dark rounded-2xl px-4 py-3 z-20 border border-accent/20">
              <p className="text-[10px] text-foreground-subtle uppercase tracking-widest">Portfolio</p>
              <p className="font-display text-lg font-semibold text-white mt-0.5">250+ Works</p>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="relative z-10 space-y-2">
          <p className="font-display text-2xl font-semibold text-white leading-snug">
            Where 3D Craft<br />
            <span className="italic font-light text-accent">Meets Intelligence.</span>
          </p>
          <p className="text-sm text-foreground-subtle">
            Join a community of 3D artists and AI creators.
          </p>
        </div>
      </div>

      {/* RIGHT: Auth form panel */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-16 min-h-screen relative">
        {/* Mobile logo */}
        <div className="lg:hidden mb-10">
          <Link href="/homepage" className="flex items-center gap-2.5 justify-center">
            <AppLogo size={36} />
            <span className="font-display text-xl font-semibold text-foreground tracking-tight">CreativeSphere</span>
          </Link>
        </div>

        <div className="w-full max-w-md">
          {/* Tabs */}
          <div className="flex gap-1 p-1 bg-white/70 border border-primary/15 rounded-xl backdrop-blur-sm mb-8">
            <button
              onClick={() => setTab('signin')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
              tab === 'signin' ? 'bg-primary text-white shadow-green-sm' : 'text-foreground-muted hover:text-foreground'}`
              }>
              
              {t('auth.signIn')}
            </button>
            <button
              onClick={() => setTab('signup')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
              tab === 'signup' ? 'bg-primary text-white shadow-green-sm' : 'text-foreground-muted hover:text-foreground'}`
              }>
              
              {t('auth.signUp')}
            </button>
          </div>

          {/* Sign In Form */}
          {tab === 'signin' &&
          <div className="space-y-6">
              <div>
                <h2 className="font-display text-3xl font-semibold text-foreground tracking-display">
                  {t('auth.signIn')}
                </h2>
                <p className="text-sm text-foreground-muted mt-1">
                  {t('auth.noAccount')}{' '}
                  <button onClick={() => setTab('signup')} className="text-primary font-semibold hover:underline">
                    {t('auth.signUp')}
                  </button>
                </p>
              </div>

              <form onSubmit={handleSignIn} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground-muted mb-2 uppercase tracking-widest">
                    {t('auth.email')}
                  </label>
                  <input
                  type="email"
                  required
                  value={signInForm.email}
                  onChange={(e) => setSignInForm({ ...signInForm, email: e.target.value })}
                  placeholder="you@example.com"
                  className="form-input" />
                
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-semibold text-foreground-muted uppercase tracking-widest">
                      {t('auth.password')}
                    </label>
                    <button type="button" className="text-xs text-primary hover:underline font-medium">
                      {t('auth.forgotPass')}
                    </button>
                  </div>
                  <div className="relative">
                    <input
                    type={showPass ? 'text' : 'password'}
                    required
                    value={signInForm.password}
                    onChange={(e) => setSignInForm({ ...signInForm, password: e.target.value })}
                    placeholder="••••••••"
                    className="form-input pr-12" />
                  
                    <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground-subtle hover:text-foreground transition-colors"
                    aria-label={showPass ? 'Hide password' : 'Show password'}>
                    
                      {showPass ?
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg> :

                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                    }
                    </button>
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full justify-center mt-2 py-3">
                  {t('auth.signIn')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-primary/15" />
                <span className="text-xs text-foreground-subtle">{t('auth.orContinue')}</span>
                <div className="flex-1 h-px bg-primary/15" />
              </div>

              {/* Social buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-lg border border-primary/20 bg-white/60 hover:bg-white hover:border-primary/40 transition-all text-sm font-medium text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                  Google
                </button>
                <button className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-lg border border-primary/20 bg-white/60 hover:bg-white hover:border-primary/40 transition-all text-sm font-medium text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  GitHub
                </button>
              </div>
            </div>
          }

          {/* Sign Up Form */}
          {tab === 'signup' &&
          <div className="space-y-6">
              <div>
                <h2 className="font-display text-3xl font-semibold text-foreground tracking-display">
                  {t('auth.signUp')}
                </h2>
                <p className="text-sm text-foreground-muted mt-1">
                  {t('auth.hasAccount')}{' '}
                  <button onClick={() => setTab('signin')} className="text-primary font-semibold hover:underline">
                    {t('auth.signIn')}
                  </button>
                </p>
              </div>

              <form onSubmit={handleSignUp} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground-muted mb-2 uppercase tracking-widest">
                    {t('auth.name')}
                  </label>
                  <input
                  type="text"
                  required
                  value={signUpForm.name}
                  onChange={(e) => setSignUpForm({ ...signUpForm, name: e.target.value })}
                  placeholder="Alexei Volkov"
                  className="form-input" />
                
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground-muted mb-2 uppercase tracking-widest">
                    {t('auth.email')}
                  </label>
                  <input
                  type="email"
                  required
                  value={signUpForm.email}
                  onChange={(e) => setSignUpForm({ ...signUpForm, email: e.target.value })}
                  placeholder="you@example.com"
                  className="form-input" />
                
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground-muted mb-2 uppercase tracking-widest">
                    {t('auth.password')}
                  </label>
                  <div className="relative">
                    <input
                    type={showPass ? 'text' : 'password'}
                    required
                    minLength={8}
                    value={signUpForm.password}
                    onChange={(e) => setSignUpForm({ ...signUpForm, password: e.target.value })}
                    placeholder="Min. 8 characters"
                    className="form-input pr-12" />
                  
                    <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground-subtle hover:text-foreground transition-colors"
                    aria-label={showPass ? 'Hide password' : 'Show password'}>
                    
                      {showPass ?
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg> :

                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                    }
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground-muted mb-2 uppercase tracking-widest">
                    {t('auth.confirmPass')}
                  </label>
                  <input
                  type={showPass ? 'text' : 'password'}
                  required
                  value={signUpForm.confirm}
                  onChange={(e) => setSignUpForm({ ...signUpForm, confirm: e.target.value })}
                  placeholder="Repeat password"
                  className="form-input" />
                
                </div>

                <button type="submit" className="btn-primary w-full justify-center mt-2 py-3">
                  {t('auth.signUp')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>

                <p className="text-xs text-foreground-subtle text-center leading-relaxed">
                  {t('auth.terms')}
                </p>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-primary/15" />
                <span className="text-xs text-foreground-subtle">{t('auth.orContinue')}</span>
                <div className="flex-1 h-px bg-primary/15" />
              </div>

              {/* Social buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-lg border border-primary/20 bg-white/60 hover:bg-white hover:border-primary/40 transition-all text-sm font-medium text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                  Google
                </button>
                <button className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-lg border border-primary/20 bg-white/60 hover:bg-white hover:border-primary/40 transition-all text-sm font-medium text-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  GitHub
                </button>
              </div>
            </div>
          }

          {/* Back to home */}
          <div className="mt-8 text-center">
            <Link href="/homepage" className="text-sm text-foreground-subtle hover:text-primary transition-colors inline-flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
              Back to CreativeSphere
            </Link>
          </div>
        </div>
      </div>
    </div>);

}