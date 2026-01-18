import React from 'react';
import Link from 'next/link';

const IMAGES = [
    "https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1758127083/library/highlight/Frame_1739333908_2.png",
    "https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1758117791/library/highlight/1de23b9c19a1b7098203106cb8647453916e1416.png",
    "https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1758117774/library/highlight/2_1.png",
    "https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1758053476/library/highlight/cd4fcd333d2d2c517ca600e6ee9efbbaf896fded.png"
];

export function BundleHighlight() {
    return (
        <section className="bg-seed-mist py-20 px-4 md:px-6">
            <div className="max-w-[1440px] mx-auto bg-[#F8F8F4] rounded-[32px] overflow-hidden flex flex-col lg:flex-row">
                {/* Text Content */}
                <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center items-start space-y-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-seed-green">
                        Bundle + Save 25%
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold text-seed-green leading-tight">
                        Daily essentials for nutrition and digestive health.
                    </h2>
                    <p className="text-lg md:text-xl text-seed-green/80 leading-relaxed max-w-md">
                        Clinically proven daily probiotic and new daily multivitamin that help cover nutrient gaps, reduce bloating, and promote healthy regularity.*
                    </p>
                    <Link
                        href="/daily-essentials-duo"
                        className="group inline-flex items-center gap-2 bg-seed-green text-seed-mist px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-seed-dark-green transition-colors mt-4"
                    >
                        Shop Daily Essentials Duo
                        <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.5 0L11 5.5L5.5 11L4.406 9.906L8.037 6.274H0V4.726H8.037L4.406 1.094L5.5 0Z" fill="currentColor" />
                        </svg>
                    </Link>
                </div>

                {/* Image Grid */}
                <div className="lg:w-1/2 bg-[#efefeb] p-4 md:p-8">
                    <div className="grid grid-cols-2 gap-4 h-full">
                        {IMAGES.map((src, index) => (
                            <div key={index} className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                                <img
                                    src={src}
                                    alt={`Bundle highlight ${index + 1}`}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
