"use client";

import { useEffect, useRef } from "react";

export default function Announcements() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "translate-x-0", "opacity-100");
            entry.target.classList.remove("translate-y-10", "translate-x-10", "-translate-x-10", "opacity-0");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => {
      if (observerRef.current) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <section id="announcements" className="relative w-full bg-[#121212] py-24 overflow-hidden z-0">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ========================================== */}
        {/* 🏆 HEADER SECTION                          */}
        {/* ========================================== */}
        <div className="text-center mb-20 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <span className="inline-block py-1 px-3 rounded-full bg-[#181818] text-white font-bold text-sm mb-4 border border-[#333333]">
            আসন্ন মেগা ইভেন্ট
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Qaave-এর গ্র্যান্ড প্রিমিয়ার
          </h2>
          <p className="text-lg text-[#A7A7A7] max-w-2xl mx-auto">
            শিক্ষাক্ষেত্রে এক নতুন যুগের সূচনা দেখতে প্রস্তুত হও। বগুড়ার সবচেয়ে আধুনিক স্টাডি এনভায়রনমেন্টের অফিসিয়াল উন্মোচনে আমাদের সাথে যোগ দাও।
          </p>
        </div>

        {/* ========================================== */}
        {/* 📅 EVENT METADATA (Venue, Time, Date)      */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-5xl mx-auto">
          <EventMetaCard 
            icon="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
            title="তারিখ" 
            value="২ অক্টোবর , ২০২৬" 
          />
          <EventMetaCard 
            icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
            title="সময়" 
            value="বিকাল ৪:০০ টা" 
          />
          <EventMetaCard 
            icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
            title="স্থান" 
            value="শহীদ টিটু মিলনায়তন" 
          />
        </div>

        {/* ========================================== */}
        {/* 👑 HONORABLE GUESTS (Simplified & Animated)*/}
        {/* ========================================== */}
        <div className="mb-24">
          <h3 className="text-3xl font-black text-center text-white mb-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            সম্মানিত অতিথি বৃন্দ
          </h3>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
            <GuestCard 
              name="খুব শীঘ্রই আসছে..." 
              role="প্রধান অতিথি" 
              description="সংসদ সদস্য, বগুড়া"
              image="?" 
              align="left" 
            />
            <GuestCard 
              name="খুব শীঘ্রই আসছে..." 
              role="বিশেষ অতিথি" 
              description="তোমাদের প্রিয় অনলাইন টিচার"
              image="?" 
              align="right" 
            />
          </div>
        </div>

        {/* ========================================== */}
        {/* 📜 THE EVENT AGENDA (Vertical Timeline)    */}
        {/* ========================================== */}
        <div className="mb-24 relative max-w-4xl mx-auto">
          <h3 className="text-3xl font-black text-center text-white mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            ইভেন্টের মূল আকর্ষণ
          </h3>
          
          <div className="absolute left-4 md:left-1/2 top-24 bottom-0 w-0.5 bg-[#282828] -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-8">
            <TimelineItem step="01" title="অফিসিয়াল উন্মোচন" desc="Qaave অ্যাপ্লিকেশনের গ্র্যান্ড লঞ্চিং।" side="left" />
            <TimelineItem step="02" title="আগামীর কণ্ঠস্বর" desc="শিক্ষার্থীদের সাথে ইন্টারেক্টিভ প্রশ্নোত্তর পর্ব এবং ফিডব্যাক।" side="right" />
            <TimelineItem step="03" title="দ্য আল্টিমেট চ্যালেঞ্জ" desc="বগুড়ার সকল স্কুলের শিক্ষার্থীদের নিয়ে মেগা লাইভ এক্সাম।" side="left" />
            <TimelineItem step="04" title="দিকনির্দেশনামূলক বক্তব্য" desc="আমন্ত্রিত সম্মানীয় অতিথিদের মূল্যবান বক্তব্য ও দিকনির্দেশনা।" side="right" />
            <TimelineItem step="05" title="চ্যাম্পিয়নদের মুকুট জয়" desc="লাইভ এক্সামে বিজয়ীদের মাঝে পুরস্কার বিতরণী অনুষ্ঠান।" side="left" />
            <TimelineItem step="06" title="গ্র্যান্ড সেলিব্রেশন" desc="স্থানীয় প্রতিভাবান শিক্ষার্থীদের অংশগ্রহণে লাইভ পারফরম্যান্স।" side="right" />
          </div>
        </div>

        {/* ========================================== */}
        {/* 🏫 PARTICIPATING INSTITUTIONS              */}
        {/* ========================================== */}
        <div className="text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 p-8 md:p-12 bg-[#181818] rounded-[2rem] border border-[#282828]">
          <h3 className="text-2xl font-bold text-white mb-6">
            পুরো বগুড়ার শিক্ষার্থীদের এক মিলনমেলা
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["পুলিশ লাইন্স স্কুল অ্যান্ড কলেজ", "বগুড়া জিলা স্কুল", "বগুড়া সরকারি বালিকা উচ্চ বিদ্যালয়", "ইয়াকুবিয়া বালিকা উচ্চ বিদ্যালয় ও কলেজ", "বিয়াম মডেল স্কুল অ্যান্ড কলেজ", "আর্মড পুলিশ ব্যাটালিয়ন পাবলিক স্কুল অ্যান্ড কলেজ", "ক্যান্টনমেন্ট পাবলিক স্কুল অ্যান্ড কলেজ", "এবং আরও অনেক..."].map((school, i) => (
              <span key={i} className="px-4 py-2 bg-[#121212] border border-[#333333] rounded-xl text-xs font-medium text-[#A7A7A7] hover:border-white hover:text-white transition-colors cursor-default">
                {school}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ==========================================
// 🧩 SUB-COMPONENTS
// ==========================================

interface EventMetaCardProps {
  icon: string;
  title: string;
  value: string;
}

function EventMetaCard({ icon, title, value }: EventMetaCardProps) {
  return (
    <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 flex items-center gap-4 p-6 bg-[#181818] rounded-[1.5rem] border border-[#282828] hover:-translate-y-2 hover:border-[#444] transition-all cursor-default">
      <div className="w-12 h-12 rounded-xl bg-[#121212] border border-[#333333] flex items-center justify-center text-white shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <div>
        <p className="text-xs font-bold text-[#A7A7A7] uppercase tracking-wider mb-1">{title}</p>
        <p className="text-lg font-bold text-white">{value}</p>
      </div>
    </div>
  );
}

interface GuestCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  align: 'left' | 'right';
}

function GuestCard({ name, role, description, image, align }: GuestCardProps) {
  // Left align means it comes from the left (-translate-x-10)
  // Right align means it comes from the right (translate-x-10)
  const animClass = align === 'left' ? '-translate-x-10' : 'translate-x-10';

  return (
    <div className={`w-full max-w-sm reveal-on-scroll opacity-0 ${animClass} transition-all duration-700 bg-[#181818] border border-[#282828] rounded-[2rem] p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-2 hover:border-[#444] group cursor-default`}>
      
      {/* 🖼️ Profile Picture (Smaller & Simpler) */}
      <div className="w-24 h-24 shrink-0 rounded-full bg-[#121212] border border-[#333333] flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-110">
        {image === "?" ? (
          <span className="text-3xl font-black text-[#555] group-hover:text-white transition-colors duration-300">?</span>
        ) : (
          <img 
            src={`/assets/${image}`} 
            alt={name}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      {/* 📝 Details */}
      <div>
        <p className="text-sm font-bold text-white mb-1 uppercase tracking-widest">{role}</p>
        <h4 className="text-xl font-bold text-[#A7A7A7] mb-2">{name}</h4>
        <p className="text-xs text-[#727272] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

interface TimelineItemProps {
  step: string;
  title: string;
  desc: string;
  side: 'left' | 'right';
}

function TimelineItem({ step, title, desc, side }: TimelineItemProps) {
  const isLeft = side === 'left';
  const animClass = isLeft ? '-translate-x-10' : 'translate-x-10';

  return (
    <div className={`reveal-on-scroll opacity-0 ${animClass} transition-all duration-700 relative flex items-center justify-between md:justify-normal ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Center Dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#121212] border-2 border-[#333333] items-center justify-center z-10">
        <span className="text-xs font-bold text-white">{step}</span>
      </div>

      {/* Content Box */}
      <div className="w-full md:w-[45%]">
        <div className={`p-6 bg-[#181818] rounded-[1.5rem] border border-[#282828] hover:border-[#444] hover:-translate-y-1 transition-all ${isLeft ? 'md:text-right' : 'md:text-left'} cursor-default`}>
          <div className="flex items-center gap-3 mb-3 md:hidden">
            <span className="w-8 h-8 rounded-full bg-[#121212] border border-[#333333] text-white flex items-center justify-center text-xs font-bold">{step}</span>
            <h4 className="text-lg font-bold text-white">{title}</h4>
          </div>
          <h4 className="hidden md:block text-lg font-bold text-white mb-2">{title}</h4>
          <p className="text-[#A7A7A7] text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
      
      {/* Empty space for the other side */}
      <div className="hidden md:block w-[45%]"></div>
    </div>
  );
}