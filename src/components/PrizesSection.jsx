import React, { useState } from 'react';
import { Sparkles, Crown } from 'lucide-react';

const PrizesSection = () => {
  // 'paper' | 'project'
  const [activeTrack, setActiveTrack] = useState('paper');

  // Prize breakdown strictly adhering to user's specification:
  // Total: ₹20,000+
  // Paper: Winner ₹7,500 | 1st Runner Up ₹5,000 | 2nd Runner Up ₹3,000 (Total ₹15,500)
  // Project: Winner ₹3,000 | 1st Runner Up ₹2,000 | 2nd Runner Up ₹1,000 (Total ₹6,000)
  const tracksData = {
    paper: {
      name: 'Paper Presentation',
      category: 'RESEARCH & THEORETICAL RIGOR',
      subtotal: '₹15,500',
      prizes: {
        first: {
          rank: '01',
          tier: 'WINNER',
          tag: 'CHAMPION',
          amount: '₹7,500',
        },
        second: {
          rank: '02',
          tier: '1ST RUNNER UP',
          tag: 'RUNNER UP',
          amount: '₹5,000',
        },
        third: {
          rank: '03',
          tier: '2ND RUNNER UP',
          tag: '2ND RUNNER UP',
          amount: '₹3,000',
        }
      }
    },
    project: {
      name: 'Project Presentation',
      category: 'SOFTWARE & SYSTEMS INNOVATION',
      subtotal: '₹6,000',
      prizes: {
        first: {
          rank: '01',
          tier: 'WINNER',
          tag: 'CHAMPION',
          amount: '₹3,000',
        },
        second: {
          rank: '02',
          tier: '1ST RUNNER UP',
          tag: 'RUNNER UP',
          amount: '₹2,000',
        },
        third: {
          rank: '03',
          tier: '2ND RUNNER UP',
          tag: '2ND RUNNER UP',
          amount: '₹1,000',
        }
      }
    }
  };

  const current = tracksData[activeTrack];

  return (
    <section 
      id="prizes" 
      className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 pt-16 pb-20 md:pt-20 md:pb-28 flex flex-col items-center text-center scroll-mt-20 overflow-hidden"
    >
      {/* Subtle Central Contrast Backdrop */}
      <div className="absolute inset-0 max-w-5xl mx-auto -z-10 pointer-events-none flex items-center justify-center">
        <div 
          className="w-full h-full max-h-[640px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(2, 6, 23, 0.9) 0%, rgba(4, 8, 22, 0.5) 60%, transparent 90%)'
          }}
        />
      </div>

      {/* Top Header & Bounty Callout */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-zinc-300 text-xs font-mono font-semibold tracking-wider uppercase mb-3.5 shadow-[0_2px_15px_rgba(0,0,0,0.4)]">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>TOTAL PRIZE POOL • ₹20,000+</span>
      </div>

      <h2 className="font-['Oxanium','Space_Grotesk',sans-serif] font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white mb-3 text-center drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
        Championship Podiums.
      </h2>

      <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-6 text-center leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] px-4">
        Cash prize bounties awarded to top 3 winners across both presentation tracks.
      </p>

      {/* ========================================================================= */}
      {/* 2. TRACK TOGGLE (ELEVATED WITH GENEROUS BREATHING ROOM FROM PODIUMS) */}
      {/* ========================================================================= */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#080d1a]/95 backdrop-blur-xl border border-white/15 mb-14 sm:mb-20 shadow-[0_8px_30px_rgba(0,0,0,0.7)]">
        <button
          onClick={() => setActiveTrack('paper')}
          className={`px-5 sm:px-7 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
            activeTrack === 'paper'
              ? 'bg-white text-slate-950 shadow-[0_2px_16px_rgba(255,255,255,0.25)] scale-[1.02]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Paper Presentation <span className="text-[10px] opacity-75 font-normal">(₹15,500)</span>
        </button>

        <button
          onClick={() => setActiveTrack('project')}
          className={`px-5 sm:px-7 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
            activeTrack === 'project'
              ? 'bg-white text-slate-950 shadow-[0_2px_16px_rgba(255,255,255,0.25)] scale-[1.02]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Project Presentation <span className="text-[10px] opacity-75 font-normal">(₹6,000)</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 3. ISOMETRIC 3D PODIUM STAGE (EXECUTIVE PROFESSIONAL PALETTE • STYLE MATCHING IMAGE) */}
      {/* ========================================================================= */}
      <div className="w-full max-w-4xl mx-auto flex flex-row items-end justify-center gap-2.5 sm:gap-6 md:gap-8 pb-4 pt-2 min-h-[400px] sm:min-h-[480px]">
        
        {/* ------------------------------------------------------------- */}
        {/* PODIUM 2: 1ST RUNNER UP (LEFT • ARCHITECTURAL TITANIUM / MATTE WHITE) */}
        {/* ------------------------------------------------------------- */}
        <div className="flex flex-col items-center flex-1 max-w-[170px] sm:max-w-[240px] z-10 transition-transform duration-300 hover:-translate-y-2">
          
          {/* Stat & Callout Line (Reference image style) */}
          <div className="flex flex-col items-center mb-4">
            <span className="text-[clamp(1.4rem,4.2vw,2.5rem)] font-black font-mono tracking-tight text-white drop-shadow-[0_2px_15px_rgba(255,255,255,0.35)] leading-none mb-1.5">
              {current.prizes.second.amount}
            </span>
            <div className="flex flex-col text-left border-l-2 border-slate-300 pl-2">
              <span className="text-[9px] sm:text-[11px] font-mono font-bold tracking-wider text-slate-200 uppercase leading-none">
                RANK {current.prizes.second.rank}
              </span>
              <span className="text-[7.5px] sm:text-[9.5px] font-mono font-semibold tracking-wider text-slate-400 uppercase leading-tight mt-0.5">
                {current.prizes.second.tier}
              </span>
            </div>
          </div>

          {/* Minimal Cyber Rank Badge */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-800/80 border border-slate-500/40 backdrop-blur-md flex items-center justify-center text-slate-200 mb-2.5 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
            <span className="font-mono font-bold text-xs sm:text-sm text-slate-300">02</span>
          </div>

          {/* 3D Isometric Pedestal Block (Architectural Titanium / Deep Charcoal) */}
          <div className="w-full">
            <svg 
              viewBox="0 0 200 230" 
              className="w-full h-auto overflow-visible drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
            >
              <defs>
                <linearGradient id="proTitaniumTop" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="45%" stopColor="#f1f5f9" />
                  <stop offset="100%" stopColor="#cbd5e1" />
                </linearGradient>
                <linearGradient id="proTitaniumLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <linearGradient id="proTitaniumRight" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
              </defs>

              {/* Pedestal Top Face (Rhombus) */}
              <polygon points="100,20 190,50 100,80 10,50" fill="url(#proTitaniumTop)" stroke="#ffffff" strokeWidth="1" />
              
              {/* Etched Top Text */}
              <text 
                x="100" 
                y="52" 
                textAnchor="middle" 
                fill="#0f172a" 
                fontSize="11" 
                fontWeight="900" 
                fontFamily="'Oxanium', sans-serif"
                letterSpacing="1"
                transform="rotate(-5, 100, 52) skewX(20)"
              >
                1ST RUNNER UP
              </text>

              {/* Pedestal Left Face */}
              <polygon points="10,50 100,80 100,210 10,180" fill="url(#proTitaniumLeft)" stroke="#cbd5e1" strokeWidth="0.5" strokeOpacity="0.2" />
              {/* Etched Left Stencil Text */}
              <text 
                x="55" 
                y="130" 
                fill="#94a3b8" 
                opacity="0.4"
                fontSize="11" 
                fontWeight="900" 
                fontFamily="'Oxanium', sans-serif"
                transform="rotate(18, 55, 130) skewY(18)"
              >
                RANK 02
              </text>

              {/* Pedestal Right Face */}
              <polygon points="100,80 190,50 190,180 100,210" fill="url(#proTitaniumRight)" stroke="#94a3b8" strokeWidth="0.5" strokeOpacity="0.15" />
            </svg>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PODIUM 1: WINNER (CENTER • PRESTIGIOUS CHAMPIONSHIP GOLD • TALLEST) */}
        {/* ------------------------------------------------------------- */}
        <div className="flex flex-col items-center flex-1 max-w-[190px] sm:max-w-[270px] z-20 transition-transform duration-300 hover:-translate-y-2">
          
          {/* Stat & Callout Line (Reference image style) */}
          <div className="flex flex-col items-center mb-4">
            <span className="text-[clamp(1.9rem,5.5vw,3.6rem)] font-black font-mono tracking-tight text-amber-300 drop-shadow-[0_2px_24px_rgba(245,158,11,0.5)] leading-none mb-1.5">
              {current.prizes.first.amount}
            </span>
            <div className="flex flex-col text-left border-l-2 border-amber-400 pl-2">
              <span className="text-[10px] sm:text-[12px] font-mono font-black tracking-wider text-amber-300 uppercase leading-none">
                ★ RANK {current.prizes.first.rank} ★
              </span>
              <span className="text-[8px] sm:text-[10px] font-mono font-bold tracking-wider text-amber-200/90 uppercase leading-tight mt-0.5">
                {current.prizes.first.tier}
              </span>
            </div>
          </div>

          {/* Minimal Cyber Crown/Rank Badge */}
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-yellow-600/15 border border-amber-400/50 backdrop-blur-md flex items-center justify-center text-amber-300 mb-2.5 shadow-[0_4px_20px_rgba(245,158,11,0.35)]">
            <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
          </div>

          {/* 3D Isometric Pedestal Block (Gold / Obsidian Charcoal • Highest Elevation) */}
          <div className="w-full">
            <svg 
              viewBox="0 0 200 280" 
              className="w-full h-auto overflow-visible drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
            >
              <defs>
                <linearGradient id="proGoldTop" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fffbeb" />
                  <stop offset="35%" stopColor="#fef08a" />
                  <stop offset="75%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <linearGradient id="proGoldLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#78350f" />
                  <stop offset="100%" stopColor="#1c1917" />
                </linearGradient>
                <linearGradient id="proGoldRight" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#451a03" />
                  <stop offset="100%" stopColor="#0c0a09" />
                </linearGradient>
              </defs>

              {/* Pedestal Top Face (Rhombus) */}
              <polygon points="100,15 195,45 100,75 5,45" fill="url(#proGoldTop)" stroke="#fef3c7" strokeWidth="1.5" />
              
              {/* Etched Top Text like reference image ("WINNER") */}
              <text 
                x="100" 
                y="48" 
                textAnchor="middle" 
                fill="#451a03" 
                fontSize="13" 
                fontWeight="900" 
                fontFamily="'Oxanium', sans-serif"
                letterSpacing="1.5"
                transform="rotate(-5, 100, 48) skewX(20)"
              >
                WINNER
              </text>

              {/* Pedestal Left Face */}
              <polygon points="5,45 100,75 100,265 5,235" fill="url(#proGoldLeft)" stroke="#f59e0b" strokeWidth="0.8" strokeOpacity="0.3" />
              {/* Etched Left Stencil Text */}
              <text 
                x="50" 
                y="155" 
                fill="#fbbf24" 
                opacity="0.4"
                fontSize="12" 
                fontWeight="900" 
                fontFamily="'Oxanium', sans-serif"
                transform="rotate(18, 50, 155) skewY(18)"
              >
                1ST PLACE
              </text>

              {/* Pedestal Right Face */}
              <polygon points="100,75 195,45 195,235 100,265" fill="url(#proGoldRight)" stroke="#f59e0b" strokeWidth="0.8" strokeOpacity="0.2" />
              {/* Etched Right Text */}
              <text 
                x="145" 
                y="155" 
                fill="#f59e0b" 
                opacity="0.3"
                fontSize="11" 
                fontWeight="900" 
                fontFamily="'Oxanium', sans-serif"
                transform="rotate(-18, 145, 155) skewY(-18)"
              >
                NEXATHON
              </text>
            </svg>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PODIUM 3: 2ND RUNNER UP (RIGHT • DEEP BRONZE / CARBON CHARCOAL) */}
        {/* ------------------------------------------------------------- */}
        <div className="flex flex-col items-center flex-1 max-w-[170px] sm:max-w-[240px] z-10 transition-transform duration-300 hover:-translate-y-2">
          
          {/* Stat & Callout Line (Reference image style) */}
          <div className="flex flex-col items-center mb-4">
            <span className="text-[clamp(1.4rem,4.2vw,2.5rem)] font-black font-mono tracking-tight text-amber-100 drop-shadow-[0_2px_15px_rgba(249,115,22,0.3)] leading-none mb-1.5">
              {current.prizes.third.amount}
            </span>
            <div className="flex flex-col text-left border-l-2 border-amber-600/80 pl-2">
              <span className="text-[9px] sm:text-[11px] font-mono font-bold tracking-wider text-amber-200/90 uppercase leading-none">
                RANK {current.prizes.third.rank}
              </span>
              <span className="text-[7.5px] sm:text-[9.5px] font-mono font-semibold tracking-wider text-zinc-400 uppercase leading-tight mt-0.5">
                {current.prizes.third.tier}
              </span>
            </div>
          </div>

          {/* Minimal Cyber Rank Badge */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-stone-900/80 border border-amber-700/40 backdrop-blur-md flex items-center justify-center text-amber-200 mb-2.5 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
            <span className="font-mono font-bold text-xs sm:text-sm text-amber-400">03</span>
          </div>

          {/* 3D Isometric Pedestal Block (Matte Bronze / Charcoal) */}
          <div className="w-full">
            <svg 
              viewBox="0 0 200 190" 
              className="w-full h-auto overflow-visible drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
            >
              <defs>
                <linearGradient id="proBronzeTop" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fed7aa" />
                  <stop offset="50%" stopColor="#ea580c" />
                  <stop offset="100%" stopColor="#9a3412" />
                </linearGradient>
                <linearGradient id="proBronzeLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#7c2d12" />
                  <stop offset="100%" stopColor="#1c1917" />
                </linearGradient>
                <linearGradient id="proBronzeRight" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#431407" />
                  <stop offset="100%" stopColor="#0c0a09" />
                </linearGradient>
              </defs>

              {/* Pedestal Top Face (Rhombus) */}
              <polygon points="100,20 190,50 100,80 10,50" fill="url(#proBronzeTop)" stroke="#fed7aa" strokeWidth="1" />
              
              {/* Etched Top Text */}
              <text 
                x="100" 
                y="52" 
                textAnchor="middle" 
                fill="#270b04" 
                fontSize="11" 
                fontWeight="900" 
                fontFamily="'Oxanium', sans-serif"
                letterSpacing="1"
                transform="rotate(-5, 100, 52) skewX(20)"
              >
                2ND RUNNER UP
              </text>

              {/* Pedestal Left Face */}
              <polygon points="10,50 100,80 100,170 10,140" fill="url(#proBronzeLeft)" stroke="#ea580c" strokeWidth="0.5" strokeOpacity="0.2" />
              {/* Etched Left Stencil Text */}
              <text 
                x="55" 
                y="110" 
                fill="#ea580c" 
                opacity="0.35"
                fontSize="11" 
                fontWeight="900" 
                fontFamily="'Oxanium', sans-serif"
                transform="rotate(18, 55, 110) skewY(18)"
              >
                RANK 03
              </text>

              {/* Pedestal Right Face */}
              <polygon points="100,80 190,50 190,140 100,170" fill="url(#proBronzeRight)" stroke="#c2410c" strokeWidth="0.5" strokeOpacity="0.15" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PrizesSection;
