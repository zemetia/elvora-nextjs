'use client';

import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ConcernSelector from '@/components/ConcernSelector';
import SystemsDisplay from '@/components/SystemsDisplay';
import AIAnalysisPreview from '@/components/AIAnalysisPreview';
import BeforeAfter from '@/components/BeforeAfter';
import WhyElvora from '@/components/WhyElvora';
import Testimonials from '@/components/Testimonials';
import Consultation from '@/components/Consultation';

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <Hero />
      <HowItWorks />
      <ConcernSelector />
      <SystemsDisplay />
      <AIAnalysisPreview />
      <BeforeAfter />
      <WhyElvora />
      <Testimonials />
      <Consultation />
    </>
  );
}
