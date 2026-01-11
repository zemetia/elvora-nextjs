
export enum SkinConcern {
  ACNE = "Acne & Breakouts",
  SENSITIVE = "Sensitive Skin",
  DULL = "Dull & Uneven Tone",
  OILY = "Oily & Combination Skin",
  BARRIER = "Barrier Repair"
}

export interface SkinAnalysisResult {
  score: number;
  brightness: number;
  textureScore: number;
  poreScore: number;
  spotScore: number;
  wrinkleScore: number;
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

// Routine types
export interface RoutineStep {
  id: string;
  order: number;
  productName: string;
  productId?: string;
  usage: string;
  timeOfDay: 'morning' | 'evening' | 'both';
  frequency?: string;
}

export interface SkincareRoutine {
  id: string;
  name: string;
  description: string;
  concern: string;
  steps: {
    morning: RoutineStep[];
    evening: RoutineStep[];
  };
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

// Product types
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  keyIngredients: string[];
  price?: number;
  size?: string;
  image?: string;
}

// Before/After case types
export interface BeforeAfterCase {
  id: string;
  title: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  concerns: string[];
  productsUsed: string[];
}

// FAQ types
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

// Extended system details for system pages
export interface SystemDetail extends SkincareSystem {
  slug: string;
  heroImage: string;
  benefits: string[];
  ingredients: {
    key: string;
    purpose: string;
  }[];
  fullProducts: Product[];
  routine: SkincareRoutine;
  beforeAfterCases: BeforeAfterCase[];
  faq: FAQItem[];
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
