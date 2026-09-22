import React from 'react';
import TrackCard from './TrackCard';
import projectThumb from '../assets/project-thumb.jpg';
import paperThumb from '../assets/paper-thumb.jpg';

const TracksSection = ({ onRegisterTrack, onKnowMore }) => {
  const registrationLink = "https://forms.gle/Fz7EnLzh3i7u7UcMA";

  const tracks = [
    {
      id: 'project',
      trackNumber: 1,
      title: 'Project Competition',
      category: 'DATA SCIENCE PROJECT COMPETITION',
      subtitle: (
        <>
          An intensive project competition where participants develop and showcase innovative, data-driven solutions to real-world problems.
          <br />
          <span className="text-cyan-300 font-bold tracking-wide">
            SOFTWARE PROJECTS ONLY
          </span>
          <br />
          Hardware and hybrid (hardware-software) projects are not permitted.
        </>
      ),
      dateDayMonth: '09.10',
      dateYear: '26',
      teamSize: '2 – 3 Members',
      fee: '₹300 (₹500 for both)',
      eventDate: '9 Oct 2026 • 9:00 AM',
      domains: ['Healthcare', 'Fintech', 'Education', 'Agriculture', 'Open Innovation'],
      prizePool: '₹21,500 Pool',
      image: projectThumb
    },
    {
      id: 'paper',
      trackNumber: 2,
      title: 'Technical Paper Presentation Competition',
      category: 'TECHNICAL RESEARCH DEFENSE',
      subtitle: 'Present original research or technical papers before a distinguished panel of judges covering problem formulation, methodology, findings, and practical significance.',
      dateDayMonth: '09.10',
      dateYear: '26',
      teamSize: 'Solo or Team (1–2 Members)',
      fee: '₹300 (₹500 for both)',
      eventDate: '9 Oct 2026 • 9:00 AM',
      domains: ['Healthcare', 'Fintech', 'Education', 'Agriculture', 'Open Innovation'],
      prizePool: '₹21,500 Pool',
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
        {tracks.map((track, index) => (
          <React.Fragment key={track.id}>
            <TrackCard
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
              registrationLink={registrationLink}
              isLast={index === tracks.length - 1}
            />
            {index < tracks.length - 1 && (
              <div 
                className="w-full h-[2px] bg-white/35 shadow-[0_1px_3px_rgba(0,0,0,0.6)]" 
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default TracksSection;