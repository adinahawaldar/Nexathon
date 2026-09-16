import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  X
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
      <section id="hero" className="ref-hero-container min-h-screen flex flex-col justify-center">
        
        {/* Massive Display Title */}
        <h1 className="ref-hero-headline text-center">
          <span className="capitalize">nexathon</span>
        </h1>

        {/* Sub-description Paragraph */}
        <p className="text-zinc-300 text-sm sm:text-base max-w-xl text-center leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          empowering innovators, software engineers & researchers with national tech excellence.
        </p>

        {/* Stats Callouts Row (Clean Relative Layout) */}
        <div className="flex flex-row items-center justify-center gap-8 sm:gap-14 mb-8 text-center px-8 py-3.5 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col items-center">
            <span className="stats-number text-orange-400">+100k</span>
            <span className="stats-label text-zinc-300">total prize pool</span>
          </div>
          <div className="w-[1px] h-8 bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="stats-number text-cyan-400">+50</span>
            <span className="stats-label text-zinc-300">top universities</span>
          </div>
          <div className="w-[1px] h-8 bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="stats-number text-blue-400">+200</span>
            <span className="stats-label text-zinc-300">submissions</span>
          </div>
        </div>

        {/* Center Glass Toggle Bar */}
        <div className="center-pill-toggle mb-12">
          <button 
            onClick={() => setActiveTab('project')}
            className={activeTab === 'project' ? 'pill-toggle-active' : 'pill-toggle-inactive'}
          >
            project presentation
          </button>
          <button 
            onClick={() => setActiveTab('paper')}
            className={activeTab === 'paper' ? 'pill-toggle-active' : 'pill-toggle-inactive'}
          >
            paper presentation
          </button>
        </div>

        {/* Quick CTA to register for the selected track */}
        <button
          onClick={() => handleOpenRegistration(activeTab)}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-zinc-300 transition-all hover:scale-105"
        >
          <span>REGISTER FOR {activeTab.toUpperCase()} TRACK</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
        </button>

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
        <div className="ref-modal-overlay">
          <div className="ref-modal-box relative text-left">
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

                  <button type="submit" className="pill-toggle-active w-full justify-center py-3.5 mt-2">
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
                <button onClick={() => setModalOpen(false)} className="nav-btn-pill py-2.5 px-6">
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
