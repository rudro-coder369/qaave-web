import HeroSection from "@/components/landing/HeroSection";
import Announcements from "@/components/landing/Announcements";
import AboutQaave from "@/components/landing/AboutQaave";
import OurVision from "@/components/landing/OurVision";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 🚀 1. Hero Section (Download CTA & Math Animations) */}
      <HeroSection />

      {/* 📅 2. Announcements Section (Grand Launch Event) */}
      <Announcements />

      {/* 📚 3. About Qaave Section (Free & Premium Features) */}
      <AboutQaave />

      {/* 👁️ 4. Our Vision Section (The Future of EdTech) */}
      <OurVision />
    </div>
  );
}