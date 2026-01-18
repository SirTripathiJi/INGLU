import React from 'react';

export function AboutHero() {
    return (
        <section className="relative py-20 bg-[#27005D] text-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">

                {/* Intro/Hero */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E9B3FB]">
                        Empowering You to Communicate Fluently and Fearlessly
                    </h1>

                    <div className="h-1 w-24 bg-[#6F00FF] mx-auto mb-12 rounded-full shadow-[0_0_15px_#6F00FF]" />

                    <h2 className="text-2xl md:text-3xl font-bold text-[#E9B3FB] mb-6 uppercase tracking-widest">
                        About INGLU
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl text-[#E9B3FB]/90 leading-relaxed font-medium">
                        <p>
                            INGLU is one of the fastest-growing global youth communities, dedicated to empowering the next generation through holistic development. Our unique E³ Model — Education + Enhancement + Entertainment — ensures that every young individual gains meaningful, real-world experience beyond traditional academics.
                        </p>
                        <p>
                            Over the past 6 years, we have:
                        </p>
                        <ul className="list-disc list-inside text-left max-w-2xl mx-auto space-y-2 text-white/90">
                            <li>Educated over 50,000 students through impactful courses</li>
                            <li>Provided internship opportunities to more than 100,000 youth</li>
                            <li>Delivered youth marketing services to 1,000+ leading brands</li>
                            <li>Organized 500+ dynamic events, inspiring and engaging young minds across the country</li>
                        </ul>
                        <p className="pt-4 font-semibold text-white">
                            At INGLU, we don’t just build experiences — we help shape futures.
                        </p>
                    </div>
                </div>

                {/* We Are India's Biggest */}
                <div className="bg-[#3B0270] rounded-3xl p-8 md:p-12 shadow-2xl border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#6F00FF]/20 blur-[80px] rounded-full -mr-20 -mt-20" />

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white uppercase tracking-wide">
                            We Are INDIA's Biggest Global Youth Community
                        </h2>
                        <p className="text-lg md:text-xl text-[#E9B3FB]/80 leading-relaxed">
                            We are proud to be INDIA’s largest global youth community, connecting passionate young minds from every corner of the country and beyond. By fostering collaboration, innovation, and leadership, we aim to create a network where ideas thrive and dreams turn into reality.
                        </p>
                    </div>
                </div>

            </div>

            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#6F00FF]/10 blur-[120px] rounded-full -translate-x-1/2" />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#9400FF]/10 blur-[120px] rounded-full translate-x-1/2" />
            </div>
        </section>
    );
}
