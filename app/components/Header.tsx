'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
          ? 'bg-[#0b0b0e]/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg shadow-black/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Foundation Brand / Logo */}
        <a href="#" className="flex items-center gap-2 group">
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
          <a href="#about" className="hover:text-white transition">
            About
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold tracking-wide text-white transition backdrop-blur-md"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}