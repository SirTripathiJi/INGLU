import React from 'react';
import { Star, Zap, Gift, Award, Users, Video, Briefcase, Ticket, Coffee, Music, Mic2, FileBadge, HeartHandshake, BookOpen, UserPlus, Lightbulb } from 'lucide-react';

export function MembershipBenefitsList() {
    const benefits = [
        { icon: Briefcase, text: "FIRST INTERNSHIP PROGRAM" },
        { icon: Users, text: "MEMBERS EXCLUSIVE WORKSHOPS" },
        { icon: Ticket, text: "FREE PASSES FOR EVENTS" },
        { icon: Video, text: "MEMBERS EXCLUSIVE PREMIUM COURSES" },
        { icon: Music, text: "EXCLUSIVE PARTIES" },
        { icon: Star, text: "DISCOUNTS AT FAVOURITE BRANDS" },
        { icon: Zap, text: "EARNING OPPORTUNITIES" },
        { icon: Coffee, text: "DISCOUNTS AT CAFES & CLUBS" },
        { icon: Ticket, text: "DISCOUNTS OVER ALMOST EVERY EVENT" },
        { icon: Users, text: "MEETUPS AND GET TOGETHERS" },
        { icon: UserPlus, text: "SPECIAL NETWORKING ZONES & MEETUPS" },
        { icon: FileBadge, text: "CERTIFICATES" },
        { icon: HeartHandshake, text: "VOLUNTEER WITH NGO AND EVENTS" },
        { icon: BookOpen, text: "SKILL DEVELOPMENT PROGRAMS" },
        { icon: Mic2, text: "CHANCE TO MEET CELEBS & ARTISTS" },
        { icon: Lightbulb, text: "UNCONVENTIONAL INTERNSHIPS" },
    ];

    return (
        <section className="py-20 bg-[#27005D]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">

                <h2 className="text-4xl md:text-5xl font-black text-white mb-16 text-center uppercase tracking-tighter">
                    Membership Benefits
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((item, index) => (
                        <div key={index} className="bg-[#3B0270] p-8 rounded-2xl border border-white/5 hover:border-[#6F00FF] transition-all group hover:bg-[#2B145C] hover:-translate-y-1 shadow-lg hover:shadow-[#6F00FF]/20 flex flex-col items-center text-center h-full">
                            <div className="w-14 h-14 bg-[#2B145C] group-hover:bg-[#6F00FF] rounded-xl flex items-center justify-center mb-6 text-[#6F00FF] group-hover:text-white transition-colors shadow-inner">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-white font-bold uppercase text-sm tracking-wider leading-relaxed">
                                {item.text}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
