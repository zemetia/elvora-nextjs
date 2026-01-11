'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnalysisProvider } from '@/lib/context/AnalysisContext';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnalysisProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </AnalysisProvider>
  );
}
