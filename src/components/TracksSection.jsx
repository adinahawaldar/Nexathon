import React, { useState } from 'react';
import { Presentation, FileText, CheckCircle2, ArrowUpRight, Cpu, Layers, Sparkles, Award } from 'lucide-react';
import TrackCard from './TrackCard';

const TracksSection = ({ onRegisterTrack }) => {
  const [selectedPill, setSelectedPill] = useState('all'); // 'all' | 'project' | 'paper'

  const tracks = [
    {
      id: 'project',
      trackNumber: 1,
      title: 'Project Presentation',
      category: 'ENGINEERING & SOFTWARE SYSTEMS',
      subtitle: 'Build, deploy, and exhibit functional systems that tackle national or industrial technological bottlenecks.',
      badgeColor: 'cyan',
      icon: Presentation,
      highlights: [
        'Live system prototype demo before expert engineering jury',
        'Emphasis on system architecture, latency, scale & code quality',
        'Categories: Autonomous AI Swarms, Web3, Distributed Cloud, IoT'
      ]
    },
    {
      id: 'paper',
      trackNumber: 2,
      title: 'Paper Presentation',
      category: 'THEORETICAL & APPLIED RESEARCH',
      subtitle: 'Present peer-reviewed technical manuscripts adhering to IEEE format with rigorous experimental verification.',
      badgeColor: 'pink',
      icon: FileText,
      highlights: [
        'IEEE-standard research manuscript defense & peer review',
        'Emphasis on novel mathematical formulations & benchmark datasets',
        'Categories: Deep Learning, Data Science, Cryptography, Quantum'
      ]
    }
  ];

  const filteredTracks = selectedPill === 'all' ? tracks : tracks.filter(t => t.id === selectedPill);

  return (
    <section id="tracks" className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center scroll-mt-20">
      {/* Station Indicator */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-400/30 text-pink-400 text-xs font-bold font-mono tracking-wider uppercase mb-5 backdrop-blur-xl shadow-[0_0_15px_rgba(244,114,182,0.15)]">
        <Sparkles className="w-3.5 h-3.5 text-pink-400" />
        <span>LAKE STATION 02 • COMPETITION TRACKS</span>
      </div>

      {/* Section Title */}
      <h2 className="font-['Outfit','Space_Grotesk',sans-serif] font-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight text-white mb-5 text-center drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
        two prestigious tracks. <br />
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-amber-300">
          limitless technological innovation.
        </span>
      </h2>

      <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto mb-12 text-center leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
        Choose your competitive arena. Whether your passion lies in writing high-performance code or uncovering groundbreaking scientific insights, Nexathon provides the national spotlight.
      </p>

      {/* Filter Toggle */}
      <div className="flex items-center gap-2 p-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 mb-14">
        <button
          onClick={() => setSelectedPill('all')}
          className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
            selectedPill === 'all'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(0,240,255,0.4)]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          All Tracks (2)
        </button>
        <button
          onClick={() => setSelectedPill('project')}
          className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
            selectedPill === 'project'
              ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-[0_0_20px_rgba(255,119,0,0.4)]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Project Track
        </button>
        <button
          onClick={() => setSelectedPill('paper')}
          className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
            selectedPill === 'paper'
              ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_20px_rgba(244,114,182,0.4)]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Paper Presentation
        </button>
      </div>

      {/* 3D Track Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {filteredTracks.map(track => (
          <TrackCard
            key={track.id}
            trackNumber={track.trackNumber}
            title={track.title}
            category={track.category}
            subtitle={track.subtitle}
            highlights={track.highlights}
            icon={track.icon}
            badgeColor={track.badgeColor}
            onSelect={() => onRegisterTrack(track.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default TracksSection;
