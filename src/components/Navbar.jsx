import React, { useState } from 'react';
import { Cpu, Menu, X, Shield, ArrowUpRight, Presentation, FileText, Trophy, Sparkles } from 'lucide-react';

const Navbar = ({ onRegisterClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3 md:py-4 flex items-center justify-between bg-gradient-to-b from-[#030716]/90 via-[#030716]/50 to-transparent backdrop-blur-xl transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Brand Pill */}
        <a href="#hero" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/15 text-white text-sm font-bold tracking-tight hover:scale-105 transition-transform flex-shrink-0">
          <Shield className="w-4 h-4 text-orange-400 flex-shrink-0 animate-pulse" />
          <span className="font-bold font-mono tracking-wider">NEXATHON</span>
        </a>

        {/* Center Nav Glass Bar (Desktop XL) */}
        <div className="hidden xl:flex items-center gap-6 px-7 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
          <a href="#hero" className="text-zinc-300 hover:text-white text-xs uppercase tracking-wider font-semibold transition-colors duration-200">
            overview
          </a>
          <a href="#tracks" className="text-zinc-300 hover:text-white text-xs uppercase tracking-wider font-semibold transition-colors duration-200">
            tracks
          </a>
          <a href="#prizes" className="text-zinc-300 hover:text-white text-xs uppercase tracking-wider font-semibold transition-colors duration-200">
            prizes
          </a>
          <a href="#timeline" className="text-zinc-300 hover:text-white text-xs uppercase tracking-wider font-semibold transition-colors duration-200">
            timeline
          </a>
          <a href="#faq" className="text-zinc-300 hover:text-white text-xs uppercase tracking-wider font-semibold transition-colors duration-200">
            faq
          </a>
        </div>

        {/* Right Action Button & Mobile Trigger */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          {/* Desktop & Tablet Register Button */}
          <button 
            onClick={onRegisterClick} 
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-slate-950 text-xs font-bold uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.45)] active:scale-95 transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            <span>register now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile / Tablet Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-zinc-200 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Click Dismiss */}
          <div 
            className="xl:hidden fixed inset-0 bg-black/70 backdrop-blur-md z-40 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu Box */}
          <div className="xl:hidden fixed top-16 left-3 right-3 sm:left-6 sm:right-6 bg-[#040816]/95 backdrop-blur-2xl rounded-3xl p-6 flex flex-col gap-3.5 border border-cyan-500/25 shadow-[0_20px_60px_rgba(0,0,0,0.95)] z-50 text-left animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NEXATHON 2026 NAVIGATION</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-400 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <a 
              href="#hero" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-zinc-200 hover:text-cyan-300 py-2.5 px-3 rounded-xl hover:bg-white/5 flex items-center justify-between font-medium text-sm transition-colors"
            >
              <span>Overview</span>
              <Shield className="w-4 h-4 text-orange-400" />
            </a>

            <a 
              href="#tracks" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-zinc-200 hover:text-cyan-300 py-2.5 px-3 rounded-xl hover:bg-white/5 flex items-center justify-between font-medium text-sm transition-colors"
            >
              <span>Competition Tracks</span>
              <Presentation className="w-4 h-4 text-pink-400" />
            </a>

            <a 
              href="#prizes" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-zinc-200 hover:text-cyan-300 py-2.5 px-3 rounded-xl hover:bg-white/5 flex items-center justify-between font-medium text-sm transition-colors"
            >
              <span>Prize Pool (₹20,000+)</span>
              <Trophy className="w-4 h-4 text-amber-400" />
            </a>

            <a 
              href="#timeline" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-zinc-200 hover:text-cyan-300 py-2.5 px-3 rounded-xl hover:bg-white/5 flex items-center justify-between font-medium text-sm transition-colors"
            >
              <span>Roadmap & Timeline</span>
              <Cpu className="w-4 h-4 text-blue-400" />
            </a>

            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-zinc-200 hover:text-cyan-300 py-2.5 px-3 rounded-xl hover:bg-white/5 flex items-center justify-between font-medium text-sm transition-colors"
            >
              <span>FAQ & Support</span>
              <FileText className="w-4 h-4 text-cyan-400" />
            </a>

            <button 
              onClick={() => { setMobileMenuOpen(false); onRegisterClick(); }} 
              className="mt-2 w-full py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-black font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,119,0,0.5)] transition-all cursor-pointer"
            >
              <span>Register for Nexathon</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
