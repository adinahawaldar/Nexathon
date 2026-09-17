import React from 'react';
import { Presentation, FileText } from 'lucide-react';
import TrackCard from './TrackCard';

const TracksSection = ({ onRegisterTrack, onKnowMore }) => {
  const tracks = [
    {
      id: 'project',
      trackNumber: 1,
      title: 'Project Presentation',
      category: 'SOFTWARE & ENGINEERING SYSTEMS',
      subtitle: 'Build, deploy, and exhibit functional systems that tackle national or industrial technological bottlenecks.',
      badgeColor: 'cyan',
      prizePool: '₹12,000+',
      icon: Presentation,
      highlights: [
        'Live system prototype demo before expert engineering jury',
        'Emphasis on architecture, scale, latency & code quality',
        'Domains: Autonomous AI Swarms, Web3, Distributed Cloud, IoT'
      ]
    },
    {
      id: 'paper',
      trackNumber: 2,
      title: 'Paper & Poster Presentation',
      category: 'THEORETICAL & APPLIED RESEARCH',
      subtitle: 'Defend peer-reviewed research manuscripts and technical posters adhering to IEEE format with experimental proofs.',
      badgeColor: 'pink',
      prizePool: '₹8,000+',
      icon: FileText,
      highlights: [
        'IEEE-standard research manuscript defense & peer review',
        'Emphasis on novel mathematical models & benchmark datasets',
        'Domains: Machine Learning, Cryptography, Networks, Data Science'
      ]
    }
  ];

  return (
    <section id="tracks" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 flex flex-col items-center text-center scroll-mt-20 overflow-visible">
      {/* Soft Ambient Depth Scrim behind title & cards for 100% background visibility */}
      <div className="absolute inset-0 max-w-5xl mx-auto -z-10 pointer-events-none flex items-center justify-center">
        <div 
          className="w-full h-full max-h-[640px] rounded-full pointer-events-none"
          style={{
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            background: 'radial-gradient(ellipse 65% 55% at 50% 40%, rgba(2, 6, 22, 0.75) 0%, rgba(2, 6, 22, 0.4) 55%, transparent 80%)',
            maskImage: 'radial-gradient(ellipse 65% 55% at 50% 40%, black 40%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 40%, black 40%, transparent 85%)'
          }}
        />
      </div>

      {/* Prominent, Clean Headline (No badge above) */}
      <h2 className="font-['Oxanium','Space_Grotesk',sans-serif] font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-2.5 text-center drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
        Choose Your Track.
      </h2>

      {/* Small Font Size Subheading */}
      <p className="text-zinc-300 text-xs sm:text-sm max-w-lg mx-auto mb-10 sm:mb-12 text-center leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] px-4">
        Select between software project exhibition and technical paper/poster presentation.
      </p>

      {/* 2 Professional Track Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8 w-full max-w-5xl">
        {tracks.map(track => (
          <TrackCard
            key={track.id}
            trackNumber={track.trackNumber}
            title={track.title}
            category={track.category}
            subtitle={track.subtitle}
            highlights={track.highlights}
            icon={track.icon}
            badgeColor={track.badgeColor}
            prizePool={track.prizePool}
            onSelect={() => onRegisterTrack(track.id)}
            onKnowMore={() => onKnowMore(track.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default TracksSection;
