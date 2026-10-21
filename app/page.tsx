'use client';

import Header from './components/Header';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#0b0b0e] text-white overflow-x-hidden selection:bg-blue-500 selection:text-white font-sans">
      
      {/* Fixed Header */}
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* 3D Canvas Background (Spline Embed) */}
        <div className="absolute inset-0 z-0 opacity-80">
          <iframe 
            src="https://my.spline.design/soundwawe-0lKtoZzhAxXRJ1VuG8Q6ED1b/" 
            className="w-full h-full border-0 pointer-events-auto"
            title="3D Soundwave Scene"
          />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 text-center px-6 pointer-events-none max-w-4xl mt-12">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl text-white">
            Ferdinand Effah <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Music Heritage Foundation
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 pointer-events-auto max-w-2xl mx-auto">
            Preserving cultural sounds and pioneering modern musical heritage for the digital generation.
          </p>

          <div className="mt-8 flex justify-center gap-4 pointer-events-auto">
            <a
              href="#mission"
              className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 font-semibold transition shadow-lg shadow-blue-500/25 active:scale-95 inline-block"
            >
              Discover Our Mission
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT & MISSION SECTION ================= */}
      <section id="mission" className="relative z-10 py-28 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#0b0b0e] to-[#121218]">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3">
              The Vision
            </h2>
            <p className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto">
              Honoring the past, shaping the soundscape of tomorrow.
            </p>
          </div>

          {/* Mission Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition backdrop-blur-xl group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold mb-6 group-hover:scale-110 transition">
                01
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Cultural Preservation</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Archiving authentic traditional recordings, archival materials, and classic arrangements to protect our rich musical history.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/50 transition backdrop-blur-xl group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold mb-6 group-hover:scale-110 transition">
                02
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Creative Innovation</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Bridging acoustic roots with modern digital production, empowering artists to experiment across genres and mediums.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 transition backdrop-blur-xl group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold mb-6 group-hover:scale-110 transition">
                03
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Community & Mentorship</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Supporting emerging vocalists, instrumentalists, and producers through workshops, collaborative releases, and mentorship.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= MUSIC & RELEASES SECTION ================= */}
      <section id="music" className="relative z-10 py-28 px-6 md:px-16 lg:px-24 bg-[#0b0b0e] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-3">
                Featured Catalog
              </h2>
              <p className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Latest Releases & Archives
              </p>
            </div>
            <p className="text-gray-400 text-sm max-w-sm mt-4 md:mt-0">
              Explore our latest singles, EPs, and preserved cultural audio arrangements distributed worldwide.
            </p>
          </div>

          {/* Releases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Release Card 1 */}
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-indigo-500/50 transition group flex flex-col justify-between backdrop-blur-xl">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide border border-blue-500/20">
                    Official EP
                  </span>
                  <span className="text-xs text-gray-400">2026 Release</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-indigo-300 transition">
                  Heritage Soundwaves EP
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  A fusion of traditional acoustic rhythms and modern digital soundscapes, blending rich heritage vocals with contemporary instrumentation.
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition cursor-pointer">
                    ▶
                  </div>
                  <span className="text-xs font-medium text-gray-300">Preview Track</span>
                </div>
                <span className="text-xs font-semibold text-blue-400 hover:underline cursor-pointer">
                  Listen on Streaming →
                </span>
              </div>
            </div>

            {/* Release Card 2 */}
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-purple-500/50 transition group flex flex-col justify-between backdrop-blur-xl">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-wide border border-purple-500/20">
                    Archival Single
                  </span>
                  <span className="text-xs text-gray-400">Classic Series</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-300 transition">
                  Roots & Resonance
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Restored archival recordings capturing authentic vocal harmonies, classic percussion, and timeless cultural compositions.
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 group-hover:scale-110 transition cursor-pointer">
                    ▶
                  </div>
                  <span className="text-xs font-medium text-gray-300">Preview Track</span>
                </div>
                <span className="text-xs font-semibold text-purple-400 hover:underline cursor-pointer">
                  Explore Archive →
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 py-12 px-6 md:px-16 lg:px-24 bg-[#070709] border-t border-white/10 text-gray-400 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-500 flex items-center justify-center font-bold text-white text-xs">
              FE
            </div>
            <span className="font-semibold text-white tracking-tight">
              Ferdinand Effah Music Heritage Foundation
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          <p className="text-xs text-gray-500">
            © 2026 FEMHF. All rights reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}