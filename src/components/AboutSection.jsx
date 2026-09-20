import React from 'react';
import { Sparkles, Brain, Target, Database, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative z-10 max-w-5xl w-full mx-auto px-3 sm:px-6 lg:px-8 pt-16 sm:pt-24 md:pt-28 pb-12 sm:pb-16 scroll-mt-20 overflow-hidden"
    >


      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-[10px] sm:text-xs font-mono font-medium tracking-wider uppercase text-cyan-400 text-center">
        <span className="text-zinc-600">•</span>
        <span className="text-zinc-300">Anjuman-I-Islam&apos;s Kalsekar Technical Campus</span>
        <span className="text-zinc-600">•</span>
        <span className="text-cyan-300 font-semibold">Dept. of CSE (Data Science)</span>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 flex flex-col items-center">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-zinc-200 leading-relaxed tracking-normal mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-center">
          <strong className="text-white font-bold">Nexathon II</strong>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-300 font-semibold">
            is an intensive data science and machine learning competition
          </span>{' '}
          organized by <strong className="text-white font-semibold">AIKTC&apos;s DataNexus Club</strong> for students and tech enthusiasts. It challenges participants to build data-driven solutions and tackle real-world problems across diverse domains like{' '}
          <span className="text-cyan-300 font-medium">Healthcare</span>,{' '}
          <span className="text-emerald-300 font-medium">Fintech</span>,{' '}
          <span className="text-amber-300 font-medium">Education</span>,{' '}
          <span className="text-blue-300 font-medium">Agriculture</span>, and {''}
          <span className="text-pink-300 font-medium">Open Innovation</span>,{' '}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl text-center">
          The event features multiple competitive stages including presentation rounds and final judging offering cash prizes, mentorship, and networking opportunities.
        </p>
      </div>

      <div className="flex flex-row items-center justify-center gap-1.5 xs:gap-2.5 sm:gap-5 md:gap-8 pt-2 pb-6 max-w-full">

        {/* Circle 1: Domains */}
        <div className="w-[106px] h-[106px] xs:w-[116px] xs:h-[116px] sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-[#060c1d]/90 backdrop-blur-2xl border border-cyan-400/30 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_15px_rgba(0,240,255,0.12)] p-1.5 sm:p-4 md:p-5 flex flex-col items-center justify-center text-center group hover:scale-105 hover:border-cyan-400/60 hover:shadow-[0_16px_40px_rgba(0,240,255,0.22)] transition-all duration-300 cursor-default flex-shrink-0">
          <div className="flex flex-col items-center justify-center m-auto w-full px-1">
            <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-cyan-500/15 text-cyan-300 flex items-center justify-center mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform">
              <Brain className="w-2 h-2 sm:w-3 sm:h-3" />
            </div>
            <span className="text-[13px] xs:text-[14px] sm:text-[15px] font-mono font-bold tracking-widest text-cyan-400 uppercase mb-0.5">DOMAINS</span>
            <h3 className="text-[13px] xs:text-[14px] sm:text-base md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-0.5 leading-tight text-center">
              Real-World Data
            </h3>
            <p className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm text-zinc-300 font-normal leading-[1.2] max-w-[82px] xs:max-w-[92px] sm:max-w-[140px] text-center">
              Healthcare, Fintech, Edu, Agriculture &amp; Open Innovation .
            </p>
          </div>
        </div>

        <div className="w-[106px] h-[106px] xs:w-[116px] xs:h-[116px] sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-[#060c1d]/90 backdrop-blur-2xl border border-emerald-400/30 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_15px_rgba(52,211,153,0.12)] p-1.5 sm:p-4 md:p-5 flex flex-col items-center justify-center text-center translate-y-2 sm:translate-y-4 md:translate-y-6 group hover:scale-105 hover:border-emerald-400/60 hover:shadow-[0_16px_40px_rgba(52,211,153,0.22)] transition-all duration-300 cursor-default flex-shrink-0">
          <div className="flex flex-col items-center justify-center m-auto w-full px-1">
            <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-emerald-500/15 text-emerald-300 flex items-center justify-center mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform">
              <Target className="w-2 h-2 sm:w-3 sm:h-3" />
            </div>
            <span className="text-[13px] xs:text-[14px] sm:text-[15px] font-mono font-bold tracking-widest text-emerald-400 uppercase mb-0.5">STAGES</span>
            <h3 className="text-[13px] xs:text-[14px] sm:text-base md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300 mb-0.5 leading-tight text-center">
              Competitive Rounds
            </h3>
            <p className="text-[10px] xs:text-[11px] sm:text-[12px] md:text-base text-zinc-300 font-normal leading-[1.2] max-w-[82px] xs:max-w-[92px] sm:max-w-[140px] text-center">
              Presentation stages &amp; jury evaluation.
            </p>
          </div>
        </div>

        {/* Circle 3: Rewards */}
        <div className="w-[106px] h-[106px] xs:w-[116px] xs:h-[116px] sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-[#060c1d]/90 backdrop-blur-2xl border border-amber-400/30 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_15px_rgba(251,191,36,0.12)] p-1.5 sm:p-4 md:p-5 flex flex-col items-center justify-center text-center group hover:scale-105 hover:border-amber-400/60 hover:shadow-[0_16px_40px_rgba(251,191,36,0.22)] transition-all duration-300 cursor-default flex-shrink-0">
          <div className="flex flex-col items-center justify-center m-auto w-full px-1">
            <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-amber-500/15 text-amber-300 flex items-center justify-center mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform">
              <Sparkles className="w-2 h-2 sm:w-3 sm:h-3" />
            </div>
            <span className="text-[13px] xs:text-[14px] sm:text-[15px] font-mono font-bold tracking-widest text-amber-400 uppercase mb-0.5">REWARDS</span>
            <h3 className="text-[13px] xs:text-[14px] sm:text-base md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400 mb-0.5 leading-tight text-center">
              Prizes &amp; Growth
            </h3>
            <p className="text-[10px] xs:text-[11px] sm:text-[12px] md:text-base text-zinc-300 font-normal leading-[1.2] max-w-[82px] xs:max-w-[92px] sm:max-w-[140px] text-center">
              Cash awards, mentorship &amp; networking.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;