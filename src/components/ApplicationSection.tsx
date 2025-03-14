
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight } from 'lucide-react';

const ApplicationSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    socialLinks: '',
    audience: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Application Received",
        description: "We'll review your application and get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        socialLinks: '',
        audience: '',
        message: ''
      });
    }, 1500);
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
            Ready to take your influence to the next level? Fill out the application below and we'll be in touch within 48 hours.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="bg-white/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="bg-white/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="socialLinks" className="text-sm font-medium">
                  Social Media Links
                </label>
                <Input
                  id="socialLinks"
                  name="socialLinks"
                  value={formData.socialLinks}
                  onChange={handleChange}
                  required
                  placeholder="Instagram, YouTube, TikTok, etc."
                  className="bg-white/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="audience" className="text-sm font-medium">
                  Audience Size & Platform
                </label>
                <Input
                  id="audience"
                  name="audience"
                  value={formData.audience}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 50K followers on Instagram"
                  className="bg-white/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Why do you want to join our accelerator?
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your goals and vision..."
                  className="bg-white/50 min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full button-hover-effect" 
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Application'}
                {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </div>
          
          <p className="mt-4 text-sm text-center text-muted-foreground">
            By submitting, you agree to our Terms of Service and Privacy Policy. We're excited to learn more about you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
