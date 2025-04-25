import React, { useEffect } from "react";
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import HeroPartnershipSection from "@/components/partnership/HeroPartnershipSection";
import BenefitsPartnershipSection from "@/components/partnership/BenefitsPartnershipSection";
import CaseStudiesSection from "@/components/partnership/CaseStudiesSection";
import ContactSection from "@/components/partnership/ContactSection";
import { Helmet } from "react-helmet";
import { trackViewContent } from "@/utils/tikTokEvents";

const Partnership = () => {
  useEffect(() => {
    // Track page view when component mounts
    trackViewContent('partnership-page', 'Brand Partnerships with ViralRise', 30);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Brand Partnerships | ViralRise</title>
        <meta name="description" content="Partner with ViralRise to expand your brand into new markets with authentic nano-influencer marketing. Perfect for brands, distributors, and manufacturers." />
      </Helmet>
      <Navbar />
      <main>
        <HeroPartnershipSection />
        <BenefitsPartnershipSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Partnership;
