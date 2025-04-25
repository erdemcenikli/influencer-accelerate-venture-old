import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CaseStudiesSection = () => {
  const sectionRef = useRef(null);
  
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const caseStudies = [
    {
      title: "Beauty Brand Market Entry",
      description: "Helped a European skincare brand enter the Southeast Asian market with 200+ nano-influencers in Bali and Jakarta",
      metrics: [
        { label: "Engagement Rate", value: "8.5%" },
        { label: "Sales Increase", value: "32%" },
        { label: "ROI", value: "4.2x" }
      ],
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Food Distributor Expansion",
      description: "Connected a specialty food distributor with local food bloggers and content creators to introduce new products",
      metrics: [
        { label: "Store Pickups", value: "+45" },
        { label: "Content Created", value: "350+" },
        { label: "Brand Awareness", value: "+28%" }
      ],
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="case-studies" className="py-20">
      <div 
        ref={sectionRef}
        className="section-container transition-all duration-1000 opacity-0 translate-y-6"
      >
        <div className="text-center mb-16">
          <div className="chip mb-4">Success Stories</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Real Results for Real Brands</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how we've helped brands, distributors, and manufacturers expand into new markets and achieve measurable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{study.title}</h3>
                <p className="text-muted-foreground mb-6">{study.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="text-center p-3 bg-slate-50 rounded-lg">
                      <div className="text-xl font-bold text-primary">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full">
                  View Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="button-hover-effect">
            See More Success Stories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
