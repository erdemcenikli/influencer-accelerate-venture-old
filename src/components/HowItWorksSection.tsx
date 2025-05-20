import { useEffect, useRef } from 'react';
import { Users, Palette, Award } from 'lucide-react';

interface StepCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  step: number;
  delay: number;
}

const StepCard = ({ title, description, icon, step, delay }: StepCardProps) => {
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
      className="beauty-card opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center text-white">
            {icon}
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Step {step}</span>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const HowItWorksSection = () => {
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
    <section id="how-it-works" className="py-20">
      <div className="section-container">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="chip mb-4">The Process</div>
          <h2 className="text-3xl md:text-4xl font-bold">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined approach transforms creators into brand owners through a simple 3-step process
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <StepCard
            title="Partner"
            description="Join our exclusive pool of beauty creators with a vision for innovative products that resonate with your audience."
            icon={<Users className="h-6 w-6" />}
            step={1}
            delay={0}
          />
          
          <StepCard
            title="Create"
            description="Develop products that reflect your vision and audience needs with our full operational support and manufacturing expertise."
            icon={<Palette className="h-6 w-6" />}
            step={2}
            delay={200}
          />
          
          <StepCard
            title="Own"
            description="Build real equity in a brand you helped create with long-term value and ongoing revenue beyond one-time promotions."
            icon={<Award className="h-6 w-6" />}
            step={3}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
