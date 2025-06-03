import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { FeatureHighlightsSection } from './components/FeatureHighlightsSection';
import { OurStorySection } from './components/OurStorySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ValuePropositionSection />
        <FeatureHighlightsSection />
        <OurStorySection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;