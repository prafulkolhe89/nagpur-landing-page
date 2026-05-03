import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import PainSection from "@/components/sections/PainSection";
import SolutionSection from "@/components/sections/SolutionSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import VisualProofSection from "@/components/sections/VisualProofSection";
import PricingSection from "@/components/sections/PricingSection";
import EliteSection from "@/components/sections/EliteSection";
import TrustSection from "@/components/sections/TrustSection";
import ScarcitySection from "@/components/sections/ScarcitySection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import StickyWhatsAppCTA from "@/components/StickyWhatsAppCTA";

export default function LandingPage() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-background font-sans">
      <main className="flex-1">
        <HeroSection />
        <PainSection />
        <SolutionSection />
        <BeforeAfterSection />
        <VisualProofSection />
        <PricingSection />
        <EliteSection />
        <TrustSection />
        <ScarcitySection />
        <FinalCTASection />
      </main>
      <StickyWhatsAppCTA />
    </div>
  );
}
