import React from 'react';

export function MembershipHero() {
    return (
        <section className="relative py-24 bg-[#27005D] overflow-hidden text-center">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6F00FF]/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <span className="inline-block py-1 pr-4 pl-4 rounded-full bg-[#3B0270] border border-[#6F00FF]/30 text-[#E9B3FB] font-bold text-sm tracking-[0.2em] mb-8 shadow-lg shadow-[#6F00FF]/10">
                    INGLU MEMBERSHIP
                </span>

                <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter uppercase drop-shadow-2xl mb-8">
                    Join the Biggest Youth Army and feel the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F00FF] to-[#9400FF]">INSANITY</span>
                </h1>

                <p className="hidden md:block text-xl text-[#E9B3FB]/70 font-medium tracking-wide max-w-2xl mx-auto">
                    Unlock your potential with premium experiences, rewards, and a vibrant community.
                </p>
            </div>
        </section>
    );
}
