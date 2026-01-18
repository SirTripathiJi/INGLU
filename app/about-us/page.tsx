import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/components/inglu/about/AboutHero';
import { AboutStats } from '@/components/inglu/about/AboutStats';
import { VisionMission } from '@/components/inglu/about/VisionMission';

export const metadata = {
    title: 'About Us | INGLU Global',
    description: 'Empowering You to Communicate Fluently and Fearlessly. We are India\'s biggest global youth community.',
};

export default function AboutPage() {
    return (
        <main className="bg-[#27005D] min-h-screen text-white">
            <Navbar />
            <AboutHero />
            <AboutStats />
            <VisionMission />
            <Footer />
        </main>
    );
}
