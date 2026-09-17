import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, ArrowUpRight } from 'lucide-react';

const FaqSection = ({ onRegisterClick }) => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Who is eligible to participate in Nexathon 2026?',
      a: 'Nexathon is open to all enrolled undergraduate, postgraduate, and research scholars across accredited universities and technical institutions globally. Both solo researchers and teams of up to 4 members are eligible.'
    },
    {
      q: 'Can a team submit to both Project Presentation and Paper Presentation?',
      a: 'Yes, teams can submit separate entries to both tracks provided the project prototype and research paper represent distinct work and are submitted via separate submission IDs.'
    },
    {
      q: 'What format should research papers follow for submission?',
      a: 'All research papers must strictly follow standard IEEE two-column formatting (between 4 to 6 pages in length, including references and figures). Submissions must be uploaded in PDF format with author names and affiliations clearly indicated.'
    },
    {
      q: 'Is there any registration fee for Nexathon 2026?',
      a: 'No, registration for Nexathon 2026 is completely free of charge. Shortlisted finalists will receive accommodation and meal support during the grand finale weekend.'
    },
    {
      q: 'Are cross-college and multi-disciplinary teams permitted?',
      a: 'Absolutely. We encourage interdisciplinary collaboration across departments (e.g. Computer Science, Mathematics, Electrical, Bio-informatics) and between students of different colleges or universities.'
    }
  ];

  return (
    <section id="faq" className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center scroll-mt-20">
      {/* Station Indicator */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-400/30 text-pink-400 text-xs font-bold font-mono tracking-wider uppercase mb-5 backdrop-blur-xl shadow-[0_0_15px_rgba(244,114,182,0.15)]">
        <Sparkles className="w-3.5 h-3.5 text-pink-400" />
        <span>LAKE STATION 05 • INQUIRIES & PORTAL</span>
      </div>

      {/* Section Title */}
      <h2 className="font-['Outfit','Space_Grotesk',sans-serif] font-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight text-white mb-5 text-center drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
        frequently asked <br />
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-amber-300">
          questions
        </span>
      </h2>

      <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto mb-12 text-center leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
        Everything you need to know about track eligibility, manuscript guidelines, hardware setups, and evaluation standards.
      </p>

      {/* Accordion List */}
      <div className="w-full space-y-4 mb-20">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${
                isOpen 
                  ? 'bg-black/50 border-cyan-500/40 shadow-[0_10px_30px_rgba(0,240,255,0.1)]' 
                  : 'bg-black/30 border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
              >
                <span className="text-sm sm:text-base font-bold text-white flex items-center gap-3">
                  <span className="text-xs font-mono text-cyan-400">0{idx + 1}</span>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'rotate-180 text-cyan-400' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Grand Call to Action Banner Glowing in the Lake Flow */}
      <div className="w-full relative rounded-3xl p-10 sm:p-14 bg-gradient-to-r from-cyan-950/60 via-black/70 to-pink-950/60 border border-white/15 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] text-center flex flex-col items-center overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute -top-24 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

        <span className="text-xs font-mono tracking-widest text-cyan-400 font-bold uppercase mb-3">
          SECURE YOUR BENCH AT NEXATHON 2026
        </span>
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          ready to shape the future of technology?
        </h3>
        <p className="text-zinc-300 text-xs sm:text-base max-w-xl mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Join hundreds of elite engineers, AI innovators, and research scholars on national stage.
        </p>

        <button
          onClick={onRegisterClick}
          className="text-sm sm:text-base py-3.5 px-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold flex items-center gap-2 shadow-[0_0_25px_rgba(255,119,0,0.55),inset_0_1px_0_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <span>Register Your Submission</span>
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default FaqSection;
