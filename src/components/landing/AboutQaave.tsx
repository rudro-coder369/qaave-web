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
            <span className="text-white">Qaave</span> কী?
          </h2>
          <p className="text-lg text-[#A7A7A7] max-w-3xl mx-auto">
            Qaave শুধুই একটি অ্যাপ নয়; এটি পড়ালেখার একটি সম্পূর্ণ পরিবেশ। সাইকোলজি, প্রযুক্তি এবং মানসম্মত কন্টেন্টের সমন্বয়ে আমরা শিক্ষার্থীদের শেখার, অনুশীলন করার এবং পরীক্ষায় বিজয়ী হওয়ার পদ্ধতিকে পুরোপুরি বদলে দিচ্ছি।
          </p>
        </div>

        {/* ========================================== */}
        {/* 🟢 ESSENTIAL (FREE) FEATURES               */}
        {/* ========================================== */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h3 className="text-3xl font-bold text-white">কোর ফিচারসমূহ</h3>
            <span className="px-3 py-1 bg-transparent text-white font-bold text-sm rounded-full border border-[#282828]">
              আজীবন ফ্রি
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
              title="আনব্রেকেবল অ্যাপ ব্লকার" 
              desc="টাইমার সেট করে মনোযোগ নষ্টকারী অ্যাপগুলো লক করে দাও। টাইমার শেষ না হওয়া পর্যন্ত কোনোভাবেই এটি আনলক করা যাবে না।" 
              delay="delay-[100ms]"
            />
            <FeatureCard 
              icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
              title="স্মার্ট স্টাডি টাইমার" 
              desc="বিষয়ভিত্তিক পড়াশোনার সময় ট্র্যাক করো। সেলফ-স্টাডি এবং অনলাইন ক্লাসের সময়কে সহজেই আলাদা করে হিসেব করো।" 
              delay="delay-[200ms]"
            />
            <FeatureCard 
              icon="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
              title="ন্যাশনাল লিডারবোর্ড" 
              desc="পুরো দেশের শিক্ষার্থীদের সাথে পাল্লা দাও। তোমার আসল পড়াশোনার সময়ের ওপর ভিত্তি করে দৈনিক এবং মাসিক র‍্যাংকিং।" 
              delay="delay-[300ms]"
            />
            <FeatureCard 
              icon="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
              title="৩০ দিনের অ্যানালিটিক্স" 
              desc="তোমার পড়াশোনার সম্পূর্ণ হিস্ট্রি। কোন দিন এবং কোন সময়ে তুমি সবচেয়ে ভালো পড়াশোনা করো, তা বিস্তারিত জেনে নাও।" 
              delay="delay-[400ms]"
            />
            <FeatureCard 
              icon="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" 
              title="ভিজ্যুয়াল সিলেবাস ট্র্যাকার" 
              desc="তোমার প্রগ্রেস ট্র্যাকিং। কোন চ্যাপ্টারগুলো শেষ হয়েছে আর কতটা বাকি আছে, তার একদম ক্লিয়ার ধারণা পাও।" 
              delay="delay-[500ms]"
            />
            <FeatureCard 
              icon="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
              title="ভার্চুয়াল গ্রুপ স্টাডি" 
              desc="বন্ধুদের সাথে স্টাডি রুম তৈরি করো। যখন তোমার বন্ধুরা পড়তে বসবে এবং টাইমার চালু করবে, তখন লাইভ আপডেট দেখতে পাবে।" 
              delay="delay-[600ms]"
            />
            <FeatureCard 
              icon="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
              title="ডেইলি রুটিন মেকার" 
              desc="তোমার পুরো দিনের পরিকল্পনা খুব সহজেই তৈরি করো এবং নিজের কাস্টমাইজড রুটিন মেনে পড়াশোনায় ফোকাস ধরে রাখো।" 
              delay="delay-[700ms]"
            />
            <FeatureCard 
              icon="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              title="পারসোনালাইজড এআই টিউটর" 
              desc="এমন একজন এআই টিউটর যে তোমার দুর্বলতা ও শক্তিমত্তা জানে, এবং সে অনুযায়ী তোমাকে গাইডলাইন ও প্রশ্নের উত্তর দেবে।" 
              delay="delay-[800ms]"
            />
          </div>
        </div>

        {/* ========================================== */}
        {/* 👑 QAAVE PRO (PREMIUM ECOSYSTEM)           */}
        {/* ========================================== */}
        <div className="mb-24 relative p-8 md:p-12 bg-[#181818] rounded-[2.5rem] border border-[#282828] overflow-hidden">

          <div className="flex flex-col md:flex-row items-center gap-4 mb-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <div>
              <h3 className="text-3xl font-black text-white mb-2 flex items-center gap-3">
                Qaave Elite <span className="px-3 py-1 bg-transparent text-white font-bold text-sm rounded-full border border-[#282828]">প্রিমিয়াম ইকোসিস্টেম</span>
              </h3>
              <p className="text-[#A7A7A7]">পরীক্ষায় আধিপত্য বিস্তারের জন্য ৬-পিলার মেথডলজি আনলক করো।</p>
            </div>
          </div>

          <div className="space-y-6 relative z-10">
            
            <PremiumCard 
              title="১. ইন্টারেক্টিভ লার্ন মডিউল"
              desc="বোরিং পিডিএফের দিন শেষ। যেকোনো চ্যাপ্টার সিলেক্ট করে টপিকভিত্তিক বিস্তারিত লেসনে ঢুকে পড়ো। বাস্তব জীবনের উদাহরণের সাহায্যে কনসেপ্ট বোঝো এবং সাথে সাথেই এমসিকিউ প্র্যাকটিস করো।"
              icon="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              delay="delay-[100ms]"
            />

            <PremiumCard 
              title="২. টার্গেটেড প্র্যাকটিস এরিনা"
              desc="নিজের ধৈর্য পরীক্ষার জন্য 'আনলিমিটেড প্র্যাকটিস' বেছে নাও অথবা বোর্ড পরীক্ষার ৮০% কভার করে এমন বাছাই করা এমসিকিউ সমৃদ্ধ 'এক্সাম ম্যাটেরিয়ালস' দিয়ে প্রস্তুতি নাও।"
              icon="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              delay="delay-[200ms]"
            />

            <PremiumCard 
              title="৩. কাস্টমাইজড মডেল টেস্ট"
              desc="নিজের পরীক্ষা নিজেই তৈরি করো। একটি মাত্র চ্যাপ্টারের ওপর টাইমড এমসিকিউ পরীক্ষা দাও অথবা বোর্ড পরীক্ষার আসল চাপ অনুভব করতে একাধিক চ্যাপ্টার মিলিয়ে পরীক্ষা দাও।"
              icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              delay="delay-[300ms]"
            />

            <PremiumCard 
              title="৪. অটোমেটেড লাইভ এক্সাম"
              desc="প্রতিদিন রাত ১০টায় লাইভ এরিনায় যোগ দাও: ২০ মিনিটে ২৫টি এমসিকিউ। এসএসসি পরীক্ষার্থীদের জন্য থাকছে স্পেশাল মেগা ব্যাচ এবং মডেল টেস্টের সুবিধা।"
              icon="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              delay="delay-[400ms]"
            />

            <PremiumCard 
              title="৫. আল্টিমেট কোয়েশ্চেন ব্যাংক"
              desc="বিগত বছরের বোর্ড প্রশ্নগুলোর টাইপ-ভিত্তিক বিশ্লেষণ। অপ্রয়োজনীয় এবং পুরনো টপিকে সময় নষ্ট না করে একদম সঠিক প্রস্তুতি নাও।"
              icon="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              delay="delay-[500ms]"
            />

            <PremiumCard 
              title="৬. ডেটা-ড্রিভেন সাজেশন"
              desc="টেস্ট পেপার গভীরভাবে বিশ্লেষণ করে তৈরি করা সম্ভাব্য এমসিকিউ, সিকিউ এবং এসকিউ লিস্ট। আমরা ৮০/২০ রুলে বিশ্বাস করি—পড়ো কম, অর্জন করো বেশি।"
              icon="M13 10V3L4 14h7v7l9-11h-7z"
              delay="delay-[600ms]"
            />

            {/* Elite Analytics Notice */}
            <div className="mt-8 p-5 bg-[#181818] rounded-xl border border-[#282828] flex items-start gap-4 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-[700ms]">
              <div className="p-2 bg-[#121212] rounded-lg text-white mt-1 border border-[#282828]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">অ্যাডভান্সড অ্যানালিটিক্স আনলকড</h4>
                <p className="text-sm text-[#A7A7A7] mt-1">প্রিমিয়াম আপগ্রেডের মাধ্যমে তুমি তোমার স্টাডি হিস্ট্রির গভীর বিশ্লেষণ দেখতে পারবে। সহজেই তোমার দুর্বল সাবজেক্টগুলো চিহ্নিত করো এবং পড়াশোনার সময়কে আরও কার্যকরভাবে কাজে লাগাও।</p>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================== */}
        {/* 🧬 THE CORE PILLARS                        */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-[#181818] rounded-[2rem] border border-[#282828] text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-[100ms] hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#121212] border border-[#282828] text-white rounded-2xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">গেমিফিকেশন</h3>
            <p className="text-[#A7A7A7]">
              পড়াশোনা আর বোরিং মনে হবে না। গেমের মতো এক্সপি (EXP), ব্যাজ এবং স্ট্রিকস দিয়ে আমরা পড়াশোনাকে করে তুলেছি মজাদার ও প্রতিযোগিতামূলক।
            </p>
          </div>

          <div className="p-8 bg-[#181818] rounded-[2rem] border border-[#282828] text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-[200ms] hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#121212] border border-[#282828] text-white rounded-2xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">সোশ্যালাইজেশন</h3>
            <p className="text-[#A7A7A7]">
              নিজের অ্যাকাডেমিক প্রোফাইল তৈরি করো। সমবয়সীদের সাথে যুক্ত হও, টপারদের ফলো করো এবং উচ্চাকাঙ্ক্ষী শিক্ষার্থীদের একটি নেটওয়ার্ক গড়ে তোলো।
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
    <div className={`reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 ${delay} p-6 bg-[#181818] border border-[#282828] rounded-2xl hover:-translate-y-1 transition-transform`}>
      <div className="w-12 h-12 mb-4 bg-[#121212] border border-[#333333] text-white rounded-xl flex items-center justify-center">
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
    <div className={`reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 ${delay} p-6 md:p-8 bg-[#121212] border border-[#282828] rounded-2xl hover:-translate-y-1 transition-transform`}>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-14 h-14 shrink-0 bg-[#181818] border border-[#333333] text-white rounded-2xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
          </svg>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
          <p className="text-[#A7A7A7] leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}