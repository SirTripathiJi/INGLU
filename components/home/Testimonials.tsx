'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TESTIMONIALS = [
    {
        id: 1,
        videoPoster: "https://image.mux.com/oB02r9BUIqkJHUxbfyWLh00yK5GO6GqRQReiSskS5SRL4/thumbnail.webp?time=3",
        type: "video"
    },
    {
        id: 2,
        videoPoster: "https://image.mux.com/iM00sNT9JitDRoL3sKGoI7wWXDmYwx7eAw5ialhbLBOk/thumbnail.webp?time=2.5",
        type: "video"
    },
    {
        id: 3,
        videoPoster: "https://res.cloudinary.com/dljz0lko8/image/upload/v1752249339/library/scroller/Frame_1739333317.png",
        type: "image"
    },
    {
        id: 4,
        videoPoster: "https://res.cloudinary.com/dljz0lko8/image/upload/v1753371915/library/scroller/Frame_1739333315.png",
        type: "image"
    }
];

export function Testimonials() {
    return (
        <section className="bg-seed-mist py-24 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 mb-12 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-medium text-seed-green tracking-tight mb-4">
                    Over 1 million health transformations (and counting).
                </h2>
                <p className="text-lg text-seed-green/70">
                    See how real people are changing their health with Seed.
                </p>
            </div>

            <div className="pl-4 md:pl-6 max-w-[1440px] mx-auto">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 3.2 }
                    }}
                    className="w-full !pb-12"
                >
                    {TESTIMONIALS.map((item, index) => (
                        <SwiperSlide key={index} className="aspect-[9/16] md:aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 relative group cursor-pointer h-[500px]">
                            <img
                                src={item.videoPoster}
                                alt="Testimonial Thumbnail"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {item.type === 'video' && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-seed-mist/20 backdrop-blur-md rounded-full flex items-center justify-center border border-seed-mist/40 transition-transform group-hover:scale-110">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="ml-1">
                                            <path d="M5 3L19 12L5 21V3Z" fill="#FCFCF7" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
