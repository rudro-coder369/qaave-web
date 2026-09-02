import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-[#282828] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ========================================== */}
        {/* 🔝 TOP FOOTER SECTION                      */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand & Contact Info (Takes up 2 columns on desktop) */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="relative w-8 h-8 rounded-md overflow-hidden bg-[#181818] border border-[#282828] p-1">
                <Image 
                  src="/assets/qaave_logo.svg" 
                  alt="Qaave Logo" 
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white group-hover:text-primary transition-colors">
                Qaave
              </span>
            </Link>
            <p className="text-[#A7A7A7] leading-relaxed max-w-sm mb-6">
              The ultimate environment of study. Empowering students across Bangladesh with technology, psychology, and curated education.
            </p>
            
            <div className="space-y-2">
              <a href="mailto:qaave.business@gmail.com" className="flex items-center gap-2 text-sm text-[#A7A7A7] hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                qaave.business@gmail.com
              </a>
              <a href="tel:+8801710647502" className="flex items-center gap-2 text-sm text-[#A7A7A7] hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +880 1710-647502
              </a>
            </div>
          </div>

          {/* 2. Social Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Connect With Us</h4>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://www.facebook.com/share/1HPHwyCQ8F/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#A7A7A7] hover:text-primary transition-colors text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                Facebook
              </a>
              <a href="https://www.instagram.com/qaave_edu/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#A7A7A7] hover:text-[#E1306C] transition-colors text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </a>
              <a href="https://x.com/qaave_edu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#A7A7A7] hover:text-white transition-colors text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l16 16" />
                  <path d="M20 4L4 20" />
                </svg>
                X (Twitter)
              </a>
              <a href="https://www.tiktok.com/@qaave_edu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#A7A7A7] hover:text-[#00F2FE] transition-colors text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
                TikTok
              </a>
              <a href="https://www.threads.com/@qaave_edu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#A7A7A7] hover:text-white transition-colors text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                </svg>
                Threads
              </a>
              <a href="https://wa.me/8801710647502" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#A7A7A7] hover:text-[#25D366] transition-colors text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* 3. Parent Company */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">A Product By</h4>
            <a 
              href="https://exclamatory-web.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-4 bg-[#181818] border border-[#282828] rounded-2xl hover:border-primary/50 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-[#121212] border border-[#333333] flex items-center justify-center">
                  <Image 
                    src="/assets/exclamatory_logo.svg" 
                    alt="Exclamatory Logo" 
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <p className="text-xs text-[#A7A7A7] font-medium">Parent Company</p>
                  <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">Exclamatory</p>
                </div>
              </div>
            </a>
          </div>

        </div>

        {/* ========================================== */}
        {/* 📜 BOTTOM LEGAL SECTION                    */}
        {/* ========================================== */}
        <div className="border-t border-[#282828] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#727272]">
            &copy; {new Date().getFullYear()} Qaave. All rights reserved.
          </p>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#181818] border border-[#282828] rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#727272]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xs font-bold text-[#A7A7A7] tracking-widest uppercase">
              Trade License: no-006/2026-2027
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}