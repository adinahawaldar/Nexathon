import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const FooterSection = ({ onRegisterClick }) => {
  const registrationLink = "https://forms.gle/Fz7EnLzh3i7u7UcMA";
  const [hoveredCoin, setHoveredCoin] = useState(null);

  // 1. Organic, scattered mound tokens (random tilts, heights, and positions like the reference pile)
  const moundCoins = [
    { id: 'm-cv', symbol: 'CV', name: 'Computer Vision & Convolutional Nets', bg: 'bg-cyan-500', border: 'border-cyan-800', text: 'text-cyan-950', size: 'w-18 h-18 sm:w-24 sm:h-24', rot: -12, y: -4, z: 21 },
    { id: 'm-ml', symbol: 'ML', name: 'Machine Learning Algorithms', bg: 'bg-fuchsia-500', border: 'border-fuchsia-800', text: 'text-fuchsia-950', size: 'w-22 h-22 sm:w-28 sm:h-28', rot: 16, y: -8, z: 23 },
    { id: 'm-sql', symbol: 'SQL', name: 'Structured Query & Data Engineering', bg: 'bg-yellow-400', border: 'border-yellow-600', text: 'text-yellow-950', size: 'w-22 h-22 sm:w-28 sm:h-28', rot: -10, y: -14, z: 25 },
    { id: 'm-ai', symbol: 'AI', name: 'Artificial Intelligence & Deep Learning', bg: 'bg-emerald-500', border: 'border-emerald-700', text: 'text-emerald-950', size: 'w-24 h-24 sm:w-32 sm:h-32', rot: -4, y: -24, z: 35 },
    { id: 'm-tf', symbol: 'TF', name: 'TensorFlow Neural Architectures', bg: 'bg-red-600', border: 'border-red-900', text: 'text-red-950', size: 'w-22 h-22 sm:w-28 sm:h-28', rot: 12, y: -12, z: 28 },
    { id: 'm-py', symbol: 'Py', name: 'Python 3 Scientific Computing', bg: 'bg-orange-500', border: 'border-orange-800', text: 'text-orange-950', size: 'w-22 h-22 sm:w-28 sm:h-28', rot: -16, y: -8, z: 24 },
    { id: 'm-pt', symbol: 'PT', name: 'PyTorch Deep Learning Engine', bg: 'bg-blue-400', border: 'border-blue-700', text: 'text-blue-950', size: 'w-20 h-20 sm:w-26 sm:h-26', rot: 20, y: -16, z: 26 },
    { id: 'm-llm', symbol: 'LLM', name: 'Large Language & Foundation Models', bg: 'bg-indigo-500', border: 'border-indigo-800', text: 'text-indigo-950', size: 'w-18 h-18 sm:w-24 sm:h-24', rot: -14, y: -18, z: 22 }
  ];

  // 2. Full-width randomized base row spanning 100% viewport width with organic tilts & offsets
  const baseCoins = [
    { id: 'b-math', symbol: '∑', name: 'Statistical Inference & Linear Algebra', bg: 'bg-purple-600', border: 'border-purple-900', text: 'text-purple-950', size: 'w-20 h-20 sm:w-28 sm:h-28', rot: -24, y: -6, z: 12 },
    { id: 'b-pandas', symbol: 'pd', name: 'Pandas DataFrames & Series', bg: 'bg-pink-500', border: 'border-pink-800', text: 'text-pink-950', size: 'w-22 h-22 sm:w-30 sm:h-30', rot: 15, y: 8, z: 15 },
    { id: 'b-numpy', symbol: 'np', name: 'NumPy Vectorized Computing', bg: 'bg-amber-600', border: 'border-amber-900', text: 'text-amber-950', size: 'w-18 h-18 sm:w-26 sm:h-26', rot: -10, y: -14, z: 11 },
    { id: 'b-nlp', symbol: 'NLP', name: 'Natural Language Processing', bg: 'bg-yellow-400', border: 'border-yellow-700', text: 'text-yellow-950', size: 'w-22 h-22 sm:w-28 sm:h-28', rot: 28, y: 4, z: 14 },
    { id: 'b-spark', symbol: '⚡', name: 'Apache Spark Distributed Compute', bg: 'bg-blue-400', border: 'border-blue-700', text: 'text-blue-950', size: 'w-20 h-20 sm:w-26 sm:h-26', rot: -16, y: -10, z: 13 },
    { id: 'b-rf', symbol: 'RF', name: 'Random Forest & Gradient Boosters', bg: 'bg-teal-500', border: 'border-teal-800', text: 'text-teal-950', size: 'w-22 h-22 sm:w-30 sm:h-30', rot: 9, y: 12, z: 16 },
    { id: 'b-cuda', symbol: 'GPU', name: 'CUDA Accelerated Matrix Compute', bg: 'bg-red-600', border: 'border-red-900', text: 'text-red-950', size: 'w-24 h-24 sm:w-32 sm:h-32', rot: -22, y: -18, z: 18 },
    { id: 'b-scipy', symbol: 'SciPy', name: 'Scientific Python Algorithms', bg: 'bg-indigo-500', border: 'border-indigo-800', text: 'text-indigo-950', size: 'w-20 h-20 sm:w-26 sm:h-26', rot: 14, y: 2, z: 12 },
    { id: 'b-bert', symbol: 'BERT', name: 'Transformer Attention Architecture', bg: 'bg-orange-500', border: 'border-orange-800', text: 'text-orange-950', size: 'w-22 h-22 sm:w-28 sm:h-28', rot: -8, y: -12, z: 15 },
    { id: 'b-py', symbol: 'Py', name: 'Python Core Architecture', bg: 'bg-emerald-500', border: 'border-emerald-800', text: 'text-emerald-950', size: 'w-24 h-24 sm:w-32 sm:h-32', rot: 20, y: 8, z: 17 },
    { id: 'b-keras', symbol: 'Keras', name: 'High-Level Neural Network APIs', bg: 'bg-red-500', border: 'border-red-800', text: 'text-red-950', size: 'w-20 h-20 sm:w-26 sm:h-26', rot: -16, y: -16, z: 13 },
    { id: 'b-sql', symbol: 'SQL', name: 'Relational Database Queries', bg: 'bg-yellow-400', border: 'border-yellow-700', text: 'text-yellow-950', size: 'w-22 h-22 sm:w-30 sm:h-30', rot: 12, y: 6, z: 16 },
    { id: 'b-ann', symbol: 'ANN', name: 'Artificial Neural Network Layers', bg: 'bg-purple-500', border: 'border-purple-800', text: 'text-purple-950', size: 'w-20 h-20 sm:w-26 sm:h-26', rot: -26, y: -8, z: 14 },
    { id: 'b-ds', symbol: 'DS', name: 'Data Science & Feature Engineering', bg: 'bg-cyan-500', border: 'border-cyan-800', text: 'text-cyan-950', size: 'w-24 h-24 sm:w-32 sm:h-32', rot: 18, y: 10, z: 18 },
    { id: 'b-cv', symbol: 'CV', name: 'Computer Vision & Image Filters', bg: 'bg-orange-600', border: 'border-orange-900', text: 'text-orange-950', size: 'w-22 h-22 sm:w-28 sm:h-28', rot: -12, y: -20, z: 15 },
    { id: 'b-pt', symbol: 'PT', name: 'PyTorch Model Training', bg: 'bg-blue-500', border: 'border-blue-800', text: 'text-blue-950', size: 'w-22 h-22 sm:w-28 sm:h-28', rot: 24, y: 4, z: 17 },
    { id: 'b-ml', symbol: 'ML', name: 'Supervised & Unsupervised Learning', bg: 'bg-fuchsia-600', border: 'border-fuchsia-900', text: 'text-fuchsia-950', size: 'w-20 h-20 sm:w-26 sm:h-26', rot: -14, y: -12, z: 13 },
    { id: 'b-pd2', symbol: 'pd', name: 'Data Wrangling & Cleaning', bg: 'bg-pink-600', border: 'border-pink-900', text: 'text-pink-950', size: 'w-22 h-22 sm:w-30 sm:h-30', rot: 10, y: 12, z: 16 },
    { id: 'b-ai2', symbol: 'AI', name: 'Autonomous Agent Frameworks', bg: 'bg-emerald-600', border: 'border-emerald-900', text: 'text-emerald-950', size: 'w-24 h-24 sm:w-32 sm:h-32', rot: -22, y: -14, z: 18 },
    { id: 'b-tf2', symbol: 'TF', name: 'TensorFlow Production Serving', bg: 'bg-red-600', border: 'border-red-900', text: 'text-red-950', size: 'w-22 h-22 sm:w-28 sm:h-28', rot: 17, y: 6, z: 15 },
    { id: 'b-math2', symbol: 'λ', name: 'Loss Optimization & Calculus', bg: 'bg-amber-500', border: 'border-amber-800', text: 'text-amber-950', size: 'w-20 h-20 sm:w-26 sm:h-26', rot: -18, y: -8, z: 12 }
  ];

  return (
    <footer className="relative w-full bg-[#050811] text-white pt-20 pb-0 overflow-hidden border-t border-white/10 z-20">

      {/* Top Editorial Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">

          {/* ============================================================== */}
          {/* 1. LEFT COLUMN: GIANT STACKED DISPLAY LINKS (REFERENCE STYLE) */}
          {/* ============================================================== */}
          <div className="md:col-span-5 text-left">
            <div className="space-y-1 font-['Oxanium','Space_Grotesk',sans-serif] font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[0.9] uppercase select-none">
              <a
                href="#tracks"
                className="block text-white hover:text-cyan-400 transition-colors cursor-pointer"
              >
                TRACKS
              </a>
              <a
                href="#prizes"
                className="block text-white hover:text-amber-400 transition-colors cursor-pointer"
              >
                PRIZES
              </a>
              <a
                href="#timeline"
                className="block text-white hover:text-emerald-400 transition-colors cursor-pointer"
              >
                TIMELINE
              </a>
              <a
                href={registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-left text-white hover:text-pink-400 transition-colors cursor-pointer"
              >
                REGISTER
              </a>
            </div>
          </div>

          {/* ============================================================== */}
          {/* 2. MIDDLE COLUMN: NAVIGATION LINKS */}
          {/* ============================================================== */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-mono text-xs text-zinc-400 uppercase tracking-widest font-semibold mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base font-medium text-zinc-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Nexathon</a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-white transition-colors">Paper Presentation</a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-white transition-colors">Project Presentation</a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-white transition-colors">Schedule &amp; Milestones</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ &amp; Submission Rules</a>
              </li>
            </ul>
          </div>

          {/* ============================================================== */}
          {/* 3. RIGHT COLUMN: INSTITUTIONAL INFO & SOCIAL LINKS */}
          {/* ============================================================== */}
          <div className="md:col-span-4 text-left md:text-left flex flex-col justify-start">
            {/* Institutional Subtitle */}
            <div className="mb-6 font-mono text-[10px] sm:text-xs text-zinc-400 tracking-wider uppercase leading-relaxed space-y-1">
              <p className="font-bold text-zinc-200">
                DEPARTMENT OF COMPUTER SCIENCE &amp; ENGINEERING (DATA SCIENCE)
              </p>
              <p className="text-zinc-300">
                Anjuman-I-Islam&apos;s Kalsekar Technical Campus
              </p>
              <p className="text-zinc-400">
                New Panvel, Navi Mumbai • Nexathon 2026
              </p>
            </div>

            {/* Social Follow Links */}
            <div className="flex items-center gap-4 text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-wider font-semibold">
              <span>FOLLOW US:</span>
              <div className="flex items-center gap-4 sm:gap-5 text-zinc-300">
                <a
                  href="https://whatsapp.com/channel/0029VbBbnMZ9MF97N8yK692m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.948.56 3.763 1.53 5.303L2 22l4.832-1.493A9.957 9.957 0 0 0 12.004 22C17.528 22 22 17.524 22 12.004 22 6.48 17.528 2 12.004 2zm5.72 14.156c-.24.672-1.392 1.284-1.944 1.368-.492.072-1.116.108-3.6-1.02-3.144-1.428-5.16-4.632-5.316-4.848-.156-.216-1.26-1.68-1.26-3.204 0-1.524.792-2.28 1.08-2.592.288-.312.636-.384.852-.384.216 0 .432.012.624.024.204.012.48-.072.744.576.264.648.912 2.22.996 2.388.084.168.144.372.024.588-.12.216-.18.348-.36.564-.18.216-.372.48-.528.648-.18.18-.36.384-.156.732.204.348.912 1.5 1.956 2.424 1.344 1.188 2.472 1.56 2.82 1.728.348.168.552.144.756-.096.204-.24.876-1.02 1.116-1.368.24-.348.48-.288.792-.168.312.12 1.98.936 2.316 1.104.336.168.564.252.648.396.084.144.084.828-.156 1.5z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/datanexus_aiktc?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/data-nexus-club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* 4. LOWER PART: ORGANIC RANDOMIZED PILE OF DATA SCIENCE COINS */}
      {/* ============================================================== */}
      <div className="relative w-full overflow-hidden select-none -mt-4 sm:-mt-8 pt-8 sm:pt-10 pb-0">

        {/* Active Coin Tooltip */}
        {hoveredCoin && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50 px-3.5 py-1.5 rounded-full bg-slate-900/95 border border-white/25 backdrop-blur-md text-xs font-mono font-bold text-white shadow-2xl pointer-events-none animate-fadeIn whitespace-nowrap">
            {hoveredCoin}
          </div>
        )}

        {/* --- PILE APEX & UPPER MOUND: ORGANIC ASYMMETRICAL HEAP --- */}
        <div className="flex justify-center items-end -mb-8 sm:-mb-14 relative z-20 pointer-events-auto">
          <div className="flex items-end justify-center -space-x-5 sm:-space-x-8 md:-space-x-10">
            {moundCoins.map((coin) => (
              <div
                key={coin.id}
                onMouseEnter={() => setHoveredCoin(`${coin.symbol} • ${coin.name}`)}
                onMouseLeave={() => setHoveredCoin(null)}
                style={{
                  transform: `translateY(${coin.y}px) rotate(${coin.rot}deg)`,
                  zIndex: coin.z
                }}
                className={`${coin.size} rounded-full ${coin.bg} border-4 sm:border-[5px] ${coin.border} shadow-[0_14px_35px_rgba(0,0,0,0.85)] flex items-center justify-center cursor-pointer transition-all duration-200 hover:!z-50 hover:!translate-y-[-24px] hover:!scale-115 hover:!rotate-0 active:scale-95 group relative shrink-0`}
              >
                {/* Inner Ring */}
                <div className="w-[78%] h-[78%] rounded-full border-2 border-black/25 flex items-center justify-center shadow-inner">
                  <span className={`font-black font-mono text-lg sm:text-2xl md:text-3xl ${coin.text} tracking-tight group-hover:scale-105 transition-transform`}>
                    {coin.symbol}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- PILE BASE ROW: FULL-WIDTH EDGE-TO-EDGE ORGANIC SCATTER --- */}
        <div className="w-full flex justify-center overflow-hidden relative z-10 pointer-events-auto">
          <div className="flex items-end justify-center -space-x-4 sm:-space-x-6 md:-space-x-8 min-w-[108vw] sm:min-w-[112vw] translate-y-3 sm:translate-y-6">
            {baseCoins.map((coin) => (
              <div
                key={coin.id}
                onMouseEnter={() => setHoveredCoin(`${coin.symbol} • ${coin.name}`)}
                onMouseLeave={() => setHoveredCoin(null)}
                style={{
                  transform: `translateY(${coin.y}px) rotate(${coin.rot}deg)`,
                  zIndex: coin.z
                }}
                className={`${coin.size} rounded-full ${coin.bg} border-4 sm:border-[5px] ${coin.border} shadow-[0_16px_40px_rgba(0,0,0,0.9)] flex items-center justify-center cursor-pointer transition-all duration-200 hover:!z-50 hover:!translate-y-[-24px] hover:!scale-115 hover:!rotate-0 active:scale-95 group relative shrink-0`}
              >
                {/* Inner Ring */}
                <div className="w-[78%] h-[78%] rounded-full border-2 border-black/20 flex items-center justify-center shadow-inner">
                  <span className={`font-black font-mono text-base sm:text-xl md:text-2xl ${coin.text} tracking-tight group-hover:scale-105 transition-transform`}>
                    {coin.symbol}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>



    </footer >
  );
};

export default FooterSection;