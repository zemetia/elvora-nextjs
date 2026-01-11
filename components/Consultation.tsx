'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TrustBadges } from '@/components/ui/TrustBadges';

const Consultation: React.FC = () => {
  return (
    <section id="support" className="py-32 bg-gradient-to-br from-sage/5 via-white to-sage/10 relative overflow-hidden">
      {/* Optional subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#84a98c" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-10 gap-12 items-center">
          {/* Left: Image Gallery (40% - 4 columns) */}
          <div className="lg:col-span-4">
            {/* Desktop: Asymmetric 2x2 Grid */}
            <div className="hidden md:grid grid-cols-2 gap-4">
              {/* Large image - spans 2 rows */}
              <div className="row-span-2 relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&h=500"
                  alt="Skin advisor consulting with client"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Small image - top right */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=240"
                  alt="Virtual consultation"
                  width={400}
                  height={240}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Small image - bottom right */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1629909615957-be38f5137daf?q=80&w=400&h=240"
                  alt="Skin analysis process"
                  width={400}
                  height={240}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Mobile: Single large image */}
            <div className="md:hidden relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600"
                alt="Skin advisor"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Center: Content (30% - 3 columns) */}
          <div className="lg:col-span-3 text-center lg:text-left space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                Still have questions?{' '}
                <span className="italic text-sage block mt-2">Talk to a human.</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our licensed Skin Advisors are here to provide personalized guidance, answer questions, and help you achieve your skin goals.
              </p>
            </div>

            {/* Trust Badges */}
            <TrustBadges />
          </div>

          {/* Right: CTA Card (30% - 3 columns) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl space-y-6">
              {/* Availability Indicator */}
              <div className="flex items-center gap-2 justify-center">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-gray-600">3 advisors available now</span>
              </div>

              {/* Primary CTA Button */}
              <Link
                href="/contact"
                className="block w-full py-4 px-6 bg-sage text-white text-center rounded-full font-bold uppercase tracking-wide hover:bg-gray-900 transition-all duration-500 hover:shadow-lg"
              >
                Speak with an Advisor
              </Link>

              {/* Secondary Button */}
              <button
                onClick={() => window.open('https://calendly.com/elvora-skin-advisors', '_blank')}
                className="block w-full py-4 px-6 bg-white text-sage border-2 border-sage text-center rounded-full font-bold uppercase tracking-wide hover:bg-sage hover:text-white transition-all duration-500"
              >
                Schedule Virtual Consultation
              </button>

              {/* Quick Contact Methods */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center mb-4 uppercase tracking-wide">
                  Or reach out directly
                </p>
                <div className="flex gap-4 justify-center">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors shadow-md hover:shadow-lg"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:advisors@elvora.com"
                    className="w-12 h-12 rounded-full bg-sage text-white flex items-center justify-center hover:bg-gray-900 transition-colors shadow-md hover:shadow-lg"
                    aria-label="Email"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
