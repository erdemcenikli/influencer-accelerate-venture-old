
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  title: string;
  duration: string;
  description: string;
  icon: JSX.Element;
  position: 'left' | 'right' | 'center';
  delay: number;
}

const TimelineItem = ({ title, duration, description, icon, position, delay }: TimelineItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
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

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) observer.unobserve(itemRef.current);
    };
  }, [delay]);

  return (
    <div 
      ref={itemRef}
      className={cn(
        "relative flex md:items-center opacity-0 translate-y-10 transition-all duration-700",
        position === 'left' ? 'md:justify-end' : '',
        position === 'center' ? 'justify-center' : '',
        position === 'right' ? 'md:justify-start' : ''
      )}
    >
      <div className={cn(
        "z-10 md:w-[45%] p-6 glass-card rounded-xl relative",
        position === 'center' ? 'md:w-[60%]' : ''
      )}>
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-secondary flex-shrink-0">
            {icon}
          </div>
          <div>
            <div className="chip mb-2">{duration}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
      
      {position !== 'center' && (
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-secondary border-4 border-background" />
      )}
    </div>
  );
};

const ProgramSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <section id="program" className="py-20 relative">
      <div className="section-container">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="chip mb-4">The Process</div>
          <h2 className="text-3xl md:text-4xl font-bold">
            How It Works: Your 6-Month Journey to Influencer Stardom
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our structured program is designed to transform your influence into a scalable business through three distinct phases.
          </p>
        </div>
        
        <div className="relative py-10">
          {/* Timeline line */}
          <div className="timeline-line" />
          
          <div className="relative z-10 space-y-24">
            <TimelineItem
              title="Pre-Investment Phase"
              duration="Months 1-3"
              description="We work closely with you to define your brand identity, refine your content strategy, and develop your business model - all at no cost to you. You'll receive intensive coaching and gain access to our network of industry experts."
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>}
              position="left"
              delay={0}
            />
            
            <TimelineItem
              title="Investment Milestone"
              duration="Month 3"
              description="Upon successful completion of the pre-investment phase, we invest $80,000 in your business and provide all the products you need to accelerate your growth. In exchange, we take a 10% equity stake in your influencer business."
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>}
              position="right"
              delay={200}
            />
            
            <TimelineItem
              title="Post-Investment Phase"
              duration="Months 4-6"
              description="Focus on scaling your business with our continued support. We'll help you optimize your operations, expand your audience, and connect with potential investors to secure additional funding for your next growth stage."
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 20H6C4.93913 20 3.92172 19.5786 3.17157 18.8284C2.42143 18.0783 2 17.0609 2 16V8C2 6.93913 2.42143 5.92172 3.17157 5.17157C3.92172 4.42143 4.93913 4 6 4H18C19.0609 4 20.0783 4.42143 20.8284 5.17157C21.5786 5.92172 22 6.93913 22 8V13M15 14L18 17M18 17L21 14M18 17V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>}
              position="left"
              delay={400}
            />
            
            <TimelineItem
              title="Your Long-Term Success"
              duration="Beyond the Program"
              description="Even after the program ends, you'll remain part of our exclusive alumni network. We succeed when you succeed, and our 10% stake means we're committed to supporting your growth for the long term."
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>}
              position="center"
              delay={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
