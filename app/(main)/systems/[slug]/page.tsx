import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getSystemBySlug, getAllSystemSlugs } from '@/lib/data/systems';

export async function generateStaticParams() {
  const slugs = getAllSystemSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function SystemPage({ params }: { params: { slug: string } }) {
  const system = getSystemBySlug(params.slug);

  if (!system) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FCFCFB]">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={system.heroImage}
          alt={system.title}
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-end pb-20">
          <div className="text-white max-w-3xl">
            <span className="inline-block px-5 py-2 mb-6 text-xs font-bold tracking-[0.3em] text-sage border border-sage/40 rounded-full uppercase bg-sage/10 backdrop-blur-sm">
              Clinical System
            </span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">{system.title}</h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
              {system.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/analyze"
                className="px-8 py-4 bg-sage text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-500"
              >
                Start with This System
              </Link>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-all duration-500">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sage text-xs font-bold uppercase tracking-[0.3em] block mb-4">
                System Overview
              </span>
              <h2 className="text-4xl font-serif text-gray-900 mb-6">
                Designed for <span className="italic font-light">lasting results</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {system.forWhom}
              </p>

              <div className="space-y-4">
                {system.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-sage flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src={system.image}
                  alt={system.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Ingredients */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sage text-xs font-bold uppercase tracking-[0.3em] block mb-4">
              The Science
            </span>
            <h2 className="text-4xl font-serif text-gray-900 mb-4">
              How <span className="italic font-light">it works</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our formulations combine powerful active ingredients backed by clinical research
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {system.ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{ingredient.key}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{ingredient.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sage text-xs font-bold uppercase tracking-[0.3em] block mb-4">
              Complete System
            </span>
            <h2 className="text-4xl font-serif text-gray-900 mb-4">
              Product <span className="italic font-light">Lineup</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every product is formulated to work synergistically for maximum efficacy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {system.fullProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-sage font-bold mb-2 block">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>

                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">
                      Key Ingredients
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.keyIngredients.slice(0, 3).map((ingredient, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-gray-50 rounded-full text-gray-600 border border-gray-200"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  {product.price && (
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">
                          Rp {(product.price / 1000).toFixed(0)}K
                        </span>
                        {product.size && (
                          <span className="text-sm text-gray-400 ml-2">/ {product.size}</span>
                        )}
                      </div>
                      <button className="w-10 h-10 rounded-full bg-sage text-white flex items-center justify-center hover:bg-gray-900 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Routine */}
      <section className="py-24 bg-[#F2F4F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sage text-xs font-bold uppercase tracking-[0.3em] block mb-4">
              Your Protocol
            </span>
            <h2 className="text-4xl font-serif text-gray-900 mb-4">
              Recommended <span className="italic font-light">Routine</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow this sequence for optimal results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Morning Routine */}
            <div className="bg-white rounded-[3rem] p-10 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-serif text-gray-900">Morning Routine</h3>
              </div>

              <div className="space-y-4">
                {system.routine.steps.morning.map((step, index) => (
                  <div key={step.id} className="flex gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-1">{step.productName}</h4>
                      <p className="text-xs text-gray-600">{step.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Evening Routine */}
            <div className="bg-white rounded-[3rem] p-10 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                <h3 className="text-2xl font-serif text-gray-900">Evening Routine</h3>
              </div>

              <div className="space-y-4">
                {system.routine.steps.evening.map((step, index) => (
                  <div key={step.id} className="flex gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-1">{step.productName}</h4>
                      <p className="text-xs text-gray-600">{step.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/routine"
              className="inline-block px-10 py-5 bg-gray-900 text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-sage transition-all duration-500"
            >
              View All Routines
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sage text-xs font-bold uppercase tracking-[0.3em] block mb-4">
              Questions
            </span>
            <h2 className="text-4xl font-serif text-gray-900">
              Frequently <span className="italic font-light">Asked</span>
            </h2>
          </div>

          <div className="space-y-6">
            {system.faq.map((item, index) => (
              <details
                key={index}
                className="group bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-semibold text-gray-900 pr-8">{item.question}</h3>
                  <svg
                    className="w-5 h-5 text-sage transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1B2B20] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to start your <span className="italic font-light text-sage">transformation?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Get a personalized analysis to see if this system is right for your unique skin profile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/analyze"
              className="px-10 py-5 bg-sage text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-500"
            >
              Analyze My Skin
            </Link>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-all duration-500">
              Add System to Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
