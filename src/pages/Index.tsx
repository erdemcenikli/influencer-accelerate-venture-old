import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProgramSection from '@/components/ProgramSection';
import BenefitsSection from '@/components/BenefitsSection';
import IdealCandidateSection from '@/components/IdealCandidateSection';
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
    trackViewContent('home-page', 'ViralRise Influencer Accelerator', 50);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <ProgramSection />
        <BenefitsSection />
        <IdealCandidateSection />
        <ApplicationSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
