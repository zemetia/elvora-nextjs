import React from 'react';

interface HeroProps {
  onOpenAnalysis: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAnalysis }) => {
  return (
    <section className="relative min-h-[90vh] lg:h-screen flex items-center pt-20 overflow-hidden bg-[#F2F2F0]">
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <div className="relative w-full h-full">
           <img
            src="https://images.unsplash.com/photo-1598440447619-5c35f8994679?auto=format&fit=crop&q=80&w=2000"
            alt="Premium Skincare"
            className="w-full h-full object-cover grayscale brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F2F2F0] via-transparent to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-8 h-[1px] bg-sage"></span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-sage uppercase">Future of Dermatology</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-[1.1] text-gray-900">
            Personalized <br />
            <span className="italic font-light">Skin Intelligence.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-lg font-light leading-relaxed">
            Eliminate the guesswork. Our AI-driven analysis creates a clinical-grade protocol tailored to your unique biology.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button
              onClick={onOpenAnalysis}
              className="group relative px-10 py-5 bg-gray-900 text-white rounded-full font-medium overflow-hidden transition-all duration-500 shadow-xl text-center"
            >
              <span className="relative z-10 text-xs font-bold uppercase tracking-widest">Scan Your Skin</span>
              <div className="absolute inset-0 bg-sage scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </button>

            <button className="px-10 py-5 bg-white border border-gray-200 text-gray-900 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-all duration-300">
              Start Quiz
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 hidden lg:flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-gray-400 rotate-90 origin-left">
        <span>Scroll to Explore</span>
        <div className="w-12 h-[1px] bg-gray-200"></div>
      </div>
    </section>
  );
};

export default Hero;
