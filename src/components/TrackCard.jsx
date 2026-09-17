import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Award, ChevronRight, Terminal, FileText } from 'lucide-react';

const TrackCard = ({
  title,
  subtitle,
  trackNumber,
  category,
  highlights,
  icon: Icon,
  badgeColor,
  prizePool,
  onSelect,
  onKnowMore
}) => {
  const [hovered, setHovered] = useState(false);
  const isCyan = badgeColor === 'cyan';

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group rounded-3xl p-7 sm:p-9 bg-[#070d1e]/85 backdrop-blur-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden text-left ${
        isCyan
          ? 'border-white/10 hover:border-cyan-400/50 shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[0_24px_60px_rgba(0,240,255,0.15),inset_0_1px_1px_rgba(255,255,255,0.15)]'
          : 'border-white/10 hover:border-pink-400/50 shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[0_24px_60px_rgba(244,114,182,0.15),inset_0_1px_1px_rgba(255,255,255,0.15)]'
      }`}
    >
      {/* Top Specular Edge Glow */}
      <div 
        className={`absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none ${
          isCyan ? 'bg-cyan-400' : 'bg-pink-400'
        }`}
      />

      {/* Card Header */}
      <div>
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 ${
              isCyan
                ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                : 'bg-pink-500/10 text-pink-400 border-pink-500/30'
            }`}>
              <Icon className="w-5 h-5 stroke-[2]" />
            </div>

            <div>
              <span className={`text-[11px] font-mono font-bold tracking-widest uppercase ${
                isCyan ? 'text-cyan-400' : 'text-pink-400'
              }`}>
                TRACK 0{trackNumber}
              </span>
              <p className="text-xs text-zinc-400 font-mono">{category}</p>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300">
            <span className={`w-1.5 h-1.5 rounded-full ${isCyan ? 'bg-cyan-400 animate-pulse' : 'bg-pink-400 animate-pulse'}`} />
            <span>OPEN</span>
          </div>
        </div>

        {/* Card Title & Subtitle */}
        <h3 className="font-['Oxanium',sans-serif] text-2xl sm:text-[1.7rem] font-bold text-white tracking-tight mb-2.5">
          {title}
        </h3>
        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
          {subtitle}
        </p>

        {/* Feature Highlights */}
        <div className="space-y-2.5 mb-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-zinc-300">
              <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 stroke-[2] ${
                isCyan ? 'text-cyan-400' : 'text-pink-400'
              }`} />
              <span className="leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">BOUNTY</span>
            <span className="text-sm sm:text-base font-bold font-mono text-white tracking-tight">{prizePool}</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {/* Professional Know More Button */}
          <button
            onClick={onKnowMore}
            className="px-4 py-2 rounded-xl text-xs font-semibold font-mono tracking-wider text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all flex items-center gap-1 cursor-pointer"
          >
            <span>Know More</span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* High-Contrast Register Button */}
          <button 
            onClick={onSelect}
            className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
              isCyan
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:brightness-110 shadow-[0_0_15px_rgba(0,240,255,0.35)]'
                : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:brightness-110 shadow-[0_0_15px_rgba(244,114,182,0.35)]'
            }`}
          >
            <span>Register</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
