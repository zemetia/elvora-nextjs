import { SkincareRoutine } from '@/lib/types';

export const routinesData: SkincareRoutine[] = [
  {
    id: 'routine-acne',
    name: 'Clear Skin Protocol',
    description: 'Comprehensive routine for acne-prone skin focusing on prevention, treatment, and post-acne mark fading',
    concern: 'Acne & Breakouts',
    duration: '8-10 weeks',
    difficulty: 'beginner',
    steps: {
      morning: [
        {
          id: 'acne-am-1',
          order: 1,
          productName: 'Clarifying Gel Cleanser',
          usage: 'Massage onto damp face for 60 seconds, focusing on oily areas. Rinse thoroughly with lukewarm water.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'acne-am-2',
          order: 2,
          productName: 'BHA Clarifying Toner',
          usage: 'Apply with cotton pad or pat into skin with clean hands. Let dry completely before next step.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'acne-am-3',
          order: 3,
          productName: 'Niacinamide Serum 10%',
          usage: 'Apply 3-4 drops to face and neck. Gently pat until absorbed.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'acne-am-4',
          order: 4,
          productName: 'Oil-Free Moisturizer',
          usage: 'Apply pea-sized amount evenly. Use more if skin feels tight.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'acne-am-5',
          order: 5,
          productName: 'Matte Finish SPF 50',
          usage: 'Apply generously as final step. Reapply every 2-3 hours if outdoors.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        }
      ],
      evening: [
        {
          id: 'acne-pm-1',
          order: 1,
          productName: 'Clarifying Gel Cleanser',
          usage: 'Double cleanse: massage for 60 seconds, rinse, then repeat to ensure all impurities are removed.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        },
        {
          id: 'acne-pm-2',
          order: 2,
          productName: 'BHA Clarifying Toner',
          usage: 'Apply generously with cotton pad. Allow to penetrate for 2-3 minutes.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        },
        {
          id: 'acne-pm-3',
          order: 3,
          productName: 'Spot Treatment Gel',
          usage: 'Dab directly onto active breakouts. Do not rinse off.',
          timeOfDay: 'evening',
          frequency: 'As needed'
        },
        {
          id: 'acne-pm-4',
          order: 4,
          productName: 'Niacinamide Serum 10%',
          usage: 'Apply 3-4 drops avoiding areas with spot treatment. Pat gently.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        },
        {
          id: 'acne-pm-5',
          order: 5,
          productName: 'Centella Calming Moisturizer',
          usage: 'Apply generously to seal in treatments and support overnight repair.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        }
      ]
    }
  },
  {
    id: 'routine-brightening',
    name: 'Radiance Revival Routine',
    description: 'Advanced brightening protocol targeting hyperpigmentation, dark spots, and dullness while protecting skin barrier',
    concern: 'Dull & Uneven Tone',
    duration: '10-12 weeks',
    difficulty: 'intermediate',
    steps: {
      morning: [
        {
          id: 'bright-am-1',
          order: 1,
          productName: 'Gentle Cream Cleanser',
          usage: 'Massage gently onto damp skin. Rinse with lukewarm water and pat dry.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'bright-am-2',
          order: 2,
          productName: 'Vitamin C Serum 15%',
          usage: 'Apply 4-5 drops to clean, dry skin. Wait 1-2 minutes before next step.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'bright-am-3',
          order: 3,
          productName: 'Hyaluronic Acid Serum',
          usage: 'Apply to slightly damp skin for maximum hydration. Pat gently.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'bright-am-4',
          order: 4,
          productName: 'Barrier Repair Moisturizer',
          usage: 'Apply evenly across face and neck to lock in serums.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'bright-am-5',
          order: 5,
          productName: 'Mineral SPF 50+ PA++++',
          usage: 'Apply generously. This step is CRITICAL for brightening results. Reapply every 2-3 hours.',
          timeOfDay: 'morning',
          frequency: 'Daily (NON-NEGOTIABLE)'
        }
      ],
      evening: [
        {
          id: 'bright-pm-1',
          order: 1,
          productName: 'Gentle Cream Cleanser',
          usage: 'Double cleanse if wearing sunscreen or makeup. First cleanse removes surface impurities, second deep cleans.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        },
        {
          id: 'bright-pm-2',
          order: 2,
          productName: 'Gentle AHA Toner',
          usage: 'Apply with cotton pad 3-4x per week to boost cell turnover. Skip on retinol nights.',
          timeOfDay: 'evening',
          frequency: '3-4x per week'
        },
        {
          id: 'bright-pm-3',
          order: 3,
          productName: 'Alpha Arbutin Brightening Serum',
          usage: 'Apply 3-4 drops focusing on areas with hyperpigmentation. Pat until absorbed.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        },
        {
          id: 'bright-pm-4',
          order: 4,
          productName: 'Retinol 0.5% (optional)',
          usage: 'Start 1-2x per week. Apply pea-sized amount. Gradually increase frequency.',
          timeOfDay: 'evening',
          frequency: '1-2x per week (build up)'
        },
        {
          id: 'bright-pm-5',
          order: 5,
          productName: 'Barrier Repair Moisturizer',
          usage: 'Apply generously to seal in actives. Use extra on retinol nights.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        }
      ]
    }
  },
  {
    id: 'routine-sensitive',
    name: 'Gentle Barrier Builder',
    description: 'Ultra-gentle routine designed to calm irritation, reduce redness, and rebuild compromised skin barrier',
    concern: 'Sensitive Skin',
    duration: '6-8 weeks',
    difficulty: 'beginner',
    steps: {
      morning: [
        {
          id: 'sens-am-1',
          order: 1,
          productName: 'Calming Milk Cleanser',
          usage: 'Massage gently with lukewarm (not hot) water. Pat dry with a soft towel - do not rub.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'sens-am-2',
          order: 2,
          productName: 'Centella Calming Toner',
          usage: 'Pat gently into skin with clean hands. Avoid rubbing or using rough cotton pads.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'sens-am-3',
          order: 3,
          productName: 'Barrier Support Serum',
          usage: 'Apply 3-4 drops. Press gently into skin with palms.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'sens-am-4',
          order: 4,
          productName: 'Intensive Repair Cream',
          usage: 'Apply generously. Press into skin rather than rubbing to avoid irritation.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'sens-am-5',
          order: 5,
          productName: 'Mineral Sunscreen SPF 45',
          usage: 'Choose mineral (zinc/titanium) over chemical sunscreens. Apply gently as final step.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        }
      ],
      evening: [
        {
          id: 'sens-pm-1',
          order: 1,
          productName: 'Calming Milk Cleanser',
          usage: 'Gently remove makeup/sunscreen. Take your time - rushed cleansing can irritate.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        },
        {
          id: 'sens-pm-2',
          order: 2,
          productName: 'Centella Calming Toner',
          usage: 'Apply generously. Let skin drink it in. This step provides immediate calm.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        },
        {
          id: 'sens-pm-3',
          order: 3,
          productName: 'Barrier Support Serum',
          usage: 'Apply 4-5 drops for intensive overnight repair. Focus on reactive areas.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        },
        {
          id: 'sens-pm-4',
          order: 4,
          productName: 'Intensive Repair Cream',
          usage: 'Apply thick layer. Use as a sleeping mask 2-3x per week for extra support.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        }
      ]
    }
  },
  {
    id: 'routine-antiaging',
    name: 'Youth Preservation Protocol',
    description: 'Advanced anti-aging routine targeting fine lines, loss of firmness, and overall skin health with powerful actives',
    concern: 'Fine Lines & Aging',
    duration: '12-16 weeks',
    difficulty: 'advanced',
    steps: {
      morning: [
        {
          id: 'anti-am-1',
          order: 1,
          productName: 'Antioxidant Cream Cleanser',
          usage: 'Massage gently to remove overnight treatments without stripping skin.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'anti-am-2',
          order: 2,
          productName: 'Vitamin C + Ferulic Serum 20%',
          usage: 'Apply 4-5 drops. This powerful antioxidant protects against free radical damage.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'anti-am-3',
          order: 3,
          productName: 'Peptide Complex Serum',
          usage: 'Apply 3-4 drops. Peptides support collagen production and skin firmness.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'anti-am-4',
          order: 4,
          productName: 'Eye Cream with Caffeine',
          usage: 'Gently pat around orbital bone. Never pull or tug delicate eye area.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'anti-am-5',
          order: 5,
          productName: 'Rich Moisturizer with Ceramides',
          usage: 'Apply to face and neck. Don\'t forget your neck - it shows aging too!',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'anti-am-6',
          order: 6,
          productName: 'Broad Spectrum SPF 50 PA++++',
          usage: 'Sunscreen is your #1 anti-aging tool. Apply liberally. Reapply throughout the day.',
          timeOfDay: 'morning',
          frequency: 'Daily (MOST IMPORTANT STEP)'
        }
      ],
      evening: [
        {
          id: 'anti-pm-1',
          order: 1,
          productName: 'Antioxidant Cream Cleanser',
          usage: 'Double cleanse thoroughly. Clean skin absorbs actives better.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        },
        {
          id: 'anti-pm-2',
          order: 2,
          productName: 'Glycolic Acid Toner 7%',
          usage: 'Apply 4-5x per week for gentle exfoliation. Skip on retinoid nights.',
          timeOfDay: 'evening',
          frequency: '4-5x per week'
        },
        {
          id: 'anti-pm-3',
          order: 3,
          productName: 'Retinol 1.0% or Tretinoin',
          usage: 'Gold standard for anti-aging. Start with pea-sized amount. Build tolerance gradually.',
          timeOfDay: 'evening',
          frequency: '5-7x per week'
        },
        {
          id: 'anti-pm-4',
          order: 4,
          productName: 'Hyaluronic Acid Serum',
          usage: 'Apply on slightly damp skin for plumping hydration.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        },
        {
          id: 'anti-pm-5',
          order: 5,
          productName: 'Eye Cream with Retinol',
          usage: 'Pat gently around eyes. Use dedicated eye retinol to avoid irritation.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        },
        {
          id: 'anti-pm-6',
          order: 6,
          productName: 'Rich Night Cream',
          usage: 'Seal everything in with an occlusive moisturizer. Apply generously to neck as well.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        },
        {
          id: 'anti-pm-7',
          order: 7,
          productName: 'Facial Oil (optional)',
          usage: '2-3x per week, add 2-3 drops of facial oil as final step for extra nourishment.',
          timeOfDay: 'evening',
          frequency: '2-3x per week'
        }
      ]
    }
  },
  {
    id: 'routine-hydration',
    name: 'Moisture Surge Routine',
    description: 'Intensive hydration routine for dry, dehydrated skin focusing on moisture retention and barrier support',
    concern: 'Dry & Dehydrated Skin',
    duration: '4-6 weeks',
    difficulty: 'beginner',
    steps: {
      morning: [
        {
          id: 'hydro-am-1',
          order: 1,
          productName: 'Hydrating Cream Cleanser',
          usage: 'Cleanse with lukewarm water. Avoid hot water which strips natural oils.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'hydro-am-2',
          order: 2,
          productName: 'Hydrating Essence',
          usage: 'Apply while skin is still damp for maximum absorption. Pat gently.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'hydro-am-3',
          order: 3,
          productName: 'Hyaluronic Acid Serum',
          usage: 'Apply 4-5 drops on damp skin. Hyaluronic acid holds 1000x its weight in water.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'hydro-am-4',
          order: 4,
          productName: 'Ceramide Moisturizer',
          usage: 'Apply generously. Ceramides prevent water loss throughout the day.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        },
        {
          id: 'hydro-am-5',
          order: 5,
          productName: 'Hydrating Sunscreen SPF 45',
          usage: 'Choose a moisturizing sunscreen formula. Apply liberally.',
          timeOfDay: 'morning',
          frequency: 'Daily'
        }
      ],
      evening: [
        {
          id: 'hydro-pm-1',
          order: 1,
          productName: 'Cleansing Oil',
          usage: 'Massage onto dry skin first to dissolve makeup/sunscreen. Then add water to emulsify.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        },
        {
          id: 'hydro-pm-2',
          order: 2,
          productName: 'Hydrating Cream Cleanser',
          usage: 'Second cleanse to ensure all impurities are removed without drying.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        },
        {
          id: 'hydro-pm-3',
          order: 3,
          productName: 'Hydrating Toner',
          usage: 'Apply multiple layers (7-skin method) for intensive hydration.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        },
        {
          id: 'hydro-pm-4',
          order: 4,
          productName: 'Hyaluronic Acid Serum',
          usage: 'Apply on damp skin. Wait 1-2 minutes before next step.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        },
        {
          id: 'hydro-pm-5',
          order: 5,
          productName: 'Rich Night Cream',
          usage: 'Apply thick layer. This seals in all the hydration layers.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        },
        {
          id: 'hydro-pm-6',
          order: 6,
          productName: 'Facial Oil',
          usage: 'Add 3-4 drops as final occlusive layer to lock in moisture overnight.',
          timeOfDay: 'evening',
          frequency: 'Daily'
        },
        {
          id: 'hydro-pm-7',
          order: 7,
          productName: 'Sleeping Mask',
          usage: '2-3x per week, apply a hydrating sleeping mask as the very last step.',
          timeOfDay: 'evening',
          frequency: '2-3x per week'
        }
      ]
    }
  }
];

export function getRoutineById(id: string): SkincareRoutine | undefined {
  return routinesData.find(routine => routine.id === id);
}

export function getRoutinesByConcern(concern: string): SkincareRoutine[] {
  return routinesData.filter(routine => routine.concern === concern);
}
