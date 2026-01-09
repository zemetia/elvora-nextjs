
export enum SkinConcern {
  ACNE = "Acne & Breakouts",
  SENSITIVE = "Sensitive Skin",
  DULL = "Dull & Uneven Tone",
  OILY = "Oily & Combination Skin",
  BARRIER = "Barrier Repair"
}

export interface SkinAnalysisResult {
  score: number;
  type: string;
  concerns: string[];
  recommendation: string;
  systemName: string;
  timeline: string;
  products: string[];
}

export interface SkincareSystem {
  id: string;
  title: string;
  description: string;
  forWhom: string;
  image: string;
}
