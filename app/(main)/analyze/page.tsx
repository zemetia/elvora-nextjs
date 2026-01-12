import { Metadata } from 'next';
import AnalyzeContent from './AnalyzeContent';

export const metadata: Metadata = {
  title: "AI Skin Analysis - Elvora",
};

export default function AnalyzePage() {
  return <AnalyzeContent />;
}
