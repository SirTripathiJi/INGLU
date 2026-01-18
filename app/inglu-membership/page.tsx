import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MembershipHero } from '@/components/inglu/membership/MembershipHero';
import { MembershipIntro } from '@/components/inglu/membership/MembershipIntro';
import { MembershipBenefitsList } from '@/components/inglu/membership/MembershipBenefitsList';
import { PricingPlans } from '@/components/inglu/membership/PricingPlans';

export const metadata = {
    title: 'Membership | INGLU Global',
    description: 'Join the Biggest Youth Army. Unlock premium experiences, rewards, and a vibrant community.',
};

export default function MembershipPage() {
    return (
        <main className="bg-[#27005D] min-h-screen text-white">
            <Navbar />
            <MembershipHero />
            <MembershipIntro />
            <MembershipBenefitsList />
            <PricingPlans />
            <Footer />
        </main>
    );
}
