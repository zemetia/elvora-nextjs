import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F9FAFB] pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#" className="text-3xl font-serif tracking-widest font-bold mb-6 inline-block">ELVORA</a>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              Premium clinical skincare guided by intelligence. We believe in transparency, simplicity, and personalized skin health for every gender.
            </p>
            <div className="flex gap-4">
              {['instagram', 'twitter', 'facebook', 'linkedin'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-sage hover:border-sage transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-gray-900 mb-6 uppercase tracking-widest text-xs">About</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-sage transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Philosophy</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Ingredients</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-900 mb-6 uppercase tracking-widest text-xs">Systems</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-sage transition-colors">Acne Recovery</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Brightening</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Sensitive</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Anti-Aging</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-900 mb-6 uppercase tracking-widest text-xs">Education</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-sage transition-colors">Skin Academy</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Routine Guide</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Ingredient Glossary</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Journal</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-900 mb-6 uppercase tracking-widest text-xs">Support</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-sage transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} ELVORA Skincare. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-sage">Privacy Policy</a>
            <a href="#" className="hover:text-sage">Terms of Service</a>
            <a href="#" className="hover:text-sage">AI Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
