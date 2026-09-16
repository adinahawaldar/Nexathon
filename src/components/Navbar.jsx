import React, { useState } from 'react';
import { Cpu, Menu, X, Shield, ArrowUpRight, Presentation, FileText, Trophy } from 'lucide-react';

const Navbar = ({ onRegisterClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="ref-header">
      {/* Left Brand Pill */}
      <a href="#" className="brand-pill">
        <Shield className="w-4 h-4 text-orange-400" />
        <span>nexathon</span>
      </a>

      {/* Center Nav Glass Bar */}
      <div className="hidden md:flex nav-center-pill">
        <a href="#hero" className="nav-link-item">
          overview
        </a>
        <a href="#about" className="nav-link-item">
          about
        </a>
        <a href="#tracks" className="nav-link-item">
          tracks
        </a>
        <a href="#prizes" className="nav-link-item">
          prizes
        </a>
        <a href="#timeline" className="nav-link-item">
          timeline
        </a>
        <a href="#faq" className="nav-link-item">
          faq
        </a>
      </div>

      {/* Right Action Button */}
      <div className="hidden sm:flex items-center">
        <button onClick={onRegisterClick} className="nav-btn-pill">
          register now
        </button>
      </div>

      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-zinc-300 hover:text-white p-2"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-zinc-950/95 backdrop-blur-xl rounded-3xl p-6 flex flex-col gap-4 border border-zinc-800 text-left z-50">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white py-2 border-b border-zinc-800 flex justify-between">
            <span>about</span>
            <Shield className="w-4 h-4 text-orange-400" />
          </a>
          <a href="#tracks" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white py-2 border-b border-zinc-800 flex justify-between">
            <span>competition tracks</span>
            <Presentation className="w-4 h-4 text-cyan-400" />
          </a>
          <a href="#prizes" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white py-2 border-b border-zinc-800 flex justify-between">
            <span>prize pool</span>
            <Trophy className="w-4 h-4 text-amber-400" />
          </a>
          <a href="#timeline" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white py-2 border-b border-zinc-800 flex justify-between">
            <span>timeline</span>
            <Cpu className="w-4 h-4 text-pink-400" />
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white py-2 border-b border-zinc-800 flex justify-between">
            <span>faq</span>
            <FileText className="w-4 h-4 text-cyan-400" />
          </a>
          <button onClick={() => { setMobileMenuOpen(false); onRegisterClick(); }} className="nav-btn-pill w-full mt-2 py-3 justify-center">
            register now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
