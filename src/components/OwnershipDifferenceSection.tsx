import { useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';

const OwnershipDifferenceSection = () => {
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
    <section className="py-20 bg-secondary/10">
      <div className="section-container">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="chip mb-4">The Difference</div>
          <h2 className="text-3xl md:text-4xl font-bold">
            The Ownership Difference
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare traditional influencer collaborations with our ownership model
          </p>
        </div>
        
        <div className="comparison-table">
          {/* Traditional Collaborations Column */}
          <div className="flex flex-col">
            <div className="comparison-table-header bg-secondary/20 text-foreground">
              Traditional Collabs
            </div>
            
            <div className="beauty-card mb-2 border-secondary/10">
              <div className="comparison-table-cell">
                <X className="h-5 w-5 text-accent" />
                <span>One-time payment</span>
              </div>
            </div>
            
            <div className="beauty-card mb-2 border-secondary/10">
              <div className="comparison-table-cell">
                <X className="h-5 w-5 text-accent" />
                <span>Limited creative input</span>
              </div>
            </div>
            
            <div className="beauty-card mb-2 border-secondary/10">
              <div className="comparison-table-cell">
                <X className="h-5 w-5 text-accent" />
                <span>No ownership stake</span>
              </div>
            </div>
            
            <div className="beauty-card mb-2 border-secondary/10">
              <div className="comparison-table-cell">
                <X className="h-5 w-5 text-accent" />
                <span>Short-term relationship</span>
              </div>
            </div>
            
            <div className="beauty-card border-secondary/10">
              <div className="comparison-table-cell">
                <X className="h-5 w-5 text-accent" />
                <span>Minimal decision-making power</span>
              </div>
            </div>
          </div>
          
          {/* Our Partnership Column */}
          <div className="flex flex-col">
            <div className="comparison-table-header bg-primary text-white">
              Our Partnership
            </div>
            
            <div className="beauty-card mb-2 border-primary/10">
              <div className="comparison-table-cell">
                <Check className="h-5 w-5 text-primary" />
                <span>True ownership with equity</span>
              </div>
            </div>
            
            <div className="beauty-card mb-2 border-primary/10">
              <div className="comparison-table-cell">
                <Check className="h-5 w-5 text-primary" />
                <span>Complete creative control</span>
              </div>
            </div>
            
            <div className="beauty-card mb-2 border-primary/10">
              <div className="comparison-table-cell">
                <Check className="h-5 w-5 text-primary" />
                <span>Long-term value creation</span>
              </div>
            </div>
            
            <div className="beauty-card mb-2 border-primary/10">
              <div className="comparison-table-cell">
                <Check className="h-5 w-5 text-primary" />
                <span>Ongoing revenue streams</span>
              </div>
            </div>
            
            <div className="beauty-card border-primary/10">
              <div className="comparison-table-cell">
                <Check className="h-5 w-5 text-primary" />
                <span>Full brand development support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnershipDifferenceSection;
