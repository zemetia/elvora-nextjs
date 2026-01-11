'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAnalysis } from '@/lib/context/AnalysisContext';
import { routinesData } from '@/lib/data/routines';
import { SkincareRoutine, RoutineStep } from '@/lib/types';

export default function RoutinePage() {
  const { currentAnalysis } = useAnalysis();
  const [selectedRoutine, setSelectedRoutine] = useState<SkincareRoutine | null>(null);
  const [activeTab, setActiveTab] = useState<'morning' | 'evening'>('morning');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-50';
      case 'intermediate': return 'text-amber-600 bg-amber-50';
      case 'advanced': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFCFB] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <span className="text-sage text-[10px] font-bold uppercase tracking-[0.3em] block mb-6">
            Your Roadmap
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
            Skincare <span className="italic font-light">Routines</span>
          </h1>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Choose from our expertly crafted routines or follow your personalized AI-recommended protocol
          </p>
        </div>

        {/* Personalized Routine Section (if analysis exists) */}
        {currentAnalysis && (
          <div className="mb-24">
            <div className="bg-gradient-to-br from-[#1B2B20] to-[#2a3f31] rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sage/20 blur-[100px] rounded-full" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-6 h-6 text-sage" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-sage">
                    Your Personalized Protocol
                  </span>
                </div>

                <h2 className="text-4xl font-serif mb-4">{currentAnalysis.systemName}</h2>

                <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-3xl">
                  {currentAnalysis.recommendation}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <p className="text-xs uppercase tracking-widest text-white/60 mb-2">Skin Type</p>
                    <p className="text-xl font-medium">{currentAnalysis.type}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <p className="text-xs uppercase tracking-widest text-white/60 mb-2">Vitality Score</p>
                    <p className="text-xl font-medium">{currentAnalysis.score}/100</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <p className="text-xs uppercase tracking-widest text-white/60 mb-2">Timeline</p>
                    <p className="text-xl font-medium">{currentAnalysis.timeline}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/analyze"
                    className="px-8 py-4 bg-sage text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-500 text-center"
                  >
                    View Full Analysis
                  </Link>
                  <button className="px-8 py-4 bg-white/10 text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-all duration-500 border border-white/20">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pre-built Routines Section */}
        <div>
          <div className="mb-12">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">
              Pre-Built <span className="italic font-light">Routines</span>
            </h2>
            <p className="text-gray-500">
              Expertly crafted protocols for common skin concerns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {routinesData.map((routine) => (
              <div
                key={routine.id}
                onClick={() => setSelectedRoutine(selectedRoutine?.id === routine.id ? null : routine)}
                className="group bg-white rounded-[2.5rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-sage"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${getDifficultyColor(routine.difficulty)}`}>
                    {routine.difficulty}
                  </span>
                  <svg
                    className={`w-6 h-6 transition-transform duration-500 ${selectedRoutine?.id === routine.id ? 'rotate-180 text-sage' : 'text-gray-400'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <h3 className="text-2xl font-serif text-gray-900 mb-3 group-hover:text-sage transition-colors">
                  {routine.name}
                </h3>

                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  {routine.description}
                </p>

                <div className="space-y-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-sage" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>Duration: {routine.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-sage" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    <span>
                      {routine.steps.morning.length} morning / {routine.steps.evening.length} evening steps
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-sage" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span>For: {routine.concern}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expanded Routine Detail */}
          {selectedRoutine && (
            <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-gray-100">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <span className="text-sage text-xs font-bold uppercase tracking-[0.3em] block mb-3">
                    Routine Details
                  </span>
                  <h3 className="text-4xl font-serif text-gray-900">{selectedRoutine.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedRoutine(null)}
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Morning/Evening Tabs */}
              <div className="flex gap-4 mb-8 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('morning')}
                  className={`pb-4 px-6 text-sm font-bold uppercase tracking-widest transition-colors relative ${
                    activeTab === 'morning' ? 'text-sage' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  Morning Routine
                  {activeTab === 'morning' && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-sage" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('evening')}
                  className={`pb-4 px-6 text-sm font-bold uppercase tracking-widest transition-colors relative ${
                    activeTab === 'evening' ? 'text-sage' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  Evening Routine
                  {activeTab === 'evening' && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-sage" />
                  )}
                </button>
              </div>

              {/* Routine Steps */}
              <div className="space-y-6">
                {(activeTab === 'morning' ? selectedRoutine.steps.morning : selectedRoutine.steps.evening).map((step: RoutineStep, index: number) => (
                  <div key={step.id} className="flex gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage text-white flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{step.productName}</h4>
                        {step.frequency && (
                          <span className="text-xs px-3 py-1 bg-white rounded-full text-gray-600 border border-gray-200">
                            {step.frequency}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.usage}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                <button className="flex-1 py-5 bg-gray-900 text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-sage transition-all duration-500">
                  Add Full Routine to Cart
                </button>
                <Link
                  href="/analyze"
                  className="flex-1 py-5 bg-white border-2 border-gray-200 text-gray-900 rounded-full text-sm font-bold uppercase tracking-widest hover:border-sage hover:text-sage transition-all duration-500 text-center"
                >
                  Get Personalized Routine
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        {!currentAnalysis && (
          <div className="mt-24 text-center bg-[#F2F4F2] rounded-[3rem] p-16">
            <h3 className="text-3xl font-serif text-gray-900 mb-4">
              Not sure which routine is <span className="italic font-light">right for you?</span>
            </h3>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Take our AI skin analysis to receive a personalized routine recommendation based on your unique skin profile
            </p>
            <Link
              href="/analyze"
              className="inline-block px-10 py-5 bg-gray-900 text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-sage transition-all duration-500 shadow-xl"
            >
              Analyze My Skin
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
