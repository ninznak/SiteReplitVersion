import React from 'react';
import { LangProvider } from '@/components/LanguageContext';
import OrbBackground from '@/components/OrbBackground';
import Header from '@/components/Header';
import AuthPanel from './components/AuthPanel';

export default function SignUpLoginPage() {
  return (
    <LangProvider>
      <div className="relative min-h-screen bg-bg">
        <OrbBackground />
        <Header />
        <main className="relative z-10">
          <AuthPanel />
        </main>
      </div>
    </LangProvider>
  );
}