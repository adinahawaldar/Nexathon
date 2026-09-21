import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const FaqSection = ({ onRegisterClick }) => {
  const registrationLink = "https://forms.gle/Fz7EnLzh3i7u7UcMA";
  const [openIdx, setOpenIdx] = useState(1);

  const faqs = [
    {
      index: '[01]',
      q: 'WHO CAN PARTICIPATE IN NEXATHON II?',
      a: 'Students enrolled in Engineering, B.Sc. IT, and Diploma programmes across colleges and technical institutes are eligible to participate.'
    },
    {
      index: '[02]',
      q: 'WHAT ARE THE COMPETITIONS, AND CAN I REGISTER FOR BOTH?',
      a: 'Nexathon II features two flagship tracks: (1) Project Competition and (2) Technical Paper Presentation Competition. Yes, you can register for both competitions at a discounted combined fee of ₹500.'
    },
    {
      index: '[03]',
      q: 'WHAT IS THE TEAM SIZE, AND CAN I PARTICIPATE INDIVIDUALLY?',
      a: 'Project teams must have 2 to 3 members. Individual (solo) participation is allowed exclusively for the Technical Paper Presentation Competition.'
    },
    {
      index: '[04]',
      q: 'CAN I BRING A PRE-MADE OR PRE-DEVELOPED PROJECT?',
      a: 'Yes. Participants are welcome to bring a pre-developed or pre-made project for the Project Competition, subject to final event rules and jury verification.'
    },
    {
      index: '[05]',
      q: 'WHAT IS THE REGISTRATION FEE?',
      a: 'The registration fee is ₹300 for participating in one competition, or ₹500 if you register for both competitions.'
    },
    {
      index: '[06]',
      q: 'WHEN AND WHERE IS THE EVENT, AND IS IT ONLINE OR OFFLINE?',
      a: 'Nexathon II will be held completely offline on 9 October 2026, starting from 9:00 AM onwards at Anjuman-I-Islam’s Kalsekar Technical Campus, New Panvel.'
    },
    {
      index: '[07]',
      q: 'WHAT IS THE PRIZE POOL?',
      a: 'The overall prize pool for Nexathon II is ₹21,000+ across tracks, along with certificates, trophies, and recognition.'
    },
    {
      index: '[08]',
      q: 'IS THERE A SEPARATE QUIZ OR SHORTLISTING ROUND?',
      a: 'The final selection process and round structure are currently to be finalized. All registered teams will receive timely schedule and evaluation updates.'
    }
  ];

  return (
    <section 
      id="faq" 
      className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 py-20 md:py-28 text-left scroll-mt-20"
    >
      <div className="w-full pb-6 border-b border-white/20">
        <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-5xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none">
          FAQ
        </h2>
      </div>

      <div className="w-full divide-y divide-white/15 border-b border-white/15">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;

          return (
            <div 
              key={idx}
              className={`w-full transition-all duration-300 ${
                isOpen 
                  ? 'bg-white/[0.06] backdrop-blur-2xl border-y border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] text-white' 
                  : 'bg-transparent text-white'
              }`}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                className={`w-full py-6 sm:py-7 flex items-center justify-between text-left cursor-pointer transition-all duration-150 ${
                  isOpen ? 'px-4 sm:px-8' : 'px-2 sm:px-4 hover:bg-white/[0.02]'
                }`}
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4 sm:gap-8 flex-1 pr-4">
                  <span className={`font-mono text-xs sm:text-sm shrink-0 select-none ${
                    isOpen ? 'text-cyan-400 font-semibold' : 'text-zinc-500'
                  }`}>
                    {faq.index}
                  </span>
                  <span className="font-bold text-sm sm:text-base md:text-lg tracking-wide uppercase leading-snug text-white">
                    {faq.q}
                  </span>
                </div>

                <div className="shrink-0 ml-2">
                  {isOpen ? (
                    <svg 
                      className="w-6 h-6 sm:w-7 sm:h-7 text-white" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.75" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  ) : (
                    <svg 
                      className="w-6 h-6 sm:w-7 sm:h-7 text-zinc-400 group-hover:text-white" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.75" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="7" x2="17" y2="17" />
                      <polyline points="17 7 17 7 17 17" />
                    </svg>
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-8 pb-8 pt-0 animate-fadeIn">
                  <div className="sm:pl-12 md:pl-14 max-w-4xl">
                    <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-16 sm:mt-20 w-full rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight mb-2">
              Ready to exhibit your research or engineering prototype?
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
              Register for Paper Presentation or Project Presentation at Nexathon II. Submissions are open.
            </p>
          </div>

          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 sm:px-8 py-3.5 rounded-full bg-white text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <span>Register Now</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Contact Details */}
        <div className="mt-8 pt-6 border-t border-white/10">

          <h4 className="text-xl sm:text-2xl font-mono font-bold uppercase tracking-[0.18em] text-cyan-400 mb-7">
            Contact Us
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div>
              <p className="text-base sm:text-lg font-semibold text-white mb-1">
                Aatif Shaikh
              </p>
              <p className="text-sm sm:text-base font-semibold text-emerald-400 mb-1">
                +91 7757831168
              </p>
            </div>

            <div>
              <p className="text-base sm:text-lg font-semibold text-white mb-1">
                Nauman Patel
              </p>
              <p className="text-sm sm:text-base font-semibold text-emerald-400 mb-1">
                +91 9833188826
              </p>
            </div>

            <div>
              <p className="text-base sm:text-lg font-semibold text-blue-400 mb-1">
                Write to us at
              </p>

              <a
                href="mailto:datanexus.ds@aiktc.ac.in"
                className="text-base sm:text-lg text-white hover:text-cyan-400 transition-colors break-all"
              >
                datanexus.ds@aiktc.ac.in
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;