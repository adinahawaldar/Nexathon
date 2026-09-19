import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import PaperDetailsPage from './pages/PaperDetailsPage';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';
import canvasConfetti from 'canvas-confetti';

function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#/project' || hash === '#project-details') return 'project';
    if (hash === '#/paper' || hash === '#paper-details') return 'paper';
    return 'home';
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTrack, setModalTrack] = useState('project');
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

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#/project' || hash === '#project-details') {
        setCurrentRoute('project');
      } else if (hash === '#/paper' || hash === '#paper-details') {
        setCurrentRoute('paper');
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToTrack = (trackId) => {
    window.location.hash = trackId === 'project' ? '/project' : '/paper';
    setCurrentRoute(trackId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navigateToHome = () => {
    window.location.hash = '';
    setCurrentRoute('home');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleOpenRegistration = (trackType = 'project') => {
    setModalTrack(trackType);
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
    <main className="w-full min-h-screen bg-[#040816]">
      {currentRoute === 'project' && (
        <ProjectDetailsPage 
          onBack={navigateToHome} 
          onRegisterClick={handleOpenRegistration}
        />
      )}

      {currentRoute === 'paper' && (
        <PaperDetailsPage 
          onBack={navigateToHome} 
          onRegisterClick={handleOpenRegistration}
        />
      )}

      {currentRoute === 'home' && (
        <LandingPage onKnowMore={navigateToTrack} />
      )}

      {/* Global Quick Registration Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-[#090d16] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-left">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white p-1 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {!formSubmitted ? (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                      REGISTER FOR {modalTrack === 'project' ? 'PROJECT PRESENTATION' : 'PAPER PRESENTATION'}
                    </h3>
                    <p className="text-xs text-zinc-400">Complete your submission details below for Nexathon 2026</p>
                  </div>
                </div>

                <form onSubmit={handleSubmitRegistration} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">TEAM LEADER / AUTHOR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
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
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
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
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1">TRACK</label>
                      <select
                        value={formData.track}
                        onChange={e => setFormData({ ...formData, track: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                      >
                        <option value="project">Project Presentation</option>
                        <option value="paper">Paper & Poster Presentation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">TITLE OF PROJECT / PAPER *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Autonomous AI Swarms / Transformers in Cryptography"
                      value={formData.projectTitle}
                      onChange={e => setFormData({ ...formData, projectTitle: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full justify-center py-3.5 mt-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:scale-102 active:scale-98 transition-all cursor-pointer"
                  >
                    CONFIRM REGISTRATION
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">REGISTRATION CONFIRMED!</h3>
                <p className="text-zinc-400 text-sm mb-6">
                  Thank you, <strong className="text-white">{formData.name}</strong>! Your submission has been received for Nexathon 2026.
                </p>
                <button 
                  onClick={() => setModalOpen(false)} 
                  className="py-2.5 px-6 rounded-full bg-white text-slate-950 text-xs font-bold uppercase tracking-wider hover:scale-105 transition-all cursor-pointer"
                >
                  CLOSE
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
