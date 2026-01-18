import React from 'react';
import { BookOpen, Rocket, PartyPopper, Plus, MoveRight } from 'lucide-react';

export function E3Flow() {
    return (
        <section className="py-20 bg-[#2B145C] overflow-hidden relative">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">

                <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-20 uppercase tracking-tighter">
                    The <span className="text-[#6F00FF]">E³</span> Model
                </h2>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 max-w-6xl mx-auto">

                    {/* Education */}
                    <div className="flex-1 w-full relative group">
                        <div className="bg-[#3B0270] p-8 rounded-3xl border border-white/5 hover:border-[#00E0FF] transition-all shadow-xl text-center h-full group-hover:-translate-y-2">
                            <div className="w-16 h-16 mx-auto bg-[#00E0FF]/10 text-[#00E0FF] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,224,255,0.2)]">
                                <BookOpen size={32} />
                            </div>
                            <h3 className="text-xl font-black text-white uppercase mb-2">Education</h3>
                            <p className="text-[#E9B3FB]/70 text-sm font-medium">Skills for the future</p>
                        </div>
                    </div>

                    {/* Plus */}
                    <div className="hidden lg:block text-white/20">
                        <Plus size={40} />
                    </div>

                    {/* Enhancement */}
                    <div className="flex-1 w-full relative group">
                        <div className="bg-[#3B0270] p-8 rounded-3xl border border-white/5 hover:border-[#6F00FF] transition-all shadow-xl text-center h-full group-hover:-translate-y-2">
                            <div className="w-16 h-16 mx-auto bg-[#6F00FF]/10 text-[#6F00FF] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(111,0,255,0.2)]">
                                <Rocket size={32} />
                            </div>
                            <h3 className="text-xl font-black text-white uppercase mb-2">Enhancement</h3>
                            <p className="text-[#E9B3FB]/70 text-sm font-medium">Real-world experience</p>
                        </div>
                    </div>

                    {/* Plus */}
                    <div className="hidden lg:block text-white/20">
                        <Plus size={40} />
                    </div>

                    {/* Entertainment */}
                    <div className="flex-1 w-full relative group">
                        <div className="bg-[#3B0270] p-8 rounded-3xl border border-white/5 hover:border-[#E9B3FB] transition-all shadow-xl text-center h-full group-hover:-translate-y-2">
                            <div className="w-16 h-16 mx-auto bg-[#E9B3FB]/10 text-[#E9B3FB] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(233,179,251,0.2)]">
                                <PartyPopper size={32} />
                            </div>
                            <h3 className="text-xl font-black text-white uppercase mb-2">Entertainment</h3>
                            <p className="text-[#E9B3FB]/70 text-sm font-medium">Celebration & Fun</p>
                        </div>
                    </div>

                    {/* Equals / Arrow (Mobile) */}
                    <div className="text-white/20 rotate-90 lg:rotate-0">
                        <MoveRight size={40} className="hidden lg:block" />
                        <Plus size={40} className="lg:hidden" />
                    </div>

                    {/* RESULT: EXPERIENCE */}
                    <div className="flex-1 w-full relative">
                        <div className="bg-gradient-to-br from-[#6F00FF] to-[#9400FF] p-8 rounded-3xl shadow-[0_0_40px_rgba(111,0,255,0.3)] text-center h-full transform scale-105 border border-white/20">
                            <h3 className="text-sm font-bold text-white/80 uppercase tracking-widest mb-4">The Result</h3>
                            <div className="text-3xl md:text-4xl font-black text-white uppercase mb-2">
                                Experience
                            </div>
                            <div className="w-12 h-1 bg-white/20 mx-auto rounded-full my-4" />
                            <p className="text-white text-sm font-bold opacity-90">
                                Holistic Growth
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
