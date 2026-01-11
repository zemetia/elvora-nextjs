import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const differentiators = [
    {
      title: 'AI-Powered Personalization',
      description: 'Every skin is unique. Our Google Gemini AI analyzes 40+ markers to create truly personalized protocols, not generic one-size-fits-all solutions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Clinical-Grade Formulations',
      description: 'We use pharmaceutical concentrations of proven actives. No marketing gimmicks, no filler ingredients—only what works backed by peer-reviewed research.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'Systems Over Single Products',
      description: 'Skin transformation requires synergy. Our systems are designed to work together, amplifying results through carefully orchestrated ingredient interactions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 17a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zM14 17a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" />
        </svg>
      )
    },
    {
      title: 'Transparency & Education',
      description: 'We believe informed consumers make better choices. Every ingredient is explained, every claim is backed by data, and our AI analysis is fully interpretable.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCFCFB]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#F2F2F0] pt-32">
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img
            src="/about-philosophy.png"
            alt="ELVORA Philosophy"
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F2F2F0] via-[#F2F2F0]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-2xl">
            <span className="text-sage text-xs font-bold uppercase tracking-[0.3em] block mb-6">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-[1.1] text-gray-900">
              Science Meets <br />
              <span className="italic font-light">Simplicity.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-xl">
              ELVORA was born from a simple frustration: skincare is unnecessarily complicated. We combined clinical dermatology with AI intelligence to make professional-grade skin health accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sage text-xs font-bold uppercase tracking-[0.3em] block mb-4">
                The Beginning
              </span>
              <h2 className="text-4xl font-serif text-gray-900 mb-6">
                Why ELVORA <span className="italic font-light">Exists</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  In an industry saturated with marketing promises and influencer recommendations, we saw a fundamental problem: people were buying products based on trends, not science. Bathroom shelves filled with mismatched actives, conflicting pH levels, and ingredients that work against each other.
                </p>
                <p>
                  Traditional dermatology consultations are expensive and inaccessible to most. Meanwhile, skincare advice online is confusing, contradictory, and often dangerous. The gap between professional-grade care and consumer self-care has never been wider.
                </p>
                <p>
                  ELVORA bridges that gap. We leverage advanced AI to deliver personalized, clinical-grade skincare guidance at scale. Our mission is to democratize access to dermatological intelligence—making expert skincare approachable, affordable, and effective for everyone.
                </p>
                <p className="font-medium text-gray-900">
                  We don't just sell products. We provide systems, education, and personalized protocols that actually transform skin health.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                  alt="ELVORA Lab"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-sage/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-sage text-xs font-bold uppercase tracking-[0.3em] block mb-4">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              What Makes Us <span className="italic font-light">Different</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We challenge conventional skincare wisdom with a radically transparent, science-first philosophy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-sage/10 flex items-center justify-center text-sage mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#1B2B20] to-[#2a3f31] rounded-[3rem] p-12 text-white">
                <div className="mb-8">
                  <span className="text-sage text-xs font-bold uppercase tracking-[0.3em] block mb-4">
                    Powered by AI
                  </span>
                  <h3 className="text-3xl font-serif mb-4">The Technology Behind ELVORA</h3>
                </div>

                <div className="space-y-6 text-gray-300">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center text-sage font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Google Gemini AI Integration</h4>
                      <p className="text-sm">State-of-the-art multimodal AI analyzes facial images at dermatological precision</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center text-sage font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">40+ Skin Markers Detected</h4>
                      <p className="text-sm">Texture, pore size, pigmentation, oil levels, inflammation, barrier health, and more</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center text-sage font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Personalized Protocol Generation</h4>
                      <p className="text-sm">Algorithms match your profile to clinically-tested ingredient combinations</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center text-sage font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Privacy-First Design</h4>
                      <p className="text-sm">Images are analyzed in real-time and never permanently stored on our servers</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-xs text-gray-400 italic">
                    * AI analysis is for skincare guidance only and not a substitute for professional medical diagnosis
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-sage text-xs font-bold uppercase tracking-[0.3em] block mb-4">
                Innovation
              </span>
              <h2 className="text-4xl font-serif text-gray-900 mb-6">
                Intelligence You <span className="italic font-light">Can Trust</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our AI doesn't just analyze pixels—it understands dermatology. Trained on thousands of clinical cases and peer-reviewed research, the ELVORA algorithm recognizes patterns that would take a human expert years to master.
                </p>
                <p>
                  But technology is just a tool. Behind every recommendation is clinical evidence, formulation science, and a commitment to results over marketing. We use AI to scale expertise, not replace it.
                </p>
                <p className="font-medium text-gray-900">
                  The result? Professional-grade skincare guidance, accessible from your phone, in under 60 seconds.
                </p>
              </div>

              <Link
                href="/analyze"
                className="inline-block mt-8 px-10 py-5 bg-gray-900 text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-sage transition-all duration-500 shadow-xl"
              >
                Try AI Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-[#F2F4F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sage text-xs font-bold uppercase tracking-[0.3em] block mb-4">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Our <span className="italic font-light">Commitment</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cruelty-Free Always</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Never tested on animals. Every formulation is developed using only human volunteer studies and in-vitro testing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Clean Ingredients</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Free from parabens, sulfates, phthalates, and unnecessary additives. Only ingredients backed by clinical evidence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No markup games or hidden fees. Fair prices that reflect ingredient quality and formulation complexity, not marketing spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Ready to experience <span className="italic font-light text-sage">intelligent skincare?</span>
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Join thousands who have transformed their skin with personalized, science-backed protocols
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/analyze"
              className="px-10 py-5 bg-gray-900 text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-sage transition-all duration-500 shadow-xl"
            >
              Start Your Analysis
            </Link>
            <Link
              href="/routine"
              className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-900 rounded-full text-sm font-bold uppercase tracking-widest hover:border-sage hover:text-sage transition-all duration-500"
            >
              Browse Routines
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
