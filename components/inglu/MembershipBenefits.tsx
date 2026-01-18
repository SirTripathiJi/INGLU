'use client';

import React from 'react';
import { Briefcase, Users, Calendar, Trophy, ArrowRight } from 'lucide-react';

const BENEFITS = [
    {
        icon: Briefcase,
        title: 'Internships & Exposure',
        desc: 'Direct access to corporate projects and real-world work experience.',
    },
    {
        icon: Calendar,
        title: 'Events & Networking',
        desc: 'Exclusive entry to curated events, meetups, and industry sessions.',
    },
    {
        icon: Users,
        title: 'Community & Growth',
        desc: 'Connect with like-minded peers and mentors for holistic development.',
    },
    {
        icon: Trophy,
        title: 'Access to Opportunities',
        desc: 'Priority access to brand collaborations, gigs, and competitions.',
    },
];

export function MembershipBenefits() {
    return (
        <section className="bg-inglu-indigo py-24 px-4 md:px-6 text-white overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-inglu-violet/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-inglu-purple-neon font-bold tracking-widest uppercase text-sm mb-3 block">
                            Why Join INGLU?
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[0.95]">
                            Unlock the full E³ Experience.
                        </h2>
                    </div>

                    <button className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-white hover:text-inglu-indigo transition-all flex items-center gap-3 group">
                        View Membership Options
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {BENEFITS.map((item, i) => (
                        <div key={i} className="group bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-inglu-violet hover:border-inglu-violet transition-all duration-300">
                            <item.icon className="w-10 h-10 text-inglu-purple-neon mb-6 group-hover:text-white transition-colors" />
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-white/60 leading-relaxed group-hover:text-white/90">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
