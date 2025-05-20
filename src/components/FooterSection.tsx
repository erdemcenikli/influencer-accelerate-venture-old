import { ArrowUp, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 bg-primary/5">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0 md:max-w-xs">
            <a href="#" className="flex items-center space-x-2">
              <span className="font-bold text-lg tracking-tight beauty-gradient-text">ViralRise</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Building the future of creator-owned beauty brands through genuine partnerships and shared ownership.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 w-full md:w-auto">
            <div>
              <h4 className="font-medium mb-3 text-primary">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#how-it-works" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a 
                    href="#benefits" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Benefits
                  </a>
                </li>
                <li>
                  <a 
                    href="#products" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#apply" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Apply
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-primary">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-primary">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:partners@viralrise.co" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    partners@viralrise.co
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+1-800-555-0123" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (800) 555-0123
                  </a>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">
                    123 Beauty Lane<br />
                    Suite 500<br />
                    Los Angeles, CA 90210
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="hidden md:flex h-10 w-10 rounded-full bg-primary/10 items-center justify-center hover:bg-primary/20 transition-colors text-primary mt-8 md:mt-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ViralRise. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
            <span className="text-xs text-muted-foreground">Cookie Settings</span>
            <span className="text-xs text-muted-foreground">Do Not Sell My Information</span>
            <span className="text-xs text-muted-foreground">California Privacy Rights</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
