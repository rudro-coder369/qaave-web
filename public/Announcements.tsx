"use client"; // 👈 Next.js Client Component for scroll animations

import { useEffect } from "react";

export default function Announcements() {
  // 🚀 Scroll Animation Logic (Intersection Observer)
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
    <section id="announcements" className="relative w-full bg-surface-light py-24 overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-black text-text-light-primary tracking-tight mb-4">
            The Grand Premiere of Qaave
          </h2>
          <p className="text-lg text-text-light-secondary max-w-2xl mx-auto">
            Witness the dawn of a new educational era. Join us for the official unveiling of Bogura's most advanced study environment.
          </p>
        </div>

        {/* ========================================== */}
        {/* 📅 EVENT METADATA (Venue, Time, Date)      */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <EventMetaCard 
            icon="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
            title="Date" 
            value="September 18, 2026" 
            delay="delay-[100ms]" 
          />
          <EventMetaCard 
            icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
            title="Time" 
            value="4:00 PM (Afternoon)" 
            delay="delay-[200ms]" 
          />
          <EventMetaCard 
            icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
            title="Venue" 
            value="Shahid Titu Milayoton Auditorium" 
            delay="delay-[300ms]" 
          />
        </div>

        {/* ========================================== */}
        {/* 👑 HONORABLE GUESTS GRID                   */}
        {/* ========================================== */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center text-text-light-primary mb-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            Honorable Guests
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Chief & Special Guests */}
            <GuestCard name="Mir Shahe Alam" role="Chief Guest" image="shahe.jpg" isHighlight delay="delay-[100ms]" />
            <GuestCard name="Redwan Hushen" role="Special Guest" image="redwan.jpg" isHighlight delay="delay-[200ms]" />
            
            {/* Elite Panel */}
            <GuestCard name="Md. Toufikur Rahman" role="Deputy Commissioner (DC), Bogura" image="toufik.jpg" delay="delay-[300ms]" />
            <GuestCard name="Md. Romjan Ali Akando" role="District Education Officer, Bogura" image="romjan.jpg" delay="delay-[400ms]" />
            <GuestCard name="M.R Islam Sadhin" role="City Administrator, City Corporation" image="shadhin.jpg" delay="delay-[500ms]" />
            <GuestCard name="Habibur Rahman Rojib" role="Principal, Police Lines School & College" image="rojib.jpg" delay="delay-[600ms]" />
            <GuestCard name="Delowar Hossen Dilbar" role="Government Teacher" image="delowar.jpg" delay="delay-[700ms]" />
          </div>
        </div>

        {/* ========================================== */}
        {/* 📜 THE EVENT AGENDA (Vertical Timeline)    */}
        {/* ========================================== */}
        <div className="mb-24 relative max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-text-light-primary mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            Event Highlights
          </h3>
          
          <div className="absolute left-4 md:left-1/2 top-24 bottom-0 w-0.5 bg-border-light -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            <TimelineItem step="01" title="The Unveiling" desc="Official launch of the Qaave application." side="left" delay="delay-[100ms]" />
            <TimelineItem step="02" title="Voices of Tomorrow" desc="Interactive Q&A and authentic reviews from students." side="right" delay="delay-[200ms]" />
            <TimelineItem step="03" title="The Ultimate Challenge" desc="Mega live exam featuring students from every school across Bogura." side="left" delay="delay-[300ms]" />
            <TimelineItem step="04" title="Words of Wisdom" desc="Speeches and valuable reviews from our honorable guests." side="right" delay="delay-[400ms]" />
            <TimelineItem step="05" title="Crowning the Champions" desc="Prize giving ceremony for the live exam top performers." side="left" delay="delay-[500ms]" />
            <TimelineItem step="06" title="The Aftermath" desc="Grand celebration to mark the beginning of a new era." side="right" delay="delay-[600ms]" />
          </div>
        </div>

        {/* ========================================== */}
        {/* 🏫 PARTICIPATING INSTITUTIONS              */}
        {/* ========================================== */}
        <div className="text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-[200ms] p-10 bg-bg-light rounded-3xl border border-border-light shadow-sm">
          <h3 className="text-2xl font-bold text-text-light-primary mb-6">
            Uniting Students From Across Bogura
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Police Lines School & College", "Bogura Zilla School", "Govt. Girls High School", "Yakubia School & College", "BIAM Model School & College", "APBN Public School & College", "Cantonment Public School & College", "And many more..."].map((school, i) => (
              <span key={i} className="px-4 py-2 bg-surface-light border border-border-light rounded-lg text-sm font-medium text-text-light-secondary hover:border-primary hover:text-primary transition-colors cursor-default">
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
// 🧩 SUB-COMPONENTS for cleaner code
// ==========================================

function EventMetaCard({ icon, title, value, delay }: { icon: string, title: string, value: string, delay: string }) {
  return (
    <div className={`reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 ${delay} flex items-center gap-4 p-6 bg-bg-light rounded-2xl border border-border-light shadow-sm hover:shadow-md hover:border-primary/50 transition-all`}>
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <div>
        <p className="text-sm font-bold text-text-light-tertiary uppercase tracking-wider">{title}</p>
        <p className="text-lg font-bold text-text-light-primary">{value}</p>
      </div>
    </div>
  );
}

function GuestCard({ name, role, image, isHighlight = false, delay }: { name: string, role: string, image: string, isHighlight?: boolean, delay: string }) {
  return (
    <div className={`reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 ${delay} group relative overflow-hidden rounded-2xl bg-bg-light border ${isHighlight ? 'border-primary/50 shadow-[0_4px_20px_rgb(104,38,223,0.15)]' : 'border-border-light shadow-sm'} p-6 flex flex-col items-center text-center hover:shadow-xl transition-all`}>
      
      {/* 🖼️ Updated Image Wrapper using standard img tag with the exact requested path */}
      <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-surface-light shadow-md relative bg-surface-container-low">
        <img 
          src={`/src/public/assets/${image}`} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => { 
            e.currentTarget.src = `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(name)}`; 
          }}
        />
      </div>
      
      <h4 className="text-xl font-bold text-text-light-primary mb-1 group-hover:text-primary transition-colors">{name}</h4>
      <p className={`text-sm font-medium ${isHighlight ? 'text-primary' : 'text-text-light-secondary'}`}>{role}</p>
      
      {isHighlight && (
        <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full -z-10 transition-transform group-hover:scale-150"></div>
      )}
    </div>
  );
}

function TimelineItem({ step, title, desc, side, delay }: { step: string, title: string, desc: string, side: 'left' | 'right', delay: string }) {
  const isLeft = side === 'left';
  return (
    <div className={`reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 ${delay} relative flex items-center justify-between md:justify-normal ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Desktop Timeline Dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-surface-light border-4 border-primary items-center justify-center z-10 shadow-[0_0_15px_rgb(104,38,223,0.4)]">
        <span className="text-xs font-black text-primary">{step}</span>
      </div>

      {/* Content Box */}
      <div className="w-full md:w-[45%]">
        <div className={`p-6 bg-bg-light rounded-2xl border border-border-light shadow-sm hover:border-primary/40 transition-colors ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
          <div className="flex items-center gap-3 mb-2 md:hidden">
            <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-black">{step}</span>
            <h4 className="text-xl font-bold text-text-light-primary">{title}</h4>
          </div>
          <h4 className="hidden md:block text-xl font-bold text-text-light-primary mb-2">{title}</h4>
          <p className="text-text-light-secondary text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
      
      {/* Empty space for the other side */}
      <div className="hidden md:block w-[45%]"></div>
    </div>
  );
}