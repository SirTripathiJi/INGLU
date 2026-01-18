'use client';

import React from 'react';

const BRANDS = [
    'cure.fit', 'NIVEA', 'Zomato', 'adda52', 'Cornitos',
    'Pizza Hut', 'BookMyShow', 'Paytm Insider', 'Urban Company', 'Domino’s'
];

export function TrustTicker() {
    return (
        <section className="py-20 bg-[#27005D] border-y border-white/5">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="block text-sm font-bold tracking-widest text-[#E9B3FB] uppercase mb-4 opacity-80">
                        Our Partners
                    </span>
                    <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-2">
                        Brands Who Trust INGLU
                    </h2>
                </div>

                {/* Clean Static Grid - High Contrast */}
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
                    {BRANDS.map((brand, i) => (
                        <div key={i} className="px-6 py-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[#6F00FF]/50 transition-all cursor-default group">
                            <span className="text-xl md:text-2xl font-black text-white/70 group-hover:text-white transition-colors">
                                {brand}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
