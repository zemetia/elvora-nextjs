import React from 'react';
import Link from 'next/link';

const concerns = [
  { type: "Acne & Congestion", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600" },
  { type: "Sensitive Skin", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600" },
  { type: "Dullness & Tone", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600" },
  { type: "Oily & Shine", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600" },
  { type: "Barrier Repair", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600" },
];

const ConcernSelector: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-sage text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">The Selection</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">Identify your <br /><span className="italic font-light">primary skin challenge.</span></h2>
          </div>
          <Link
            href="/analyze"
            className="pb-2 border-b-2 border-sage text-sage text-sm font-bold uppercase tracking-widest hover:text-gray-900 hover:border-gray-900 transition-all"
          >
            I need guidance. Scan Now →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {concerns.map((concern, idx) => (
            <Link
              key={idx}
              href="/analyze"
              className="group relative aspect-[4/6] overflow-hidden rounded-[2rem] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 bg-gray-50 block"
            >
              <img
                src={concern.image}
                alt={concern.type}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-white font-serif text-xl tracking-wide group-hover:translate-x-2 transition-transform duration-500">{concern.type}</span>
                <span className="text-white/40 text-[9px] uppercase tracking-[0.2em] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">Explore Protocol</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConcernSelector;
