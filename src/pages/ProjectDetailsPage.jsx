import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Terminal,
  Layers,
  Award,
  Calendar,
  CheckCircle2,
  FileCode2,
  Users,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ArrowUpRight,
  X
} from 'lucide-react';
import canvasConfetti from 'canvas-confetti';

const ProjectDetailsPage = ({ onBack, onRegisterClick }) => {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#030716] text-white selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-10 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,18,45,0.7)_0%,transparent_70%)]" />
      </div>

      {/* Sticky Top Header */}
      <header className="sticky top-0 z-40 bg-[#030716]/80 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-300 hover:text-cyan-400 transition-colors group cursor-pointer"
          >
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/40 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span>BACK TO OVERVIEW</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold">
              TRACK 01
            </span>
            <button
              onClick={() => onRegisterClick('project')}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 text-xs font-extrabold uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] cursor-pointer"
            >
              <span>Register for Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Track Badge & Title */}
        <div className="flex flex-col items-start gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase">
            <Terminal className="w-3.5 h-3.5" />
            <span>SOFTWARE & ENGINEERING SYSTEMS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-['Oxanium',sans-serif]">
            Project Presentation Track
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            Build, deploy, and exhibit functional systems that tackle real-world technological challenges.
            From distributed AI pipelines to hardware-integrated edge systems, showcase production-ready engineering.
          </p>
        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
          <div className="p-4 rounded-2xl bg-[#070e20]/80 border border-white/10 backdrop-blur-md">
            <div className="text-xs font-mono text-zinc-400 mb-1">TEAM SIZE</div>
            <div className="text-lg sm:text-xl font-bold text-white flex items-center gap-1.5">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>1 – 4 Members</span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-[#070e20]/80 border border-white/10 backdrop-blur-md">
            <div className="text-xs font-mono text-zinc-400 mb-1">BOUNTY POOL</div>
            <div className="text-lg sm:text-xl font-bold text-amber-300 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              <span>₹12,000+</span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-[#070e20]/80 border border-white/10 backdrop-blur-md">
            <div className="text-xs font-mono text-zinc-400 mb-1">DEADLINE</div>
            <div className="text-lg sm:text-xl font-bold text-orange-400 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-orange-400" />
              <span>7th Oct 2026</span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-[#070e20]/80 border border-white/10 backdrop-blur-md">
            <div className="text-xs font-mono text-zinc-400 mb-1">MODE</div>
            <div className="text-lg sm:text-xl font-bold text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Hybrid / On-Campus</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/10 gap-2 sm:gap-6 mb-8 overflow-x-auto pb-1 text-xs sm:text-sm font-mono uppercase tracking-wider">
          {[
            { id: 'overview', label: 'Overview & Domains' },
            { id: 'guidelines', label: 'Rules & Guidelines' },
            { id: 'evaluation', label: 'Evaluation Rubric' },
            { id: 'timeline', label: 'Timeline & Rounds' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-2 border-b-2 font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'border-cyan-400 text-cyan-300'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview & Domains */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#081026]/70 border border-white/10 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-3">Core Focus</h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                The Project Presentation Track invites undergraduate and graduate engineering teams to showcase functional prototypes, software products, and hardware integrations. Projects will be evaluated on architectural maturity, code quality, deployment state, and real-world viability.
              </p>

              <h4 className="text-sm font-mono text-cyan-400 font-semibold uppercase tracking-wider mb-4">
                Accepted Domains & Themes
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Autonomous AI & Intelligent Agents',
                    desc: 'Agent swarms, RAG architectures, local LLM fine-tuning, computer vision systems, robotics automation.'
                  },
                  {
                    title: 'Full-Stack & Cloud Infrastructure',
                    desc: 'Scalable distributed architectures, serverless frameworks, real-time sync systems, Kubernetes orchestration.'
                  },
                  {
                    title: 'Cybersecurity & Web3 Systems',
                    desc: 'Zero-knowledge proofs, smart contract security, decentralized storage, intrusion detection systems.'
                  },
                  {
                    title: 'IoT, Edge Computing & Hardware',
                    desc: 'Embedded microcontrollers, smart grid devices, edge sensor networks, telemetry pipelines.'
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

        {/* Tab 2: Guidelines */}
        {activeTab === 'guidelines' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#081026]/70 border border-white/10 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-4">Submission & Participation Guidelines</h3>
              <div className="space-y-4">
                {[
                  {
                    num: '01',
                    title: 'Team Composition',
                    detail: 'Teams can consist of 1 to 4 student members. Inter-college and inter-departmental teams are permitted.'
                  },
                  {
                    num: '02',
                    title: 'Working Prototype Requirement',
                    detail: 'The project must have a functioning MVP, prototype, or demonstrable hardware model. Theoretical slides alone without code/demo will be penalized.'
                  },
                  {
                    num: '03',
                    title: 'Code Repository & Originality',
                    detail: 'Projects must have a public or shared GitHub/GitLab repository with a well-documented README and clear installation/setup instructions.'
                  },
                  {
                    num: '04',
                    title: 'Live Demonstration & Q&A',
                    detail: 'Each team will receive 8 minutes for system demonstration, followed by 4 minutes of technical interrogation by the jury panel.'
                  },
                  {
                    num: '05',
                    title: 'Intellectual Property',
                    detail: 'All intellectual property rights remain with the student inventors. Nexathon does not claim ownership of presented solutions.'
                  }
                ].map(item => (
                  <div key={item.num} className="flex items-start gap-4 p-4 rounded-2xl bg-black/40 border border-white/5">
                    <span className="font-mono text-sm font-bold text-cyan-400 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
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

        {/* Tab 3: Evaluation Rubric */}
        {activeTab === 'evaluation' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#081026]/70 border border-white/10 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-4">Jury Evaluation Rubric (100 Points Total)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    points: '30 PTS',
                    title: 'Technical Complexity & Architecture',
                    desc: 'Code quality, system design, scalability, use of appropriate algorithms, and robust engineering principles.'
                  },
                  {
                    points: '25 PTS',
                    title: 'Innovation & Novelty',
                    desc: 'Uniqueness of the problem statement and the creative execution of the proposed solution.'
                  },
                  {
                    points: '25 PTS',
                    title: 'Functional Working Demo',
                    desc: 'Stability of live deployment, UI/UX polish, edge-case handling during jury execution.'
                  },
                  {
                    points: '20 PTS',
                    title: 'Defense & Problem Formulation',
                    desc: 'Clarity of presentation, depth of answers during panel Q&A, and market/social impact potential.'
                  }
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-black/40 border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono font-extrabold text-cyan-400 mb-2">{item.points}</div>
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
            <div className="p-6 sm:p-8 rounded-3xl bg-[#081026]/70 border border-white/10 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-6">Round Progression & Milestones</h3>
              <div className="relative pl-6 border-l border-cyan-500/30 space-y-8">
                {[
                  {
                    stage: 'PHASE 01 • REGISTRATION & ABSTRACT SUBMISSION',
                    date: 'Deadline: October 7, 2026',
                    desc: 'Submit team details, project title, 250-word synopsis, and architecture diagram via the registration portal.'
                  },
                  {
                    stage: 'PHASE 02 • PRE-SCREENING & SHORTLIST NOTIFICATION',
                    date: 'October 12, 2026',
                    desc: 'Expert technical committee evaluates abstracts and announces the Top 30 teams advancing to live finals.'
                  },
                  {
                    stage: 'PHASE 03 • NATIONAL FINALS & LIVE DEMONSTRATION',
                    date: 'October 24, 2026',
                    desc: 'On-stage live booth exhibitions, jury evaluation, code scrutiny, and final award ceremony.'
                  }
                ].map((phase, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.8)] border-2 border-[#030716]" />
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase">{phase.stage}</span>
                    <h4 className="text-sm font-semibold text-amber-300 mt-0.5">{phase.date}</h4>
                    <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA Card */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-[#0a1836]/70 to-blue-950/60 border border-cyan-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Ready to exhibit your project?</h3>
            <p className="text-zinc-300 text-xs sm:text-sm max-w-md">
              Confirm your team registration before portals close on October 7th, 2026.
            </p>
          </div>
          <button
            onClick={() => onRegisterClick('project')}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(0,240,255,0.5)] cursor-pointer whitespace-nowrap"
          >
            CONFIRM REGISTRATION
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailsPage;
