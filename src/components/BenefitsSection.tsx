
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, DollarSign, Users, Lightbulb, Target, Trophy } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  delay: number;
}

const BenefitCard = ({ title, description, icon, delay }: BenefitCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="glass-card p-6 rounded-xl opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="flex flex-col h-full">
        <div className="bg-secondary h-12 w-12 rounded-lg mb-4 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground flex-grow">{description}</p>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfWHt-hs-SgoZ_16LiglpnTF6xBSswU2QfaK664_w08EZOwww/viewform?usp=sharing";
  
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

  const handleApplyClick = () => {
    window.open(googleFormLink, '_blank');
  };

  return (
    <section id="benefits" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="chip mb-4">Benefits</div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Join Our Accelerator?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to transform your influence into a sustainable, scalable business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BenefitCard
            title="Capital Investment"
            description="Receive $80,000 in funding to accelerate your growth without the stress of bootstrapping your business."
            icon={<DollarSign className="h-6 w-6" />}
            delay={0}
          />
          
          <BenefitCard
            title="Product Supply"
            description="We provide all the products you need for your content creation, eliminating upfront costs and logistical challenges."
            icon={<Target className="h-6 w-6" />}
            delay={100}
          />
          
          <BenefitCard
            title="Expert Mentorship"
            description="Learn from seasoned entrepreneurs and industry leaders who have successfully scaled creator businesses."
            icon={<Lightbulb className="h-6 w-6" />}
            delay={200}
          />
          
          <BenefitCard
            title="Network Access"
            description="Tap into our extensive network of investors, brands, and fellow creators for collaboration opportunities and future funding."
            icon={<Users className="h-6 w-6" />}
            delay={300}
          />
          
          <BenefitCard
            title="Business Development"
            description="Transform your personal brand into a structured business with multiple revenue streams and scalable operations."
            icon={<Trophy className="h-6 w-6" />}
            delay={400}
          />
          
          <BenefitCard
            title="Long-term Partnership"
            description="Our 10% equity stake means we're invested in your long-term success, providing ongoing support well beyond the program."
            icon={<ArrowRight className="h-6 w-6" />}
            delay={500}
          />
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="button-hover-effect"
            onClick={handleApplyClick}
          >
            Apply Now
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
