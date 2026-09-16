import React from 'react';
import { Sparkles, Terminal, BookOpen, Layers, Award, Network, Cpu, ArrowUpRight } from 'lucide-react';

const AboutSection = ({ onExploreTracks }) => {
  return (
    <section id="about" className="lake-section">
      {/* Station Indicator */}
      <div className="lake-badge">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>LAKE STATION 01 • ABOUT NEXATHON</span>
      </div>

      {/* Section Title */}
      <h2 className="lake-heading">
        where visionary code meets <br />
        <span className="lake-heading-gradient">
          rigorous scientific research
        </span>
      </h2>

      {/* Description */}
      <p className="lake-subdesc">
        Nexathon 2026 brings together the country's most ambitious student engineers, researchers, and innovators. 
        Flowing across our twin pillars—innovative software projects and peer-reviewed technical papers—this symposium 
        is designed to showcase real-world execution alongside profound theoretical inquiry.
      </p>

      {/* Floating 3D Lake Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
        {/* Card 1 */}
        <div className="lake-glass-card group flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />
          <div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-6 group-hover:scale-110 transition-transform">
              <Terminal className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">PILLAR 01</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-3 group-hover:text-cyan-200 transition-colors">
              Project Presentation
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Showcase running prototypes, autonomous AI swarms, full-stack architectures, and production-grade software applications.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>LIVE DEMOS</span>
            <span className="text-cyan-400 font-bold">50+ BENCHES</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="lake-glass-card group flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-all pointer-events-none" />
          <div>
            <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-400/30 flex items-center justify-center text-pink-300 mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-pink-400 font-semibold tracking-wider uppercase">PILLAR 02</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-3 group-hover:text-pink-200 transition-colors">
              Paper Presentation
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Defend original IEEE-standard research in machine learning, mathematical modeling, cryptographic proofs, and data science.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>PEER REVIEWED</span>
            <span className="text-pink-400 font-bold">IEEE FORMAT</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="lake-glass-card group flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all pointer-events-none" />
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-6 group-hover:scale-110 transition-transform">
              <Network className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">BENCHMARK</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-3 group-hover:text-amber-200 transition-colors">
              National League
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Represent your university alongside premier engineering talent, competing on standardized national evaluation rubrics.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>UNIVERSITIES</span>
            <span className="text-amber-400 font-bold">50+ CAMPUSES</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="lake-glass-card group flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-blue-300 mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-blue-400 font-semibold tracking-wider uppercase">IMPACT</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-3 group-hover:text-blue-200 transition-colors">
              Prizes & Access
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Earn your share of the ₹100,000+ bounty pool, crystal trophies, direct interview fast-tracks, and publication grants.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>PRIZE POOL</span>
            <span className="text-blue-400 font-bold">₹100,000+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
