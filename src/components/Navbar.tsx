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

  const handleApplyClick = () => {
    window.open(googleFormLink, '_blank');
    setMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-subtle py-3" 
          : mobileMenuOpen
            ? "bg-white/90 backdrop-blur-md shadow-subtle py-3"
            : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 z-50">
          <span className="font-bold text-lg tracking-tight beauty-gradient-text">ViralRise</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
        
        {/* Mobile menu */}
        <div className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}>
          <nav className="flex flex-col items-center space-y-6 text-center">
            {isHomePage ? (
              <>
                <a href="#how-it-works" onClick={closeMobileMenu} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
                <a href="#benefits" onClick={closeMobileMenu} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Benefits
                </a>
                <a href="#products" onClick={closeMobileMenu} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Products
                </a>
                <a href="#about" onClick={closeMobileMenu} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  About Us
                </a>
                <a href="#apply" onClick={closeMobileMenu} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Apply
                </a>
              </>
            ) : (
              <>
                <Link to="/#how-it-works" onClick={closeMobileMenu} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
                <Link to="/#benefits" onClick={closeMobileMenu} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Benefits
                </Link>
                <Link to="/#products" onClick={closeMobileMenu} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Products
                </Link>
                <Link to="/#about" onClick={closeMobileMenu} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link to="/#apply" onClick={closeMobileMenu} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Apply
                </Link>
              </>
            )}
            <Button 
              variant="default" 
              size="lg" 
              className="button-hover-effect bg-accent hover:bg-accent/90 text-white mt-6"
              onClick={handleApplyClick}
            >
              Apply to Partner
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </nav>
        </div>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {isHomePage ? (
            <>
              <a href="#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#benefits" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                Benefits
              </a>
              <a href="#products" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                Products
              </a>
              <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                About Us
              </a>
            </>
          ) : (
            <>
              <Link to="/#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link to="/#benefits" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                Benefits
              </Link>
              <Link to="/#products" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                About Us
              </Link>
            </>
          )}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="default" 
            size="sm" 
            className="button-hover-effect bg-accent hover:bg-accent/90 text-white"
            onClick={handleApplyClick}
          >
            Apply to Partner
            <ExternalLink className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
