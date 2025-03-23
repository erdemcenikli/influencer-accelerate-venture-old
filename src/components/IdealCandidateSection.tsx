import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const IdealCandidateSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          sectionObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'scale-95');
          imageObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
    
    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section id="who" className="py-20">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className="relative h-[500px] opacity-0 scale-95 transition-all duration-1000"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-elevation">
              <img 
                src="/lovable-uploads/42792f16-1e73-4163-bcd6-1bcc8f38f74f.png" 
                alt="Group of influencers taking photos with city skyline in background" 
                className="w-full h-full object-cover"
                loading="lazy"
                onLoad={(e) => {
                  e.currentTarget.classList.remove('image-blur-loading');
                  e.currentTarget.classList.add('image-blur-loaded');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 p-6 glass-card rounded-xl max-w-[280px]">
              <h4 className="font-medium mb-2">Join a community of leaders</h4>
              <p className="text-sm text-muted-foreground">Connect with other ambitious creators building their empires</p>
            </div>
          </div>
          
          <div 
            ref={sectionRef}
            className="opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="chip mb-4">Who We're Looking For</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Are You the Next Big Influencer?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're seeking ambitious creators who are ready to transform their influence into a scalable business. Our ideal candidates have:
            </p>
            
            <ul className="space-y-4">
              {[
                "A growing audience with consistent engagement",
                "A unique personal brand or clearly defined niche",
                "Demonstration of content quality and creativity",
                "Strong work ethic and entrepreneurial mindset",
                "Willingness to learn and adapt to business strategies",
                "Clear vision for scaling beyond just content creation"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-primary rounded-full p-1 text-primary-foreground">
                    <Check className="h-3 w-3" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 rounded-lg bg-secondary/50 text-muted-foreground">
              <p className="text-sm">
                We don't just look at follower count. We're interested in creators who demonstrate potential, passion, and a genuine connection with their audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdealCandidateSection;
