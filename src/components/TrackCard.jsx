import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, CheckCircle2, Layers, FileCode2, Microchip, Award } from 'lucide-react';

const TrackCard = ({ title, subtitle, trackNumber, category, highlights, icon: Icon, badgeColor, onSelect }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: rotate.x === 0 ? 'transform 0.5s ease-out' : 'none',
        transformStyle: 'preserve-3d'
      }}
      className="relative group rounded-3xl p-8 glass-panel glass-panel-hover border border-cyan-500/20 hover:border-cyan-400/60 cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div 
        className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" 
        style={{ background: badgeColor === 'cyan' ? '#00f0ff' : '#3b82f6' }}
      />

      {/* Top Track Header */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`p-3.5 rounded-2xl ${badgeColor === 'cyan' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' : 'bg-blue-500/10 text-blue-400 border-blue-500/30'} border shadow-[0_0_20px_rgba(0,240,255,0.15)] group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-mono tracking-widest text-cyan-400 font-bold uppercase">TRACK 0{trackNumber}</span>
              <h4 className="text-sm text-slate-400 font-medium">{category}</h4>
            </div>
          </div>

          <span className={`text-xs font-mono px-3 py-1.5 rounded-full border ${badgeColor === 'cyan' ? 'border-cyan-500/40 text-cyan-300 bg-cyan-950/40' : 'border-blue-500/40 text-blue-300 bg-blue-950/40'}`}>
            OPEN FOR ENTRIES
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-3 group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {subtitle}
        </p>

        {/* Highlights List */}
        <div className="space-y-3 mb-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${badgeColor === 'cyan' ? 'text-cyan-400' : 'text-blue-400'}`} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Action */}
      <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between mt-auto">
        <div className="flex flex-col">
          <span className="text-[11px] font-mono text-slate-400">PRIZE POOL</span>
          <span className="text-lg font-bold font-mono text-white flex items-center gap-1">
            <Award className="w-4 h-4 text-amber-400" /> ₹50,000+
          </span>
        </div>

        <button 
          onClick={onSelect}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
            badgeColor === 'cyan'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-400 hover:text-slate-950'
              : 'bg-blue-500/20 text-blue-300 border border-blue-500/40 hover:bg-blue-400 hover:text-slate-950'
          }`}
        >
          <span>Submit Details</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TrackCard;
