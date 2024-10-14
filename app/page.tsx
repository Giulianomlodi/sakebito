'use client'

import HeroSection from "@/components/layout/HomePage/HeroSection";
import FullwidthBanner from "@/components/layout/HomePage/FullwidthBanner";
import PartnerSection from "@/components/layout/HomePage/PartnerSection";
import CarouselPartner from "@/components/layout/HomePage/CarouselPartner";
import MembershipSection from "@/components/layout/HomePage/MembershipSection";
import FullwidthBanner2 from "@/components/layout/HomePage/FullwidthBanner2";

export default function Home() {
  return (
    <div className="min-h-screen p-0 font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <FullwidthBanner />
      <PartnerSection />
      <CarouselPartner />
      <MembershipSection />
      <FullwidthBanner2 />
    </div>
  );
}