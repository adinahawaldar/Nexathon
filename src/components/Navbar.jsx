import React, { useState } from 'react';
import logo from '../assets/nexathon_logo.png';

const Navbar = ({ onRegisterClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'FAQ', href: '#faq' }
  ];

  const registrationLink = "https://forms.gle/Fz7EnLzh3i7u7UcMA";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3.5 md:py-4 transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">

        <a
          href="#hero"
          className="flex items-center gap-2 group cursor-pointer select-none"
>
          <img
            src={logo}
            alt="Nexathon Logo"
            className="h-9 w-9 sm:h-50 sm:w-60 object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 px-6 py-2 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono font-semibold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-950 text-xs font-mono font-bold uppercase tracking-wider shadow-sm hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            REGISTER NOW
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-white/[0.06] border border-white/15 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-white/[0.1] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span
              className={`w-3.5 h-0.5 bg-white transition-all duration-300 transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
            />
            <span
              className={`w-3.5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''
                }`}
            />
            <span
              className={`w-3.5 h-0.5 bg-white transition-all duration-300 transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
            />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black/75 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu Box */}
          <div className="md:hidden fixed top-16 left-3 right-3 sm:left-6 sm:right-6 bg-[#040816]/98 backdrop-blur-2xl rounded-2xl p-5 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-50 flex flex-col animate-in fade-in slide-in-from-top-2 duration-200">

            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-1 border-b border-white/10 text-[11px] font-mono uppercase tracking-widest text-zinc-400">
              <span>NAVIGATION</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[11px] text-zinc-400 hover:text-white transition-colors cursor-pointer font-bold tracking-wider"
              >
                CLOSE
              </button>
            </div>

            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-2 font-['Oxanium',sans-serif] text-sm font-semibold text-zinc-200 hover:text-white border-b border-white/5 hover:border-white/10 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 mt-2 border-t border-white/10 flex justify-center">
              <a
                href={registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-full bg-white hover:bg-zinc-100 text-slate-950 text-xs font-mono font-bold uppercase tracking-wider shadow-sm hover:scale-102 active:scale-98 transition-all cursor-pointer text-center"
              >
                REGISTER NOW
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;