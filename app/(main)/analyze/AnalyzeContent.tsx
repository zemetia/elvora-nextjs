'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SkinAnalysisResult } from '@/lib/types';
import { useAnalysis } from '@/lib/context/AnalysisContext';
import CameraCapture from '@/components/CameraCapture';

export default function AnalyzeContent() {
  const [step, setStep] = useState<'upload' | 'camera' | 'analyzing' | 'result'>('upload');
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<SkinAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setAnalysis } = useAnalysis();
  const router = useRouter();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImage(base64);
        setError(null);
      };
      reader.readAsDataURL(file);

    }
  };

  const handleCameraCapture = (capturedImage: string) => {
    setImage(capturedImage);
    setStep('upload');
  };

  const startAnalysis = async () => {
    if (!image) return;
    setStep('analyzing');
    setError(null);

    try {
      const base64Data = image.split(',')[1];

      const response = await fetch('/api/analyze-skin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: base64Data }),
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const analysisResult = await response.json();
      setResult(analysisResult);
      setAnalysis(analysisResult); // Save to context
      setStep('result');
    } catch (err: any) {
      setError(err.message || "Analysis failed. Please check your lighting and try again.");
      setStep('upload');
    }
  };

  const handleGenerateRoutine = () => {
    router.push('/routine?source=analysis');
  };

  const performNewScan = () => {
    setStep('upload');
    setImage(null);
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-[#FCFCFB] pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        {step === 'upload' && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sage text-[10px] font-bold uppercase tracking-[0.3em] block mb-6">
                Deep Diagnostics
              </span>
              <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
                AI Skin Scan
              </h1>
              <p className="text-lg text-gray-500 font-light max-w-xl mx-auto">
                Upload your selfie. Our neural network will analyze 40+ skin markers to build your biological profile.
              </p>
            </div>

            <div className="bg-white rounded-[3rem] p-8 sm:p-12 shadow-xl border border-gray-100">
              <div className="flex flex-col gap-4 mb-4">
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="group aspect-[4/3] border-2 border-dashed border-gray-200 rounded-[2.5rem] bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:border-sage transition-all overflow-hidden relative"
                  >
                    {image ? (
                      <img src={image} alt="Upload preview" className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center px-10">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-md group-hover:scale-110 transition-transform duration-500">
                          <svg className="w-10 h-10 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          </svg>
                        </div>
                        <p className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-2">
                          Click to Upload Selfie
                        </p>
                        <p className="text-xs text-gray-400">
                          For best results, use natural daylight and a clean, makeup-free face
                        </p>
                      </div>
                    )}
                  </div>
                   {!image && (
                      <button
                        onClick={() => setStep('camera')}
                        className="py-5 rounded-full border-2 border-dashed border-gray-200 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 hover:bg-sage hover:text-white hover:border-sage transition-all"
                      >
                        Use Camera
                      </button>
                   )}
              </div>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                className="hidden"
              />

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <button
                disabled={!image}
                onClick={startAnalysis}
                className={`w-full py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                  image
                    ? 'bg-gray-900 text-white shadow-xl hover:bg-sage'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                Start Analysis
              </button>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-xs text-gray-400 text-center">
                  <strong>Tips for best results:</strong> Ensure good lighting, remove glasses, tie back hair, and face camera directly
                </p>
              </div>
            </div>
          </div>
        )}

        {step === 'camera' && (
             <div className="max-w-2xl mx-auto h-[70vh]">
                <CameraCapture 
                   onCapture={handleCameraCapture} 
                   onClose={() => setStep('upload')} 
                />
             </div>
        )}

        {step === 'analyzing' && (
          <div className="max-w-3xl mx-auto py-12 text-center">
            <div className="relative aspect-[16/10] w-full mb-12 rounded-[2.5rem] overflow-hidden bg-gray-900 border-2 border-sage/30 shadow-2xl">
              {image && (
                <img
                  src={image}
                  alt="Analyzing"
                  className="w-full h-full object-cover opacity-60 grayscale"
                />
              )}

              {/* Robot Scan Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-sage shadow-[0_0_20px_rgba(132,169,140,0.9)] z-10 animate-[scan_2s_ease-in-out_infinite]" />

              {/* Grid Overlay */}
              <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(var(--sage) 1px, transparent 0)',
                  backgroundSize: '20px 20px'
                }}
              />

              {/* Status Badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-8 glass rounded-3xl border border-white/20 text-white animate-pulse">
                  <p className="text-xs font-bold uppercase tracking-widest">Diagnostic in progress...</p>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-serif text-gray-900 mb-8 italic font-light">
              Processing Skin Data...
            </h2>

            <div className="space-y-6 max-w-md mx-auto">
              <div className="h-[3px] w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-sage w-1/2 animate-[progress_3s_ease-in-out_infinite]" />
              </div>

              <div className="space-y-3 text-left">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold flex items-center gap-3">
                  <span className="w-2 h-2 bg-sage rounded-full animate-pulse"></span>
                  Analyzing Skin Texture & Pore Structure
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  Detecting Pigmentation & Redness Patterns
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  Measuring Oil Levels & Hydration
                </p>
              </div>
            </div>
          </div>
        )}

        {step === 'result' && result && (
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <span className="inline-block px-6 py-3 mb-8 text-xs font-bold tracking-[0.3em] text-sage border-2 border-sage/20 rounded-full uppercase">
                Diagnostics Complete
              </span>
              <h1 className="text-6xl font-serif text-gray-900 mb-4">Your Report.</h1>
              <p className="text-gray-500">
                Based on analysis of 40+ skin markers using advanced AI technology
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-gray-50 text-center">
                <span className="block text-6xl font-serif text-sage mb-3">{result.score}</span>
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-gray-400">
                  Skin Vitality Index
                </span>
                <p className="text-xs text-gray-400 mt-3">Out of 100</p>
              </div>

              <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-gray-50 text-center flex flex-col justify-center">
                <span className="block text-2xl font-medium text-gray-900 mb-3">{result.type}</span>
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-gray-400">
                  Biological Skin Type
                </span>
              </div>
              
               <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-50 flex flex-col justify-center">
                   <div className="space-y-3">
                      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Brightness</span>
                          <span className="text-lg font-bold text-sage">{result.brightness}</span>
                      </div>
                      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Texture</span>
                          <span className="text-lg font-bold text-sage">{result.textureScore}</span>
                      </div>
                      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Pores</span>
                          <span className="text-lg font-bold text-sage">{result.poreScore}</span>
                      </div>
                   </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-gray-50">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">
                Detected Concerns
              </h3>
              <div className="flex flex-wrap gap-3">
                {result.concerns.map((concern, i) => (
                  <span
                    key={i}
                    className="px-6 py-3 bg-gray-50 rounded-full text-sm text-gray-700 font-medium border border-gray-100"
                  >
                    {concern}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-12 bg-[#1B2B20] rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sage/10 blur-[80px] rounded-full" />

              <h4 className="text-xs font-bold text-sage uppercase tracking-[0.3em] mb-8">
                Recommended Protocol
              </h4>

              <h2 className="text-4xl font-serif mb-6">{result.systemName}</h2>

              <p className="text-gray-300 text-base font-light leading-relaxed mb-12">
                {result.recommendation}
              </p>

              <div className="mb-12">
                <h4 className="text-xs font-bold text-white/40 uppercase tracking-[0.3em] mb-6">
                  Recommended Products
                </h4>
                <div className="space-y-4">
                  {result.products.map((product, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center text-sm font-bold text-sage flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-base font-medium text-white/90">{product}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white/50 pb-8 border-b border-white/10 mb-8">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Estimated Timeline: {result.timeline}</span>
              </div>

              <button
                onClick={handleGenerateRoutine}
                className="w-full py-5 bg-sage text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-500 shadow-lg mb-4"
              >
                Generate Personalized Routine
              </button>

              <Link
                href="/routine"
                className="block w-full py-5 bg-white/10 text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-all duration-500 text-center"
              >
                Browse All Routines
              </Link>
            </div>

            <div className="text-center pt-8 border-t border-gray-200">
              <button
                onClick={performNewScan}
                className="px-8 py-4 text-xs font-bold text-gray-500 uppercase tracking-[0.3em] hover:text-sage transition-colors"
              >
                ← Perform New Scan
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 0; }
        }
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}
