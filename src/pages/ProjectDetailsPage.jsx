import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Calendar,
  Users,
  Award,
  IndianRupee,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Terminal,
  Layers,
  Wifi,
  Zap,
  Coffee,
  Building2
} from 'lucide-react';
import projectThumb from '../assets/project-thumb.jpg';

const ProjectDetailsPage = ({ onBack, onRegisterClick }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#030716] text-white selection:bg-cyan-500 selection:text-black font-sans antialiased">
      {/* Top Floating Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#030716]/85 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-300 hover:text-cyan-400 transition-colors cursor-pointer group"
          >
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-400/40 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-semibold">BACK TO OVERVIEW</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold">
              TRACK 01 • PROJECT COMPETITION
            </span>
            <button
              onClick={() => onRegisterClick('project')}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-950 text-xs font-extrabold uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5),0_0_15px_rgba(255,255,255,0.2)] cursor-pointer"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-16">
        
        {/* ========================================================================= */}
        {/* SECTION 1: PROGRAM / SCHEDULE (Inspired by reference top section) */}
        {/* ========================================================================= */}
        <section className="mb-16 sm:mb-24">
          <div className="mb-8 sm:mb-10">
            <h1 className="font-['Oxanium',sans-serif] font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase mb-2">
              PROGRAM
            </h1>
            <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-2xl uppercase tracking-wider">
              OFFICIAL 8-HOUR DATA SCIENCE HACKATHON SCHEDULE &amp; EVENT PROGRESSION
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Schedule Sequence */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {[
                {
                  stage: 'STAGE 1',
                  time: '09:00 AM',
                  title: 'Participant Check-in & Lab Setup',
                  desc: 'Arrival at AIKTC Panvel, participant verification, allocation of development workstations, and Wi-Fi/infrastructure setup.'
                },
                {
                  stage: 'STAGE 2',
                  time: '10:00 AM',
                  title: 'Official Hackathon Kickoff',
                  desc: 'Problem statement alignment, technical rules briefing, access to benchmark datasets, and commencement of the 8-hour sprint.'
                },
                {
                  stage: 'STAGE 3',
                  time: '01:00 PM',
                  title: 'Mid-Sprint Mentorship & Lunch',
                  desc: 'Technical checkpoint review by domain mentors, feedback on machine learning pipelines, and participant refreshments.'
                },
                {
                  stage: 'STAGE 4',
                  time: '04:00 PM',
                  title: 'Code Freeze & GitHub Submission',
                  desc: 'Final commit to public GitHub/GitLab repositories, submission of presentation decks (PPT), and architecture documentation.'
                },
                {
                  stage: 'STAGE 5',
                  time: '04:30 PM',
                  title: 'Jury Evaluation & Project Demonstrations',
                  desc: 'Participants present live demonstrations and technical defense before the distinguished judging panel across evaluation criteria.'
                },
                {
                  stage: 'STAGE 6',
                  time: '06:00 PM',
                  title: 'Grand Valedictory & Award Ceremony',
                  desc: 'Announcement of Winner, 1st Runner-Up, and 2nd Runner-Up with cash awards from the ₹20,000+ prize pool and trophy distribution.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-baseline gap-2 sm:gap-6 pb-4 border-b border-white/10 last:border-0">
                  <div className="w-24 sm:w-28 flex-shrink-0">
                    <span className="font-['Oxanium',sans-serif] font-black text-lg sm:text-xl text-white tracking-tight">
                      {item.stage}
                    </span>
                    <span className="block text-xs font-mono text-cyan-400 font-semibold mt-0.5">
                      {item.time}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Featured Photo Artwork */}
            <div className="lg:col-span-5 sticky top-24">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] aspect-square group">
                <img
                  src={projectThumb}
                  alt="Nexathon Project Hackathon Arena"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-[11px] font-mono font-bold uppercase tracking-wider">
                    8-HOUR DATA SCIENCE HACKATHON
                  </span>
                  <h4 className="font-['Oxanium',sans-serif] text-xl font-bold text-white mt-2">
                    Collaborative AI &amp; ML Sprint
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1">
                    Pre-made projects permitted subject to official rules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/15 mb-16 sm:mb-24" />

        {/* ========================================================================= */}
        {/* SECTION 2: CAMPUS & VENUE (Clean Editorial without 3 images) */}
        {/* ========================================================================= */}
        <section className="mb-16 sm:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left: Venue Editorial Overview */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold block">
                THE VENUE &amp; HOST INSTITUTION
              </span>
              <h2 className="font-['Oxanium',sans-serif] font-black text-4xl sm:text-5xl text-white tracking-tight uppercase leading-none">
                AIKTC PANVEL
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Anjuman-I-Islam’s Kalsekar Technical Campus (AIKTC) in New Panvel, Navi Mumbai, is a premier centre for engineering education and technological research.
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                The Project Competition will be hosted inside specialized Data Science and Computer Science laboratories, featuring high-speed connectivity, centralized power backups, developer desks, and auditoriums for final presentations.
              </p>

              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-zinc-300 font-mono">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Plot No. 2 &amp; 3, Sector - 16, Near Thana Naka, Khandagaon, New Panvel, Navi Mumbai, Maharashtra 410206
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono">
                  <Calendar className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>9 October 2026 • 9:00 AM onwards (Mode: Offline)</span>
                </div>
              </div>
            </div>

            {/* Right: Venue Infrastructure & Facilities Card */}
            <div className="lg:col-span-6 rounded-3xl bg-white/[0.03] border border-white/15 p-6 sm:p-8">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-bold block mb-4">
                CAMPUS FACILITIES &amp; INFRASTRUCTURE
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono mb-6">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <Wifi className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white mb-0.5">High-Speed LAN / Wi-Fi</h3>
                    <p className="text-zinc-400 text-[11px]">Dedicated network for dataset access &amp; model deployment</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <Zap className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white mb-0.5">Continuous Power Backup</h3>
                    <p className="text-zinc-400 text-[11px]">Uninterrupted power supplies for workstations during the 8 hours</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white mb-0.5">Presentation Auditoriums</h3>
                    <p className="text-zinc-400 text-[11px]">AV podiums &amp; screens for live demonstrations before judges</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <Coffee className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white mb-0.5">Hospitality &amp; Refreshments</h3>
                    <p className="text-zinc-400 text-[11px]">On-site meals, beverages &amp; snacks provided to participants</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Anjuman-I-Islam's+Kalsekar+Technical+Campus+New+Panvel"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <span>OPEN LOCATION IN GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/15 mb-16 sm:mb-24" />

        {/* ========================================================================= */}
        {/* SECTION 3: DOMAINS & EVALUATION ("READY TO INNOVATE?" + 4-PANEL MOSAIC) */}
        {/* ========================================================================= */}
        <section className="mb-16 sm:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left: Heading & Domains */}
            <div className="lg:col-span-5 space-y-5">
              <h2 className="font-['Oxanium',sans-serif] font-black text-4xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
                READY TO<br />INNOVATE?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                The Project Competition challenges participants to develop cutting-edge, data-driven solutions to real-world problems. Participants can build in any of the 5 official domains:
              </p>

              {/* 5 Domains List */}
              <div className="space-y-3 pt-2">
                {[
                  { name: 'Healthcare', desc: 'Clinical predictive models, medical imaging, EHR analytics & health telemetry.' },
                  { name: 'Fintech', desc: 'Fraud detection, risk assessment, algorithmic modeling & decentralized finance.' },
                  { name: 'Education', desc: 'Adaptive learning systems, automated grading, student engagement & analytics.' },
                  { name: 'Agriculture', desc: 'Yield prediction, soil telemetry, drone analysis & smart supply chains.' },
                  { name: 'Open Innovation', desc: 'Autonomous AI swarms, generative pipelines, IoT telemetry & novel solutions.' }
                ].map((dom, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-colors">
                    <h3 className="text-xs sm:text-sm font-bold text-white font-mono flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      {dom.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{dom.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 4-Panel Evaluation Pillars Mosaic (Matching 4-photo grid in reference) */}
            <div className="lg:col-span-7">
              <div className="mb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold block mb-1">
                  SELECTION &amp; EVALUATION CRITERIA
                </span>
                <p className="text-xs text-zinc-400">
                  Judges evaluate project code repositories, live implementation, and accompanying presentations across 7 core pillars:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Mosaic Card 1 */}
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:bg-white/[0.05] transition-colors">
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase block mb-1">PILLAR 01 &amp; 02</span>
                    <h3 className="text-base font-bold text-white mb-2">Problem Statement &amp; Solution</h3>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Clarity of problem formulation, practical significance, innovative concept, and feasibility of the proposed data-driven solution.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">CONCEPT &amp; DESIGN</span>
                </div>

                {/* Mosaic Card 2 */}
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:bg-white/[0.05] transition-colors">
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase block mb-1">PILLAR 03 &amp; 04</span>
                    <h3 className="text-base font-bold text-white mb-2">Data &amp; Technology Stack</h3>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Appropriateness of data preprocessing, feature engineering, and robust application of ML/AI frameworks (Python, R, Power BI).
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">TECH STACK RIGOR</span>
                </div>

                {/* Mosaic Card 3 */}
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:bg-white/[0.05] transition-colors">
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase block mb-1">PILLAR 05 &amp; 06</span>
                    <h3 className="text-base font-bold text-white mb-2">Methodology &amp; Implementation</h3>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Clean architecture, algorithmic optimization, code structure, version control on GitHub, and working software output.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">CODE &amp; EXECUTION</span>
                </div>

                {/* Mosaic Card 4 */}
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:bg-white/[0.05] transition-colors">
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase block mb-1">PILLAR 07</span>
                    <h3 className="text-base font-bold text-white mb-2">Results &amp; Real-World Impact</h3>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Quantitative benchmark accuracy, practical deployment potential, presentation defense, and societal/industrial applicability.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">BENCHMARK &amp; IMPACT</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: MARQUEE TICKER (Matching ticker banner in reference) */}
        {/* ========================================================================= */}
        <div className="w-full py-3.5 border-y border-white/15 mb-16 sm:mb-24 overflow-hidden select-none bg-white/[0.02]">
          <div className="flex whitespace-nowrap animate-marquee font-mono text-xs text-zinc-400 tracking-wider">
            <span className="mx-4 font-bold text-cyan-400">❯ HEALTHCARE</span>
            <span className="mx-4 font-bold text-cyan-400">❯ FINTECH</span>
            <span className="mx-4 font-bold text-cyan-400">❯ EDUCATION</span>
            <span className="mx-4 font-bold text-cyan-400">❯ AGRICULTURE</span>
            <span className="mx-4 font-bold text-cyan-400">❯ OPEN INNOVATION</span>
            <span className="mx-4 font-bold text-white">❯ 8-HOUR SPRINT</span>
            <span className="mx-4 font-bold text-emerald-400">❯ PRE-MADE PROJECTS ALLOWED</span>
            <span className="mx-4 font-bold text-amber-300">❯ ₹20,000+ PRIZE POOL</span>
            <span className="mx-4 font-bold text-white">❯ AIKTC NEW PANVEL</span>
            <span className="mx-4 font-bold text-cyan-400">❯ HEALTHCARE</span>
            <span className="mx-4 font-bold text-cyan-400">❯ FINTECH</span>
            <span className="mx-4 font-bold text-cyan-400">❯ EDUCATION</span>
            <span className="mx-4 font-bold text-cyan-400">❯ AGRICULTURE</span>
            <span className="mx-4 font-bold text-cyan-400">❯ OPEN INNOVATION</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 5: REGISTRATION & RULES (Renamed from PRICE to REGISTRATION) */}
        {/* ========================================================================= */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left: Registration Card */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-['Oxanium',sans-serif] font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
                REGISTRATION
              </h2>

              <div className="rounded-3xl bg-white/[0.04] border border-white/20 p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <img
                    src={projectThumb}
                    alt="Project Registration Pass"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                    <span className="font-['Oxanium',sans-serif] font-black text-lg text-white uppercase tracking-wider">
                      PROJECT COMPETITION PASS
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pb-6 border-b border-white/10 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase font-semibold">TEAM SIZE</span>
                    <p className="text-sm font-bold text-white mt-0.5">2 – 3 Members</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase font-semibold">FORMAT</span>
                    <p className="text-sm font-bold text-cyan-300 mt-0.5">8-Hour Hackathon</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase font-semibold">EVENT DATE</span>
                    <p className="text-sm font-bold text-amber-300 mt-0.5">9 Oct 2026</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase font-semibold">REG. FEE</span>
                    <p className="text-sm font-bold text-emerald-400 mt-0.5">₹300 (₹500 for both)</p>
                  </div>
                </div>

                <button
                  onClick={() => onRegisterClick('project')}
                  className="w-full py-4 mt-6 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-[0_4px_25px_rgba(0,0,0,0.6),0_0_20px_rgba(255,255,255,0.3)] hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>CONFIRM REGISTRATION</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Right: INCLUDED & RULES */}
            <div className="lg:col-span-7 space-y-8">
              {/* Part 1: ELIGIBILITY & RECOGNITION */}
              <div>
                <h3 className="font-['Oxanium',sans-serif] font-black text-xl sm:text-2xl text-white tracking-tight uppercase mb-4">
                  ELIGIBILITY &amp; PRIZES:
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">—</span>
                    <span><strong>Student Eligibility:</strong> Open to students currently pursuing Engineering, B.Sc. IT, and Diploma programmes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">—</span>
                    <span><strong>Total Prize Pool:</strong> ₹20,000+ awarded across podium finishes. Exact distribution finalized by committee.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">—</span>
                    <span><strong>Podium Structure:</strong> Official trophies and cash awards for Winner, First Runner-Up, and Second Runner-Up.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">—</span>
                    <span><strong>Certificates:</strong> Official institutional Certificates of Merit for winners and Certificates of Participation for all attendees.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">—</span>
                    <span><strong>Amenities Included:</strong> High-speed Wi-Fi, lab workstations, continuous power backup, and participant refreshments.</span>
                  </li>
                </ul>
              </div>

              {/* Part 2: OFFICIAL RULES & GUIDELINES */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="font-['Oxanium',sans-serif] font-black text-xl sm:text-2xl text-white tracking-tight uppercase mb-4">
                  RULES &amp; GUIDELINES:
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">—</span>
                    <span><strong>Pre-Made Projects Policy:</strong> Participants are allowed to bring a pre-developed/pre-made project and work on or present their solution during the event, subject to final event rules.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">—</span>
                    <span><strong>GitHub Link Mandatory:</strong> Teams must provide a public GitHub/GitLab repository link containing source code, data pipelines, and setup instructions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">—</span>
                    <span><strong>Technologies Allowed:</strong> Machine Learning, Artificial Intelligence, Power BI, R, Python, and relevant data science frameworks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">—</span>
                    <span><strong>Code of Conduct:</strong> Participants must follow professional ethics and instructions of judges. Inappropriate conduct results in disqualification.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">—</span>
                    <span><strong>Presentation Time Limits:</strong> Teams must strictly adhere to the allotted time limit for demonstrations and Q&amp;A defense.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">—</span>
                    <span><strong>Intellectual Property:</strong> Intellectual property rights for participant-created work are retained by participants per event policy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">—</span>
                    <span><strong>Physical Attendance:</strong> All team members must be physically present at AIKTC Panvel throughout the event.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default ProjectDetailsPage;
