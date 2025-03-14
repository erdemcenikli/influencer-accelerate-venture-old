
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        <a href="#" className="flex items-center space-x-2">
          <span className="font-bold text-lg tracking-tight">Accelerate</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
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
        </nav>
        
        <Button 
          variant="default" 
          size="sm" 
          className="button-hover-effect hidden md:flex"
          onClick={() => document.getElementById('apply')?.scrollIntoView({behavior: 'smooth'})}
        >
          Apply Now
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="md:hidden" 
          onClick={() => document.getElementById('apply')?.scrollIntoView({behavior: 'smooth'})}
        >
          Apply
          <ChevronRight className="ml-1 h-3 w-3" />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
