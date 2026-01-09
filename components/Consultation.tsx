import React from 'react';

const Consultation: React.FC = () => {
  return (
    <section id="support" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-900 rounded-[3rem] overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1516533075015-a3838414c3ca?auto=format&fit=crop&q=80&w=1500"
              alt="Skin consultation"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 px-8 py-20 md:px-20 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Still have questions? <br /><span className="text-sage italic">Talk to a human.</span></h2>
              <p className="text-gray-300 text-lg font-light leading-relaxed">
                Personalization shouldn&apos;t feel rigid. Our Skin Advisors are ready to assist with routine adjustments and periodic check-ins to ensure your satisfaction.
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col gap-4 w-full sm:w-auto">
              <button className="px-10 py-5 bg-sage text-white rounded-full font-medium hover:bg-opacity-90 transition-all">
                Speak with an Advisor
              </button>
              <button className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all">
                Schedule Virtual Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
