import React from 'react';

const TimelineSection = () => {
  const scheduleData = [
    {
      day: 'Thu',
      date: '17',
      month: 'September, 2026',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      lineColor: 'from-emerald-400 to-emerald-600',
      bulletColor: 'text-emerald-400',
      events: [
        {
          title: 'Registration Opens',
          details: [
            { text: 'Technical Paper Presentation & Project Presentation Tracks' },
            { text: 'Mode: Online Registration Live' }
          ]
        }
      ]
    },
    {
      day: 'Sat',
      date: '03',
      month: 'October, 2026',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      lineColor: 'from-indigo-400 to-indigo-600',
      bulletColor: 'text-indigo-400',
      events: [
        {
          title: 'Registration Closes',
          details: [
            { text: 'Submission: Final Papers, Abstracts & Project Proposals' },
            { text: 'Deadline: 11:59 PM IST' }
          ]
        }
      ]
    },
    {
      day: 'Fri',
      date: '09',
      month: 'October, 2026',
      badgeColor: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
      lineColor: 'from-sky-400 via-cyan-400 to-blue-600',
      bulletColor: 'text-sky-400',
      events: [
        {
          title: 'Nexathon 2026 - Main Event Day',
          details: [
            { text: "Venue: Anjuman-I-Islam's Kalsekar Technical Campus (AIKTC)" },
            { text: 'Format: Live Project Demonstrations & Research Paper Defenses' }
          ]
        },
        {
          title: 'Results & Winner Announcements',
          details: [
            { text: 'Grand Jury Evaluation & Official Podium Reveal' },
            { text: 'Cash Prize Bounty Winners Declared' }
          ]
        },
        {
          title: 'Valedictory Ceremony',
          details: [
            { text: 'Time: By 4:00 PM' },
            { text: 'Felicitation, Certificate Handover & Closing Address' }
          ]
        }
      ]
    }
  ];

  return (
    <section 
      id="timeline" 
      className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 py-20 md:py-28 text-left scroll-mt-20"
    >
      {/* Header: Open style matching reference image */}
      <div className="flex items-center gap-3 mb-10 sm:mb-14 pb-5 border-b border-white/15">
        <span className="w-3.5 h-3.5 bg-[#4ade80] rounded-[3px] shadow-[0_0_14px_rgba(74,222,128,0.7)] inline-block shrink-0" />
        <h2 className="font-['Space_Grotesk',sans-serif] font-medium text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
          Timeline at a glance
        </h2>
      </div>

      {/* Open Timeline Rows (Edge-to-edge layout, separated by clean divider lines) */}
      <div className="flex flex-col divide-y divide-zinc-800/90">
        {scheduleData.map((item, idx) => (
          <div 
            key={idx} 
            className="py-8 sm:py-10 first:pt-0 last:pb-0 flex flex-row items-start gap-4 sm:gap-8 md:gap-12 group"
          >
            {/* Left Column: Day Badge, Giant Date, Month */}
            <div className="w-[110px] sm:w-[150px] md:w-[170px] shrink-0 text-left pt-0.5">
              <div className="flex items-baseline gap-2 sm:gap-2.5 mb-1.5">
                <span className={`text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${item.badgeColor} leading-tight`}>
                  {item.day}
                </span>
                <span className="font-['Space_Grotesk',sans-serif] font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none">
                  {item.date}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-400 font-mono tracking-wide">
                {item.month}
              </p>
            </div>

            {/* Vertical Accent Line */}
            <div className={`w-[2px] self-stretch bg-gradient-to-b ${item.lineColor} rounded-full shrink-0 my-1 opacity-85 group-hover:opacity-100 transition-opacity`} />

            {/* Right Column: Events and Details */}
            <div className="flex-1 space-y-6 sm:space-y-7 pt-0.5 pl-1 sm:pl-2">
              {item.events.map((ev, evIdx) => (
                <div key={evIdx} className="space-y-2">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-zinc-100 transition-colors">
                    {ev.title}
                  </h3>
                  <div className="space-y-1.5">
                    {ev.details.map((detail, dIdx) => (
                      <div 
                        key={dIdx} 
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed"
                      >
                        {/* Target Concentric Ring Bullet Icon */}
                        <svg 
                          className={`w-3.5 h-3.5 ${item.bulletColor} shrink-0 mt-0.5 select-none`} 
                          viewBox="0 0 16 16" 
                          fill="none"
                        >
                          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="8" cy="8" r="2.5" fill="currentColor" />
                        </svg>
                        <span className="text-zinc-300">
                          {detail.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
