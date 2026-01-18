import React from 'react';
import Link from 'next/link';

const PRODUCTS = [
    {
        id: 'ds-01',
        name: 'DS-01®',
        shortName: 'DS-01',
        label: 'Daily Synbiotic',
        tag: 'Bestseller',
        tagColor: 'text-seed-green bg-[#E6F3E6]', // Approximated
        video: 'https://res.cloudinary.com/dljz0lko8/video/upload/v1755780716/library/carousel/Seed_DS01_Jar_1080-web_hd_720p.mov',
        poster: 'https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1762362135/library/carousel/ds01-carousel-poster.png',
        price: '$49.99',
        link: '/daily-synbiotic',
        color: 'seed-green',
    },
    {
        id: 'dm-02',
        name: 'DM-02™',
        shortName: 'DM-02',
        label: 'Daily Multivitamin',
        tag: 'New',
        tagColor: 'text-[#004e6c] bg-[#e6f4f9]', // multivitamin primary
        video: 'https://res.cloudinary.com/dljz0lko8/video/upload/v1758201890/library/carousel/dm02clipped-mov_hd_720p_small.mov',
        poster: 'https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1762362131/library/carousel/dm02-carousel-poster.png',
        price: '$39.99',
        link: '/daily-multivitamin',
        color: '[#004e6c]',
    },
    {
        id: 'am-02',
        name: 'AM-02™',
        shortName: 'AM-02',
        label: 'Energy + Focus',
        tag: 'New',
        tagColor: 'text-[#c25e00] bg-[#fff0e0]', // am primary
        video: 'https://res.cloudinary.com/dljz0lko8/video/upload/v1758201889/library/carousel/am02clipped-mov_hd_720p_small.mov',
        poster: 'https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1762362130/library/carousel/am02-carousel-poster.png',
        price: '$34.99',
        link: '/energy-focus',
        color: '[#c25e00]',
    },
    {
        id: 'pm-02',
        name: 'PM-02™',
        shortName: 'PM-02',
        label: 'Sleep + Restore',
        tag: 'New',
        tagColor: 'text-[#4a2e8c] bg-[#f0eaff]', // pm primary
        video: 'https://res.cloudinary.com/dljz0lko8/video/upload/v1758201889/library/carousel/pm02clipped-mov_hd_720p_small.mov',
        poster: 'https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/v1762362130/library/carousel/pm02-carousel-poster.png',
        price: '$34.99',
        link: '/sleep-restore',
        color: '[#4a2e8c]',
    },
];

export function ProductCarousel() {
    return (
        <section className="bg-seed-green py-20 px-4 md:px-6">
            <div className="max-w-[1440px] mx-auto text-seed-mist mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                    Whole body health starts in the gut.
                </h2>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <p className="max-w-xl text-lg opacity-90 leading-relaxed">
                        Formulations that provide fast-acting and sustained support using scientifically and clinically studied ingredients.
                    </p>
                    <Link
                        href="/products"
                        className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-wide hover:opacity-70 transition-opacity"
                    >
                        Shop all
                        <svg className="w-2.5 h-2.5 transition-transform group-hover:translate-x-1" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.5 0L11 5.5L5.5 11L4.406 9.906L8.037 6.274H0V4.726H8.037L4.406 1.094L5.5 0Z" fill="currentColor" />
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {PRODUCTS.map((product) => (
                    <Link
                        key={product.id}
                        href={product.link}
                        className="group relative block bg-white rounded-xl overflow-hidden aspect-[3/4] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                    >
                        {/* Tag */}
                        <span className={`absolute top-4 left-4 z-20 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm ${product.tagColor}`}>
                            {product.tag}
                        </span>

                        {/* Video Background */}
                        <div className="absolute inset-0 z-0 bg-gray-100">
                            <video
                                src={product.video}
                                poster={product.poster}
                                playsInline
                                loop
                                muted
                                autoPlay
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 z-10 transition-opacity group-hover:opacity-80" />

                        {/* Content Top */}
                        <div className="absolute top-4 right-4 text-right z-20">
                            <h3 className="text-seed-mist font-medium text-lg md:text-xl">
                                {product.name}
                            </h3>
                            <p className="text-seed-mist/80 text-xs uppercase tracking-wide">
                                {product.label}
                            </p>
                        </div>

                        {/* Content Bottom (On Hover) */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <button className="w-full bg-seed-mist text-seed-green py-3 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-white mb-3">
                                Shop Now
                            </button>
                            <p className="text-center text-xs text-seed-mist/90">
                                Starting at {product.price} per month
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
