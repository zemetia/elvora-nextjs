import React from 'react';

const systems = [
  {
    id: "acne",
    title: "Acne Recovery System",
    description: "A 4-step protocol to eliminate bacteria and clear breakouts without stripping essential moisture.",
    forWhom: "Active acne, congestion, oily texture.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "brighten",
    title: "Brightening & Barrier",
    description: "Synergistic Vitamin C and Ceramides that erase oxidative damage and rebuild defense.",
    forWhom: "Dullness, pigmentation, environmental fatigue.",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "sensitive",
    title: "Reactive Skin System",
    description: "Hyper-minimalist formulas designed to quiet neuro-sensitivity and soothe visible redness.",
    forWhom: "Extreme reactivity, rosacea-prone, inflammation.",
    image: "https://images.unsplash.com/photo-1598440448057-07412733b702?auto=format&fit=crop&q=80&w=800"
  }
];

const SystemsDisplay: React.FC = () => {
  return (
    <section id="systems" className="py-32 bg-[#F9F9F8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sage text-[10px] font-bold uppercase tracking-[0.3em] block mb-6">Curated Protocols</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Designed as <span className="italic">Systems.</span></h2>
          <p className="text-gray-500 font-light leading-relaxed">We provide cohesive ecosystems of products. Because skin health is achieved through synergy, not isolated ingredients.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {systems.map((system) => (
            <div
              key={system.id}
              className={`group flex flex-col h-full transition-all duration-500 rounded-[3rem] p-6 -m-6 border border-transparent ${
                system.id === 'acne'
                  ? 'hover:border-sage/20 hover:bg-white hover:shadow-[0_32px_64px_-24px_rgba(132,169,140,0.25)]'
                  : 'hover:bg-white/50'
              }`}
            >
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-white shadow-sm mb-8">
                <img
                  src={system.image}
                  alt={system.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 glass rounded-full text-[9px] font-bold uppercase tracking-widest text-gray-600">Clinical Edition</span>
                </div>
              </div>

              <div className="flex-grow px-2">
                <h3 className="text-2xl font-serif mb-4 text-gray-900">{system.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 line-clamp-3">{system.description}</p>

                <div className="mb-10 pb-6 border-b border-gray-100">
                  <span className="block text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-2">Ideal For</span>
                  <p className="text-sm text-gray-700">{system.forWhom}</p>
                </div>
              </div>

              <button className="w-full py-4 bg-white border border-gray-200 text-gray-900 text-xs font-bold uppercase tracking-widest rounded-full group-hover:bg-gray-900 group-hover:text-white transition-all duration-500">
                View Protocol
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemsDisplay;
