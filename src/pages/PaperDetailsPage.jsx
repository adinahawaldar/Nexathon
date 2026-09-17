import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  FileText,
  Layers,
  Award,
  Calendar,
  CheckCircle2,
  BookOpen,
  Users,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  Bookmark,
  FileCheck
} from 'lucide-react';

const PaperDetailsPage = ({ onBack, onRegisterClick }) => {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#030716] text-white selection:bg-pink-500 selection:text-black relative overflow-x-hidden">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[450px] bg-pink-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-10 w-[500px] h-[400px] bg-purple-600/10 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(35,8,30,0.6)_0%,transparent_70%)]" />
      </div>

      {/* Sticky Top Header */}
      <header className="sticky top-0 z-40 bg-[#030716]/80 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-300 hover:text-pink-400 transition-colors group cursor-pointer"
          >
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-pink-500/40 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span>BACK TO OVERVIEW</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-pink-500/10 border border-pink-400/30 text-pink-300 text-xs font-mono font-bold">
              TRACK 02
            </span>
            <button
              onClick={() => onRegisterClick('paper')}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-amber-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_20px_rgba(244,114,182,0.4)] cursor-pointer"
            >
              <span>Register for Paper/Poster</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Track Badge & Title */}
        <div className="flex flex-col items-start gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-400/30 text-pink-400 text-xs font-mono font-bold tracking-wider uppercase">
            <FileText className="w-3.5 h-3.5" />
            <span>THEORETICAL & APPLIED RESEARCH</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-['Oxanium',sans-serif]">
            Paper & Poster Presentation Track
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            Defend original, peer-reviewed research in artificial intelligence, cryptography, mathematics, and advanced computing. 
            All submissions adhere to standard IEEE publication guidelines with both oral and poster defense sessions.
          </p>
        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
          <div className="p-4 rounded-2xl bg-[#140718]/80 border border-white/10 backdrop-blur-md">
            <div className="text-xs font-mono text-zinc-400 mb-1">TEAM SIZE</div>
            <div className="text-lg sm:text-xl font-bold text-white flex items-center gap-1.5">
              <Users className="w-4 h-4 text-pink-400" />
              <span>1 – 3 Authors</span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-[#140718]/80 border border-white/10 backdrop-blur-md">
            <div className="text-xs font-mono text-zinc-400 mb-1">BOUNTY POOL</div>
            <div className="text-lg sm:text-xl font-bold text-amber-300 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              <span>₹8,000+</span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-[#140718]/80 border border-white/10 backdrop-blur-md">
            <div className="text-xs font-mono text-zinc-400 mb-1">DEADLINE</div>
            <div className="text-lg sm:text-xl font-bold text-orange-400 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-orange-400" />
              <span>7th Oct 2026</span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-[#140718]/80 border border-white/10 backdrop-blur-md">
            <div className="text-xs font-mono text-zinc-400 mb-1">FORMAT</div>
            <div className="text-lg sm:text-xl font-bold text-purple-400 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>IEEE Double-Column</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/10 gap-2 sm:gap-6 mb-8 overflow-x-auto pb-1 text-xs sm:text-sm font-mono uppercase tracking-wider">
          {[
            { id: 'overview', label: 'Research Scope & Tracks' },
            { id: 'formatting', label: 'IEEE Formatting & Poster' },
            { id: 'rubric', label: 'Peer Review Rubric' },
            { id: 'timeline', label: 'Review Milestones' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-2 border-b-2 font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'border-pink-400 text-pink-300'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Research Scope */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#1a0924]/70 border border-white/10 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-3">Academic Scope & Inquiries</h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                This track provides a prestigious platform for undergraduate, post-graduate, and independent scholars to present verified scientific investigations. Accepted papers will be defended in front of distinguished research faculties and published in the symposium proceedings.
              </p>

              <h4 className="text-sm font-mono text-pink-400 font-semibold uppercase tracking-wider mb-4">
                Core Research Tracks
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Machine Learning & Mathematical Models',
                    desc: 'Novel loss functions, transformer attention optimizers, statistical inference, Bayesian deep learning, convergence proofs.'
                  },
                  {
                    title: 'Cryptography, Quantum & Security',
                    desc: 'Post-quantum lattice algorithms, zero-knowledge verification, homomorphic encryption, consensus protocol proofs.'
                  },
                  {
                    title: 'Data Science & High-Performance Computing',
                    desc: 'Distributed graph algorithms, parallelized tensor computation, large-scale spatial-temporal analytics.'
                  },
                  {
                    title: 'Bioinformatics & Computational Intelligence',
                    desc: 'Genomic sequence alignment, neural decoding, protein folding prediction, biomedical signal synthesis.'
                  }
                ].map((domain, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-black/40 border border-white/5">
                    <h5 className="font-bold text-white text-sm mb-1">{domain.title}</h5>
                    <p className="text-xs text-zinc-400 leading-relaxed">{domain.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Formatting */}
        {activeTab === 'formatting' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#1a0924]/70 border border-white/10 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-4">Manuscript & Poster Specifications</h3>
              <div className="space-y-4">
                {[
                  {
                    num: '01',
                    title: 'IEEE Two-Column Standard',
                    detail: 'Manuscripts must strictly follow the IEEE standard double-column conference template (A4 size, 10pt font, Times New Roman).'
                  },
                  {
                    num: '02',
                    title: 'Page Limits & Abstract',
                    detail: 'Full papers should span 4 to 6 pages including references, diagrams, and formulas. Abstract should not exceed 250 words with 4-6 relevant keywords.'
                  },
                  {
                    num: '03',
                    title: 'Poster Presentation Dimensions',
                    detail: 'Shortlisted candidates presenting posters must bring an A1 size (594 x 841 mm) vertical poster. High-resolution figures, architecture charts, and methodology flowcharts are required.'
                  },
                  {
                    num: '04',
                    title: 'Plagiarism & Similarity Threshold',
                    detail: 'All papers will be screened through Turnitin/iThenticate. Submissions with a similarity index above 15% (excluding references) will be disqualified automatically.'
                  },
                  {
                    num: '05',
                    title: 'Oral Defense Structure',
                    detail: 'Authors receive 10 minutes for PowerPoint/slide presentation followed by 5 minutes of peer questioning from the review board.'
                  }
                ].map(item => (
                  <div key={item.num} className="flex items-start gap-4 p-4 rounded-2xl bg-black/40 border border-white/5">
                    <span className="font-mono text-sm font-bold text-pink-400 px-2.5 py-1 rounded-lg bg-pink-500/10 border border-pink-500/20">
                      {item.num}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Peer Review Rubric */}
        {activeTab === 'rubric' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#1a0924]/70 border border-white/10 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-4">Scientific Review Rubric (100 Points Total)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    points: '30 PTS',
                    title: 'Methodology & Theoretical Depth',
                    desc: 'Mathematical rigor, clarity of hypotheses, proof validity, and appropriate algorithm design.'
                  },
                  {
                    points: '25 PTS',
                    title: 'Experimental Benchmarks & Validation',
                    desc: 'Thoroughness of empirical trials, dataset choice, comparative baselines against state-of-the-art literature.'
                  },
                  {
                    points: '25 PTS',
                    title: 'Novelty & Scientific Contribution',
                    desc: 'Originality of proposed concept, non-obvious insights, and potential for follow-up citation.'
                  },
                  {
                    points: '20 PTS',
                    title: 'Manuscript Quality & Oral Defense',
                    desc: 'Adherence to IEEE syntax, typographical polish, precision in answering jury critiques during defense.'
                  }
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-black/40 border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono font-extrabold text-pink-400 mb-2">{item.points}</div>
                      <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-xs text-zinc-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Timeline */}
        {activeTab === 'timeline' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#1a0924]/70 border border-white/10 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-6">Review & Publication Timeline</h3>
              <div className="relative pl-6 border-l border-pink-500/30 space-y-8">
                {[
                  {
                    stage: 'PHASE 01 • EXTENDED ABSTRACT & DRAFT PAPER',
                    date: 'Deadline: October 7, 2026',
                    desc: 'Submit full draft PDF in IEEE format with author affiliations and abstract via portal.'
                  },
                  {
                    stage: 'PHASE 02 • DOUBLE-BLIND PEER REVIEW RESULTS',
                    date: 'October 14, 2026',
                    desc: 'Review scores released with reviewer remarks, revisions requested, and shortlist announcement.'
                  },
                  {
                    stage: 'PHASE 03 • CAMERA-READY PAPER & SYMPOSIUM DEFENSE',
                    date: 'October 24, 2026',
                    desc: 'On-site oral defense session, poster exhibition, and best research paper award distribution.'
                  }
                ].map((phase, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-pink-400 shadow-[0_0_12px_rgba(244,114,182,0.8)] border-2 border-[#030716]" />
                    <span className="text-xs font-mono text-pink-400 font-bold uppercase">{phase.stage}</span>
                    <h4 className="text-sm font-semibold text-amber-300 mt-0.5">{phase.date}</h4>
                    <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA Card */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-pink-950/60 via-[#26092e]/70 to-purple-950/60 border border-pink-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Ready to publish your research?</h3>
            <p className="text-zinc-300 text-xs sm:text-sm max-w-md">
              Submit your paper or poster abstract before portal freeze on October 7th, 2026.
            </p>
          </div>
          <button
            onClick={() => onRegisterClick('paper')}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(244,114,182,0.5)] cursor-pointer whitespace-nowrap"
          >
            CONFIRM SUBMISSION
          </button>
        </div>
      </main>
    </div>
  );
};

export default PaperDetailsPage;
