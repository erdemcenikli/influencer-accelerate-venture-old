import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfWHt-hs-SgoZ_16LiglpnTF6xBSswU2QfaK664_w08EZOwww/viewform?usp=sharing";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleApplyClick = () => {
    window.open(googleFormLink, '_blank');
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-subtle py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg tracking-tight">ViralRise</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {isHomePage ? (
            <>
              <a href="#program" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Program
              </a>
              <a href="#benefits" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Benefits
              </a>
              <a href="#who" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Who We Want
              </a>
              <a href="#apply" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Apply
              </a>
            </>
          ) : (
            <>
              <Link to="/#program" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Program
              </Link>
              <Link to="/#benefits" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Benefits
              </Link>
              <Link to="/#who" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Who We Want
              </Link>
              <Link to="/#apply" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Apply
              </Link>
            </>
          )}
          <Link to="/partnership" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Partnership
          </Link>
          <Link to="/hackathon" className={cn(
            "text-sm font-medium transition-colors",
            location.pathname === "/hackathon" 
              ? "text-purple-700 font-semibold" 
              : "text-purple-600 hover:text-purple-700"
          )}>
            Hackathon
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          {location.pathname !== "/hackathon" && (
            <Link 
              to="/hackathon" 
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md shadow-sm hover:shadow-md transition-all duration-300"
            >
              Hackathon Competition
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          )}
          
          <Button 
            variant="default" 
            size="sm" 
            className="button-hover-effect hidden md:flex"
            onClick={handleApplyClick}
          >
            Apply Now
            <ExternalLink className="ml-1 h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="md:hidden" 
            onClick={handleApplyClick}
          >
            Apply
            <ExternalLink className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
