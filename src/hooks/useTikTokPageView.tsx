import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Hook to track page views with TikTok Pixel
export const useTikTokPageView = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Check if TikTok tracking is available
    if (window.ttq) {
      // Track page view on route change
      window.ttq.page();
      console.log('TikTok page view tracked:', location.pathname);
    }
  }, [location.pathname]);
};

// Declare the global ttq object for TypeScript
declare global {
  interface Window {
    ttq: any;
  }
}
