import React from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

const TrackCard = ({
  trackNumber,
  title,
  category,
  subtitle,
  dateDayMonth = '09.10',
  dateYear = '26',
  teamSize,
  fee,
  eventDate,
  domains,
  prizePool,
  image,
  onSelect,
  onKnowMore,
  isLast = false
}) => {
  return (
    <div className={`group w-full py-8 sm:py-10 ${isLast ? 'border-b border-white/15' : ''} hover:bg-white/[0.02] transition-colors duration-300`}>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
        
        {/* Left Sub-Group: Thumbnail + Date + Vertical Divider */}
        <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
          {/* Square Image Thumbnail */}
          <div 
            onClick={onKnowMore}
            className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl overflow-hidden border border-white/15 shadow-lg flex-shrink-0 group-hover:border-cyan-400/40 transition-colors cursor-pointer"
          >
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-1.5 left-2 text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-black/70 text-zinc-200 border border-white/10">
              TRACK 0{trackNumber}
            </span>
          </div>

          {/* Date Column (matching reference: 09.10 / 26) */}
          <div className="flex flex-col items-start justify-center pr-2 min-w-[75px]">
            <span className="font-['Oxanium',sans-serif] text-3xl sm:text-4xl font-black text-white tracking-tight leading-none">
              {dateDayMonth}
            </span>
            <span className="text-zinc-500 font-semibold text-lg sm:text-xl font-mono mt-1">
              {dateYear}
            </span>
          </div>

          {/* Vertical Separator Line (as in reference image) */}
          <div className="w-[1px] h-20 sm:h-24 bg-white/15 hidden md:block" />
        </div>

        {/* Center Column: Title & Domain Pills */}
        <div className="flex-1 min-w-[220px] max-w-md">
          <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-cyan-400 block mb-1">
            {category}
          </span>
          <h3 
            onClick={onKnowMore}
            className="font-['Oxanium',sans-serif] text-2xl sm:text-3xl font-bold text-white tracking-tight cursor-pointer hover:text-cyan-300 transition-colors"
          >
            {title}
          </h3>
          
          {/* Domain Pills (matching reference image outline tag format) */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3.5">
            {domains && domains.map((domain, i) => (
              <span 
                key={i}
                className="px-2.5 py-1 rounded-md border border-white/15 bg-white/[0.04] text-[11px] font-mono text-zinc-300 hover:border-cyan-400/40 hover:text-white transition-colors"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Description, Key Details Strip & Action Buttons */}
        <div className="w-full lg:w-auto lg:max-w-xl flex-1 flex flex-col justify-between gap-4">
          {/* Description */}
          <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
            {subtitle}
          </p>

          {/* Key Details Strip (Team Size, Fee, Prize Pool, Venue) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 pb-1 border-t border-white/10 text-xs font-mono">
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">TEAM SIZE</span>
              <span className="text-white font-semibold text-xs mt-0.5">{teamSize}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">REG. FEE</span>
              <span className="text-emerald-400 font-semibold text-xs mt-0.5">{fee}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">PRIZE POOL</span>
              <span className="text-amber-300 font-semibold text-xs mt-0.5">{prizePool}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">VENUE / MODE</span>
              <span className="text-sky-300 font-semibold text-xs mt-0.5">AIKTC (Offline)</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={onKnowMore}
              className="px-4 sm:px-5 py-2 rounded-full border border-white/20 hover:border-white/40 bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 hover:text-white text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>KNOW MORE</span>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onSelect}
              className="px-5 sm:px-6 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-[0_4px_20px_rgba(0,0,0,0.5),0_0_15px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TrackCard;
