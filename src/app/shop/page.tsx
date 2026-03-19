import React from 'react';
import { LangProvider } from '@/components/LanguageContext';
import OrbBackground from '@/components/OrbBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShopPageContent from './components/ShopPageContent';

export default function ShopPage() {
  return (
    <LangProvider>
      <div className="relative min-h-screen bg-bg">
        <OrbBackground />
        <Header />
        <main className="relative z-10">
          <ShopPageContent />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}
