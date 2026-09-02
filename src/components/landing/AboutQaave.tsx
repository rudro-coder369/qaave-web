"use client";

import { useEffect } from "react";

export default function AboutQaave() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-10", "opacity-0");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative w-full bg-[#121212] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ========================================== */}
        {/* 🎯 SECTION HEADER                          */}
        {/* ========================================== */}
        <div className="text-center mb-20 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            What is <span className="text-primary">Qaave</span>?
          </h2>
          <p className="text-lg text-[#A7A7A7] max-w-3xl mx-auto">
            Qaave is not just an app; it is the ultimate environment of study. We combine psychology, technology, and curated content to transform how students learn, practice, and conquer their exams.
          </p>
        </div>

        {/* ========================================== */}
        {/* 🟢 ESSENTIAL (FREE) FEATURES               */}
        {/* ========================================== */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h3 className="text-3xl font-bold text-white">Core Essentials</h3>
            <span className="px-3 py-1 bg-[#1DB954]/10 text-[#1DB954] font-bold text-sm rounded-full border border-[#1DB954]/20">
              Free Forever
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
              title="Unbreakable App Blocker" 
              desc="Set a timer and lock distracting apps. No bypasses, no resets until the timer hits zero." 
              delay="delay-[100ms]"
            />
            <FeatureCard 
              icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
              title="Smart Study Timer" 
              desc="Track subject-wise study sessions. Differentiate between self-study and online classes easily." 
              delay="delay-[200ms]"
            />
            <FeatureCard 
              icon="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
              title="National Leaderboard" 
              desc="Compete nationwide. Daily and monthly rankings based on actual focused study time." 
              delay="delay-[300ms]"
            />
            <FeatureCard 
              icon="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
              title="30-Day Analytics Log" 
              desc="A complete history of your study habits. Know your peak days and times." 
              delay="delay-[400ms]"
            />
            <FeatureCard 
              icon="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" 
              title="Visual Syllabus Tracker" 
              desc="Map your progress. See exactly which chapters are completed and what is left to conquer." 
              delay="delay-[500ms]"
            />
            <FeatureCard 
              icon="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
              title="Virtual Group Study" 
              desc="Create study rooms with friends. See live updates when your peers turn on their study timers." 
              delay="delay-[600ms]"
            />
            <FeatureCard 
              icon="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
              title="Daily Routine Maker" 
              desc="Plan your entire day effortlessly and stay on track with your personalized routine." 
              delay="delay-[700ms]"
            />
            <FeatureCard 
              icon="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              title="Personalized AI Tutor" 
              desc="An AI that knows your strengths and weaknesses, providing custom answers and guidance." 
              delay="delay-[800ms]"
            />
          </div>
        </div>

        {/* ========================================== */}
        {/* 👑 QAAVE PRO (PREMIUM ECOSYSTEM)           */}
        {/* ========================================== */}
        <div className="mb-24 relative p-8 md:p-12 bg-[#181818] rounded-[2.5rem] border border-[#D4AF37]/20 shadow-[0_10px_40px_rgb(212,175,55,0.05)] overflow-hidden">
          
          {/* Decorative Premium Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D4AF37]/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center gap-4 mb-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <div>
              <h3 className="text-3xl font-black text-white mb-2 flex items-center gap-3">
                Qaave Elite <span className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] font-bold text-sm rounded-full border border-[#D4AF37]/20">Premium Ecosystem</span>
              </h3>
              <p className="text-[#A7A7A7]">Unlocking the ultimate 6-pillar methodology for exam dominance.</p>
            </div>
          </div>

          <div className="space-y-6 relative z-10">
            
            <PremiumCard 
              title="1. Interactive Learn Module"
              desc="No boring PDFs. Select a chapter and dive into a structured topic-by-topic breakdown. Understand concepts through real-life examples, followed by instant MCQ practice."
              icon="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              delay="delay-[100ms]"
            />

            <PremiumCard 
              title="2. Targeted Practice Arena"
              desc="Choose between 'Unlimited Practice' to test your endurance, or 'Exam Materials' containing highly-analyzed MCQs per chapter that cover 80% of board questions."
              icon="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              delay="delay-[200ms]"
            />

            <PremiumCard 
              title="3. Customizable Mock Tests"
              desc="Create your own battlefield. Take timed MCQ exams on a single chapter, or shuffle multiple chapters together to simulate the pressure of actual board exams."
              icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              delay="delay-[300ms]"
            />

            <PremiumCard 
              title="4. Automated Live Exams"
              desc="Every night at 10 PM, join the live arena: 25 MCQs in 20 minutes. Featuring special Mega Batches and Model Tests tailored for SSC candidates."
              icon="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              delay="delay-[400ms]"
            />

            {/* 🔥 5. Question Bank (Now in the main list) */}
            <PremiumCard 
              title="5. Ultimate Question Bank"
              desc="Type-wise categorization of previous year board questions for laser-focused preparation. Stop wasting time on irrelevant or outdated topics."
              icon="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              delay="delay-[500ms]"
            />

            {/* 🔥 6. Suggestions (Now in the main list) */}
            <PremiumCard 
              title="6. Data-Driven Suggestions"
              desc="Highly probable MCQ, CQ, and SQ lists curated through deep test-paper analysis. We embrace the 80/20 rule—study less, achieve more."
              icon="M13 10V3L4 14h7v7l9-11h-7z"
              delay="delay-[600ms]"
            />

            {/* Elite Analytics Notice */}
            <div className="mt-8 p-5 bg-primary/10 rounded-xl border border-primary/20 flex items-start gap-4 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-[700ms]">
              <div className="p-2 bg-[#121212] rounded-lg text-primary mt-1 border border-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary">Advanced Analytics Unlocked</h4>
                <p className="text-sm text-[#A7A7A7] mt-1">Premium upgrades your History Log to reveal deep analytics. Instantly identify your weakest subjects, track concept mastery, and optimize your study hours where it matters most.</p>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================== */}
        {/* 🧬 THE CORE PILLARS                        */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-[#181818] rounded-[2rem] border border-[#282828] shadow-lg text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-[100ms] hover:border-[#0EA5E9]/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] transition-all">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#121212] border border-[#282828] text-[#0EA5E9] rounded-2xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Gamification</h3>
            <p className="text-[#A7A7A7]">
              Studying shouldn't feel like a chore. Qaave uses game mechanics, EXP, badges, and streaks to make learning highly addictive and rewarding.
            </p>
          </div>

          <div className="p-8 bg-[#181818] rounded-[2rem] border border-[#282828] shadow-lg text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-[200ms] hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(104,38,223,0.1)] transition-all">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#121212] border border-[#282828] text-primary rounded-2xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Socialization</h3>
            <p className="text-[#A7A7A7]">
              Build your academic profile. Search for peers, follow top rankers, and build a competitive yet supportive network of high-achievers.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

// ==========================================
// 🧩 SUB-COMPONENTS
// ==========================================

function FeatureCard({ icon, title, desc, delay }: { icon: string, title: string, desc: string, delay: string }) {
  return (
    <div className={`reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 ${delay} p-6 bg-[#181818] border border-[#282828] rounded-2xl shadow-lg hover:shadow-primary/10 hover:border-primary/50 hover:-translate-y-1 transition-all group`}>
      <div className="w-12 h-12 mb-4 bg-[#121212] border border-[#333333] text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
      <p className="text-sm text-[#A7A7A7] leading-relaxed">{desc}</p>
    </div>
  );
}

function PremiumCard({ title, desc, icon, delay }: { title: string, desc: string, icon: string, delay: string }) {
  return (
    <div className={`reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 ${delay} p-6 md:p-8 bg-[#121212] border border-[#282828] rounded-2xl hover:border-[#D4AF37]/50 hover:shadow-[0_6px_25px_rgba(212,175,55,0.08)] hover:-translate-y-1 transition-all group`}>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-14 h-14 shrink-0 bg-[#181818] border border-[#333333] text-[#D4AF37] rounded-2xl flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
          </svg>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{title}</h4>
          <p className="text-[#A7A7A7] leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}