import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#282828] bg-[#121212]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* 🎨 Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Next.js <Image> এরর এড়াতে সাধারণ <img> ট্যাগ ব্যবহার করা হয়েছে */}
          <div className="w-8 h-8 rounded-md overflow-hidden flex items-center justify-center">
            <img 
              src="/assets/qaave_logo.svg" 
              alt="Qaave Logo" 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform"
            />
          </div>
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
            Qaave
          </span>
        </Link>

        {/* 🔗 Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="#announcements" 
            className="text-sm font-medium text-[#A7A7A7] hover:text-white transition-colors"
          >
            Announcements
          </Link>
          <Link 
            href="#about" 
            className="text-sm font-medium text-[#A7A7A7] hover:text-white transition-colors"
          >
            About Qaave
          </Link>
          <Link 
            href="#vision" 
            className="text-sm font-medium text-[#A7A7A7] hover:text-white transition-colors"
          >
            Our Vision
          </Link>
        </nav>
        
      </div>
    </header>
  );
}