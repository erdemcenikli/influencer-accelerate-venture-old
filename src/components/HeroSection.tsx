import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
        <div className="abstract-shape w-[500px] h-[500px] bg-secondary/50 top-[-100px] right-[-100px]"></div>
        <div className="abstract-shape w-[300px] h-[300px] bg-accent/30 bottom-[10%] left-[5%]"></div>
        <div className="abstract-shape w-[400px] h-[400px] bg-primary/40 top-[30%] right-[15%]"></div>
      </div>
      
      <div className="section-container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div 
          ref={heroRef} 
          className="flex flex-col space-y-8 transition-all duration-1000 opacity-0 translate-y-6"
        >
          <div>
            <div className="chip mb-4 bg-white/20 text-white">Beauty Brand Partnership in Bali</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white uppercase">
              BUILD A BEAUTY BRAND YOU ACTUALLY OWN
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90">
              Join our collective of creators in beautiful Bali to transform beauty through shared ownership
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="button-hover-effect text-base bg-accent hover:bg-accent/90 text-white"
              onClick={handleApplyClick}
            >
              Apply to Partner
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base border-white/30 text-white hover:bg-white/10"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})}
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="relative h-[500px] md:h-[600px] animate-fade-in">
          {/* Product silhouettes collage */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
            <div className="absolute inset-0 grid grid-cols-2 gap-2 p-4">
              <div className="relative rounded-lg overflow-hidden h-[280px]">
                <img 
                  src="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png" 
                  alt="Beauty product - Glazing Milk" 
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <h4 className="text-white font-medium text-sm">Glazing Milk</h4>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden h-[280px]">
                <img 
                  src="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png" 
                  alt="Beauty product - Peptide Lip Tint" 
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <h4 className="text-white font-medium text-sm">Peptide Lip Tint</h4>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden h-[280px]">
                <img 
                  src="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png" 
                  alt="Beauty product - Barrier Restore Cream" 
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <h4 className="text-white font-medium text-sm">Barrier Restore Cream</h4>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden h-[280px]">
                <img 
                  src="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png" 
                  alt="Beauty product - Pocket Blush" 
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <h4 className="text-white font-medium text-sm">Pocket Blush</h4>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-xl animate-fade-up bg-white/20 backdrop-blur-md border border-white/30" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-full text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium mb-1 text-white">True Ownership, Not Just Promotion</h4>
                <p className="text-sm text-white/80">Build equity in a brand you helped create with full creative control</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
