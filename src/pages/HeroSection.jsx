import React, { useState } from 'react';
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  X,
  ChevronDown
} from 'lucide-react';
import canvasConfetti from 'canvas-confetti';
import ScrollyLakeBackground from '../components/ScrollyLakeBackground';
import Navbar from '../components/Navbar';
import RubiksCountdownSection from '../components/RubiksCountdownSection';
import AboutSection from '../components/AboutSection';
import TracksSection from '../components/TracksSection';
import PrizesSection from '../components/PrizesSection';
import TimelineSection from '../components/TimelineSection';
import FaqSection from '../components/FaqSection';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('project'); // 'project' | 'paper'
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    teamSize: '1',
    paperTitle: '',
    projectTitle: '',
    track: 'project'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOpenRegistration = (trackType = 'project') => {
    setActiveTab(trackType);
    setFormData(prev => ({ ...prev, track: trackType }));
    setFormSubmitted(false);
    setModalOpen(true);
  };

  const handleDiscoverEvent = () => {
    const el = document.getElementById('countdown') || document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmitRegistration = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    try {
      canvasConfetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff7700', '#00f0ff', '#ffffff']
      });
    } catch (err) {
      console.log('Confetti triggered');
    }
  };

  return (
    <div className="relative min-h-screen bg-[#040816] text-white overflow-x-hidden flex flex-col justify-between selection:bg-cyan-500 selection:text-black">
      {/* Progressive 4-Scene 3D Scrollytelling Background (Cross-Fading Like a Continuous Cinematic Video) */}
      <ScrollyLakeBackground />

      {/* Header Navigation with Smooth Anchors */}
      <Navbar onRegisterClick={() => handleOpenRegistration(activeTab)} />

      {/* ========================================================================= */}
      {/* 1. HERO STAGE • THE ENTRANCE PORTAL */}
      {/* ========================================================================= */}
      <section id="hero" className="relative z-10 max-w-7xl w-full mx-auto min-h-screen pt-24 sm:pt-28 pb-16 px-4 sm:px-6 flex flex-col items-center justify-center text-center">

        {/* Subtle Ambient Depth Scrim (No box, seamless gradient fade) */}
        <div className="absolute inset-0 max-w-4xl mx-auto -z-10 pointer-events-none flex items-center justify-center">
          <div className="w-[740px] h-[400px] bg-gradient-to-b from-[#020510]/80 via-[#03091e]/50 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Massive Display Title (Clean, NO Box) */}
        <h1 
          className="font-black text-center mb-4 uppercase select-none max-w-full text-transparent bg-clip-text"
          style={{
            fontFamily: "'Oxanium', 'Orbitron', sans-serif",
            fontSize: 'clamp(2.3rem, 7.8vw, 7.5rem)',
            lineHeight: '0.95',
            letterSpacing: 'clamp(0.01em, 0.5vw, 0.025em)',
            backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #e8faff 28%, #30d8f7 58%, #009be6 82%, #005799 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 3px 1px #0088cc) drop-shadow(0 6px 3px #01356b) drop-shadow(0 12px 24px rgba(0,0,0,0.95)) drop-shadow(0 20px 45px rgba(0,0,0,0.9)) drop-shadow(0 0 25px rgba(0,229,255,0.7)) drop-shadow(0 0 60px rgba(0,140,255,0.4))'
          }}
        >
          <span>NEXATHON</span>
        </h1>

        {/* Sub-description Paragraph (Clean, NO Box) */}
        <p className="text-zinc-200 text-sm sm:text-base md:text-lg max-w-2xl text-center leading-relaxed font-normal mb-8 sm:mb-10 px-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          Empowering innovators, software engineers &amp; researchers with national tech excellence.
        </p>

        {/* Stats Callouts Row (Clean, Floating with Dividers, Responsive, NO Box) */}
        <div className="flex flex-row items-center justify-center gap-4 sm:gap-14 w-full max-w-xl mx-auto mb-8 sm:mb-10 text-center px-4">
          <div className="flex flex-col items-center flex-1 sm:flex-initial">
            <span className="text-[clamp(1.4rem,2.8vw,2.5rem)] font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200 drop-shadow-[0_0_20px_rgba(251,146,60,0.5)]">
              ₹20,000+
            </span>
            <span className="text-zinc-300 font-mono tracking-wider font-semibold uppercase text-[10px] sm:text-xs mt-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] whitespace-nowrap">
              total prize pool
            </span>
          </div>
          <div className="w-[1px] h-9 sm:h-10 bg-white/20 flex-shrink-0" />
          <div className="flex flex-col items-center flex-1 sm:flex-initial">
            <span className="text-[clamp(1.4rem,2.8vw,2.5rem)] font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
              15+
            </span>
            <span className="text-zinc-300 font-mono tracking-wider font-semibold uppercase text-[10px] sm:text-xs mt-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] whitespace-nowrap">
              universities
            </span>
          </div>
          <div className="w-[1px] h-9 sm:h-10 bg-white/20 flex-shrink-0" />
          <div className="flex flex-col items-center flex-1 sm:flex-initial">
            <span className="text-[clamp(1.4rem,2.8vw,2.5rem)] font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]">
              50+
            </span>
            <span className="text-zinc-300 font-mono tracking-wider font-semibold uppercase text-[10px] sm:text-xs mt-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] whitespace-nowrap">
              registrations
            </span>
          </div>
        </div>

        {/* Discover the Event CTA - Proper Premium Cyber Button with Pure Tailwind CSS */}
        <div className="relative inline-flex items-center justify-center mt-8 mb-4 group mx-auto z-20">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 opacity-75 group-hover:opacity-100 blur-xl transition-all duration-500 animate-pulse pointer-events-none" />
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-400 opacity-50 blur-sm pointer-events-none" />
          
          <button
            id="discover-event-btn"
            onClick={handleDiscoverEvent}
            className="relative inline-flex items-center gap-3.5 px-9 sm:px-12 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:via-sky-300 hover:to-blue-400 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wider uppercase border border-white/60 shadow-[0_0_35px_rgba(0,240,255,0.7),0_12px_28px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_0_55px_rgba(0,240,255,0.95),0_16px_36px_rgba(0,0,0,0.9)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
          >
            <span>Discover the Event</span>
            <div className="w-7 h-7 rounded-full bg-black/15 flex items-center justify-center text-slate-950 transition-transform group-hover:translate-y-1">
              <ChevronDown className="w-4 h-4 stroke-[2.5]" />
            </div>
          </button>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2. 3D RUBIK'S CUBE SOLVER & REGISTRATION COUNTDOWN (CLOSING OCTOBER 7TH) */}
      {/* ========================================================================= */}
      <RubiksCountdownSection onRegisterClick={() => handleOpenRegistration(activeTab)} />

      {/* ========================================================================= */}
      {/* 3. LAKE STATION 01 • ABOUT NEXATHON */}
      {/* ========================================================================= */}
      <AboutSection onExploreTracks={() => {
        const el = document.getElementById('tracks');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* ========================================================================= */}
      {/* 3. LAKE STATION 02 • COMPETITION TRACKS (PROJECT & PAPER PRESENTATION) */}
      {/* ========================================================================= */}
      <TracksSection onRegisterTrack={(trackId) => handleOpenRegistration(trackId)} />

      {/* ========================================================================= */}
      {/* 4. LAKE STATION 03 • PRIZE POOL & REWARDS */}
      {/* ========================================================================= */}
      <PrizesSection />

      {/* ========================================================================= */}
      {/* 5. LAKE STATION 04 • EVENT ROADMAP & MILESTONES */}
      {/* ========================================================================= */}
      <TimelineSection />

      {/* ========================================================================= */}
      {/* 6. LAKE STATION 05 • INQUIRIES & FINAL PORTAL CTA */}
      {/* ========================================================================= */}
      <FaqSection onRegisterClick={() => handleOpenRegistration(activeTab)} />

      {/* Registration Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-[#090d16] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-left">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white p-1"
            >
              <X className="w-6 h-6" />
            </button>

            {!formSubmitted ? (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-orange-500/20 text-orange-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">register for nexathon 2026</h3>
                    <p className="text-xs text-zinc-400">complete your submission details below</p>
                  </div>
                </div>

                <form onSubmit={handleSubmitRegistration} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">NAME / TEAM LEADER *</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-orange-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@university.edu"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-orange-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1">COLLEGE / INSTITUTION *</label>
                      <input
                        type="text"
                        required
                        placeholder="Institute Name"
                        value={formData.college}
                        onChange={e => setFormData({ ...formData, college: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-orange-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1">TRACK</label>
                      <select
                        value={formData.track}
                        onChange={e => setFormData({ ...formData, track: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-orange-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                      >
                        <option value="project">Project Presentation</option>
                        <option value="paper">Paper Presentation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">TITLE OF SUBMISSION *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Autonomous AI Swarms / Transformers in Cryptography"
                      value={formData.projectTitle}
                      onChange={e => setFormData({ ...formData, projectTitle: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-orange-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                    />
                  </div>

                  <button type="submit" className="w-full justify-center py-3.5 mt-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,119,0,0.55),inset_0_1px_0_rgba(255,255,255,0.3)] hover:scale-102 active:scale-98 transition-all cursor-pointer">
                    confirm registration
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">registration successful!</h3>
                <p className="text-zinc-400 text-sm mb-6">
                  Thank you, <strong className="text-white">{formData.name}</strong>! Your registration has been received for Nexathon 2026.
                </p>
                <button onClick={() => setModalOpen(false)} className="py-2.5 px-6 rounded-full bg-white text-slate-950 text-xs font-bold uppercase tracking-wider hover:scale-105 transition-all cursor-pointer">
                  close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Clean Minimal Footer */}
      <footer className="py-6 border-t border-zinc-900/50 text-center text-zinc-600 text-xs font-mono z-10">
        <p>© 2026 nexathon tech symposium</p>
      </footer>
    </div>
  );
};

export default HeroSection;
