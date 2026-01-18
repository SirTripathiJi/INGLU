import React from 'react';

export function AboutStats() {
    const stats = [
        { label: "Youth Impacted", value: "100k+" },
        { label: "Collaborations", value: "1000+" },
        { label: "Events Curated", value: "500+" },
        { label: "Countries", value: "5+" },
    ];

    return (
        <section className="py-12 bg-[#2B145C]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-[#3B0270] p-8 rounded-2xl border border-white/5 text-center group hover:border-[#6F00FF]/50 transition-colors">
                            <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-[#6F00FF] transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(111,0,255,0.5)]">
                                {stat.value}
                            </div>
                            <div className="text-[#E9B3FB] font-bold uppercase tracking-widest text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
