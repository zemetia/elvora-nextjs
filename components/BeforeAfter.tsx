'use client';

import React from 'react';
import { EmblaCarousel } from '@/components/ui/EmblaCarousel';

const cases = [
  {
    title: "Congestion Control",
    system: "Acne Recovery System",
    duration: "12 Weeks",
    // These URLs are selected to best represent the transformations shown in the user's provided images
    before: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400",
    after: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    label: "Case #M-884"
  },
  {
    title: "Surface Clarity",
    system: "Brightening & Barrier",
    duration: "8 Weeks",
    before: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400",
    after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    label: "Case #F-201"
  },
  {
    title: "Barrier Restoration",
    system: "Sensitive Skin System",
    duration: "16 Weeks",
    before: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400",
    after: "https://images.unsplash.com/photo-1598440448057-07412733b702?auto=format&fit=crop&q=80&w=400",
    label: "Case #F-992"
  }
];

const BeforeAfter: React.FC = () => {
  const caseCards = cases.map((item, idx) => (
    <div key={idx} className="space-y-6 group">
      <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-xl ring-1 ring-black/5 transition-transform duration-700 hover:-translate-y-2">
        <div className="grid grid-cols-2 gap-[1px] bg-white relative">
          {/* Vertical Scanner Divider */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-sage/30 z-20 shadow-[0_0_10px_rgba(132,169,140,0.5)]" />

          {/* Before Side */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={item.before}
              alt="Before treatment"
              className="w-full h-full object-cover grayscale-[0.2] brightness-90 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-widest rounded-full border border-white/10">Before</span>
            </div>
          </div>

          {/* After Side */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={item.after}
              alt="After treatment"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 bg-sage/80 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-widest rounded-full">After</span>
            </div>
          </div>

          {/* Dynamic Robot Scan Overlay */}
          <div className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-sage/60 shadow-[0_0_20px_rgba(132,169,140,0.8)] animate-[scan_2.5s_ease-in-out_infinite]" />
            <div className="absolute inset-0 bg-sage/5" />
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-serif text-2xl text-gray-900">{item.title}</h4>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">{item.system}</p>
          </div>
          <span className="px-4 py-1.5 bg-[#F4F7F4] text-sage text-[10px] font-bold uppercase tracking-widest rounded-full border border-sage/10">
            {item.duration}
          </span>
        </div>
      </div>
    </div>
  ));

  return (
    <section id="transformations" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sage text-[10px] font-bold uppercase tracking-[0.3em] block mb-6">Clinical Proof</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Real <span className="italic">Transformations.</span></h2>
          <p className="text-gray-500 font-light leading-relaxed">
            Witness the progressive results of ELVORA protocols. Our AI tracks these changes daily to optimize your specific formula until maximum clarity is achieved.
          </p>
        </div>

        {/* Mobile and Tablet: Carousel with auto-play */}
        <div className="lg:hidden">
          <EmblaCarousel
            options={{
              align: 'center',
              loop: true,
              slidesToScroll: 1,
            }}
            showDots={true}
            showArrows={true}
            autoPlay={true}
            autoPlayInterval={6000}
          >
            {caseCards}
          </EmblaCarousel>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-12">
          {caseCards}
        </div>

        <div className="mt-20 p-12 bg-gray-900 rounded-[4rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 blur-[120px] rounded-full" />
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h4 className="text-3xl font-serif mb-4">Every result is <span className="text-sage italic">measurable.</span></h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Don&apos;t guess what works for your skin. Use our AI scanning technology to identify your unique needs and see visible changes in as little as 4 weeks.
            </p>
          </div>
          <button className="relative z-10 px-12 py-5 bg-white text-gray-900 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-sage hover:text-white transition-all duration-500 shadow-xl">
            Analyze My Skin
          </button>
        </div>
      </div>
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default BeforeAfter;
