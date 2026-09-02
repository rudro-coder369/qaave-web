"use client";

import { useEffect, useRef } from "react";

export default function Announcements() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-10", "opacity-0");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="announcements" className="relative w-full bg-[#121212] py-24 overflow-hidden">
      {/* 🌟 Futuristic Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ========================================== */}
        {/* 🏆 HEADER SECTION                          */}
        {/* ========================================== */}
        <div className="text-center mb-20 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 border border-primary/20">
            Upcoming Mega Event
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            The Grand Premiere of Qaave
          </h2>
          <p className="text-lg text-[#A7A7A7] max-w-2xl mx-auto">
            Witness the dawn of a new educational era. Join us for the official unveiling of Bogura's most advanced study environment.
          </p>
        </div>

        {/* ========================================== */}
        {/* 📅 EVENT METADATA (Venue, Time, Date)      */}
        {/* ========================================== */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-32 max-w-5xl mx-auto">
          <EventMetaCard 
            icon="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
            title="Date" 
            value="September 18, 2026" 
          />
          <EventMetaCard 
            icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
            title="Time" 
            value="4:00 PM (Afternoon)" 
          />
          <EventMetaCard 
            icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
            title="Venue" 
            value="Shahid Titu Milayoton Auditorium" 
          />
        </div>

        {/* ========================================== */}
        {/* 👑 HONORABLE GUESTS (Zig-Zag Layout)       */}
        {/* ========================================== */}
        <div className="mb-32">
          <h3 className="text-4xl font-black text-center text-white mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            Honorable Guests
          </h3>
          
          <div className="flex flex-col items-center gap-12 w-full">
            <GuestCard name="Mir Shahe Alam" role="Chief Guest" image="shahe.jpg" isHighlight align="left" />
            <GuestCard name="Redwan Hushen" role="Special Guest" image="redwan.jpg" isHighlight align="right" />
            <GuestCard name="Md. Toufikur Rahman" role="Deputy Commissioner (DC), Bogura" image="toufik.jpg" align="left" />
            <GuestCard name="Md. Romjan Ali Akando" role="District Education Officer, Bogura" image="romjan.jpg" align="right" />
            <GuestCard name="M.R Islam Sadhin" role="City Administrator, City Corporation" image="shadhin.jpg" align="left" />
            <GuestCard name="Habibur Rahman Rojib" role="Principal, Police Lines School & College" image="rojib.jpg" align="right" />
            <GuestCard name="Delowar Hossen Dilbar" role="Government Teacher" image="delowar.jpg" align="left" />
          </div>
        </div>

        {/* ========================================== */}
        {/* 📜 THE EVENT AGENDA (Vertical Timeline)    */}
        {/* ========================================== */}
        <div className="mb-32 relative max-w-4xl mx-auto">
          <h3 className="text-4xl font-black text-center text-white mb-20 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            Event Highlights
          </h3>
          
          <div className="absolute left-4 md:left-1/2 top-24 bottom-0 w-0.5 bg-[#282828] -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            <TimelineItem step="01" title="The Unveiling" desc="Official launch of the Qaave application." side="left" />
            <TimelineItem step="02" title="Voices of Tomorrow" desc="Interactive Q&A and authentic reviews from students." side="right" />
            <TimelineItem step="03" title="The Ultimate Challenge" desc="Mega live exam featuring students from every school across Bogura." side="left" />
            <TimelineItem step="04" title="Words of Wisdom" desc="Speeches and valuable reviews from our honorable guests." side="right" />
            <TimelineItem step="05" title="Crowning the Champions" desc="Prize giving ceremony for the live exam top performers." side="left" />
            <TimelineItem step="06" title="The Aftermath" desc="Grand celebration to mark the beginning of a new era, featuring live musical performances by talented students from various local schools." side="right" />
          </div>
        </div>

        {/* ========================================== */}
        {/* 🏫 PARTICIPATING INSTITUTIONS              */}
        {/* ========================================== */}
        <div className="text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 p-12 bg-[#181818] rounded-[3rem] border border-[#282828] shadow-lg">
          <h3 className="text-3xl font-bold text-white mb-8">
            Uniting Students From Across Bogura
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Police Lines School & College", "Bogura Zilla School", "Govt. Girls High School", "Yakubia School & College", "BIAM Model School & College", "APBN Public School & College", "Cantonment Public School & College", "And many more..."].map((school, i) => (
              <span key={i} className="px-5 py-3 bg-[#121212] border border-[#282828] rounded-xl text-sm font-medium text-[#A7A7A7] hover:border-primary hover:text-white transition-colors cursor-default reveal-on-scroll opacity-0 translate-y-5 duration-500" style={{ transitionDelay: `${i * 50}ms` }}>
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

function EventMetaCard({ icon, title, value }: { icon: string, title: string, value: string }) {
  return (
    <div className="w-full md:w-1/3 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 flex items-center gap-5 p-8 bg-[#181818] rounded-[2rem] border border-[#282828] shadow-lg hover:border-primary/50 hover:-translate-y-2 transition-all">
      <div className="w-14 h-14 rounded-2xl bg-[#121212] border border-[#333333] flex items-center justify-center text-primary shrink-0 shadow-inner">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <div>
        <p className="text-sm font-bold text-[#A7A7A7] uppercase tracking-wider mb-1">{title}</p>
        <p className="text-xl font-black text-white">{value}</p>
      </div>
    </div>
  );
}

function GuestCard({ name, role, image, isHighlight = false, align = 'left' }: { name: string, role: string, image: string, isHighlight?: boolean, align?: 'left' | 'right' }) {
  const isRight = align === 'right';
  
  return (
    <div className={`w-full max-w-4xl reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 group relative overflow-hidden rounded-[3rem] bg-[#181818] border ${isHighlight ? 'border-primary/50 shadow-[0_10px_40px_rgb(104,38,223,0.15)]' : 'border-[#282828] shadow-lg'} p-8 md:p-12 flex flex-col ${isRight ? 'md:flex-row-reverse md:text-right' : 'md:flex-row md:text-left'} items-center text-center gap-8 md:gap-12 hover:shadow-2xl hover:border-primary/40 hover:-translate-y-2 transition-all`}>
      
      {/* 🖼️ Big Profile Picture */}
      <div className="w-36 h-36 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden border-4 border-[#121212] shadow-2xl relative bg-[#282828]">
        <img 
          src={`/assets/${image}`} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* 📝 Name & Role */}
      <div className="flex flex-col justify-center">
        <h4 className="text-2xl md:text-4xl font-black text-white mb-2 md:mb-4 group-hover:text-primary transition-colors">{name}</h4>
        <p className={`text-lg md:text-xl font-medium ${isHighlight ? 'text-primary' : 'text-[#A7A7A7]'}`}>{role}</p>
      </div>
      
      {/* 🌟 Decorative Glow for Highlights */}
      {isHighlight && (
        <div className={`absolute top-0 ${isRight ? 'left-0 rounded-br-full' : 'right-0 rounded-bl-full'} w-24 h-24 bg-primary/10 -z-10 transition-transform group-hover:scale-150`}></div>
      )}
    </div>
  );
}

function TimelineItem({ step, title, desc, side }: { step: string, title: string, desc: string, side: 'left' | 'right' }) {
  const isLeft = side === 'left';
  return (
    <div className={`reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 relative flex items-center justify-between md:justify-normal ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Center Dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#121212] border-[4px] border-primary items-center justify-center z-10 shadow-[0_0_20px_rgb(104,38,223,0.3)]">
        <span className="text-sm font-black text-primary">{step}</span>
      </div>

      {/* Content Box */}
      <div className="w-full md:w-[45%]">
        <div className={`p-8 bg-[#181818] rounded-[2rem] border border-[#282828] shadow-lg hover:border-primary/40 hover:-translate-y-1 transition-all ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
          <div className="flex items-center gap-4 mb-4 md:hidden">
            <span className="w-10 h-10 rounded-full bg-[#121212] border border-primary text-primary flex items-center justify-center text-sm font-black shadow-[0_0_15px_rgb(104,38,223,0.2)]">{step}</span>
            <h4 className="text-2xl font-bold text-white">{title}</h4>
          </div>
          <h4 className="hidden md:block text-2xl font-bold text-white mb-3">{title}</h4>
          <p className="text-[#A7A7A7] text-base leading-relaxed">{desc}</p>
        </div>
      </div>
      
      {/* Empty space for the other side */}
      <div className="hidden md:block w-[45%]"></div>
    </div>
  );
}