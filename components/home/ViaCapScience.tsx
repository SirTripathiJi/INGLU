import React from 'react';

export function ViaCapScience() {
    return (
        <section className="relative w-full overflow-hidden bg-black text-seed-mist min-h-[800px] flex items-center">
            {/* Background Image / Video for Fallback */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1755552501/library/viacap/viacapbg.png"
                    alt="ViaCap Background"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full flex flex-col items-center">
                {/* Header Text */}
                <div className="text-center mb-12 space-y-4">
                    <div className="flex justify-center gap-1 text-xs md:text-sm font-bold uppercase tracking-[0.3em] opacity-80">
                        {'VIACAP® TECHNOLOGY'.split('').map((char, i) => (
                            <span key={i} className="inline-block animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
                        Most probiotics don't survive digestion—DS-01® does.
                    </h2>
                    <div className="flex items-baseline justify-center gap-2 pt-4">
                        <span className="text-lg md:text-xl opacity-90">Increases healthy bacteria by</span>
                        <span className="text-5xl md:text-7xl font-bold text-seed-green">53x</span>
                        <sup className="text-xs top-[-20px]">*</sup>
                    </div>
                    <p className="text-xs opacity-60 max-w-xs mx-auto text-center pt-2">
                        *in a clinical trial of n=103 individuals with occasional GI challenges
                    </p>
                </div>

                {/* Capsule Visual */}
                <div className="relative w-full max-w-4xl aspect-square md:aspect-[16/9] flex items-center justify-center">
                    {/* Central Video */}
                    <div className="relative w-[300px] md:w-[400px] h-[300px] md:h-[400px]">
                        <video
                            src="https://res.cloudinary.com/dljz0lko8/video/upload/v1755019042/library/viacap/Seed-2025_3D-360-Product-Catalog_Capsule_DS01-Transparency_web-web_hd_720p.mov"
                            loop
                            muted
                            autoPlay
                            playsInline
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Annotations (Desktop Only mostly) */}
                    <div className="absolute inset-0 hidden md:block">
                        {/* Outer Capsule Label */}
                        <div className="absolute top-1/4 left-10 lg:left-0 max-w-xs text-left group">
                            <div className="border-l-2 border-seed-green pl-4 py-2 hover:bg-seed-green/10 transition-colors cursor-default">
                                <h3 className="text-seed-green font-bold text-sm uppercase tracking-wider mb-1">Outer Capsule</h3>
                                <p className="text-sm opacity-80 leading-relaxed">
                                    Shields probiotics from stomach acid in the digestive tract, while delivering prebiotics.
                                </p>
                            </div>
                        </div>

                        {/* Inner Capsule Label */}
                        <div className="absolute bottom-1/4 right-10 lg:right-0 max-w-xs text-right group">
                            <div className="border-r-2 border-seed-green pr-4 py-2 hover:bg-seed-green/10 transition-colors cursor-default">
                                <h3 className="text-seed-green font-bold text-sm uppercase tracking-wider mb-1">Inner Capsule</h3>
                                <p className="text-sm opacity-80 leading-relaxed">
                                    Delivers 24 live strains of probiotics to the colon, where they're needed most.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Annotations (Stacked below in layout, but here just hidden for simplicity or use specific mobile layout) */}
                </div>

                <div className="md:hidden space-y-8 w-full px-4 text-center">
                    <div className="space-y-2">
                        <h3 className="text-seed-green font-bold text-sm uppercase">Outer Capsule</h3>
                        <p className="text-sm opacity-80">Shields probiotics from stomach acid.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-seed-green font-bold text-sm uppercase">Inner Capsule</h3>
                        <p className="text-sm opacity-80">Delivers probiotics to the colon.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
