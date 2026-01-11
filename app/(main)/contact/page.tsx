'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { faqData } from '@/lib/data/faq';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#FCFCFB] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <span className="text-sage text-xs font-bold uppercase tracking-[0.3em] block mb-6">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
            We're <span className="italic font-light">Here to Help</span>
          </h1>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Have questions about our products, your routine, or the AI analysis? Our skincare advisors are ready to assist.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 mb-24">
          {/* Contact Form - Left Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100 sticky top-32">
              <h2 className="text-2xl font-serif text-gray-900 mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-sage focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-sage focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-sage focus:outline-none transition-colors"
                    placeholder="+62 XXX XXXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-sage focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="routine-help">Routine Assistance</option>
                    <option value="ai-analysis">AI Analysis Question</option>
                    <option value="order-support">Order Support</option>
                    <option value="ingredient-question">Ingredient Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-sage focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-2xl">
                    <p className="text-green-700 text-sm">
                      Thank you! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                    <p className="text-red-700 text-sm">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-500 ${
                    isSubmitting
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-900 text-white hover:bg-sage shadow-xl'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* FAQ & Contact Info - Right Side */}
          <div className="lg:col-span-3 space-y-12">
            {/* Alternative Contact Methods */}
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://wa.me/62XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-sage"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp Chat</h3>
                <p className="text-gray-600 text-sm mb-4">Get instant responses to quick questions</p>
                <span className="text-sage text-sm font-bold uppercase tracking-wider group-hover:underline">
                  Start Chat →
                </span>
              </a>

              <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center text-sage mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-4">Detailed inquiries & consultations</p>
                <a href="mailto:support@elvora.com" className="text-sage text-sm font-bold uppercase tracking-wider hover:underline">
                  support@elvora.com
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Business Hours</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span>Saturday</span>
                  <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Sunday</span>
                  <span className="font-semibold text-gray-900">Closed</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-6 italic">
                * Response time: Within 24 hours on business days
              </p>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-8">
                Frequently <span className="italic font-light">Asked</span>
              </h2>

              <div className="space-y-6">
                {faqData.slice(0, 2).map((category) => (
                  <div key={category.category}>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-sage mb-4">
                      {category.category}
                    </h3>
                    <div className="space-y-4">
                      {category.items.slice(0, 3).map((item, index) => (
                        <details
                          key={index}
                          className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
                        >
                          <summary className="flex items-center justify-between cursor-pointer list-none">
                            <h4 className="font-semibold text-gray-900 pr-8">{item.question}</h4>
                            <svg
                              className="w-5 h-5 text-sage transition-transform group-open:rotate-180 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </summary>
                          <p className="mt-4 text-gray-600 leading-relaxed text-sm">{item.answer}</p>
                        </details>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
                <Link
                  href="#"
                  className="inline-block px-8 py-4 bg-gray-50 text-gray-900 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors border border-gray-200"
                >
                  View All FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#1B2B20] to-[#2a3f31] rounded-[3rem] p-12 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Need Personalized <span className="italic font-light text-sage">Guidance?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI analyze your skin and recommend a custom protocol tailored to your unique needs
          </p>
          <Link
            href="/analyze"
            className="inline-block px-10 py-5 bg-sage text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-500 shadow-xl"
          >
            Start Free Analysis
          </Link>
        </div>
      </div>
    </div>
  );
}
