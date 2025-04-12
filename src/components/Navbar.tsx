import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronRight, ExternalLink, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleApplyClick = () => {
    window.open(googleFormLink, '_blank');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
        
        {/* Desktop Navigation */}
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
          {/* Desktop buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {location.pathname !== "/hackathon" && (
              <Link 
                to="/hackathon" 
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md shadow-sm hover:shadow-md transition-all duration-300"
              >
                Hackathon Competition
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            )}
            
            <Button 
              variant="default" 
              size="sm" 
              className="button-hover-effect"
              onClick={handleApplyClick}
            >
              Apply Now
              <ExternalLink className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          {/* Mobile buttons */}
          <div className="flex md:hidden items-center space-x-3">
            {location.pathname !== "/hackathon" && (
              <Link 
                to="/hackathon" 
                className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md shadow-sm"
              >
                Hackathon
              </Link>
            )}
            
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs px-3 py-1.5" 
              onClick={handleApplyClick}
            >
              Apply
              <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
            
            <button
              onClick={toggleMobileMenu}
              className="p-1.5 rounded-md text-foreground/80 hover:bg-foreground/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md">
          <div className="container py-4 space-y-3">
            {isHomePage ? (
              <>
                <a 
                  href="#program" 
                  className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Program
                </a>
                <a 
                  href="#benefits" 
                  className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Benefits
                </a>
                <a 
                  href="#who" 
                  className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Who We Want
                </a>
                <a 
                  href="#apply" 
                  className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Apply
                </a>
              </>
            ) : (
              <>
                <Link 
                  to="/#program" 
                  className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Program
                </Link>
                <Link 
                  to="/#benefits" 
                  className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Benefits
                </Link>
                <Link 
                  to="/#who" 
                  className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Who We Want
                </Link>
                <Link 
                  to="/#apply" 
                  className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Apply
                </Link>
              </>
            )}
            {location.pathname !== "/hackathon" && (
              <Link 
                to="/hackathon" 
                className="block py-2 text-sm font-medium text-purple-600 hover:text-purple-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hackathon
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
