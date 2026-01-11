'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  onOpenAnalysis?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAnalysis }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/analyze', label: 'Skin Scan' },
    { href: '/routine', label: 'Routines' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
      isScrolled ? 'py-4 glass border-b border-black/5' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-16">
          <Link href="/" className="text-2xl font-serif tracking-[0.15em] font-bold text-gray-900">
            ELVORA
          </Link>

          <div className="hidden lg:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-sage transition-all duration-300 ${
                  isActive(link.href) ? 'text-sage' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/analyze"
            className="hidden sm:block px-7 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] bg-gray-900 text-white rounded-full hover:bg-sage transition-all duration-500 shadow-sm"
          >
            Start Scan
          </Link>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-500 pt-24 px-6 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-8 text-2xl font-serif">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={isActive(link.href) ? 'text-sage' : ''}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
