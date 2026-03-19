import React from 'react';
import { LangProvider } from '@/components/LanguageContext';
import OrbBackground from '@/components/OrbBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import PortfolioPreview from './components/PortfolioPreview';
import FeaturedWorks from './components/FeaturedWorks';
import NewsArticles from './components/NewsArticles';
import ShopPreview from './components/ShopPreview';
import ForumCTA from './components/ForumCTA';
import ContactSection from './components/ContactSection';

export default function Homepage() {
  return (
    <LangProvider>
      <div className="relative min-h-screen bg-bg">
        <OrbBackground />
        <Header />
        <main className="relative z-10">
          <HeroSection />
          <PortfolioPreview />
          <FeaturedWorks />
          <NewsArticles />
          <ShopPreview />
          <ForumCTA />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}