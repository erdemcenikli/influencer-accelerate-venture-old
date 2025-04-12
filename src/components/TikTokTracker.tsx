import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const TikTokTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Track page view on route change
    if (window.ttq) {
      window.ttq.page();
      console.log('TikTok page view tracked:', location.pathname);
    }
  }, [location.pathname]);
  
  // This component doesn't render anything
  return null;
};

// Ensure TypeScript recognizes the global ttq object
declare global {
  interface Window {
    ttq: any;
  }
}
