/**
 * TikTok Pixel Event Tracking Utilities
 * 
 * This file contains functions for tracking various TikTok Pixel events
 * across the ViralRise application.
 */

// Helper function to hash PII data with SHA-256
const hashData = async (data: string): Promise<string> => {
  if (!data) return '';
  
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', encodedData);
  
  // Convert hash to hex string
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

// Identify user (for PII data)
export const identifyUser = async (email?: string, phone?: string, userId?: string) => {
  if (!window.ttq) return;
  
  const hashedEmail = email ? await hashData(email) : undefined;
  const hashedPhone = phone ? await hashData(phone) : undefined;
  const hashedUserId = userId ? await hashData(userId) : undefined;
  
  const identifyData: Record<string, string> = {};
  
  if (hashedEmail) identifyData.email = hashedEmail;
  if (hashedPhone) identifyData.phone_number = hashedPhone;
  if (hashedUserId) identifyData.external_id = hashedUserId;
  
  if (Object.keys(identifyData).length > 0) {
    window.ttq.identify(identifyData);
    console.log('TikTok identify event sent');
  }
};

// Track page view with content details
export const trackViewContent = (contentId: string, contentName: string, value?: number) => {
  if (!window.ttq) return;
  
  window.ttq.track('ViewContent', {
    contents: [
      {
        content_id: contentId,
        content_type: 'product',
        content_name: contentName
      }
    ],
    value: value || 0,
    currency: 'USD'
  });
  
  console.log('TikTok ViewContent event sent:', contentName);
};

// Track search
export const trackSearch = (searchString: string, contentId: string, contentName: string, value?: number) => {
  if (!window.ttq) return;
  
  window.ttq.track('Search', {
    contents: [
      {
        content_id: contentId,
        content_type: 'product',
        content_name: contentName
      }
    ],
    value: value || 0,
    currency: 'USD',
    search_string: searchString
  });
  
  console.log('TikTok Search event sent:', searchString);
};

// Track contact event
export const trackContact = (contactType: string, contentId: string, contentName: string, value?: number) => {
  if (!window.ttq) return;
  
  window.ttq.track('Contact', {
    contents: [
      {
        content_id: contentId,
        content_type: 'contact',
        content_name: contentName
      }
    ],
    value: value || 0,
    currency: 'USD'
  });
  
  console.log('TikTok Contact event sent:', contactType);
};

// Track button click
export const trackClickButton = (buttonId: string, buttonName: string, value?: number) => {
  if (!window.ttq) return;
  
  window.ttq.track('ClickButton', {
    contents: [
      {
        content_id: buttonId,
        content_type: 'button',
        content_name: buttonName
      }
    ],
    value: value || 0,
    currency: 'USD'
  });
  
  console.log('TikTok ClickButton event sent:', buttonName);
};

// Track add to wishlist
export const trackAddToWishlist = (contentId: string, contentName: string, value?: number) => {
  if (!window.ttq) return;
  
  window.ttq.track('AddToWishlist', {
    contents: [
      {
        content_id: contentId,
        content_type: 'product',
        content_name: contentName
      }
    ],
    value: value || 0,
    currency: 'USD'
  });
  
  console.log('TikTok AddToWishlist event sent:', contentName);
};

// Track waitlist join (CompleteRegistration)
export const trackJoinWaitlist = (source: string, value?: number) => {
  if (!window.ttq) return;
  
  window.ttq.track('CompleteRegistration', {
    contents: [
      {
        content_id: 'waitlist-join',
        content_type: 'registration',
        content_name: `Waitlist Join - ${source}`
      }
    ],
    value: value || 10,
    currency: 'USD'
  });
  
  console.log('TikTok CompleteRegistration event sent for waitlist');
};

// Track form submission
export const trackSubmitForm = (formId: string, formName: string, value?: number) => {
  if (!window.ttq) return;
  
  window.ttq.track('SubmitForm', {
    contents: [
      {
        content_id: formId,
        content_type: 'form',
        content_name: formName
      }
    ],
    value: value || 0,
    currency: 'USD'
  });
  
  console.log('TikTok SubmitForm event sent:', formName);
};

// Ensure TypeScript recognizes the global ttq object
declare global {
  interface Window {
    ttq: any;
  }
}
