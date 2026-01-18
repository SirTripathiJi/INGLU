import React from 'react';
import { ArrowRight } from 'lucide-react';

export function AudienceSelector() {
    return (
        <section className="bg-inglu-blush py-24 px-4 md:px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-inglu-indigo tracking-tight">
                        Who Are You?
                    </h2>
                    <p className="text-inglu-wine text-lg font-medium">
                        Select your path to continue the experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">

                    {/* Youth Card */}
                    <div className="group relative bg-white border-2 border-inglu-indigo/5 rounded-[2rem] p-10 md:p-14 overflow-hidden hover:border-inglu-violet hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                        <h3 className="text-4xl font-black text-inglu-indigo mb-6 uppercase tracking-tighter group-hover:text-inglu-violet transition-colors">
                            Youth
                            <span className="block text-xl font-bold text-inglu-wine opacity-60 tracking-normal mt-1">/ Students</span>
                        </h3>
                        <p className="text-xl text-inglu-wine mb-10 leading-relaxed max-w-sm font-medium">
                            Build skills, gain exposure, and experience the professional world beyond classrooms.
                        </p>
                        <div className="flex items-center gap-3 text-inglu-violet font-bold uppercase tracking-wider text-sm group/btn">
                            Join Experience
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </div>

                    {/* Brand Card */}
                    <div className="group relative bg-inglu-indigo rounded-[2rem] p-10 md:p-14 overflow-hidden hover:shadow-2xl hover:bg-inglu-purple-dark transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                        <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter group-hover:text-inglu-violet transition-colors">
                            Brands
                            <span className="block text-xl font-bold text-white opacity-60 tracking-normal mt-1">/ Colleges</span>
                        </h3>
                        <p className="text-xl text-inglu-lavender mb-10 leading-relaxed max-w-sm font-medium">
                            Collaborate with young talent through structured learning, engagement, and events.
                        </p>
                        <div className="flex items-center gap-3 text-white font-bold uppercase tracking-wider text-sm group/btn">
                            Partner with INGLU
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
