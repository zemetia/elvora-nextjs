import { Product } from '@/lib/types';

// This file contains the complete product catalog
// Products are also referenced within system details in systems.ts

export const productsData: Product[] = [
  // Acne System Products
  {
    id: 'acne-1',
    name: 'Clarifying Gel Cleanser',
    category: 'Cleanser',
    description: 'Gentle foaming cleanser with salicylic acid to deep clean pores without stripping skin. Perfect for oily and acne-prone skin types.',
    keyIngredients: ['Salicylic Acid 2%', 'Glycerin', 'Aloe Vera', 'Green Tea Extract'],
    price: 320000,
    size: '150ml',
    image: 'https://images.unsplash.com/photo-1556228852-80c59cfcf1de?q=80&w=400'
  },
  {
    id: 'acne-2',
    name: 'BHA Clarifying Toner',
    category: 'Toner',
    description: 'Exfoliating toner that unclogs pores and refines skin texture while balancing pH levels.',
    keyIngredients: ['Salicylic Acid 2%', 'Witch Hazel', 'Niacinamide 5%', 'Allantoin'],
    price: 280000,
    size: '120ml',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400'
  },
  {
    id: 'acne-3',
    name: 'Niacinamide Serum 10%',
    category: 'Serum',
    description: 'Oil-control serum that minimizes pores, reduces sebum production, and fades post-acne marks.',
    keyIngredients: ['Niacinamide 10%', 'Zinc PCA', 'Hyaluronic Acid', 'Panthenol'],
    price: 450000,
    size: '30ml',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=400'
  },
  {
    id: 'acne-4',
    name: 'Centella Calming Moisturizer',
    category: 'Moisturizer',
    description: 'Lightweight gel moisturizer that hydrates without clogging pores while soothing inflammation.',
    keyIngredients: ['Centella Asiatica', 'Ceramides', 'Squalane', 'Madecassoside'],
    price: 380000,
    size: '50ml',
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=400'
  },
  {
    id: 'acne-5',
    name: 'Spot Treatment Gel',
    category: 'Treatment',
    description: 'Targeted treatment for active breakouts with fast-acting antibacterial and anti-inflammatory formula.',
    keyIngredients: ['Tea Tree Oil', 'Sulfur', 'Salicylic Acid', 'Camphor'],
    price: 220000,
    size: '15ml',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400'
  },

  // Brightening System Products
  {
    id: 'bright-1',
    name: 'Gentle Cream Cleanser',
    category: 'Cleanser',
    description: 'Nourishing cream cleanser that removes impurities while maintaining skin barrier and natural moisture.',
    keyIngredients: ['Ceramides', 'Glycerin', 'Oat Extract', 'Chamomile'],
    price: 340000,
    size: '150ml',
    image: 'https://images.unsplash.com/photo-1556228852-80c59cfcf1de?q=80&w=400'
  },
  {
    id: 'bright-2',
    name: 'Vitamin C Serum 15%',
    category: 'Serum',
    description: 'Stable vitamin C formula that brightens skin tone, reduces hyperpigmentation, and protects against environmental damage.',
    keyIngredients: ['L-Ascorbic Acid 15%', 'Vitamin E', 'Ferulic Acid', 'Hyaluronic Acid'],
    price: 520000,
    size: '30ml',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=400'
  },
  {
    id: 'bright-3',
    name: 'Alpha Arbutin Brightening Serum',
    category: 'Serum',
    description: 'Targeted treatment for dark spots, melasma, and uneven skin tone with powerful brightening actives.',
    keyIngredients: ['Alpha Arbutin 2%', 'Kojic Acid', 'Niacinamide 5%', 'Tranexamic Acid'],
    price: 480000,
    size: '30ml',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400'
  },
  {
    id: 'bright-4',
    name: 'Barrier Repair Moisturizer',
    category: 'Moisturizer',
    description: 'Rich moisturizer that locks in brightening actives while strengthening and repairing skin barrier.',
    keyIngredients: ['Ceramide Complex', 'Cholesterol', 'Fatty Acids', 'Niacinamide'],
    price: 420000,
    size: '50ml',
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=400'
  },
  {
    id: 'bright-5',
    name: 'Mineral SPF 50+ PA++++',
    category: 'Sunscreen',
    description: 'Broad spectrum mineral sunscreen essential for brightening routines. No white cast formula.',
    keyIngredients: ['Zinc Oxide 15%', 'Titanium Dioxide 5%', 'Niacinamide', 'Iron Oxides'],
    price: 380000,
    size: '50ml',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400'
  },

  // Sensitive Skin System Products
  {
    id: 'sens-1',
    name: 'Calming Milk Cleanser',
    category: 'Cleanser',
    description: 'Ultra-gentle, non-foaming cleanser that removes impurities without stripping or irritating sensitive skin.',
    keyIngredients: ['Oat Extract', 'Glycerin', 'Chamomile', 'Bisabolol'],
    price: 360000,
    size: '150ml',
    image: 'https://images.unsplash.com/photo-1556228852-80c59cfcf1de?q=80&w=400'
  },
  {
    id: 'sens-2',
    name: 'Centella Calming Toner',
    category: 'Toner',
    description: 'Alcohol-free toner that preps skin while providing instant calm and hydration to reactive skin.',
    keyIngredients: ['Centella Asiatica 40%', 'Panthenol', 'Hyaluronic Acid', 'Allantoin'],
    price: 300000,
    size: '120ml',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400'
  },
  {
    id: 'sens-3',
    name: 'Barrier Support Serum',
    category: 'Serum',
    description: 'Concentrated barrier repair serum with ceramides and madecassoside to strengthen compromised skin.',
    keyIngredients: ['Ceramide NP', 'Madecassoside', 'Cholesterol', 'Panthenol'],
    price: 540000,
    size: '30ml',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=400'
  },
  {
    id: 'sens-4',
    name: 'Intensive Repair Cream',
    category: 'Moisturizer',
    description: 'Rich, soothing cream that provides lasting comfort and protection to sensitive and reactive skin.',
    keyIngredients: ['Centella Asiatica', 'Ceramides', 'Shea Butter', 'Colloidal Oatmeal'],
    price: 460000,
    size: '50ml',
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=400'
  },
  {
    id: 'sens-5',
    name: 'Calming Facial Mist',
    category: 'Mist',
    description: 'Instant relief spray for reactive moments. Provides barrier support throughout the day.',
    keyIngredients: ['Centella Asiatica', 'Aloe Vera', 'Allantoin', 'Panthenol'],
    price: 240000,
    size: '100ml',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400'
  }
];

export function getProductById(id: string): Product | undefined {
  return productsData.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return productsData.filter(product => product.category === category);
}

export function getProductsByIds(ids: string[]): Product[] {
  return productsData.filter(product => ids.includes(product.id));
}
