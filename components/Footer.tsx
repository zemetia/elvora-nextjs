import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F9FAFB] pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" className="text-3xl font-serif tracking-widest font-bold mb-6 inline-block">
              ELVORA
            </Link>
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
            <h5 className="font-semibold text-gray-900 mb-6 uppercase tracking-widest text-xs">Company</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-sage transition-colors">About Us</Link></li>
              <li><Link href="/about" className="hover:text-sage transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-sage transition-colors">Contact</Link></li>
              <li><Link href="/analyze" className="hover:text-sage transition-colors">AI Skin Scan</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-900 mb-6 uppercase tracking-widest text-xs">Products</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/systems/acne-recovery" className="hover:text-sage transition-colors">Acne Recovery</Link></li>
              <li><Link href="/systems/brightening-barrier" className="hover:text-sage transition-colors">Brightening</Link></li>
              <li><Link href="/systems/sensitive-skin" className="hover:text-sage transition-colors">Sensitive</Link></li>
              <li><Link href="/routine" className="hover:text-sage transition-colors">All Routines</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-900 mb-6 uppercase tracking-widest text-xs">Resources</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/routine" className="hover:text-sage transition-colors">Routine Guide</Link></li>
              <li><Link href="/analyze" className="hover:text-sage transition-colors">Skin Analysis</Link></li>
              <li><Link href="/contact" className="hover:text-sage transition-colors">Consultation</Link></li>
              <li><Link href="/about" className="hover:text-sage transition-colors">Our Technology</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-900 mb-6 uppercase tracking-widest text-xs">Support</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/contact" className="hover:text-sage transition-colors">Contact Us</Link></li>
              <li><Link href="/contact" className="hover:text-sage transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-sage transition-colors">Shipping</Link></li>
              <li><Link href="#" className="hover:text-sage transition-colors">Returns</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} ELVORA Skincare. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            <Link href="#" className="hover:text-sage">Privacy Policy</Link>
            <Link href="#" className="hover:text-sage">Terms of Service</Link>
            <Link href="#" className="hover:text-sage">AI Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
