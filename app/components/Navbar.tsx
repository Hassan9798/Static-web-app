'use client';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0b1f14] shadow-2xl py-0'
          : 'bg-gradient-to-b from-[#0b1f14]/90 to-[#0b1f14]/10 py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-[#f59e0b] to-[#16a34a] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">
              M
            </div>
            <span className="text-white font-black text-base leading-tight">
              Mholyfeet &amp; Sons
              <br />
              <span className="text-[#4ade80] text-xs font-normal tracking-widest uppercase">Metal Recycling</span>
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#4ade80] transition-colors text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#4ade80] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#16a34a] text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-[#15803d] transition-all duration-300 shadow-lg shadow-green-900/40"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-white mb-1 transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-white mb-1 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b1f14] border-t border-green-900/40 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-[#4ade80] py-1 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#16a34a] text-white px-4 py-2 rounded-lg font-bold text-sm text-center hover:bg-[#15803d] transition-colors"
          >
            Get Quote
          </a>
        </div>
      )}
    </nav>
  );
}
