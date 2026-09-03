export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#121212] overflow-hidden min-h-screen flex items-center justify-center pt-20 pb-32">
      
      {/* 🧮 BACKGROUND: Floating Equations (Minimal, Small & Premium) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.02] md:opacity-[0.03] text-white font-mono flex flex-wrap select-none tracking-widest">
        <div className="relative w-full h-full bg-drift-anim">
          <span className="absolute top-[10%] left-[8%] text-sm md:text-lg">∫ x² dx = x³/3 + C</span>
          <span className="absolute top-[15%] right-[15%] text-lg md:text-xl">E = mc²</span>
          <span className="absolute bottom-[25%] left-[10%] text-xs md:text-sm">C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O</span>
          <span className="absolute top-[40%] left-[30%] text-base md:text-lg">O(N log N)</span>
          <span className="absolute bottom-[15%] right-[20%] text-sm md:text-base">sin²θ + cos²θ = 1</span>
          <span className="absolute top-[65%] left-[80%] text-base md:text-lg">H₂O ⇌ H⁺ + OH⁻</span>
          <span className="absolute top-[25%] left-[55%] text-sm md:text-base">∇ × E = -∂B/∂t</span>
          <span className="absolute bottom-[35%] right-[8%] text-base md:text-xl">PV = nRT</span>
          <span className="absolute top-[8%] left-[75%] text-sm md:text-base">e^(iπ) + 1 = 0</span>
          <span className="absolute bottom-[55%] left-[6%] text-xs md:text-sm">CH₄ + 2O₂ → CO₂ + 2H₂O</span>
          <span className="absolute top-[50%] right-[35%] text-sm md:text-base">F = G(m₁m₂)/r²</span>
          <span className="absolute bottom-[45%] left-[45%] text-xs md:text-sm">ΔxΔp ≥ ℏ/2</span>
          <span className="absolute top-[80%] left-[25%] text-sm md:text-base">∑ i = n(n+1)/2</span>
          <span className="absolute top-[30%] left-[18%] text-xs md:text-sm">pH = -log[H⁺]</span>
          <span className="absolute bottom-[12%] left-[40%] text-sm md:text-base">V = IR</span>
          <span className="absolute top-[75%] left-[45%] text-sm md:text-base">d/dx(e^x) = e^x</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between relative z-10 gap-16 lg:gap-8 w-full">
        
        {/* ========================================== */}
        {/* 📝 LEFT SIDE: Content & Download CTA         */}
        {/* ========================================== */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          
          {/* 🎨 Large Logo */}
          <div className="relative w-24 h-24 md:w-28 md:h-28 mb-8 rounded-[2rem] overflow-hidden shadow-lg border border-[#282828] bg-[#181818] flex items-center justify-center p-2 hover:scale-105 hover:border-primary/50 transition-all duration-300">
            <img 
              src="/assets/qaave_logo.svg" 
              alt="Qaave App Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* 📝 Headings */}
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4 flex flex-col md:flex-row items-center md:items-baseline gap-2">
            Qaave <span className="text-3xl md:text-5xl text-primary font-bold tracking-normal opacity-90">( কেভ )</span>
          </h1>
          
          {/* 🌍 Subheading (English) */}
          <h2 className="text-xl md:text-3xl font-medium text-[#A7A7A7] mb-6 tracking-tight">
            The Environment of Study.
          </h2>

          {/* 📝 Short Description (Bengali) */}
          <p className="text-base md:text-lg text-[#727272] mb-10 max-w-lg leading-relaxed">
            বাংলাদেশের প্রথম সম্পূর্ণ ডিজিটাল স্টাডি ইকোসিস্টেম। আমরাই প্রথম নিয়ে এসেছি স্মার্ট ই-নোটবুক, যেখানে থাকছে চ্যাপ্টারভিত্তিক গোছানো কন্টেন্ট। সাথে আছে ডেইলি লাইভ অনলাইন এমসিকিউ এক্সাম ব্যাচ এবং প্রোডাক্টিভিটি ট্র্যাকিং—সবকিছু এক প্ল্যাটফর্মে।
          </p>

          {/* 🚀 Download Action Button */}
          <a 
            href="/downloads/qaave-app-release.apk" 
            download
            className="group flex items-center gap-3 bg-primary hover:bg-[#521cb5] text-white text-lg font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgb(104,38,223,0.3)] hover:shadow-[0_0_30px_rgb(104,38,223,0.5)] hover:-translate-y-1"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
              className="transition-transform group-hover:translate-y-1"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            অ্যাপ ডাউনলোড করো
          </a>
          <p className="mt-5 text-sm text-[#727272]">
            Available for Android (APK)
          </p>
        </div>

        {/* ========================================== */}
        {/* ⚛️ RIGHT SIDE: Expanded Interactive Animations */}
        {/* ========================================== */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative hidden sm:block z-10">
          
          {/* 1. Integration Formula */}
          <div className="absolute top-8 left-0 lg:-left-12 p-4 bg-[#181818] rounded-xl shadow-lg border border-[#282828] float-anim-1 cursor-default hover:border-primary hover:scale-110 hover:z-30 transition-all duration-300">
            <span className="text-xl font-bold text-white font-serif group-hover:text-primary">
              ∫ e<sup>x</sup> dx = e<sup>x</sup> + C
            </span>
          </div>

          {/* 2. Physics Formula (Einstein) */}
          <div className="absolute top-1/4 -right-4 lg:-right-10 p-4 bg-[#181818] rounded-xl shadow-lg border border-[#282828] float-anim-2 z-10 cursor-default hover:border-white hover:scale-110 transition-all duration-300">
            <span className="text-2xl font-bold text-white font-serif">
              E = mc<sup>2</sup>
            </span>
          </div>

          {/* 3. Chemistry Formula (Glucose) */}
          <div className="absolute bottom-24 -left-4 lg:-left-8 p-4 bg-[#181818] rounded-xl shadow-lg border border-[#282828] float-anim-3 z-10 cursor-default hover:border-white hover:scale-110 transition-all duration-300">
            <span className="text-xl font-bold text-white font-serif">
              C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>
            </span>
          </div>

          {/* 4. Trigonometry / Geometry */}
          <div className="absolute bottom-12 right-8 lg:right-4 p-4 bg-[#181818] rounded-xl shadow-lg border border-[#282828] float-anim-4 cursor-default hover:border-white hover:scale-110 hover:z-30 transition-all duration-300">
            <span className="text-lg font-bold text-white font-serif">
              sin<sup>2</sup>θ + cos<sup>2</sup>θ = 1
            </span>
          </div>

          {/* 5. Center Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-[450px] lg:h-[450px] border-[1px] border-[#282828] rounded-full animate-[spin_15s_linear_infinite] hover:border-[#444] transition-colors">
             <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#6826DF]"></div>
             <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-[#282828] rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-[320px] lg:h-[320px] border-[1px] border-[#333333] rounded-full animate-[spin_10s_linear_infinite_reverse]">
             <div className="absolute left-0 top-1/2 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#ffffff]"></div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-[200px] lg:h-[200px] border-[1px] border-[#3E3E3E] rounded-full animate-[spin_8s_linear_infinite]">
             <div className="absolute right-0 top-1/2 w-2 h-2 bg-[#A7A7A7] rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          </div>

        </div>
      </div>

      {/* 👇 UX FIX: Perfectly Centered Mobile Scroll Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center z-30 pointer-events-none">
        <div className="flex flex-col items-center justify-center animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity pointer-events-auto">
          <span className="text-[10px] font-bold mb-1 tracking-widest uppercase text-[#A7A7A7]">Explore</span>
          <div className="w-8 h-12 border-2 border-[#333] rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#727272] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* 🎨 CSS Keyframes for Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes drift {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          100% { transform: translate(-30px, -30px) rotate(2deg); }
        }
        .float-anim-1 { animation: float 4s ease-in-out infinite; }
        .float-anim-2 { animation: float 5s ease-in-out infinite 1s; }
        .float-anim-3 { animation: float 4.5s ease-in-out infinite 2s; }
        .float-anim-4 { animation: float 6s ease-in-out infinite 0.5s; }
        .bg-drift-anim { animation: drift 20s linear infinite alternate; }
      `}} />
    </section>
  );
}