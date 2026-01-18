import React from 'react';

export function MembershipIntro() {
    return (
        <section className="py-16 bg-[#2B145C]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                <div className="bg-[#3B0270] rounded-3xl p-8 md:p-16 border border-white/5 shadow-2xl max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase tracking-wide">
                        Join Membership
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl text-[#E9B3FB]/90 leading-relaxed font-medium">
                        <p className="max-w-3xl mx-auto">
                            The INGLU Membership Plan is a student-focused initiative designed to provide college students with high-value opportunities at a very low cost. The goal is to create a vibrant student ecosystem that supports career development, social engagement, and personal growth.
                        </p>
                        <p className="max-w-3xl mx-auto">
                            The INGLU Membership is a comprehensive monthly subscription designed to empower college students through a wide range of high-value opportunities. Members gain exclusive access to internships, certified training programs, curated events, workshops, networking sessions, and more.
                        </p>
                        <p className="max-w-3xl mx-auto">
                            With added benefits such as discounts, giveaways, volunteering opportunities, and recognition within college communities, this membership aims to foster personal growth, skill development, and meaningful connections within a dynamic student ecosystem.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
