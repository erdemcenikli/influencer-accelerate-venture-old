import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const BenefitsPartnershipSection = () => {
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

  const benefits = [
    {
      title: "Authentic Local Reach",
      description: "Connect with audiences through trusted local voices who genuinely love your products",
      icon: "🌎"
    },
    {
      title: "Cost-Effective Campaigns",
      description: "Achieve higher engagement rates at a fraction of traditional advertising costs",
      icon: "💰"
    },
    {
      title: "Data-Driven Insights",
      description: "Make informed decisions with comprehensive analytics and performance metrics",
      icon: "📊"
    },
    {
      title: "Market Entry Strategy",
      description: "Leverage our expertise to navigate new markets with minimal risk",
      icon: "🚀"
    },
    {
      title: "Scalable Growth",
      description: "Start small and scale based on real results and market response",
      icon: "📈"
    },
    {
      title: "End-to-End Management",
      description: "From influencer selection to campaign execution and reporting",
      icon: "🔄"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-slate-50">
      <div 
        ref={sectionRef}
        className="section-container transition-all duration-1000 opacity-0 translate-y-6"
      >
        <div className="text-center mb-16">
          <div className="chip mb-4">Why Partner With ViralRise</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Unlock the Power of Authentic Influence</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our nano-influencer network delivers authentic engagement, targeted reach, and measurable results for brands looking to expand into new markets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-xl border border-border">
          <h3 className="text-2xl font-semibold mb-6 text-center">How We Outperform Traditional Marketing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-medium mb-4">Nano-Influencer Approach</h4>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <p>10x higher engagement rates than celebrity influencers</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <p>Authentic recommendations that audiences trust</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <p>Hyper-targeted to specific demographics and regions</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <p>Cost-effective with higher ROI than traditional ads</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-medium mb-4">Our Unique Approach</h4>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <p>Local market expertise in Southeast Asia and beyond</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <p>Comprehensive data analytics and performance tracking</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <p>Scalable campaigns that grow with your success</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <p>End-to-end campaign management and optimization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsPartnershipSection;
