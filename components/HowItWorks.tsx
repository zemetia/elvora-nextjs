'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ConnectionLines } from '@/components/ui/ConnectionLines';

const steps = [
  {
    number: "01",
    title: "Scan or Answer",
    subtitle: "Begin Your Skin Journey",
    description: "Upload a selfie for instant AI facial analysis, or answer our comprehensive skin questionnaire. Our advanced neural network analyzes over 50 unique skin markers in seconds.",
    features: [
      "AI-powered facial recognition technology",
      "Multi-concern detection across 8 categories",
      "Privacy-first processing - data never stored"
    ],
    // High-quality Unsplash image: person taking selfie
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800",
    imageAlt: "Person taking selfie for skin analysis",
    icon: (
      <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "AI Skin Analysis",
    subtitle: "Clinical-Grade Assessment",
    description: "Our proprietary AI algorithm, trained on thousands of clinical cases, evaluates your skin type, identifies primary concerns, and calculates your personalized Skin Vitality Index score.",
    features: [
      "Skin Vitality Index (0-100 scoring)",
      "Concern severity assessment",
      "Ingredient compatibility analysis"
    ],
    // High-quality Unsplash image: technology/AI interface
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800",
    imageAlt: "AI analysis interface showing skin assessment",
    icon: (
      <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Personal Routine",
    subtitle: "Your Custom Protocol",
    description: "Receive a curated skincare system tailored to your unique profile. Each product is selected based on your skin type, concerns, and lifestyle factors for maximum efficacy.",
    features: [
      "Clinically-tested product combinations",
      "Step-by-step application guidance",
      "Expected timeline for visible results"
    ],
    // High-quality Unsplash image: skincare products arranged
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800",
    imageAlt: "Personalized skincare products arranged elegantly",
    icon: (
      <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-sage text-[10px] font-bold uppercase tracking-[0.3em] block mb-6">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            How It <span className="italic">Works</span>
          </h2>
          <p className="text-gray-500 font-light leading-relaxed text-lg">
            Science-driven personalization in three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            const isImageLeft = index % 2 === 1;

            return (
              <React.Fragment key={index}>
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 60 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  {/* Desktop: Alternating Layout */}
                  <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content Side */}
                    <div className={`space-y-6 ${isImageLeft ? 'lg:order-2' : ''}`}>
                      {/* Numbered Badge */}
                      <div className="relative">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sage shadow-xl mb-6">
                          <span className="text-3xl font-serif text-white">{step.number}</span>
                        </div>
                      </div>

                      {/* Subtitle */}
                      <div>
                        <span className="text-sage text-xs font-bold uppercase tracking-[0.3em]">
                          {step.subtitle}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-4xl font-serif text-gray-900">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {step.description}
                      </p>

                      {/* Features List */}
                      <motion.ul
                        variants={{
                          hidden: {},
                          show: {
                            transition: {
                              staggerChildren: 0.1
                            }
                          }
                        }}
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                        className="space-y-3 pt-4"
                      >
                        {step.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            variants={{
                              hidden: { opacity: 0, x: -20 },
                              show: { opacity: 1, x: 0 }
                            }}
                            className="flex items-start gap-3"
                          >
                            <svg className="w-6 h-6 text-sage flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>

                    {/* Image Side */}
                    <div className={isImageLeft ? 'lg:order-1' : ''}>
                      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
                        <Image
                          src={step.image}
                          alt={step.imageAlt}
                          width={600}
                          height={450}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mobile/Tablet: Stacked Layout */}
                  <div className="lg:hidden space-y-8">
                    {/* Image on Top */}
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                      {/* Numbered Badge Overlay */}
                      <div className="absolute -top-4 -left-4 z-10">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sage shadow-xl">
                          <span className="text-2xl font-serif text-white">{step.number}</span>
                        </div>
                      </div>
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        width={600}
                        height={450}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>

                    {/* Content Below */}
                    <div className="space-y-4 px-2">
                      <span className="text-sage text-xs font-bold uppercase tracking-[0.3em]">
                        {step.subtitle}
                      </span>
                      <h3 className="text-3xl font-serif text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="space-y-3 pt-2">
                        {step.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Connection Lines (except after last step) */}
                {index < steps.length - 1 && (
                  <ConnectionLines className="hidden lg:flex" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
