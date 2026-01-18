import React from 'react';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#27005D]/95 backdrop-blur-sm border-b border-white/5 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
        <div className="flex items-center gap-8 md:gap-12">
          {/* Logo */}
          <Link href="/" className="block">
            <img
              src="/inglu-logo.png"
              alt="INGLU Logo"
              className="h-16 md:h-24 w-auto object-contain brightness-0 invert"
            />
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="#" className="text-white hover:text-[#6F00FF] text-sm font-bold tracking-wide transition-colors uppercase">
              Education
            </Link>
            <Link href="#" className="text-white hover:text-[#6F00FF] text-sm font-bold tracking-wide transition-colors uppercase">
              Experience
            </Link>
            <Link href="#" className="text-white hover:text-[#6F00FF] text-sm font-bold tracking-wide transition-colors uppercase">
              Brands
            </Link>
            <Link href="/inglu-membership" className="text-[#6F00FF] font-black text-sm tracking-wide transition-colors uppercase border-b-2 border-[#6F00FF]/50 hover:border-[#6F00FF] pb-0.5">
              Membership
            </Link>
            <Link href="/about-us" className="text-white hover:text-[#6F00FF] text-sm font-bold tracking-wide transition-colors uppercase">
              About
            </Link>
          </nav>
        </div>

        {/* CTAs & Identity */}
        {/* CTAs & Identity */}
        <div className="flex items-center gap-6">
          <Link href="/join" className="text-white hover:text-[#6F00FF] text-sm font-bold tracking-wide uppercase transition-colors hidden lg:block">
            Login
          </Link>
          {/* Enhanced Membership CTA */}
          <Link href="/inglu-membership" className="hidden sm:block bg-[#6F00FF] hover:bg-[#9400FF] text-white px-6 py-2.5 rounded-full font-bold uppercase text-xs tracking-widest shadow-[0_0_15px_rgba(111,0,255,0.4)] transition-all transform hover:scale-105 active:scale-95">
            Get Membership
          </Link>

          {/* Identity Placeholder - High Visibility Name */}
          <div className="flex items-center gap-3 bg-white/10 pl-2 pr-4 py-1.5 rounded-full border border-white/10 cursor-pointer hover:bg-white/20 transition-all">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00E0FF] to-[#0047FF] border-2 border-white/20 shadow-lg" />
            <div className="hidden md:flex flex-col">
              <span className="text-xs font-bold text-white uppercase tracking-wider leading-none mb-0.5">
                Guest
              </span>
              <span className="text-[10px] font-bold text-[#E9B3FB]/70 uppercase tracking-wider leading-none">
                User
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
