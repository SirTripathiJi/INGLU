'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const SLIDES = [
    {
        id: 1,
        title: "Nutrition, energy, and sleep—advanced by microbiome science",
        subtitle: "Seed's Co-Biotics nourish you and your microbiome to deliver targeted, daily benefits.",
        image: "https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/library/hero/symptom_resolution_desktop.png", // Fallback/Alternative
        videoPoster: "https://image.mux.com/OQT00yIcEsThXghvoJNw4xEcb59YtNufa2sbzDod2UfM/thumbnail.webp?time=0",
        hasVideo: true,
    },
    {
        id: 2,
        title: "A healthy gut can change your life.",
        subtitle: "DS-01® is clinically proven to ease bloating, gas, and irregularity for everyday digestive comfort.",
        image: "https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/library/hero/symptom_resolution_desktop.png",
        hasVideo: false,
    },
    {
        id: 3,
        title: "A life-changing health routine, built for your microbiome.",
        subtitle: "Transform your gut health, energy, sleep, and nutrition with formulations designed for real results.",
        image: "https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/library/hero/product_catalog_desktop.png",
        hasVideo: false,
    }
];

export function Hero() {
    return (
        <section className="relative h-screen w-full bg-seed-dark-green text-seed-mist overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    modifierClass: 'hero-pagination-',
                    bulletClass: 'hero-bullet',
                    bulletActiveClass: 'hero-bullet-active',
                }}
                className="h-full w-full"
            >
                {SLIDES.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative h-full w-full">
                        {/* Background */}
                        <div className="absolute inset-0 z-0">
                            {/* Use clear images for all slides for MVP stability, unless we handle video perfectly */}
                            <img
                                src={slide.image}
                                alt="Hero Background"
                                className="h-full w-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-black/20" /> {/* Overlay for text readability */}
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 max-w-[1440px] mx-auto pt-20">
                            <div className="max-w-2xl space-y-6 animate-fade-in-up">
                                <span className="inline-block bg-seed-green/20 backdrop-blur-md border border-seed-mist/20 text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full">
                                    New
                                </span>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl md:max-w-lg text-seed-mist/90 leading-relaxed">
                                    {slide.subtitle}
                                </p>
                                <div className="pt-4">
                                    <Link
                                        href="/products"
                                        className="group inline-flex items-center gap-2 bg-seed-mist text-seed-green px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-white transition-all transform hover:scale-105"
                                    >
                                        Shop Now
                                        <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.5 0L11 5.5L5.5 11L4.406 9.906L8.037 6.274H0V4.726H8.037L4.406 1.094L5.5 0Z" fill="currentColor" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Styles for Pagination */}
            <style jsx global>{`
        .hero-bullet {
          display: block;
          width: 8px;
          height: 8px;
          margin: 8px 0 !important;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .hero-bullet-active {
          background: #ffffff;
          transform: scale(1.2);
        }
        .hero-pagination-horizontal {
          position: absolute;
          right: 30px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          display: flex; /* Override default block if needed, but for vertical dots we want block/flex-col */
          flex-direction: column;
          gap: 12px;
        }
        /* Mobile Pagination */
        @media (max-width: 768px) {
          .hero-pagination-horizontal {
            right: auto;
            left: 50%;
            bottom: 30px;
            top: auto;
            transform: translateX(-50%);
            flex-direction: row;
          }
           .hero-bullet {
             margin: 0 6px !important;
           }
        }
      `}</style>
        </section>
    );
}
