import React from 'react';

export function MicrobiomeSection() {
    return (
        <section className="bg-[#eeeeee98] py-24 px-4 md:px-6">
            <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className="space-y-8 lg:pr-12">
                    <div className="flex items-center gap-2 text-seed-green font-bold text-sm tracking-widest uppercase">
                        <span>Seed</span>
                        <span className="opacity-40">【</span>
                        <svg width="26" height="21" viewBox="0 0 26 21" fill="none" className="w-5 h-auto">
                            <path fill="currentColor" d="M4.10059 6.27284v1.5H1.75V18.5521h22.5V7.77284h-2.1172v-1.5H25.75V20.0521H.25V6.27284h3.85059Z" />
                            <path fill="currentColor" d="M22.9068 14.5952V.750427L12.774 6.14789l-.3975.21094V20.2036l10.5303-5.6084Zm-9.0303-7.33501 7.5303-4.01074V13.6948l-7.5303 4.0107V7.26019Z" />
                            <path fill="currentColor" d="M3.34625 14.5952V.750427L13.4791 6.14789l.3974.21094V20.2036L3.34625 14.5952Zm9.03025-7.33501L4.84625 3.24945V13.6948l7.53025 4.0107V7.26019Z" />
                        </svg>
                        <span className="opacity-40">】</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-medium text-seed-green leading-[1.1]">
                        You are more than human.
                    </h2>

                    <p className="text-lg md:text-xl text-seed-green/80 leading-relaxed max-w-lg">
                        Your body isn’t yours alone—it’s home to 38 trillion microbes that power your digestion, immunity and more. Take a few minutes to learn how their health impacts your health—and how to maximize both.
                    </p>

                    <button className="flex items-center gap-3 bg-seed-green text-seed-mist px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity">
                        <span>Discover</span>
                        <svg width="24" height="24" viewBox="0 0 38 38" fill="none" className="w-6 h-6">
                            <rect width="38" height="38" rx="19" fill="#36542D" />
                            <path d="M24.8461 19L17.1538 24L17.1538 14L24.8461 19Z" fill="#FCFCF7" />
                        </svg>
                    </button>

                    <div className="pt-8 border-t border-seed-green/10">
                        <span className="text-xs font-bold tracking-widest text-[#a8a8a3]">
                            SCIENCE <span className="mx-1">/</span> Microbiome 101
                        </span>
                    </div>
                </div>

                {/* Video Thumbnail */}
                <div className="relative aspect-square md:aspect-video lg:aspect-square bg-[#e5e5e0] rounded-lg overflow-hidden cursor-pointer group">
                    <img
                        src="https://image.mux.com/87tnV011w6GkwNzl7dxntQSNhpcVSJNgSQaqlj3iLTK00/thumbnail.webp?time=0"
                        alt="Microbiome 101"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-seed-green/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                <path d="M5 3L19 12L5 21V3Z" fill="#FCFCF7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
