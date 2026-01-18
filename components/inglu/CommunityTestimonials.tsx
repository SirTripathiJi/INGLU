'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TESTIMONIALS = [
    {
        quote: "The seniors were very polite and easy to work with. I have spent a wonderful time.",
        author: "Harsh",
        role: "Graphics Intern"
    },
    {
        quote: "Working in Inglu as an intern was a really good experience…",
        author: "Nishant",
        role: "Operations"
    },
    {
        quote: "…shot artists like Paradox, Amit Trivedi, Arjun Kanungo…",
        author: "Mayank",
        role: "Ex-Media Head"
    },
    {
        quote: "…great learning experience with mentors…",
        author: "Chahat Adhikari",
        role: "Operations"
    },
    {
        quote: "…best mentorship and experience…",
        author: "Divyansh Srivastav",
        role: "Project Head"
    }
];

export function CommunityTestimonials() {
    return (
        <section className="bg-[#2B145C] py-24 px-4 md:px-6 overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-16">
                    <span className="block text-sm font-bold tracking-widest text-[#E9B3FB] uppercase mb-4 opacity-80">
                        Community Voices
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-white uppercase">
                        What People Say About Us
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {TESTIMONIALS.map((t, i) => (
                        <div key={i} className="bg-[#3B0270] p-8 rounded-3xl border border-white/5 hover:border-[#6F00FF] transition-all group hover:-translate-y-1 hover:shadow-lg">
                            {/* Quote Icon */}
                            <div className="text-[#6F00FF] opacity-30 mb-4">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.293 14.922 13.916C15.489 12.612 16.606 11.235 18.061 10.378L16.273 7.828C14.034 9.4 12.441 12.015 12.441 15.5L12.441 21L14.017 21ZM5 21L6.576 21L6.576 18C6.576 16.896 6.88 15.293 7.48 13.916C8.047 12.612 9.164 11.235 10.62 10.378L8.832 7.828C6.593 9.4 5 12.015 5 15.5L5 21Z" />
                                </svg>
                            </div>

                            <blockquote className="text-lg text-white/90 leading-relaxed mb-6 font-medium">
                                &quot;{t.quote}&quot;
                            </blockquote>

                            <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                                <div className="w-10 h-10 rounded-full bg-[#27005D] flex items-center justify-center text-[#E9B3FB] font-bold text-sm">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-white font-bold uppercase text-sm tracking-wide">
                                        {t.author}
                                    </div>
                                    <div className="text-[#E9B3FB]/60 text-xs font-bold uppercase tracking-wider">
                                        {t.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
