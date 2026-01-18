'use client';

import React from 'react';
import Link from 'next/link';

export function FinalCTA() {
    return (
        <section className="bg-white py-32 px-4 md:px-6 text-center overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-10 animate-fade-in-up">

                <h2 className="text-5xl md:text-7xl font-black text-inglu-indigo tracking-tighter leading-[0.9] uppercase">
                    Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-inglu-violet to-inglu-purple-neon">Experience</span> <br /> With INGLU.
                </h2>

                <p className="text-xl text-inglu-wine max-w-2xl mx-auto font-medium">
                    Whether you are a student looking for growth or a brand looking for talent, we have the perfect ecosystem for you.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                    <Link href="/join" className="w-full sm:w-auto bg-inglu-violet text-white px-12 py-5 rounded-xl text-lg font-bold uppercase tracking-wider hover:bg-inglu-purple-neon hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-inglu-violet/30">
                        Join as Youth
                    </Link>
                    <button className="w-full sm:w-auto bg-transparent border-2 border-inglu-indigo text-inglu-indigo px-12 py-5 rounded-xl text-lg font-bold uppercase tracking-wider hover:bg-inglu-indigo hover:text-white transition-all duration-300">
                        Partner With Us
                    </button>
                </div>

            </div>
        </section>
    );
}
