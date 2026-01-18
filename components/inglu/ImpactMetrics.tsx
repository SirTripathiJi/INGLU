'use client';

import React from 'react';

export function ImpactMetrics() {
    return (
        <section className="py-24 bg-[#3B0270] relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6F00FF]/10 to-transparent pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center divide-white/10 lg:divide-x">

                    <div className="group">
                        <span className="block text-5xl md:text-6xl font-black tracking-tight mb-2 text-white drop-shadow-[0_0_15px_rgba(111,0,255,0.5)]">
                            5+
                        </span>
                        <span className="text-sm font-bold text-[#E9B3FB] uppercase tracking-widest">Countries</span>
                    </div>

                    <div className="group">
                        <span className="block text-5xl md:text-6xl font-black tracking-tight mb-2 text-white drop-shadow-[0_0_15px_rgba(111,0,255,0.5)]">
                            100k+
                        </span>
                        <span className="text-sm font-bold text-[#E9B3FB] uppercase tracking-widest">Youth Impacted</span>
                    </div>

                    <div className="group">
                        <span className="block text-5xl md:text-6xl font-black tracking-tight mb-2 text-white drop-shadow-[0_0_15px_rgba(111,0,255,0.5)]">
                            1k+
                        </span>
                        <span className="text-sm font-bold text-[#E9B3FB] uppercase tracking-widest">Collaborations</span>
                    </div>

                    <div className="group">
                        <span className="block text-5xl md:text-6xl font-black tracking-tight mb-2 text-white drop-shadow-[0_0_15px_rgba(111,0,255,0.5)]">
                            500+
                        </span>
                        <span className="text-sm font-bold text-[#E9B3FB] uppercase tracking-widest">Events Curated</span>
                    </div>

                </div>
            </div>
        </section>
    );
}
