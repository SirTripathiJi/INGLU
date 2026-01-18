import React from 'react';
import {
    GraduationCap,
    Ticket,
    Video,
    Gamepad2,
    Shirt,
    Plane,
    Users,
    Mic2
} from 'lucide-react';

const ECOSYSTEM_ITEMS = [
    {
        title: 'INGLU EDUCATION',
        desc: 'Focuses on educational development of youth.',
        icon: GraduationCap
    },
    {
        title: 'INGLU EVENTS',
        desc: 'Curates in-house and partnered events including Artist Management, Production, Sponsorships, etc.',
        icon: Ticket
    },
    {
        title: 'INGLU MERCHANDISE',
        desc: 'Trendy and high-quality youth products.',
        icon: Shirt
    },
    {
        title: 'INGLU TRAVELS',
        desc: 'Unique youth trips and experiences.',
        icon: Plane
    },
    {
        title: 'INGLU E-SPORTS',
        desc: 'Elite competitive gaming lineups (BGMI & more).',
        icon: Gamepad2
    },
    {
        title: 'INGLU CREATORS',
        desc: 'Support system for emerging youth creators.',
        icon: Video
    },
    {
        title: 'INGLU SOCIAL',
        desc: 'Non-profit initiatives for youth development.',
        icon: Users
    },
    {
        title: 'MUSE RECORDS',
        desc: 'Artist management and music promotion.',
        icon: Mic2
    },
];

export function EcosystemGrid() {
    return (
        <section className="bg-[#2B145C] py-24 px-4 md:px-6">
            <div className="max-w-[1440px] mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                        Our Segments
                    </h2>
                    <p className="text-lg text-[#E9B3FB] mt-4 font-medium opacity-80">
                        Delivering unparalleled services tailored to your unique needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ECOSYSTEM_ITEMS.map((item, index) => (
                        <div key={index} className="group bg-[#3B0270] border border-white/5 hover:border-[#6F00FF] p-8 rounded-2xl hover:shadow-[0_0_20px_rgba(111,0,255,0.2)] hover:-translate-y-1 transition-all duration-300">

                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-[#6F00FF]/20 rounded-lg flex items-center justify-center text-[#6F00FF] group-hover:bg-[#6F00FF] group-hover:text-white transition-colors">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-black text-white uppercase tracking-tight leading-none group-hover:text-[#6F00FF] transition-colors">
                                    {item.title}
                                </h3>
                            </div>

                            <p className="text-sm font-medium text-[#E9B3FB]/70 leading-relaxed min-h-[3rem]">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
