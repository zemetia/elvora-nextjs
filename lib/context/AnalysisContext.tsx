'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SkinAnalysisResult } from '@/lib/types';

interface AnalysisContextType {
  currentAnalysis: SkinAnalysisResult | null;
  setAnalysis: (result: SkinAnalysisResult) => void;
  clearAnalysis: () => void;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

const STORAGE_KEY = 'elvora_analysis';
const EXPIRY_DAYS = 7;

interface StoredAnalysis {
  data: SkinAnalysisResult;
  timestamp: number;
}

export function AnalysisProvider({ children }: { children: ReactNode }) {
  const [currentAnalysis, setCurrentAnalysis] = useState<SkinAnalysisResult | null>(null);

  // Load analysis from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const { data, timestamp }: StoredAnalysis = JSON.parse(stored);

        // Check if data is expired (7 days)
        const expiryTime = EXPIRY_DAYS * 24 * 60 * 60 * 1000;
        const isExpired = Date.now() - timestamp > expiryTime;

        if (!isExpired) {
          setCurrentAnalysis(data);
        } else {
          // Clear expired data
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch (error) {
      console.error('Failed to load analysis from storage:', error);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const setAnalysis = (result: SkinAnalysisResult) => {
    setCurrentAnalysis(result);

    // Persist to localStorage with timestamp
    try {
      const storedData: StoredAnalysis = {
        data: result,
        timestamp: Date.now()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData));
    } catch (error) {
      console.error('Failed to save analysis to storage:', error);
    }
  };

  const clearAnalysis = () => {
    setCurrentAnalysis(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear analysis from storage:', error);
    }
  };

  return (
    <AnalysisContext.Provider value={{ currentAnalysis, setAnalysis, clearAnalysis }}>
      {children}
    </AnalysisContext.Provider>
  );
}

export function useAnalysis() {
  const context = useContext(AnalysisContext);
  if (context === undefined) {
    throw new Error('useAnalysis must be used within an AnalysisProvider');
  }
  return context;
}
