'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0b0e]/85 backdrop-blur-md border-b border-white/10 py-4 shadow-lg shadow-black/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Foundation Brand / Logo */}
        <a href="#" className="flex items-center gap-2 group z-50">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-purple-500 flex items-center justify-center font-bold text-white text-sm shadow-md group-hover:scale-105 transition">
            FE
          </div>
          <span className="font-bold text-lg md:text-xl tracking-tight text-white group-hover:text-blue-400 transition">
            FEMHF
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition">
            Home
          </a>
          <a href="#mission" className="hover:text-white transition">
            Mission
          </a>
          <a href="#music" className="hover:text-white transition">
            Releases
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold tracking-wide text-white transition backdrop-blur-md"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden z-50 p-2 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-center">
            <span
              className={`h-0.5 w-full bg-white rounded transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white rounded transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white rounded transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0b0b0e]/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 md:hidden text-lg font-medium text-white transition-all">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Home
          </a>
          <a
            href="#mission"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Mission
          </a>
          <a
            href="#music"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Releases
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Contact
          </a>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-semibold text-white shadow-lg shadow-blue-500/25"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}