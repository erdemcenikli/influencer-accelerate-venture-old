
import { ArrowUp } from 'lucide-react';

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 bg-background">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#" className="flex items-center space-x-2">
              <span className="font-bold text-lg tracking-tight">Accelerate</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Transforming influencers into entrepreneurs.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div>
              <h4 className="font-medium mb-3">Program</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#program" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a 
                    href="#benefits" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Benefits
                  </a>
                </li>
                <li>
                  <a 
                    href="#who" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Ideal Candidates
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="hidden md:flex h-10 w-10 rounded-full bg-secondary items-center justify-center hover:bg-secondary/80 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Accelerate. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
