'use client';

import React from 'react';

const REASONS = [
    'E-Sports Courses',
    'Event Curation',
    'Artist Booking',
    'Production',
    'Event Sponsorship',
    'Stalls Bookings',
    'INGLU Membership',
    'Collaboration',
    'Influencer Management'
];

export function ContactForm() {
    return (
        <section className="bg-[#2B145C] py-24 px-4 md:px-6 border-t border-white/5">
            <div className="max-w-xl mx-auto text-center">

                <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">
                    Want to Connect With Us!
                </h2>
                <p className="text-[#E9B3FB] mb-10 text-lg">
                    Fill the form — our team will reach out to you soon.
                </p>

                <form className="space-y-4 text-left">

                    <div className="grid gap-2">
                        <label className="text-xs font-bold text-[#E9B3FB] uppercase tracking-wider pl-1">Name</label>
                        <input
                            type="text"
                            className="w-full bg-[#3B0270]/50 border border-[#6F00FF]/30 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#6F00FF] focus:bg-[#3B0270] transition-all"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="grid gap-2">
                        <label className="text-xs font-bold text-[#E9B3FB] uppercase tracking-wider pl-1">Email</label>
                        <input
                            type="email"
                            className="w-full bg-[#3B0270]/50 border border-[#6F00FF]/30 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#6F00FF] focus:bg-[#3B0270] transition-all"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div className="grid gap-2">
                        <label className="text-xs font-bold text-[#E9B3FB] uppercase tracking-wider pl-1">Reason</label>
                        <div className="relative">
                            <select className="w-full bg-[#3B0270]/50 border border-[#6F00FF]/30 rounded-xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-[#6F00FF] focus:bg-[#3B0270] transition-all cursor-pointer" defaultValue="">
                                <option value="" disabled>Select Reason</option>
                                {REASONS.map(r => (
                                    <option key={r} value={r} className="bg-[#3B0270]">{r}</option>
                                ))}
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#6F00FF]">
                                ▼
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <label className="text-xs font-bold text-[#E9B3FB] uppercase tracking-wider pl-1">Message</label>
                        <textarea
                            rows={4}
                            className="w-full bg-[#3B0270]/50 border border-[#6F00FF]/30 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#6F00FF] focus:bg-[#3B0270] transition-all"
                            placeholder="Tell us more..."
                        />
                    </div>

                    <button className="w-full bg-[#6F00FF] text-white font-bold uppercase tracking-widest py-5 rounded-xl hover:bg-[#9400FF] hover:shadow-[0_0_20px_rgba(111,0,255,0.4)] transition-all duration-300 mt-4">
                        Submit Request
                    </button>

                </form>

            </div>
        </section>
    );
}
