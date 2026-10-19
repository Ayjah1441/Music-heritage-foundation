'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fade in Hero content
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      );
    }

    // Fade in Project Cards
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.4, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-[#0b0b0e] text-[#f3f4f6]">
      {/* Hero Section */}
      <section ref={heroRef} className="max-w-3xl my-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Ferdinand Effah Music Heritage
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-6">
          Immersive sounds and cultural legacy built for the digital age.
        </p>
      </section>

      {/* 3D Container Section */}
      <section className="w-full max-w-4xl h-[400px] my-6 rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center shadow-2xl relative">
        <div className="text-center p-6">
          <div className="text-blue-500 font-semibold mb-2">3D Interactive Scene</div>
          <p className="text-gray-400 text-sm">3D elements ready for integration.</p>
        </div>
      </section>

      {/* Projects / Music Section */}
      <section ref={cardsRef} className="w-full max-w-4xl my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border border-gray-800 rounded-xl bg-gray-900/50 text-left">
          <h2 className="text-2xl font-semibold mb-2">Music Archive</h2>
          <p className="text-gray-400">Explore traditional recordings, arrangements, and modern fusion tracks.</p>
        </div>
        <div className="p-6 border border-gray-800 rounded-xl bg-gray-900/50 text-left">
          <h2 className="text-2xl font-semibold mb-2">Cultural Initiatives</h2>
          <p className="text-gray-400">Community outreach, educational workshops, and digital preservation projects.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-gray-500 text-sm">
        <p>© 2026 Ferdinand Effah Music Heritage. All rights reserved.</p>
      </footer>
    </main>
  );
}