import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// კომპোনেন্টগুলো ইমপোর্ট করা হচ্ছে 
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// Notion-style প্রিমিয়াম ফন্ট
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qaave | The environment of study",
  description: "Download the official Qaave app. Your premium study environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body 
        className={`${inter.className} bg-[#121212] text-white antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white`}
      >
        {/* 🔝 টপ ন্যাভবার */}
        <Navbar />
        
        {/* 📄 মেইন কন্টেন্ট (যেখানে অন্যান্য পেজগুলো লোড হবে) */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 📜 ফুটার */}
        <Footer />
      </body>
    </html>
  );
}