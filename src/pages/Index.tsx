import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import OwnershipDifferenceSection from '@/components/OwnershipDifferenceSection';
import ProductCategoriesSection from '@/components/ProductCategoriesSection';
import BenefitsSection from '@/components/BenefitsSection';
import AboutUsSection from '@/components/AboutUsSection';
import ApplicationSection from '@/components/ApplicationSection';
import FooterSection from '@/components/FooterSection';
import { trackViewContent } from "@/utils/tikTokEvents";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Track page view when component mounts
    trackViewContent('home-page', 'Beauty Brand Partnership Platform', 50);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <OwnershipDifferenceSection />
        <ProductCategoriesSection id="products" />
        <BenefitsSection />
        <AboutUsSection />
        <ApplicationSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
