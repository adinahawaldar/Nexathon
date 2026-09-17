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
  FileText,
  Layers,
  Wifi,
  Zap,
  Coffee,
  Building2
} from 'lucide-react';
import paperThumb from '../assets/paper-thumb.jpg';

const PaperDetailsPage = ({ onBack, onRegisterClick }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#030716] text-white selection:bg-pink-500 selection:text-black font-sans antialiased">
      {/* Top Floating Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#030716]/85 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-300 hover:text-pink-400 transition-colors cursor-pointer group"
          >
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-pink-400/40 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-semibold">BACK TO OVERVIEW</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-pink-500/10 border border-pink-400/30 text-pink-300 text-xs font-mono font-bold">
              TRACK 02 • PAPER COMPETITION
            </span>
            <button
              onClick={() => onRegisterClick('paper')}
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
              OFFICIAL RESEARCH SYMPOSIUM SCHEDULE &amp; JURY DEFENSE SESSIONS
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Schedule Sequence */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {[
                {
                  stage: 'STAGE 1',
                  time: '09:00 AM',
                  title: 'Presenter Check-in & Slide Verification',
                  desc: 'Arrival at AIKTC Panvel, participant verification, presentation slide upload, and audio-visual podium checks.'
                },
                {
                  stage: 'STAGE 2',
                  time: '10:00 AM',
                  title: 'Symposium Inauguration & Chair Address',
                  desc: 'Keynote opening remarks by research chairs, presentation protocol briefing, and introduction of the distinguished jury panel.'
                },
                {
                  stage: 'STAGE 3',
                  time: '10:30 AM',
                  title: 'Oral Defense Sessions (Parallel Tracks)',
                  desc: 'Oral paper presentations covering problem formulation, methodology, algorithmic architecture, and experimental trials.'
                },
                {
                  stage: 'STAGE 4',
                  time: '01:00 PM',
                  title: 'Networking Lunch & Academic Exchange',
                  desc: 'Interdisciplinary interactions among student researchers, faculty experts, and visiting industry evaluators.'
                },
                {
                  stage: 'STAGE 5',
                  time: '02:00 PM',
                  title: 'Technical Q&A & Jury Deliberation',
                  desc: 'In-depth defense questioning, comparative baseline scrutiny, and validation of findings before the review board.'
                },
                {
                  stage: 'STAGE 6',
                  time: '05:30 PM',
                  title: 'Grand Valedictory & Award Ceremony',
                  desc: 'Announcement of Winner, 1st Runner-Up, and 2nd Runner-Up with cash awards from the ₹20,000+ prize pool and certificate handover.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-baseline gap-2 sm:gap-6 pb-4 border-b border-white/10 last:border-0">
                  <div className="w-24 sm:w-28 flex-shrink-0">
                    <span className="font-['Oxanium',sans-serif] font-black text-lg sm:text-xl text-white tracking-tight">
                      {item.stage}
                    </span>
                    <span className="block text-xs font-mono text-pink-400 font-semibold mt-0.5">
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
                  src={paperThumb}
                  alt="Nexathon Research Defense Presentation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-2.5 py-1 rounded-md bg-pink-500/20 border border-pink-400/40 text-pink-300 text-[11px] font-mono font-bold uppercase tracking-wider">
                    TECHNICAL RESEARCH DEFENSE
                  </span>
                  <h4 className="font-['Oxanium',sans-serif] text-xl font-bold text-white mt-2">
                    Academic &amp; Research Defense
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1">
                    Individual (Solo) or team participation up to 3 members.
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
            {/* Left: Venue Editorial Text */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-pink-400 uppercase tracking-widest font-bold block">
                THE VENUE &amp; HOST INSTITUTION
              </span>
              <h2 className="font-['Oxanium',sans-serif] font-black text-4xl sm:text-5xl text-white tracking-tight uppercase leading-none">
                AIKTC PANVEL
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Anjuman-I-Islam’s Kalsekar Technical Campus (AIKTC) in New Panvel, Navi Mumbai, provides a world-class academic environment for technology and data research.
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                The Paper Competition takes place in fully equipped seminar auditoriums with high-definition digital projection systems, audio lecterns, and seating for distinguished judging panels and academic attendees.
              </p>

              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-zinc-300 font-mono">
                  <MapPin className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
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
                  <Wifi className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white mb-0.5">High-Speed Wi-Fi &amp; LAN</h3>
                    <p className="text-zinc-400 text-[11px]">Seamless connectivity for live presentations &amp; benchmark demos</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white mb-0.5">Seminar Auditoriums</h3>
                    <p className="text-zinc-400 text-[11px]">Digital projectors, audio lecterns &amp; seating for academic jury</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <Zap className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white mb-0.5">Continuous Power Backup</h3>
                    <p className="text-zinc-400 text-[11px]">Uninterrupted power systems for presentation equipment</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <Coffee className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white mb-0.5">Hospitality &amp; Refreshments</h3>
                    <p className="text-zinc-400 text-[11px]">Meals, beverages &amp; dedicated networking lounge</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Anjuman-I-Islam's+Kalsekar+Technical+Campus+New+Panvel"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-pink-400 hover:text-pink-300 transition-colors cursor-pointer"
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
        {/* SECTION 3: DOMAINS & EVALUATION ("READY TO PUBLISH?" + 4-PANEL MOSAIC) */}
        {/* ========================================================================= */}
        <section className="mb-16 sm:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left: Heading & Domains */}
            <div className="lg:col-span-5 space-y-5">
              <h2 className="font-['Oxanium',sans-serif] font-black text-4xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
                READY TO<br />PUBLISH?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                The Paper Competition provides participants with a platform to present technical and research-oriented papers related to Data Science, Machine Learning, and Artificial Intelligence across 5 core domains:
              </p>

              {/* 5 Domains List */}
              <div className="space-y-3 pt-2">
                {[
                  { name: 'Healthcare', desc: 'Predictive diagnostics, biomedical imaging, telemetry & clinical analytics.' },
                  { name: 'Fintech', desc: 'Financial risk modeling, fraud detection, algorithmic finance & blockchain.' },
                  { name: 'Education', desc: 'Intelligent tutoring systems, automated evaluation & cognitive models.' },
                  { name: 'Agriculture', desc: 'Yield forecasting, remote sensing data, precision farming & pest detection.' },
                  { name: 'Open Innovation', desc: 'Generative AI architectures, quantum algorithms, LLM fine-tuning & novel frameworks.' }
                ].map((dom, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-pink-400/40 transition-colors">
                    <h3 className="text-xs sm:text-sm font-bold text-white font-mono flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-pink-400" />
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
                <span className="text-xs font-mono text-pink-400 uppercase tracking-widest font-bold block mb-1">
                  PRESENTATION STRUCTURE &amp; EVALUATION
                </span>
                <p className="text-xs text-zinc-400">
                  Participants explain problem addressed, methodology, findings, and significance across 6 academic areas:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Mosaic Card 1 */}
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:bg-white/[0.05] transition-colors">
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-pink-400 font-bold uppercase block mb-1">PART 01 &amp; 02</span>
                    <h3 className="text-base font-bold text-white mb-2">Problem &amp; Research Objectives</h3>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Contextual definition of the research area, motivation, background literature, hypotheses, and scope of investigation.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">PROBLEM &amp; SCOPE</span>
                </div>

                {/* Mosaic Card 2 */}
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:bg-white/[0.05] transition-colors">
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-pink-400 font-bold uppercase block mb-1">PART 03 &amp; 04</span>
                    <h3 className="text-base font-bold text-white mb-2">Methodology &amp; Tech Approach</h3>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Theoretical formulation, mathematical modeling, algorithmic designs, data preprocessing, and baseline comparisons.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">THEORY &amp; METHODOLOGY</span>
                </div>

                {/* Mosaic Card 3 */}
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:bg-white/[0.05] transition-colors">
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-pink-400 font-bold uppercase block mb-1">PART 05</span>
                    <h3 className="text-base font-bold text-white mb-2">Results &amp; Empirical Findings</h3>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Quantitative benchmark metrics, validation graphs, comparative error analysis, and experimental trial outputs.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">DATA &amp; VALIDATION</span>
                </div>

                {/* Mosaic Card 4 */}
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:bg-white/[0.05] transition-colors">
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-pink-400 font-bold uppercase block mb-1">PART 06</span>
                    <h3 className="text-base font-bold text-white mb-2">Conclusion &amp; Future Scope</h3>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Contributions summary, scientific novelty, practical significance, current limitations, and future extensions.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">IMPACT &amp; NOVELTY</span>
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
            <span className="mx-4 font-bold text-pink-400">❯ HEALTHCARE</span>
            <span className="mx-4 font-bold text-pink-400">❯ FINTECH</span>
            <span className="mx-4 font-bold text-pink-400">❯ EDUCATION</span>
            <span className="mx-4 font-bold text-pink-400">❯ AGRICULTURE</span>
            <span className="mx-4 font-bold text-pink-400">❯ OPEN INNOVATION</span>
            <span className="mx-4 font-bold text-white">❯ SOLO OR TEAM (UP TO 3)</span>
            <span className="mx-4 font-bold text-amber-300">❯ ₹20,000+ CASH POOL</span>
            <span className="mx-4 font-bold text-white">❯ AIKTC NEW PANVEL</span>
            <span className="mx-4 font-bold text-emerald-400">❯ MERIT CERTIFICATES</span>
            <span className="mx-4 font-bold text-pink-400">❯ HEALTHCARE</span>
            <span className="mx-4 font-bold text-pink-400">❯ FINTECH</span>
            <span className="mx-4 font-bold text-pink-400">❯ EDUCATION</span>
            <span className="mx-4 font-bold text-pink-400">❯ AGRICULTURE</span>
            <span className="mx-4 font-bold text-pink-400">❯ OPEN INNOVATION</span>
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
                    src={paperThumb}
                    alt="Paper Registration Pass"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                    <span className="font-['Oxanium',sans-serif] font-black text-lg text-white uppercase tracking-wider">
                      PAPER COMPETITION PASS
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pb-6 border-b border-white/10 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase font-semibold">TEAM SIZE</span>
                    <p className="text-sm font-bold text-white mt-0.5">Solo or Team (1–3)</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase font-semibold">FORMAT</span>
                    <p className="text-sm font-bold text-pink-300 mt-0.5">Oral Defense</p>
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
                  onClick={() => onRegisterClick('paper')}
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
                    <span className="text-pink-400 font-bold">—</span>
                    <span><strong>Eligible Courses:</strong> Open to students pursuing Engineering, B.Sc. IT, and Diploma programmes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold">—</span>
                    <span><strong>Flexible Participation:</strong> Individual (Solo) participation is permitted, as well as teams of up to 3 members.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold">—</span>
                    <span><strong>Total Prize Pool:</strong> ₹20,000+ awarded across podium finishes. Exact distribution will be announced soon.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold">—</span>
                    <span><strong>Three Awards:</strong> Winner, First Runner-Up, and Second Runner-Up awards with trophies and cash bounties.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold">—</span>
                    <span><strong>Official Certificates:</strong> Merit recognition for winners and participation certificates for all registered presenters.</span>
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
                    <span><strong>Originality:</strong> The paper must be the participant's own research work or strictly comply with authorship &amp; IP ethics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">—</span>
                    <span><strong>Presentation Defense:</strong> Presenters will be given dedicated time before the judges to present slides and defend findings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">—</span>
                    <span><strong>Adherence to Guidelines:</strong> Formatting standards, page limit, submission file format, and deadlines are finalized prior to the event.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">—</span>
                    <span><strong>Code of Conduct:</strong> Professional decorum must be maintained. Any inappropriate behaviour leads to immediate disqualification.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">—</span>
                    <span><strong>Time Limits:</strong> Presenters must strictly adhere to the allotted oral defense time and jury Q&amp;A limit.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">—</span>
                    <span><strong>Physical Attendance:</strong> Mandatory offline presentation at Anjuman-I-Islam’s Kalsekar Technical Campus (AIKTC) Panvel.</span>
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

export default PaperDetailsPage;
