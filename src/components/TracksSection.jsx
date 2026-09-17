import React from 'react';
import TrackCard from './TrackCard';
import projectThumb from '../assets/project-thumb.jpg';
import paperThumb from '../assets/paper-thumb.jpg';

const TracksSection = ({ onRegisterTrack, onKnowMore }) => {
  const tracks = [
    {
      id: 'project',
      trackNumber: 1,
      title: 'Project Competition',
      category: '8-HOUR DATA SCIENCE HACKATHON',
      subtitle: 'An intensive 8-hour hackathon where participants develop and showcase data-driven solutions to real-world problems. Pre-made projects are allowed subject to official rules.',
      dateDayMonth: '09.10',
      dateYear: '26',
      teamSize: '2 – 3 Members',
      fee: '₹300 (₹500 for both)',
      eventDate: '9 Oct 2026 • 9:00 AM',
      domains: ['Healthcare', 'Fintech', 'Education', 'Agriculture', 'Open Innovation'],
      prizePool: '₹20,000+ Pool',
      image: projectThumb
    },
    {
      id: 'paper',
      trackNumber: 2,
      title: 'Paper Competition',
      category: 'TECHNICAL RESEARCH DEFENSE',
      subtitle: 'Present original research or technical papers before a distinguished panel of judges covering problem formulation, methodology, findings, and practical significance.',
      dateDayMonth: '09.10',
      dateYear: '26',
      teamSize: 'Solo or Team (1–3)',
      fee: '₹300 (₹500 for both)',
      eventDate: '9 Oct 2026 • 9:00 AM',
      domains: ['Healthcare', 'Fintech', 'Education', 'Agriculture', 'Open Innovation'],
      prizePool: '₹20,000+ Pool',
      image: paperThumb
    }
  ];

  return (
    <section id="tracks" className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-16 md:py-24 text-left scroll-mt-20 overflow-visible">
      {/* Editorial Header (Matching reference: Left subtitle / Right large season/date) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 sm:pb-6">
        <div>
          <h2 className="text-sm sm:text-base font-medium text-zinc-300 font-sans tracking-wide">
            Event Tracks
          </h2>
        </div>

        {/* Large Typographic Header like 'Janv-Sept 2023' */}
        <div className="font-['Oxanium',sans-serif] font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none text-left sm:text-right select-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          October 2026
        </div>
      </div>

      {/* Edge-to-Edge Divider Line */}
      <div className="w-full h-[1px] bg-white/20 mb-2" />

      {/* Full-width Rows */}
      <div className="w-full flex flex-col">
        {tracks.map(track => (
          <TrackCard
            key={track.id}
            trackNumber={track.trackNumber}
            title={track.title}
            category={track.category}
            subtitle={track.subtitle}
            dateDayMonth={track.dateDayMonth}
            dateYear={track.dateYear}
            teamSize={track.teamSize}
            fee={track.fee}
            eventDate={track.eventDate}
            domains={track.domains}
            prizePool={track.prizePool}
            image={track.image}
            onSelect={() => onRegisterTrack(track.id)}
            onKnowMore={() => onKnowMore(track.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default TracksSection;
