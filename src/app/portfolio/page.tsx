import React from 'react';
import { LangProvider } from '@/components/LanguageContext';
import OrbBackground from '@/components/OrbBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioHero from './components/PortfolioHero';
import Portfolio3DSection from './components/Portfolio3DSection';
import PortfolioAISection from './components/PortfolioAISection';

export default function PortfolioPage() {
  return (
    <LangProvider>
      <div className="relative min-h-screen bg-bg">
        <OrbBackground />
        <Header />
        <main className="relative z-10">
          <PortfolioHero />
          <Portfolio3DSection />
          <PortfolioAISection />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}
