import React from 'react';
import { Trophy, Award, Medal, Gift, Sparkles, Star, Zap } from 'lucide-react';

const PrizesSection = () => {
  return (
    <section id="prizes" className="lake-section">
      {/* Station Indicator */}
      <div className="lake-badge lake-badge-amber">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>LAKE STATION 03 • PRIZE POOL & REWARDS</span>
      </div>

      {/* Section Title */}
      <h2 className="lake-heading">
        ₹100,000+ bounty pool. <br />
        <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-pink-400 bg-clip-text text-transparent">
          national honor & rewards.
        </span>
      </h2>

      <p className="lake-subdesc">
        Excellence deserves celebration. Stand atop the podium and claim prestigious trophies, generous cash grants, accelerator incubation, and industry networking.
      </p>

      {/* 3D Crystal Pedestals Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl items-end mb-16">
        
        {/* 1st Runner Up (Left - Rank 2) */}
        <div className="lake-pedestal lake-pedestal-rank2 group order-2 md:order-1">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          <div>
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-6 group-hover:scale-110 transition-transform">
              <Medal className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">RUNNER UP</span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-2">Second Prize</h3>
            <div className="text-3xl font-extrabold font-mono text-white mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              ₹30,000
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 mb-6">
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Silver Trophy of Distinction</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Mentorship from Tier-1 Tech Leads</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Developer Cloud Credits Package</span>
              </li>
            </ul>
          </div>
          <div className="pt-4 border-t border-white/10 text-xs font-mono text-cyan-400">
            SILVER MEDALLION
          </div>
        </div>

        {/* Grand Winner (Center - Rank 1 - Highest Pedestal) */}
        <div className="lake-pedestal lake-pedestal-rank1 group md:-translate-y-6 order-1 md:order-2">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black text-[11px] font-mono font-black tracking-widest uppercase shadow-lg">
            OVERALL CHAMPION
          </div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
          <div>
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(251,191,36,0.3)]">
              <Trophy className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">GRAND WINNER</span>
            <h3 className="text-3xl font-extrabold text-white mt-1 mb-2">First Prize</h3>
            <div className="text-4xl font-black font-mono text-white mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-pink-300">
              ₹50,000
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-200 mb-8">
              <li className="flex items-center gap-2 font-medium">
                <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Gold Grand Trophy & National Plaque</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Venture Incubation & Fast-Track Access</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Direct Executive Technical Interview Pass</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>$2,500 Cloud & Infrastructure Grant</span>
              </li>
            </ul>
          </div>
          <div className="pt-4 border-t border-amber-500/20 text-xs font-mono text-amber-400 font-bold flex items-center justify-between">
            <span>GOLD DISTINCTION</span>
            <span>TOP HONORS</span>
          </div>
        </div>

        {/* Best Research Paper (Right - Rank 3) */}
        <div className="lake-pedestal lake-pedestal-rank3 group order-3">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
          <div>
            <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-400/30 flex items-center justify-center text-pink-300 mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono text-pink-400 font-bold uppercase tracking-wider">RESEARCH FELLOWSHIP</span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-2">Best Paper Award</h3>
            <div className="text-3xl font-extrabold font-mono text-white mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400">
              ₹20,000
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 mb-6">
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <span>Crystal Research Paper Trophy</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <span>Publication Grant & Review Advisory</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <span>Dedicated Fellow Research Connect</span>
              </li>
            </ul>
          </div>
          <div className="pt-4 border-t border-white/10 text-xs font-mono text-pink-400">
            RESEARCH LAUREATE
          </div>
        </div>

      </div>

      {/* Perks For All Participants */}
      <div className="w-full max-w-4xl p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
            <Gift className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Guaranteed Perks For All Shortlisted Finalists</h4>
            <p className="text-xs text-zinc-400">Commemorative Nexathon Swag Kit, Verified Certificate & Access to Workshops</p>
          </div>
        </div>
        <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 whitespace-nowrap">
          ALL FINALISTS
        </span>
      </div>
    </section>
  );
};

export default PrizesSection;
