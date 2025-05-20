import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Send, Check } from 'lucide-react';
import { useEffect, useState } from "react";
import { identifyUser, trackClickButton, trackSubmitForm } from "@/utils/tikTokEvents";

const ApplicationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    socialHandles: "",
    followerCount: "",
    beautyNiche: "",
    vision: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfWHt-hs-SgoZ_16LiglpnTF6xBSswU2QfaK664_w08EZOwww/viewform?usp=sharing";
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Track button click
    trackClickButton('apply-partner-btn', 'Apply to Partner Button - Main Page');
    
    // If user entered email, identify them first (hashed on client side)
    if (formData.email && formData.email.includes('@')) {
      identifyUser(formData.email);
    }
    
    // Track form submission
    trackSubmitForm('application-form', 'Beauty Brand Partnership Application Form', 100);
    
    // Simulate form submission - in production this would send to your backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Could also redirect to Google Form with prefilled data if needed
      // window.open(googleFormLink, '_blank');
    }, 1500);
  };

  return (
    <section id="apply" className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="chip mb-4">Join Us in Bali</div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Join Our Creator Collective in Paradise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to build a beauty brand you actually own while enjoying the beauty of Bali? Apply below to start your journey.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="beauty-card text-center py-12">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Application Received!</h3>
              <p className="text-muted-foreground mb-6">Thank you for your interest in partnering with us. Our team will review your application and reach out to you soon.</p>
              <Button 
                variant="outline" 
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another Application
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="beauty-card">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="socialHandles" className="text-sm font-medium">Social Media Handles</label>
                  <input
                    type="text"
                    id="socialHandles"
                    name="socialHandles"
                    value={formData.socialHandles}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="@yourusername (Instagram, TikTok, etc.)"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="followerCount" className="text-sm font-medium">Follower Count</label>
                  <select
                    id="followerCount"
                    name="followerCount"
                    value={formData.followerCount}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="">Select your audience size</option>
                    <option value="10k-50k">10K - 50K</option>
                    <option value="50k-100k">50K - 100K</option>
                    <option value="100k-500k">100K - 500K</option>
                    <option value="500k-1M">500K - 1M</option>
                    <option value="1M+">1M+</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="beautyNiche" className="text-sm font-medium">Beauty Niche/Expertise</label>
                  <input
                    type="text"
                    id="beautyNiche"
                    name="beautyNiche"
                    value={formData.beautyNiche}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Skincare, Makeup, Haircare, etc."
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="vision" className="text-sm font-medium">Your Vision for Beauty Products</label>
                  <textarea
                    id="vision"
                    name="vision"
                    value={formData.vision}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Tell us about the beauty products you'd like to create..."
                  />
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  By applying, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="button-hover-effect bg-accent hover:bg-accent/90 text-white"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Submit Application
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
