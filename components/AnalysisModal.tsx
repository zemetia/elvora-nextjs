'use client';

import React, { useState, useRef } from 'react';
import { SkinAnalysisResult } from '@/lib/types';

interface AnalysisModalProps {
  onClose: () => void;
}

const AnalysisModal: React.FC<AnalysisModalProps> = ({ onClose }) => {
  const [step, setStep] = useState<'upload' | 'analyzing' | 'result'>('upload');
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<SkinAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImage(base64);
      };
      reader.readAsDataURL(file);
    }
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
      setStep('result');
    } catch (err: any) {
      setError(err.message || "Analysis failed. Please check your lighting and try again.");
      setStep('upload');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-md transition-opacity duration-500" onClick={onClose} />

      <div className="relative bg-[#FCFCFB] w-full max-w-2xl max-h-[90vh] rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] overflow-y-auto no-scrollbar transform transition-all duration-500 scale-100">
        <button
          onClick={onClose}
          className="absolute top-8 right-8 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white transition-all z-20 group"
        >
          <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 sm:p-16">
          {step === 'upload' && (
            <div className="text-center">
              <span className="text-sage text-[10px] font-bold uppercase tracking-[0.3em] block mb-6">Deep Diagnostics</span>
              <h2 className="text-4xl font-serif text-gray-900 mb-6">AI Skin Scan</h2>
              <p className="text-gray-500 font-light mb-12">Upload your selfie. Our neural network will analyze 40+ skin markers to build your biological profile.</p>

              <div
                onClick={() => fileInputRef.current?.click()}
                className="group aspect-[4/3] mb-12 border border-gray-200 rounded-[2.5rem] bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:border-sage transition-all overflow-hidden relative shadow-inner"
              >
                {image ? (
                  <img src={image} alt="Upload preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center px-10">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-sm group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Click to upload selfie</span>
                  </div>
                )}
              </div>

              <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept="image/*" className="hidden" />

              {error && <p className="text-red-400 text-xs mb-8">{error}</p>}

              <button
                disabled={!image}
                onClick={startAnalysis}
                className={`w-full py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 ${image ? 'bg-gray-900 text-white shadow-xl hover:bg-sage' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
              >
                Start Analysis
              </button>
            </div>
          )}

          {step === 'analyzing' && (
            <div className="py-12 text-center">
              <div className="relative aspect-[4/3] w-full mb-12 rounded-[2.5rem] overflow-hidden bg-gray-900 border border-sage/30 shadow-2xl">
                {image && <img src={image} alt="Analyzing" className="w-full h-full object-cover opacity-60 grayscale" />}

                {/* Robot Scan Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-sage shadow-[0_0_15px_rgba(132,169,140,0.8)] z-10 animate-[scan_2s_ease-in-out_infinite]" />

                {/* Grid Overlay */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                     style={{ backgroundImage: 'radial-gradient(var(--sage) 1px, transparent 0)', backgroundSize: '20px 20px' }} />

                {/* Random Data Points */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-6 glass rounded-2xl border border-white/20 text-gray-900 animate-pulse">
                     <p className="text-[10px] font-bold uppercase tracking-widest">Diagnostic in progress...</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-serif text-gray-900 mb-6 italic font-light">Processing Skin Data...</h2>
              <div className="space-y-4 max-w-xs mx-auto">
                <div className="h-[2px] w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-sage w-1/2 animate-[progress_3s_ease-in-out_infinite]" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Scanning Texture & Pores</p>
              </div>
            </div>
          )}

          {step === 'result' && result && (
            <div className="space-y-12">
              <div className="text-center">
                <span className="inline-block px-5 py-2 mb-6 text-[9px] font-bold tracking-[0.3em] text-sage border border-sage/20 rounded-full uppercase">
                  Diagnostics Complete
                </span>
                <h2 className="text-5xl font-serif text-gray-900">Your Report.</h2>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50 text-center">
                  <span className="block text-5xl font-serif text-sage mb-2">{result.score}</span>
                  <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-gray-400">Vitality Index</span>
                </div>
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50 text-center">
                  <span className="block text-xl font-medium text-gray-900 mb-2">{result.type}</span>
                  <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-gray-400">Biological Type</span>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-4">Detected Concerns</h4>
                  <div className="flex flex-wrap gap-2">
                    {result.concerns.map((c, i) => (
                      <span key={i} className="px-5 py-2.5 bg-gray-50 rounded-full text-[11px] text-gray-600 font-medium border border-gray-100">{c}</span>
                    ))}
                  </div>
                </div>

                <div className="p-10 bg-[#1B2B20] rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-sage/10 blur-[60px] rounded-full" />
                  <h4 className="text-[10px] font-bold text-sage uppercase tracking-[0.3em] mb-6">Expert Protocol</h4>
                  <h3 className="text-3xl font-serif mb-6">{result.systemName}</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-10">{result.recommendation}</p>

                  {/* Product Recommendations */}
                  <div className="mb-10">
                    <h4 className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] mb-4">Recommended Products</h4>
                    <div className="space-y-3">
                      {result.products.map((product, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                           <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center text-[10px] font-bold text-sage">{i+1}</div>
                           <span className="text-sm font-medium text-white/90">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 pb-10 border-b border-white/10 mb-10">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Estimated Timeline: {result.timeline}</span>
                  </div>

                  <button className="w-full py-5 bg-white text-gray-900 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-sage hover:text-white transition-all duration-500">
                    Add Routine to Cart
                  </button>
                </div>
              </div>

              <button
                onClick={() => setStep('upload')}
                className="w-full py-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] hover:text-sage transition-colors"
              >
                Perform New Scan
              </button>
            </div>
          )}
        </div>
      </div>
      <style>{`
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
};

export default AnalysisModal;
