import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const AboutUsSection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="section-container">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="chip mb-4">Our Vision</div>
          <h2 className="text-3xl md:text-4xl font-bold">
            About Us
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="beauty-card border-none bg-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4 beauty-gradient-text">We're building the future of creator-owned beauty brands</h3>
            <p className="text-muted-foreground mb-6">
              We believe creators deserve more than just promotional deals. Our mission is to transform the beauty industry by partnering with influential creators to build brands they actually own and control.
            </p>
            <p className="text-muted-foreground mb-6">
              Unlike traditional collaborations that offer one-time payments and limited creative input, we provide the operational infrastructure, manufacturing expertise, and business development support to help creators build sustainable beauty brands with long-term value.
            </p>
            <p className="text-muted-foreground">
              Our team brings decades of experience in beauty product development, supply chain management, and brand building to help our partners create products that truly resonate with their audiences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="relative rounded-xl overflow-hidden h-[280px]">
              <img 
                src="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png" 
                alt="Team member working on product development" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-[280px]">
              <img 
                src="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png" 
                alt="Beauty product manufacturing process" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-[280px]">
              <img 
                src="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png" 
                alt="Team brainstorming session" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-[280px]">
              <img 
                src="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png" 
                alt="Beauty product packaging design" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
