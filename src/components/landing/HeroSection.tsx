import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#121212] overflow-hidden pt-24 pb-40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between relative z-10 gap-16 lg:gap-8">
        
        {/* ========================================== */}
        {/* 📝 LEFT SIDE: Content & Download CTA         */}
        {/* ========================================== */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          
          {/* 🎨 Large Logo (Using img to avoid Next.js fill errors) */}
          <div className="relative w-28 h-28 mb-8 rounded-[2rem] overflow-hidden shadow-lg border border-[#282828] bg-[#181818] flex items-center justify-center p-2">
            <img 
              src="/assets/qaave_logo.svg" 
              alt="Qaave App Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* 📝 Headings */}
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4">
            Qaave
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium text-[#A7A7A7] mb-12 tracking-tight">
            The Environment of Study.
          </h2>

          {/* 🚀 Download Action Button - Flat & Normal without Highlights */}
          <a 
            href="/downloads/qaave-app-release.apk" 
            download
            className="group flex items-center gap-3 bg-primary hover:bg-[#521cb5] text-white text-lg font-bold py-4 px-8 rounded-xl transition-colors"
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
            Download Qaave
          </a>
          <p className="mt-5 text-sm text-[#727272]">
            Available for Android (APK)
          </p>
        </div>

        {/* ========================================== */}
        {/* ⚛️ RIGHT SIDE: Expanded Math & Chemical Animations */}
        {/* ========================================== */}
        <div className="w-full lg:w-1/2 h-[500px] lg:h-[600px] relative hidden md:block">
          
          {/* 1. Integration Formula - Pushed wider */}
          <div className="absolute top-12 left-0 lg:-left-12 p-4 bg-[#181818] rounded-xl shadow-lg border border-[#282828] float-anim-1">
            <span className="text-xl font-bold text-primary font-serif">
              ∫ e<sup>x</sup> dx = e<sup>x</sup> + C
            </span>
          </div>

          {/* 2. Physics Formula (Einstein) - Pushed wider */}
          <div className="absolute top-1/3 -right-4 lg:-right-10 p-4 bg-[#181818] rounded-xl shadow-lg border border-[#282828] float-anim-2 z-10">
            <span className="text-2xl font-bold text-[#0EA5E9] font-serif">
              E = mc<sup>2</sup>
            </span>
          </div>

          {/* 3. Chemistry Formula (Glucose) - Lower and left */}
          <div className="absolute bottom-32 -left-4 lg:-left-8 p-4 bg-[#181818] rounded-xl shadow-lg border border-[#282828] float-anim-3 z-10">
            <span className="text-xl font-bold text-[#1DB954] font-serif">
              C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>
            </span>
          </div>

          {/* 4. Trigonometry / Geometry - Bottom Right */}
          <div className="absolute bottom-12 right-12 lg:right-4 p-4 bg-[#181818] rounded-xl shadow-lg border border-[#282828] float-anim-4">
            <span className="text-lg font-bold text-[#D4AF37] font-serif">
              sin<sup>2</sup>θ + cos<sup>2</sup>θ = 1
            </span>
          </div>

          {/* 5. Center Decorative Rings - Scaled up massively */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-[450px] lg:h-[450px] border-[1px] border-[#282828] rounded-full animate-[spin_15s_linear_infinite]">
             <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-[#0EA5E9] rounded-full transform -translate-x-1/2 translate-y-1/2 shadow-[0_0_15px_#0EA5E9]"></div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-[320px] lg:h-[320px] border-[1px] border-[#333333] rounded-full animate-[spin_10s_linear_infinite_reverse]">
             <div className="absolute left-0 top-1/2 w-3 h-3 bg-[#1DB954] rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#1DB954]"></div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 lg:w-[200px] lg:h-[200px] border-[1px] border-[#3E3E3E] rounded-full animate-[spin_8s_linear_infinite]">
             <div className="absolute right-0 top-1/2 w-2 h-2 bg-[#D4AF37] rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          </div>

        </div>
      </div>

      {/* 🎨 CSS Keyframes for smooth floating animation with larger movement */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .float-anim-1 { animation: float 4s ease-in-out infinite; }
        .float-anim-2 { animation: float 5s ease-in-out infinite 1s; }
        .float-anim-3 { animation: float 4.5s ease-in-out infinite 2s; }
        .float-anim-4 { animation: float 6s ease-in-out infinite 0.5s; }
      `}} />
    </section>
  );
}