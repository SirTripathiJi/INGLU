import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Section Components
import { Hero } from '@/components/inglu/Hero';
import { E3Flow } from '@/components/inglu/E3Flow';
import { TrustTicker } from '@/components/inglu/TrustTicker';
import { ImpactMetrics } from '@/components/inglu/ImpactMetrics';
import { EcosystemGrid } from '@/components/inglu/EcosystemGrid';
import { CommunityTestimonials } from '@/components/inglu/CommunityTestimonials';
import { ContactForm } from '@/components/inglu/ContactForm';

export const metadata: Metadata = {
  title: 'INGLU Global • Fastest Growing Global Youth Community',
  description: 'Experience = Education + Enhancement + Entertainment',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#27005D] selection:bg-[#6F00FF] selection:text-white">
      <Navbar />

      {/* 1. Hero: What Is INGLU + Core Positioning */}
      <Hero />

      {/* 2. Core Philosophy: E3 Model */}
      <E3Flow />

      {/* 3. Brands & Partners */}
      <TrustTicker />

      {/* 4. Impact Metrics */}
      <ImpactMetrics />

      {/* 5. Our Segments */}
      <EcosystemGrid />

      {/* 6. Testimonials */}
      <CommunityTestimonials />

      {/* 7. Contact / Lead Form */}
      <ContactForm />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
