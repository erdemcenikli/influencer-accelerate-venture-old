import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

const HeroPartnershipSection = () => {
  const heroRef = useRef(null);
  
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

  const handleContactClick = () => {
    // You can replace this with your actual contact form or email
    window.location.href = "mailto:partnerships@viralrise.co";
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background styling */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-blue-100/50 to-transparent opacity-50" />
      </div>
      
      <div className="section-container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div 
          ref={heroRef} 
          className="flex flex-col space-y-6 transition-all duration-1000 opacity-0 translate-y-6"
        >
          <div>
            <div className="chip mb-4">Brand & Distributor Partnerships</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Expand Your Brand with Authentic Nano-Influencer Marketing
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              ViralRise connects brands, distributors, and manufacturers with authentic nano-influencers to unlock new markets with measurable, cost-effective campaigns.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="button-hover-effect text-base"
              onClick={handleContactClick}
            >
              Partner With Us
              <Mail className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base"
              onClick={() => document.getElementById('benefits')?.scrollIntoView({behavior: 'smooth'})}
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="pt-4 flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex flex-col items-center px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-border">
              <span className="font-semibold text-foreground">10x</span>
              <span>Engagement</span>
            </div>
            <div className="flex flex-col items-center px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-border">
              <span className="font-semibold text-foreground">Local</span>
              <span>Authenticity</span>
            </div>
            <div className="flex flex-col items-center px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-border">
              <span className="font-semibold text-foreground">Data</span>
              <span>Driven</span>
            </div>
            <div className="flex flex-col items-center px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-border">
              <span className="font-semibold text-foreground">Global</span>
              <span>Network</span>
            </div>
          </div>
        </div>
        
        <div className="relative h-[500px] md:h-[600px] animate-fade-in">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
              alt="Brand partnership with influencers" 
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
                <h4 className="font-medium mb-1">Unlock new markets</h4>
                <p className="text-sm text-muted-foreground">Leverage our network of authentic nano-influencers to enter and grow in new markets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPartnershipSection;
