import React from 'react';

const reasons = [
  {
    title: "Dermatology-inspired",
    desc: "Formulations based on clinical standards used by world-class specialists."
  },
  {
    title: "Tropical-friendly",
    desc: "Designed to perform in humidity without clogging pores or feeling heavy."
  },
  {
    title: "Transparent Ingredients",
    desc: "No hidden fillers. Every ingredient is disclosed and its purpose explained."
  },
  {
    title: "Guided Routines",
    desc: "We don't just sell products; we provide a roadmap for your skin health."
  }
];

const WhyElvora: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-12">Why the ELVORA method <span className="italic">actually</span> works.</h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
              {reasons.map((reason, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sage" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-800">{reason.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1000"
              alt="Clinical lab setting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-sage/10 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyElvora;
