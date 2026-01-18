import React from 'react';
import { Target, Globe } from 'lucide-react';

export function VisionMission() {
    return (
        <section className="py-20 bg-[#27005D]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 md:gap-12">

                {/* Vision Card */}
                <div className="bg-[#3B0270] rounded-3xl p-8 md:p-12 border border-white/5 hover:border-[#6F00FF]/30 transition-all group shadow-xl">
                    <div className="w-16 h-16 bg-[#2B145C] rounded-2xl flex items-center justify-center mb-6 text-[#6F00FF] group-hover:scale-110 transition-transform shadow-lg shadow-[#6F00FF]/20">
                        <Target size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-wider">
                        Vision
                    </h3>
                    <p className="text-lg md:text-xl text-[#E9B3FB]/90 leading-relaxed font-medium">
                        Our vision is to create the world's best youth hub, where young people can find any solutions they require, and to become the most popular holistic development platform on the planet. The vision is to build the world's best youth ecosystem, establishing a strong community to assist youth worldwide.
                    </p>
                </div>

                {/* Mission Card */}
                <div className="bg-[#3B0270] rounded-3xl p-8 md:p-12 border border-white/5 hover:border-[#6F00FF]/30 transition-all group shadow-xl">
                    <div className="w-16 h-16 bg-[#2B145C] rounded-2xl flex items-center justify-center mb-6 text-[#9400FF] group-hover:scale-110 transition-transform shadow-lg shadow-[#9400FF]/20">
                        <Globe size={32} />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-wider">
                        Mission
                    </h3>
                    <p className="text-lg md:text-xl text-[#E9B3FB]/90 leading-relaxed font-medium">
                        The mission is to create the strongest community on the globe where youth can achieve holistic experiences, which are necessary for the growth of an individual. The community where youth can get an education where they can enhance their own self and get entertained throughout the process forming the best overall experience.
                    </p>
                </div>

            </div>
        </section>
    );
}
