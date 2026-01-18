import React from 'react';
import { ArrowLeftRight, Zap, Briefcase } from 'lucide-react';

export function ConnectionBridge() {
    return (
        <section className="bg-inglu-mist py-24 px-4 md:px-6">
            <div className="max-w-[1440px] mx-auto text-center">

                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-black text-inglu-navy tracking-tight max-w-2xl mx-auto">
                        How we bridge the gap.
                    </h2>
                </div>

                <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24">

                    {/* Left Side: Youth */}
                    <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-sm border border-inglu-navy/5">
                        <div className="w-16 h-16 bg-inglu-lime/20 rounded-full flex items-center justify-center mx-auto mb-6 text-inglu-navy">
                            <Zap className="w-8 h-8" fill="currentColor" />
                        </div>
                        <h3 className="text-2xl font-bold text-inglu-navy mb-2">Youth</h3>
                        <p className="text-inglu-slate">Talent, Energy, Ambition</p>
                    </div>

                    {/* Center: The Bridge */}
                    <div className="flex flex-col items-center gap-4 z-10 p-8 rounded-full bg-white shadow-2xl relative">
                        <div className="absolute inset-0 bg-inglu-lime/10 rounded-full animate-pulse" />
                        <div className="w-24 h-24 bg-inglu-navy rounded-full flex items-center justify-center text-white relative z-10">
                            <span className="font-black text-3xl tracking-tighter">INGLU</span>
                        </div>
                        <div className="h-0.5 w-full bg-inglu-navy/10 absolute top-1/2 left-1/2 -translate-x-1/2 -z-10 w-[200%] hidden lg:block" />
                        <div className="w-0.5 h-full bg-inglu-navy/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[200%] lg:hidden" />
                    </div>

                    {/* Right Side: Corporate */}
                    <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-sm border border-inglu-navy/5">
                        <div className="w-16 h-16 bg-inglu-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 text-inglu-blue">
                            <Briefcase className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-inglu-navy mb-2">Corporate</h3>
                        <p className="text-inglu-slate">Opportunity, Exposure, Growth</p>
                    </div>

                </div>

            </div>
        </section>
    );
}
