import React from 'react';
import { LangProvider } from '@/components/LanguageContext';
import OrbBackground from '@/components/OrbBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutPageContent from './components/AboutPageContent';

export default function AboutPage() {
  return (
    <LangProvider>
      <div className="relative min-h-screen bg-bg">
        <OrbBackground />
        <Header />
        <main className="relative z-10">
          <AboutPageContent />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}
