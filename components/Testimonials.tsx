'use client';

import React from 'react';
import { EmblaCarousel } from '@/components/ui/EmblaCarousel';

const testimonials = [
  {
    name: "Marcus T.",
    role: "Beginner",
    content: "I was always confused by skincare. Elvora's scan simplified everything. Within 4 weeks, my skin feels balanced, no longer oily.",
    result: "Oily & Combination System"
  },
  {
    name: "Sarah J.",
    role: "Regular User",
    content: "Not an instant miracle, but the progress is steady. My redness reduced drastically and I finally understand my skin barrier condition.",
    result: "Sensitive Skin System"
  },
  {
    name: "Elena R.",
    role: "Clarity Focus",
    content: "The AI detected hyperpigmentation I hadn't even noticed. The systematic approach ensures I don't damage my skin with too many actives.",
    result: "Brightening & Barrier System"
  }
];

const Testimonials: React.FC = () => {
  const testimonialCards = testimonials.map((t, idx) => (
    <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all min-h-[280px]">
      <div>
        <div className="flex gap-1 text-sage mb-6">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-600 italic leading-relaxed mb-8 text-sm">&quot;{t.content}&quot;</p>
      </div>
      <div>
        <div className="text-sm font-semibold text-gray-800">{t.name}</div>
        <div className="text-xs text-sage font-medium uppercase tracking-widest mt-1">{t.result}</div>
      </div>
    </div>
  ));

  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sage text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">Voice of the Community</span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Our Client Satisfaction</h2>
          <p className="text-gray-500">Skin health is a journey. This is how ELVORA accompanies them.</p>
        </div>

        {/* Mobile and Tablet: Carousel */}
        <div className="md:hidden">
          <EmblaCarousel
            options={{
              align: 'center',
              loop: true,
              slidesToScroll: 1,
            }}
            showDots={true}
            showArrows={false}
            autoPlay={true}
            autoPlayInterval={5000}
          >
            {testimonialCards}
          </EmblaCarousel>
        </div>

        {/* Desktop: Grid with subtle auto-rotate option */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonialCards}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
