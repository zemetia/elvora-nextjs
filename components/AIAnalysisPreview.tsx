import React from 'react';
import Link from 'next/link';

const AIAnalysisPreview: React.FC = () => {
  return (
    <section className="py-24 bg-[#F2F4F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] bg-white rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600"
                alt="AI Skin Scanning Demo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="w-full h-px bg-sage/60 absolute top-1/2 left-0 animate-[ping_3s_linear_infinite]" />
                <div className="w-64 h-64 border-2 border-sage/40 rounded-full animate-pulse flex items-center justify-center">
                   <div className="w-48 h-48 border border-white/40 rounded-full" />
                </div>
              </div>
              {/* UI Overlay mockups */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-sage rounded-full animate-pulse" />
                Analyzing Pores...
              </div>
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-sm text-center">
                 <span className="block text-2xl font-serif text-sage">84</span>
                 <span className="text-[10px] uppercase text-gray-400 tracking-widest font-bold">Skin Score</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">
              Skin Intelligence <br />
              <span className="italic text-sage">at your fingertips.</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-sage font-bold">1</div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Deeper than what you see</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Our computer vision technology detects subtle changes in texture, redness, and pigmentation invisible to the naked eye.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-sage font-bold">2</div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Track your progress</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Visualize your skin&apos;s health journey over 30, 60, and 90 days with our proprietary progress timeline.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-sage font-bold">3</div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">No more trial and error</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Eliminate the confusion of choosing products. Our algorithm matches your concerns with clinical ingredients that work.</p>
                </div>
              </div>
            </div>

            <Link
              href="/analyze"
              className="mt-12 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all flex items-center gap-2 w-fit"
            >
              Experience AI Scan
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <p className="mt-8 text-xs text-gray-400 italic">
              * AI analysis is not a medical diagnosis. Results are for skincare guidance only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAnalysisPreview;
