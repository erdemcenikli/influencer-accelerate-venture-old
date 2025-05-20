import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Palette, Truck, Users, TrendingUp, Sparkles } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  delay: number;
}

const BenefitCard = ({ title, description, icon, delay }: BenefitCardProps) => {
  const cardRef = useRef(null);
  
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
  const sectionRef = useRef(null);
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

  return (
    <section id="benefits" className="py-20 bg-primary/5">
      <div className="section-container">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="chip mb-4">Partner Benefits</div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Partner With Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to build a successful beauty brand you actually own
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitCard
            title="Creative Freedom"
            description="Bring your unique vision to life with full creative control over product development, branding, and marketing."
            icon={<Palette className="h-6 w-6" />}
            delay={0}
          />
          
          <BenefitCard
            title="Operational Support"
            description="We handle manufacturing, logistics, and operations so you can focus on creating and connecting with your audience."
            icon={<Truck className="h-6 w-6" />}
            delay={100}
          />
          
          <BenefitCard
            title="Collective Expertise"
            description="Join forces with other influential creators and leverage our team's industry experience and connections."
            icon={<Users className="h-6 w-6" />}
            delay={200}
          />
          
          <BenefitCard
            title="Long-term Value"
            description="Build equity in a growing beauty brand with sustainable revenue streams beyond one-time promotional deals."
            icon={<TrendingUp className="h-6 w-6" />}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
