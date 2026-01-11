import { SystemDetail } from '@/lib/types';

export const systemsData: SystemDetail[] = [
  {
    id: '1',
    title: 'Acne Recovery System',
    slug: 'acne-recovery',
    description: 'A comprehensive protocol designed to target active breakouts, reduce inflammation, and prevent future acne formation.',
    forWhom: 'Ideal for acne-prone skin, oily skin, and those experiencing persistent breakouts',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000',
    heroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1920',
    benefits: [
      'Reduces active breakouts within 2-3 weeks',
      'Controls excess sebum production',
      'Minimizes post-acne marks and scarring',
      'Prevents future breakout formation',
      'Strengthens skin barrier function',
      'Reduces inflammation and redness'
    ],
    ingredients: [
      {
        key: 'Salicylic Acid 2%',
        purpose: 'Deep pore cleansing and exfoliation to prevent clogged pores'
      },
      {
        key: 'Niacinamide 10%',
        purpose: 'Regulates sebum production and reduces inflammation'
      },
      {
        key: 'Centella Asiatica',
        purpose: 'Calms irritation and promotes healing of active breakouts'
      },
      {
        key: 'Tea Tree Oil',
        purpose: 'Natural antibacterial agent that targets acne-causing bacteria'
      },
      {
        key: 'Zinc PCA',
        purpose: 'Controls oil production and provides antimicrobial benefits'
      }
    ],
    fullProducts: [
      {
        id: 'acne-1',
        name: 'Clarifying Gel Cleanser',
        category: 'Cleanser',
        description: 'Gentle foaming cleanser with salicylic acid to deep clean pores without stripping skin',
        keyIngredients: ['Salicylic Acid 2%', 'Glycerin', 'Aloe Vera'],
        price: 320000,
        size: '150ml',
        image: 'https://images.unsplash.com/photo-1556228852-80c59cfcf1de?q=80&w=400'
      },
      {
        id: 'acne-2',
        name: 'BHA Clarifying Toner',
        category: 'Toner',
        description: 'Exfoliating toner that unclogs pores and refines skin texture',
        keyIngredients: ['Salicylic Acid 2%', 'Witch Hazel', 'Niacinamide'],
        price: 280000,
        size: '120ml',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400'
      },
      {
        id: 'acne-3',
        name: 'Niacinamide Serum 10%',
        category: 'Serum',
        description: 'Oil-control serum that minimizes pores and fades acne marks',
        keyIngredients: ['Niacinamide 10%', 'Zinc PCA', 'Hyaluronic Acid'],
        price: 450000,
        size: '30ml',
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=400'
      },
      {
        id: 'acne-4',
        name: 'Centella Calming Moisturizer',
        category: 'Moisturizer',
        description: 'Lightweight gel moisturizer that hydrates without clogging pores',
        keyIngredients: ['Centella Asiatica', 'Ceramides', 'Squalane'],
        price: 380000,
        size: '50ml',
        image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=400'
      },
      {
        id: 'acne-5',
        name: 'Spot Treatment Gel',
        category: 'Treatment',
        description: 'Targeted treatment for active breakouts with fast-acting formula',
        keyIngredients: ['Tea Tree Oil', 'Sulfur', 'Salicylic Acid'],
        price: 220000,
        size: '15ml',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400'
      }
    ],
    routine: {
      id: 'acne-routine',
      name: 'Acne Recovery Routine',
      description: 'Complete morning and evening regimen for acne-prone skin',
      concern: 'Acne & Breakouts',
      duration: '8-10 weeks',
      difficulty: 'beginner',
      steps: {
        morning: [
          {
            id: 'am-1',
            order: 1,
            productName: 'Clarifying Gel Cleanser',
            productId: 'acne-1',
            usage: 'Massage onto damp face for 60 seconds, rinse thoroughly',
            timeOfDay: 'morning',
            frequency: 'Daily'
          },
          {
            id: 'am-2',
            order: 2,
            productName: 'BHA Clarifying Toner',
            productId: 'acne-2',
            usage: 'Apply with cotton pad or pat into skin with clean hands',
            timeOfDay: 'morning',
            frequency: 'Daily'
          },
          {
            id: 'am-3',
            order: 3,
            productName: 'Niacinamide Serum 10%',
            productId: 'acne-3',
            usage: 'Apply 3-4 drops to face and neck, gently pat to absorb',
            timeOfDay: 'morning',
            frequency: 'Daily'
          },
          {
            id: 'am-4',
            order: 4,
            productName: 'Centella Calming Moisturizer',
            productId: 'acne-4',
            usage: 'Apply pea-sized amount evenly across face',
            timeOfDay: 'morning',
            frequency: 'Daily'
          }
        ],
        evening: [
          {
            id: 'pm-1',
            order: 1,
            productName: 'Clarifying Gel Cleanser',
            productId: 'acne-1',
            usage: 'Double cleanse: massage for 60 seconds, rinse, repeat',
            timeOfDay: 'evening',
            frequency: 'Daily'
          },
          {
            id: 'pm-2',
            order: 2,
            productName: 'BHA Clarifying Toner',
            productId: 'acne-2',
            usage: 'Apply generously with cotton pad, let dry',
            timeOfDay: 'evening',
            frequency: 'Daily'
          },
          {
            id: 'pm-3',
            order: 3,
            productName: 'Spot Treatment Gel',
            productId: 'acne-5',
            usage: 'Dab directly onto active breakouts, do not rinse',
            timeOfDay: 'evening',
            frequency: 'As needed'
          },
          {
            id: 'pm-4',
            order: 4,
            productName: 'Niacinamide Serum 10%',
            productId: 'acne-3',
            usage: 'Apply 3-4 drops avoiding active breakouts with spot treatment',
            timeOfDay: 'evening',
            frequency: 'Daily'
          },
          {
            id: 'pm-5',
            order: 5,
            productName: 'Centella Calming Moisturizer',
            productId: 'acne-4',
            usage: 'Apply generously to seal in treatments overnight',
            timeOfDay: 'evening',
            frequency: 'Daily'
          }
        ]
      }
    },
    beforeAfterCases: [
      {
        id: 'case-1',
        title: 'Severe Cystic Acne Transformation',
        duration: '10 weeks',
        beforeImage: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=400',
        afterImage: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=400',
        concerns: ['Cystic Acne', 'Inflammation', 'Post-Acne Marks'],
        productsUsed: ['Clarifying Gel Cleanser', 'BHA Clarifying Toner', 'Niacinamide Serum', 'Spot Treatment']
      },
      {
        id: 'case-2',
        title: 'Hormonal Breakouts Cleared',
        duration: '8 weeks',
        beforeImage: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=400',
        afterImage: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=400',
        concerns: ['Hormonal Acne', 'Oily Skin'],
        productsUsed: ['Full Acne Recovery System']
      }
    ],
    faq: [
      {
        question: 'How long before I see results?',
        answer: 'Most users notice reduced inflammation within 1-2 weeks. Significant improvement in active breakouts typically occurs within 4-6 weeks of consistent use. Complete transformation and prevention of new breakouts can be expected within 8-10 weeks.'
      },
      {
        question: 'Can I use this if I have sensitive skin?',
        answer: 'Yes, while this system contains active ingredients, it also includes calming components like Centella Asiatica and ceramides. Start by using the BHA toner every other day and gradually increase frequency as your skin adapts. Always patch test new products.'
      },
      {
        question: 'Will this work for hormonal acne?',
        answer: 'Yes, the Niacinamide Serum helps regulate sebum production which is often dysregulated by hormonal fluctuations. However, severe hormonal acne may also benefit from internal treatment. Consult a dermatologist for comprehensive care.'
      },
      {
        question: 'Can I use this with other acne treatments?',
        answer: 'If you are using prescription retinoids or other prescribed treatments, consult your dermatologist before combining products. Avoid using with other strong exfoliants to prevent over-exfoliation.'
      }
    ]
  },
  {
    id: '2',
    title: 'Brightening Barrier System',
    slug: 'brightening-barrier',
    description: 'Advanced formulation targeting hyperpigmentation, dark spots, and dull skin while strengthening the skin barrier.',
    forWhom: 'Perfect for uneven skin tone, dark spots, post-acne marks, and dull complexion',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1000',
    heroImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1920',
    benefits: [
      'Visibly fades dark spots and hyperpigmentation',
      'Evens out skin tone and texture',
      'Boosts radiance and natural glow',
      'Strengthens skin barrier against environmental damage',
      'Reduces appearance of post-acne marks',
      'Provides antioxidant protection'
    ],
    ingredients: [
      {
        key: 'Vitamin C 15%',
        purpose: 'Powerful antioxidant that brightens and evens skin tone'
      },
      {
        key: 'Alpha Arbutin 2%',
        purpose: 'Targets stubborn dark spots and prevents melanin formation'
      },
      {
        key: 'Niacinamide 5%',
        purpose: 'Fades hyperpigmentation and strengthens skin barrier'
      },
      {
        key: 'Tranexamic Acid',
        purpose: 'Reduces appearance of melasma and discoloration'
      },
      {
        key: 'Ceramide Complex',
        purpose: 'Repairs and maintains healthy skin barrier function'
      }
    ],
    fullProducts: [
      {
        id: 'bright-1',
        name: 'Gentle Cream Cleanser',
        category: 'Cleanser',
        description: 'Nourishing cleanser that removes impurities while maintaining skin barrier',
        keyIngredients: ['Ceramides', 'Glycerin', 'Oat Extract'],
        price: 340000,
        size: '150ml',
        image: 'https://images.unsplash.com/photo-1556228852-80c59cfcf1de?q=80&w=400'
      },
      {
        id: 'bright-2',
        name: 'Vitamin C Serum 15%',
        category: 'Serum',
        description: 'Stable vitamin C formula that brightens and protects against free radicals',
        keyIngredients: ['Vitamin C 15%', 'Vitamin E', 'Ferulic Acid'],
        price: 520000,
        size: '30ml',
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=400'
      },
      {
        id: 'bright-3',
        name: 'Alpha Arbutin Brightening Serum',
        category: 'Serum',
        description: 'Targeted treatment for dark spots and uneven skin tone',
        keyIngredients: ['Alpha Arbutin 2%', 'Kojic Acid', 'Niacinamide 5%'],
        price: 480000,
        size: '30ml',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400'
      },
      {
        id: 'bright-4',
        name: 'Barrier Repair Moisturizer',
        category: 'Moisturizer',
        description: 'Rich moisturizer that locks in brightening actives and strengthens barrier',
        keyIngredients: ['Ceramide Complex', 'Cholesterol', 'Fatty Acids'],
        price: 420000,
        size: '50ml',
        image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=400'
      },
      {
        id: 'bright-5',
        name: 'Mineral SPF 50+ PA++++',
        category: 'Sunscreen',
        description: 'Broad spectrum protection essential for brightening routine',
        keyIngredients: ['Zinc Oxide', 'Titanium Dioxide', 'Niacinamide'],
        price: 380000,
        size: '50ml',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400'
      }
    ],
    routine: {
      id: 'brightening-routine',
      name: 'Brightening Barrier Routine',
      description: 'Comprehensive brightening and barrier repair regimen',
      concern: 'Dull & Uneven Tone',
      duration: '10-12 weeks',
      difficulty: 'intermediate',
      steps: {
        morning: [
          {
            id: 'am-1',
            order: 1,
            productName: 'Gentle Cream Cleanser',
            productId: 'bright-1',
            usage: 'Massage gently onto damp skin, rinse with lukewarm water',
            timeOfDay: 'morning',
            frequency: 'Daily'
          },
          {
            id: 'am-2',
            order: 2,
            productName: 'Vitamin C Serum 15%',
            productId: 'bright-2',
            usage: 'Apply 4-5 drops to clean, dry skin. Wait 1 minute to absorb',
            timeOfDay: 'morning',
            frequency: 'Daily'
          },
          {
            id: 'am-3',
            order: 3,
            productName: 'Barrier Repair Moisturizer',
            productId: 'bright-4',
            usage: 'Apply evenly across face and neck',
            timeOfDay: 'morning',
            frequency: 'Daily'
          },
          {
            id: 'am-4',
            order: 4,
            productName: 'Mineral SPF 50+ PA++++',
            productId: 'bright-5',
            usage: 'Apply generously as final step. Reapply every 2-3 hours',
            timeOfDay: 'morning',
            frequency: 'Daily (ESSENTIAL)'
          }
        ],
        evening: [
          {
            id: 'pm-1',
            order: 1,
            productName: 'Gentle Cream Cleanser',
            productId: 'bright-1',
            usage: 'Double cleanse if wearing sunscreen/makeup',
            timeOfDay: 'evening',
            frequency: 'Daily'
          },
          {
            id: 'pm-2',
            order: 2,
            productName: 'Alpha Arbutin Brightening Serum',
            productId: 'bright-3',
            usage: 'Apply 3-4 drops, focusing on areas with hyperpigmentation',
            timeOfDay: 'evening',
            frequency: 'Daily'
          },
          {
            id: 'pm-3',
            order: 3,
            productName: 'Barrier Repair Moisturizer',
            productId: 'bright-4',
            usage: 'Apply generously to seal in actives overnight',
            timeOfDay: 'evening',
            frequency: 'Daily'
          }
        ]
      }
    },
    beforeAfterCases: [
      {
        id: 'case-3',
        title: 'Melasma Fading Success',
        duration: '12 weeks',
        beforeImage: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=400',
        afterImage: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=400',
        concerns: ['Melasma', 'Dark Spots', 'Uneven Tone'],
        productsUsed: ['Full Brightening Barrier System']
      }
    ],
    faq: [
      {
        question: 'Can I skip sunscreen on cloudy days?',
        answer: 'No! UV rays penetrate clouds and can cause further pigmentation. Sunscreen is the most critical step in any brightening routine. Without daily SPF protection, brightening actives cannot work effectively.'
      },
      {
        question: 'Can I use vitamin C and alpha arbutin together?',
        answer: 'Yes! This combination is very effective. Use Vitamin C in the morning for antioxidant protection and Alpha Arbutin in the evening for targeted dark spot treatment. Both work synergistically.'
      },
      {
        question: 'Why is barrier repair important for brightening?',
        answer: 'A damaged skin barrier can lead to inflammation, which triggers more pigmentation. By strengthening your barrier with ceramides, your skin can better tolerate brightening actives and heal more effectively.'
      }
    ]
  },
  {
    id: '3',
    title: 'Sensitive Skin System',
    slug: 'sensitive-skin',
    description: 'Ultra-gentle formulation designed to calm irritation, reduce redness, and build resilience in reactive sensitive skin.',
    forWhom: 'Designed for sensitive, reactive, redness-prone, and barrier-compromised skin',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1000',
    heroImage: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1920',
    benefits: [
      'Reduces redness and irritation within days',
      'Strengthens compromised skin barrier',
      'Increases skin resilience to environmental stressors',
      'Soothes reactive and inflamed skin',
      'Hydrates without causing sensitivity',
      'Gentle enough for daily use'
    ],
    ingredients: [
      {
        key: 'Centella Asiatica Extract',
        purpose: 'Powerful anti-inflammatory that calms and heals irritated skin'
      },
      {
        key: 'Ceramide Complex NP',
        purpose: 'Repairs and maintains healthy barrier function'
      },
      {
        key: 'Panthenol (Vitamin B5)',
        purpose: 'Deeply hydrates and promotes skin healing'
      },
      {
        key: 'Madecassoside',
        purpose: 'Reduces inflammation and strengthens skin'
      },
      {
        key: 'Allantoin',
        purpose: 'Soothes irritation and promotes cell regeneration'
      }
    ],
    fullProducts: [
      {
        id: 'sens-1',
        name: 'Calming Milk Cleanser',
        category: 'Cleanser',
        description: 'Ultra-gentle, non-foaming cleanser that removes impurities without stripping',
        keyIngredients: ['Oat Extract', 'Glycerin', 'Chamomile'],
        price: 360000,
        size: '150ml',
        image: 'https://images.unsplash.com/photo-1556228852-80c59cfcf1de?q=80&w=400'
      },
      {
        id: 'sens-2',
        name: 'Centella Calming Toner',
        category: 'Toner',
        description: 'Alcohol-free toner that preps skin while providing instant calm',
        keyIngredients: ['Centella Asiatica', 'Panthenol', 'Hyaluronic Acid'],
        price: 300000,
        size: '120ml',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400'
      },
      {
        id: 'sens-3',
        name: 'Barrier Support Serum',
        category: 'Serum',
        description: 'Concentrated barrier repair serum with ceramides and madecassoside',
        keyIngredients: ['Ceramide NP', 'Madecassoside', 'Cholesterol'],
        price: 540000,
        size: '30ml',
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=400'
      },
      {
        id: 'sens-4',
        name: 'Intensive Repair Cream',
        category: 'Moisturizer',
        description: 'Rich, soothing cream that provides lasting comfort to sensitive skin',
        keyIngredients: ['Centella Asiatica', 'Ceramides', 'Shea Butter'],
        price: 460000,
        size: '50ml',
        image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=400'
      },
      {
        id: 'sens-5',
        name: 'Calming Facial Mist',
        category: 'Mist',
        description: 'Instant relief spray for reactive moments and barrier support throughout the day',
        keyIngredients: ['Centella Asiatica', 'Aloe Vera', 'Allantoin'],
        price: 240000,
        size: '100ml',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400'
      }
    ],
    routine: {
      id: 'sensitive-routine',
      name: 'Sensitive Skin Routine',
      description: 'Gentle, barrier-focused regimen for reactive skin',
      concern: 'Sensitive Skin',
      duration: '6-8 weeks',
      difficulty: 'beginner',
      steps: {
        morning: [
          {
            id: 'am-1',
            order: 1,
            productName: 'Calming Milk Cleanser',
            productId: 'sens-1',
            usage: 'Massage gently with lukewarm water, pat dry with soft towel',
            timeOfDay: 'morning',
            frequency: 'Daily'
          },
          {
            id: 'am-2',
            order: 2,
            productName: 'Centella Calming Toner',
            productId: 'sens-2',
            usage: 'Pat gently into skin with clean hands (avoid rubbing)',
            timeOfDay: 'morning',
            frequency: 'Daily'
          },
          {
            id: 'am-3',
            order: 3,
            productName: 'Barrier Support Serum',
            productId: 'sens-3',
            usage: 'Apply 3-4 drops, press gently into skin',
            timeOfDay: 'morning',
            frequency: 'Daily'
          },
          {
            id: 'am-4',
            order: 4,
            productName: 'Intensive Repair Cream',
            productId: 'sens-4',
            usage: 'Apply generously, pressing into skin rather than rubbing',
            timeOfDay: 'morning',
            frequency: 'Daily'
          }
        ],
        evening: [
          {
            id: 'pm-1',
            order: 1,
            productName: 'Calming Milk Cleanser',
            productId: 'sens-1',
            usage: 'Gently remove makeup/sunscreen, rinse thoroughly',
            timeOfDay: 'evening',
            frequency: 'Daily'
          },
          {
            id: 'pm-2',
            order: 2,
            productName: 'Centella Calming Toner',
            productId: 'sens-2',
            usage: 'Apply generously, let skin drink it in',
            timeOfDay: 'evening',
            frequency: 'Daily'
          },
          {
            id: 'pm-3',
            order: 3,
            productName: 'Barrier Support Serum',
            productId: 'sens-3',
            usage: 'Apply 4-5 drops for intensive overnight repair',
            timeOfDay: 'evening',
            frequency: 'Daily'
          },
          {
            id: 'pm-4',
            order: 4,
            productName: 'Intensive Repair Cream',
            productId: 'sens-4',
            usage: 'Apply thick layer as sleeping mask 2-3x per week',
            timeOfDay: 'evening',
            frequency: 'Daily'
          }
        ]
      }
    },
    beforeAfterCases: [
      {
        id: 'case-4',
        title: 'Rosacea Calming Journey',
        duration: '6 weeks',
        beforeImage: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=400',
        afterImage: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=400',
        concerns: ['Rosacea', 'Redness', 'Sensitivity'],
        productsUsed: ['Full Sensitive Skin System']
      }
    ],
    faq: [
      {
        question: 'How quickly will I see redness reduction?',
        answer: 'Most users notice calmer, less reactive skin within 3-5 days. Significant reduction in baseline redness typically occurs within 2-3 weeks of consistent use.'
      },
      {
        question: 'Can I use this if I have rosacea?',
        answer: 'Yes, this system is formulated specifically for reactive conditions like rosacea. However, continue working with your dermatologist for comprehensive rosacea management.'
      },
      {
        question: 'Is this fragrance-free?',
        answer: 'Yes, all products in the Sensitive Skin System are completely fragrance-free and formulated without known irritants like essential oils, alcohol, and drying sulfates.'
      }
    ]
  }
];

export function getSystemBySlug(slug: string): SystemDetail | undefined {
  return systemsData.find(system => system.slug === slug);
}

export function getAllSystemSlugs(): string[] {
  return systemsData.map(system => system.slug);
}
