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
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ========================================== */}
        {/* 🎯 VISION HEADER                           */}
        {/* ========================================== */}
        <div className="text-center mb-20 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <span className="inline-block py-1 px-3 rounded-full bg-transparent text-white font-bold text-sm mb-4 border border-[#282828] uppercase tracking-widest">
            আমাদের ভিশন
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            শিক্ষাব্যবস্থাকে নিয়ে যাচ্ছি এক অনন্য উচ্চতায়
          </h2>
          <p className="text-xl text-[#A7A7A7] max-w-4xl mx-auto leading-relaxed font-medium">
            আমরা শুধু একটি অ্যাপ তৈরি করছি না; আমরা ভবিষ্যৎ নির্মাণ করছি। আমাদের মূল ভিশন হলো <strong className="text-white">Qaave</strong>-কে বাংলাদেশের <strong className="text-white">১ নম্বর এডটেক প্ল্যাটফর্ম</strong> হিসেবে প্রতিষ্ঠিত করা। যেখানেই কোনো শিক্ষার্থী বড় কিছু করার স্বপ্ন দেখবে, সেখানেই তাদের স্বপ্ন পূরণের সঙ্গী হিসেবে Qaave পাশে থাকবে।
          </p>
        </div>

        {/* ========================================== */}
        {/* 🚀 THE ROADMAP / FUTURE PROMISES           */}
        {/* ========================================== */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            আমাদের সামনের পথচলায় কী থাকছে?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Future Feature 1 */}
            <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-[100ms] p-8 bg-[#181818] rounded-[2rem] border border-[#282828] hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-[#121212] border border-[#333333] flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">কম্প্রিহেনসিভ মাস্টারক্লাস</h4>
              <p className="text-[#A7A7A7] leading-relaxed">
                আমাদের ইকোসিস্টেম তো সবে শুরু। খুব শীঘ্রই Qaave-এ প্রতিটি বিষয়ের ওপর মানসম্মত এবং ইন্টারেক্টিভ কোর্স যুক্ত হতে যাচ্ছে। বেসিক সায়েন্স থেকে অ্যাডভান্সড ম্যাথ—একজন শিক্ষার্থীর যা যা প্রয়োজন, সবকিছুই পাওয়া যাবে এক প্ল্যাটফর্মে।
              </p>
            </div>

            {/* Future Feature 2 */}
            <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-[200ms] p-8 bg-[#181818] rounded-[2rem] border border-[#282828] hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-[#121212] border border-[#333333] flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">সব প্রান্তে সমান সুযোগ</h4>
              <p className="text-[#A7A7A7] leading-relaxed">
                শিক্ষাক্ষেত্রের বৈষম্য দূর করাই আমাদের লক্ষ্য। শিক্ষার্থী ঢাকার কেন্দ্রস্থলে থাকুক বা বগুড়ার কোনো প্রত্যন্ত গ্রামে, Qaave নিশ্চিত করবে যেন সবাই সমান প্রিমিয়াম মানের শিক্ষা এবং রিসোর্স পায়।
              </p>
            </div>

            {/* Future Feature 3 */}
            <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-[300ms] p-8 bg-[#181818] rounded-[2rem] border border-[#282828] hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-[#121212] border border-[#333333] flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">সীমাহীন ইকোসিস্টেম</h4>
              <p className="text-[#A7A7A7] leading-relaxed">
                Qaave শুধু একটি অ্যাপ থেকে একটি ডিজিটাল বিশ্ববিদ্যালয়ে রূপান্তরিত হতে যাচ্ছে। ওয়ান-টু-ওয়ান এআই মেন্টরশিপ থেকে শুরু করে দেশব্যাপী স্কলারশিপ প্রোগ্রাম—Qaave-এর ভবিষ্যৎ উদ্ভাবনগুলো বাংলাদেশের পড়াশোনার ধরনকে পুরোপুরি বদলে দেবে।
              </p>
            </div>

          </div>
        </div>

        {/* ========================================== */}
        {/* ✨ CLOSING QUOTE                           */}
        {/* ========================================== */}
        <div className="mt-24 text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-[200ms]">
          <h3 className="text-2xl md:text-3xl font-black text-white italic opacity-80">
            "আমরা প্রতিযোগিতা করতে আসিনি, <br className="md:hidden" /> আমরা এসেছি বিপ্লব ঘটাতে।"
          </h3>
          <div className="w-24 h-1 bg-[#282828] mx-auto mt-6 rounded-full"></div>
        </div>

      </div>
    </section>
  );
}