"use client";

import { useEffect, useRef } from "react";

export default function AssociatePartners() {
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
    elements.forEach((el) => {
      if (observerRef.current) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <section id="partners" className="relative w-full bg-[#121212] py-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ========================================== */}
        {/* 🤝 HEADER SECTION                          */}
        {/* ========================================== */}
        <div className="text-center mb-24 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <span className="inline-block py-1 px-4 rounded-full bg-transparent text-[#A7A7A7] font-bold text-sm mb-4 border border-[#282828] uppercase tracking-widest">
            সহযোগী পার্টনারশিপ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Our Associate Partners
          </h2>
          <p className="text-lg text-[#A7A7A7] max-w-2xl mx-auto leading-relaxed">
            যাদের আন্তরিক সমর্থন ও দিকনির্দেশনায় আমাদের এই পথচলা আরও সুগম হয়েছে, 
            সেই সকল সম্মানিত পার্টনার ও মেন্টরদের প্রতি আমরা গভীরভাবে কৃতজ্ঞ।
          </p>
        </div>

        {/* ========================================== */}
        {/* 🏆 PARTNERS FLAT GRID                      */}
        {/* ========================================== */}
        {/* ৪ কলামের গ্রিড ব্যবহার করা হলো যাতে আইটেমগুলো সুন্দরভাবে পাশাপাশি বসে */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          
          <PartnerItem 
            title="জেলা পরিষদ, বগুড়া" 
            subtitle="অফিসিয়াল পার্টনার" 
            logo="/zilla.svg" 
            delay="delay-[100ms]" 
          />
          
          <PartnerItem 
            title="বাংলা প্রশিক্ষণালয়" 
            subtitle="রেজবা স্যার" 
            logo="/rezba.svg" 
            delay="delay-[200ms]" 
          />
          
          <PartnerItem 
            title="আশিক'স ক্রিয়েটিভ ম্যাথ" 
            subtitle="আশিক স্যার" 
            logo="/ashik.svg" 
            delay="delay-[300ms]" 
          />
          
          <PartnerItem 
            title="বায়োলজি আড্ডা" 
            subtitle="হৃদয় স্যার" 
            logo="/hridoy.svg" 
            delay="delay-[400ms]" 
          />

        </div>

      </div>
    </section>
  );
}

// ==========================================
// 🧩 SUB-COMPONENTS (FLAT DESIGN)
// ==========================================

interface PartnerItemProps {
  title: string;
  subtitle: string;
  logo: string;
  delay: string;
}

function PartnerItem({ title, subtitle, logo, delay }: PartnerItemProps) {
  return (
    <div className={`reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 ${delay} flex flex-col items-center text-center group cursor-default`}>
      
      {/* 🖼️ Logo Area (No Card, Only Logo with Hover Animation) */}
      <div className="w-28 h-28 mb-6 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110">
        {logo === "fallback" ? (
          // বাংলা প্রশিক্ষণালয়-এর জন্য ডিফল্ট আইকন
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-[#444444] group-hover:text-primary transition-colors duration-500 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        ) : (
          <img 
            src={logo} 
            alt={title} 
            className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 drop-shadow-md group-hover:drop-shadow-[0_10px_20px_rgba(104,38,223,0.3)]"
          />
        )}
      </div>
      
      {/* 📝 Name & Subtitle below the logo */}
      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm md:text-base font-medium text-[#A7A7A7]">
        {subtitle}
      </p>
      
    </div>
  );
}