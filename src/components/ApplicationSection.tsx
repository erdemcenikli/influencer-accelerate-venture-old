
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';

const ApplicationSection = () => {
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfWHt-hs-SgoZ_16LiglpnTF6xBSswU2QfaK664_w08EZOwww/viewform?usp=sharing";
  
  const handleApplyClick = () => {
    window.open(googleFormLink, '_blank');
  };

  return (
    <section id="apply" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="chip mb-4">Apply Now</div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Start Your Influencer Journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to take your influence to the next level? Click the button below to apply through our application form.
          </p>
        </div>
        
        <div className="max-w-md mx-auto text-center">
          <Button 
            onClick={handleApplyClick}
            size="lg"
            className="button-hover-effect w-full sm:w-auto"
          >
            Apply Now
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          
          <p className="mt-6 text-sm text-muted-foreground">
            By applying, you agree to our Terms of Service and Privacy Policy. We're excited to learn more about you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
