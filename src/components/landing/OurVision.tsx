"use client";

import { useEffect } from "react";

export default function OurVision() {
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
    <section id="vision" className="relative w-full bg-[#121212] py-24 overflow-hidden border-t border-[#282828]">
      
      {/* 🌟 Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ========================================== */}
        {/* 🎯 VISION HEADER                           */}
        {/* ========================================== */}
        <div className="text-center mb-20 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 border border-primary/20 uppercase tracking-widest">
            Our Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Elevating Education to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0EA5E9]">Next Level</span>
          </h2>
          <p className="text-xl text-[#A7A7A7] max-w-4xl mx-auto leading-relaxed font-medium">
            We don't just want to build an app; we are building the future. Our ultimate vision is to see <strong className="text-white">Qaave</strong> emerge as the <strong className="text-primary">#1 Leading EdTech Platform in Bangladesh</strong>. Wherever there is a student striving for greatness, Qaave will be right there by their side, guiding them towards excellence.
          </p>
        </div>

        {/* ========================================== */}
        {/* 🚀 THE ROADMAP / FUTURE PROMISES           */}
        {/* ========================================== */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            What lies ahead in our journey?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Future Feature 1 */}
            <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-[100ms] p-8 bg-[#181818] rounded-[2rem] border border-[#282828] shadow-lg hover:shadow-primary/10 hover:border-primary/50 hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-[#121212] border border-[#333333] flex items-center justify-center text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Comprehensive Masterclasses</h4>
              <p className="text-[#A7A7A7] leading-relaxed">
                The ecosystem is just getting started. In the near future, Qaave will introduce highly produced, interactive courses for <strong>every single subject</strong>. From fundamental sciences to advanced mathematics, everything a student needs will exist under one unified platform.
              </p>
            </div>

            {/* Future Feature 2 */}
            <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-[200ms] p-8 bg-[#181818] rounded-[2rem] border border-[#282828] shadow-lg hover:shadow-[#0EA5E9]/10 hover:border-[#0EA5E9]/50 hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-[#121212] border border-[#333333] flex items-center justify-center text-[#0EA5E9] group-hover:bg-[#0EA5E9] group-hover:border-[#0EA5E9] group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Empowering Every Corner</h4>
              <p className="text-[#A7A7A7] leading-relaxed">
                We are on a mission to bridge the educational gap. Whether a student is from the heart of Dhaka or a remote village in Bogura, Qaave will ensure they have access to the exact same premium quality of education and resources.
              </p>
            </div>

            {/* Future Feature 3 */}
            <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-[300ms] p-8 bg-[#181818] rounded-[2rem] border border-[#282828] shadow-lg hover:shadow-[#1DB954]/10 hover:border-[#1DB954]/50 hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-[#121212] border border-[#333333] flex items-center justify-center text-[#1DB954] group-hover:bg-[#1DB954] group-hover:border-[#1DB954] group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">A Boundless Ecosystem</h4>
              <p className="text-[#A7A7A7] leading-relaxed">
                Qaave is evolving beyond an app into a digital university. From 1-on-1 AI mentorship to nationwide scholarship programs, the future of Qaave holds innovations that will completely redefine how Bangladesh studies.
              </p>
            </div>

          </div>
        </div>

        {/* ========================================== */}
        {/* ✨ CLOSING QUOTE                           */}
        {/* ========================================== */}
        <div className="mt-24 text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-[200ms]">
          <h3 className="text-2xl md:text-3xl font-black text-white italic opacity-80">
            "We are not here to compete. <br className="md:hidden" /> We are here to revolutionize."
          </h3>
          <div className="w-24 h-1 bg-primary/50 mx-auto mt-6 rounded-full"></div>
        </div>

      </div>
    </section>
  );
}