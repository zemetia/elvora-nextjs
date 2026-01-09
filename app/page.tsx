'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ConcernSelector from '@/components/ConcernSelector';
import SystemsDisplay from '@/components/SystemsDisplay';
import AIAnalysisPreview from '@/components/AIAnalysisPreview';
import BeforeAfter from '@/components/BeforeAfter';
import WhyElvora from '@/components/WhyElvora';
import Testimonials from '@/components/Testimonials';
import Consultation from '@/components/Consultation';
import Footer from '@/components/Footer';
import AnalysisModal from '@/components/AnalysisModal';

export default function Home() {
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);

  const toggleAnalysis = () => setIsAnalysisOpen(!isAnalysisOpen);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Navbar onOpenAnalysis={toggleAnalysis} />

      <main className="flex-grow">
        <Hero onOpenAnalysis={toggleAnalysis} />
        <HowItWorks />
        <ConcernSelector onOpenAnalysis={toggleAnalysis} />
        <SystemsDisplay />
        <AIAnalysisPreview onOpenAnalysis={toggleAnalysis} />
        <BeforeAfter />
        <WhyElvora />
        <Testimonials />
        <Consultation />
      </main>

      <Footer />

      {isAnalysisOpen && (
        <AnalysisModal onClose={toggleAnalysis} />
      )}
    </div>
  );
}
