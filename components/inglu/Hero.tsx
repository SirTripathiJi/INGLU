'use client';

import React from 'react';
import Link from 'next/link';

export function Hero() {
    const [audience, setAudience] = React.useState('youth');

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#27005D] pt-24 md:pt-32 pb-12">

            <div className="max-w-[1440px] mx-auto px-4 md:px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                {/* Left: Content & Emotion */}
                <div className="space-y-8 md:space-y-10 text-center lg:text-left z-10 animate-fade-in-up">

                    {/* Audience Toggle - Addressing "Asked in start" */}
                    <div className="inline-flex bg-[#3B0270] p-1 rounded-full border border-white/10 mb-4 shadow-lg mx-auto lg:mx-0">
                        <button
                            onClick={() => setAudience('youth')}
                            className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${audience === 'youth' ? 'bg-[#6F00FF] text-white shadow-md' : 'text-[#E9B3FB]/70 hover:text-white'}`}
                        >
                            For Youth
                        </button>
                        <button
                            onClick={() => setAudience('brand')}
                            className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${audience === 'brand' ? 'bg-[#6F00FF] text-white shadow-md' : 'text-[#E9B3FB]/70 hover:text-white'}`}
                        >
                            For Brands
                        </button>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter uppercase drop-shadow-2xl">
                        {audience === 'youth' ? (
                            <>
                                From Skills & Internships <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F00FF] to-[#9400FF] decoration-clone leading-[1.3] py-2">
                                    to Events & Celebration
                                </span>
                            </>
                        ) : (
                            <>
                                Connect with <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F00FF] to-[#9400FF] decoration-clone leading-[1.3] py-2">
                                    Gen-Z Talent & Culture
                                </span>
                            </>
                        )}
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed drop-shadow-md">
                        {audience === 'youth'
                            ? "INGLU bridges the gap between YOUTH and the CORPORATE WORLD through real-world experience."
                            : "The ultimate platform for brands to engage, hire, and collaborate with the most active youth community in India."
                        }
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <Link href={audience === 'youth' ? "/join" : "/partner"} className="min-w-[200px] w-full sm:w-auto bg-[#6F00FF] text-white px-8 py-4 rounded-xl text-lg font-bold uppercase tracking-wider hover:bg-[#9400FF] hover:shadow-[0_0_20px_rgba(111,0,255,0.4)] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[#6F00FF]/20 text-center">
                            {audience === 'youth' ? "Join as Youth" : "Partner with Us"}
                        </Link>
                        {audience === 'youth' && (
                            <div className="text-sm font-bold text-[#E9B3FB] uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#00E0FF] animate-pulse" />
                                100k+ Active Members
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Visual Collage (Emotional Anchor) */}
                <div className="relative h-[500px] hidden lg:block animate-fade-in-up delay-100">
                    <div className="absolute inset-0 grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-12">
                            <div className="h-56 rounded-[2rem] overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500 border border-white/5 bg-[#3B0270]">
                                <img src="/inglu-collage-1.png" alt="Student Skill Building" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="h-40 rounded-[2rem] overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500 border border-white/5 bg-[#3B0270]">
                                <img src="/inglu-collage-2.png" alt="Internship Collaboration" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-40 rounded-[2rem] overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500 border border-white/5 bg-[#3B0270]">
                                <img src="/inglu-collage-3.png" alt="Event Experience" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="h-56 rounded-[2rem] overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500 border border-white/5 bg-[#3B0270]">
                                <img src="/inglu-collage-4.png" alt="Community Celebration" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    </div>
                    {/* Decorative Blur */}
                    <div className="absolute -inset-10 bg-[#6F00FF]/20 blur-[100px] -z-10 rounded-full pointer-events-none" />
                </div>

            </div>
        </section>
    );
}
