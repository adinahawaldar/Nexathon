import React from 'react';
import { Calendar, CheckCircle, Clock, Sparkles, Flag, Rocket } from 'lucide-react';

const TimelineSection = () => {
  const steps = [
    {
      phase: 'PHASE 01',
      date: 'SEPTEMBER 20, 2026',
      title: 'Portal Registrations Open',
      desc: 'Form teams of 1-4 members, select between Project Presentation or Paper Presentation track, and register your profile.',
      status: 'CURRENT'
    },
    {
      phase: 'PHASE 02',
      date: 'OCTOBER 10, 2026',
      title: 'Abstract & Proposal Submission',
      desc: 'Upload your research paper abstract (IEEE template) or project architecture proposal deck for initial jury screening.',
      status: 'UPCOMING'
    },
    {
      phase: 'PHASE 03',
      date: 'OCTOBER 24, 2026',
      title: 'National Shortlist Released',
      desc: 'Top 50 projects and top 30 research papers announced for the grand in-person and hybrid showcase stage.',
      status: 'UPCOMING'
    },
    {
      phase: 'PHASE 04',
      date: 'NOVEMBER 14-15, 2026',
      title: 'The Grand Finale & Expo',
      desc: 'Live stage defense, jury evaluations, live prototype bench tests, keynote talks, and awards gala.',
      status: 'FINALE'
    }
  ];

  return (
    <section id="timeline" className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center scroll-mt-20">
      {/* Station Indicator */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-sky-400 text-xs font-bold font-mono tracking-wider uppercase mb-5 backdrop-blur-xl shadow-[0_0_15px_rgba(0,240,255,0.15)]">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>LAKE STATION 04 • EVENT ROADMAP</span>
      </div>

      {/* Section Title */}
      <h2 className="font-['Outfit','Space_Grotesk',sans-serif] font-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight text-white mb-5 text-center drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
        milestones along the <br />
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-amber-300">
          innovation current
        </span>
      </h2>

      <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto mb-12 text-center leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
        Follow the chronological path from registration to the grand finale stage. Keep track of deadlines and milestone deliverables.
      </p>

      {/* Timeline Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl text-left">
        {steps.map((step, idx) => (
          <div 
            key={idx} 
            className="relative overflow-hidden bg-[#080e1c]/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-7 flex flex-col justify-between text-left shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_24px_60px_rgba(0,240,255,0.18)] transition-all duration-300 group"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-400 font-bold tracking-widest">{step.phase}</span>
                <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${
                  step.status === 'CURRENT'
                    ? 'border-emerald-500/40 text-emerald-300 bg-emerald-950/40 animate-pulse'
                    : step.status === 'FINALE'
                    ? 'border-amber-500/40 text-amber-300 bg-amber-950/40'
                    : 'border-zinc-700 text-zinc-400 bg-zinc-900/40'
                }`}>
                  {step.status}
                </span>
              </div>

              <div className="text-xs font-mono text-zinc-400 mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{step.date}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                {step.title}
              </h3>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-white/10 flex items-center text-xs font-mono text-cyan-400/80">
              <span>STEP 0{idx + 1} OF 04</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
