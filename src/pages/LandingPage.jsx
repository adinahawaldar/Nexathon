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
import FooterSection from '../components/FooterSection';

const LandingPage = ({ onKnowMore }) => {
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
    const el = document.getElementById('countdown') || document.getElementById('tracks');
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
      <section id="hero" className="relative z-10 max-w-7xl w-full mx-auto min-h-screen pt-32 sm:pt-40 md:pt-44 pb-20 px-4 sm:px-6 flex flex-col items-center justify-center text-center">

        {/* Seamless Radial Backdrop Blur & Soft Vignette (100% borderless, NO box, feathered blur strictly behind text) */}
        <div className="absolute inset-0 max-w-6xl mx-auto -z-10 pointer-events-none flex items-center justify-center overflow-visible">
          {/* Feathered Radial Backdrop Blur: blurs the background only under the text without any box edges */}
          <div 
            className="w-[1050px] h-[620px] max-w-full pointer-events-none"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              background: 'radial-gradient(ellipse 60% 50% at 50% 52%, rgba(2, 6, 20, 0.72) 0%, rgba(2, 6, 20, 0.45) 45%, rgba(2, 6, 20, 0) 80%)',
              maskImage: 'radial-gradient(ellipse 58% 48% at 50% 52%, black 30%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse 58% 48% at 50% 52%, black 30%, transparent 80%)'
            }}
          />
          {/* Subtle central depth glow */}
          <div className="absolute w-[700px] h-[350px] bg-cyan-950/30 rounded-full blur-3xl -z-10 pointer-events-none" />
        </div>

        {/* Massive Display Title - Placed comfortably down from the top navbar */}
        <h1 
          className="font-black text-center mt-3 sm:mt-6 mb-3 sm:mb-4 uppercase select-none max-w-full text-transparent bg-clip-text px-2"
          style={{
            fontFamily: "'Oxanium', 'Orbitron', sans-serif",
            fontSize: 'clamp(3.3rem, 13.8vw, 8.8rem)',
            lineHeight: '0.92',
            letterSpacing: 'clamp(0.01em, 0.4vw, 0.025em)',
            backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #e8faff 28%, #30d8f7 58%, #009be6 82%, #005799 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 3px 1px #0088cc) drop-shadow(0 5px 2px #01356b) drop-shadow(0 10px 20px rgba(0,0,0,0.85)) drop-shadow(0 16px 36px rgba(0,0,0,0.75)) drop-shadow(0 0 25px rgba(0,229,255,0.6)) drop-shadow(0 0 50px rgba(0,140,255,0.35))'
          }}
        >
          <span>NEXATHON II</span>
        </h1>

        {/* Sub-description Paragraph (Normal Clean Text, NO Box) */}
        <p className="text-zinc-100 text-xs sm:text-base md:text-lg max-w-2xl text-center leading-relaxed font-medium mb-6 sm:mb-8 px-4 drop-shadow-[0_2px_12px_rgba(0,0,0,1)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          Empowering innovators, software engineers &amp; researchers with national tech excellence.
        </p>

        {/* Stats Callouts Row (Normal Clean Floating with Dividers, NO Box) */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-14 w-full max-w-xl mx-auto mb-6 sm:mb-8 text-center px-4">
          <div className="flex flex-col items-center flex-1 sm:flex-initial">
            <span className="text-[clamp(1.25rem,2.8vw,2.5rem)] font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200 drop-shadow-[0_0_20px_rgba(251,146,60,0.5)]">
              ₹21,500
            </span>
            <span className="text-zinc-300 font-mono tracking-wider font-semibold uppercase text-[9px] sm:text-xs mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] whitespace-nowrap">
              total prize pool
            </span>
          </div>
          <div className="w-[1px] h-7 sm:h-10 bg-white/20 flex-shrink-0" />
          <div className="flex flex-col items-center flex-1 sm:flex-initial">
            <span className="text-[clamp(1.25rem,2.8vw,2.5rem)] font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
              15+
            </span>
            <span className="text-zinc-300 font-mono tracking-wider font-semibold uppercase text-[9px] sm:text-xs mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] whitespace-nowrap">
              universities
            </span>
          </div>
          <div className="w-[1px] h-7 sm:h-10 bg-white/20 flex-shrink-0" />
          <div className="flex flex-col items-center flex-1 sm:flex-initial">
            <span className="text-[clamp(1.25rem,2.8vw,2.5rem)] font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]">
              50+
            </span>
            <span className="text-zinc-300 font-mono tracking-wider font-semibold uppercase text-[9px] sm:text-xs mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] whitespace-nowrap">
              registrations
            </span>
          </div>
        </div>

        {/* Discover the Event CTA - Professional, Clean & Prestigious */}
        <div className="relative inline-flex items-center justify-center mt-3 sm:mt-5 mb-2 group mx-auto z-20">
          {/* Subtle Ambient Glow */}
          <div className="absolute -inset-1 rounded-full bg-white/15 group-hover:bg-cyan-400/20 blur-lg transition-all duration-300 pointer-events-none" />
          
          <button
            id="discover-event-btn"
            onClick={handleDiscoverEvent}
            className="relative inline-flex items-center gap-2.5 sm:gap-3.5 px-6 sm:px-10 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wider uppercase border border-white/80 shadow-[0_10px_25px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.6),0_0_28px_rgba(255,255,255,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
          >
            <span>Discover the Event</span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-950 text-white flex items-center justify-center transition-transform group-hover:translate-y-0.5">
              <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </button>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2. 3D RUBIK'S CUBE SOLVER & REGISTRATION COUNTDOWN (CLOSING OCTOBER 2ND) */}
      {/* ========================================================================= */}
      <RubiksCountdownSection onRegisterClick={() => handleOpenRegistration(activeTab)} />

      {/* ========================================================================= */}
      {/* 2.5 WHAT IS NEXATHON • ABOUT SECTION */}
      {/* ========================================================================= */}
      <AboutSection />

      {/* ========================================================================= */}
      {/* 3. COMPETITION TRACKS (PROJECT & PAPER PRESENTATION) */}
      {/* ========================================================================= */}
      <TracksSection 
        onRegisterTrack={(trackId) => handleOpenRegistration(trackId)} 
        onKnowMore={onKnowMore}
      />

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

      {/* Editorial Footer with Data Science Tokens Pile */}
      <FooterSection onRegisterClick={() => handleOpenRegistration(activeTab)} />
    </div>
  );
};

export default LandingPage;
