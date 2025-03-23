import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef(null);
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfWHt-hs-SgoZ_16LiglpnTF6xBSswU2QfaK664_w08EZOwww/viewform?usp=sharing";
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-6');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  const handleApplyClick = () => {
    window.open(googleFormLink, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background styling */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-secondary/50 to-transparent opacity-50" />
      </div>
      
      <div className="section-container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div 
          ref={heroRef} 
          className="flex flex-col space-y-6 transition-all duration-1000 opacity-0 translate-y-6"
        >
          <div>
            <div className="chip mb-4">6-month influencer accelerator</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Launch Your Influencer Empire in Just 6 Months
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Get $80k, premium products, and expert guidance to scale your personal brand—all for a 10% stake in your success.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="button-hover-effect text-base"
              onClick={handleApplyClick}
            >
              Apply Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base"
              onClick={() => document.getElementById('program')?.scrollIntoView({behavior: 'smooth'})}
            >
              Learn More
            </Button>
          </div>
          
          <div className="pt-4 flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex flex-col items-center px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-border">
              <span className="font-semibold text-foreground">$80k</span>
              <span>Investment</span>
            </div>
            <div className="flex flex-col items-center px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-border">
              <span className="font-semibold text-foreground">6 months</span>
              <span>Program</span>
            </div>
            <div className="flex flex-col items-center px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-border">
              <span className="font-semibold text-foreground">10%</span>
              <span>Equity</span>
            </div>
          </div>
        </div>
        
        <div className="relative h-[500px] md:h-[600px] animate-fade-in">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img 
              src="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png" 
              alt="Group of glamorous influencers in front of city skyline at night" 
              className="w-full h-full object-cover rounded-2xl transition-all duration-700 ease-in-out hover:scale-105"
              loading="lazy"
              onLoad={(e) => {
                e.currentTarget.classList.remove('image-blur-loading');
                e.currentTarget.classList.add('image-blur-loaded');
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          
          <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 12L10 8V16L16 12Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium mb-1">Go from creator to entrepreneur</h4>
                <p className="text-sm text-muted-foreground">Our structured program transforms your content into a scalable business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
