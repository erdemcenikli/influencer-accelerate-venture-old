/**
 * TikTok Pixel Event Tracking Utilities
 * 
 * This file contains functions for tracking various TikTok Pixel events
 * across the ViralRise application with both client-side and server-side tracking.
 */

// Type definitions for TikTok events
interface TikTokUserInfo {
  email?: string;
  phone?: string;
  external_id?: string;
  [key: string]: any;
}

interface TikTokContent {
  content_id: string;
  content_type: string;
  content_name: string;
}

interface TikTokEventParams {
  contents: TikTokContent[];
  value?: number;
  currency?: string;
  search_string?: string;
  [key: string]: any;
}

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

// Send event to server-side endpoint
const sendServerSideEvent = async (eventName: string, eventParams: TikTokEventParams, userInfo?: TikTokUserInfo) => {
  try {
    const response = await fetch('/api/tiktok-events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName,
        eventParams,
        userInfo
      })
    });
    
    if (!response.ok) {
      console.error('Failed to send server-side TikTok event:', await response.text());
    }
  } catch (error) {
    console.error('Error sending server-side TikTok event:', error);
  }
};

// Identify user (for PII data)
export const identifyUser = async (email?: string, phone?: string, userId?: string) => {
  if (!email && !phone && !userId) return;
  
  // Client-side tracking with hashed data
  if (window.ttq) {
    const hashedEmail = email ? await hashData(email) : undefined;
    const hashedPhone = phone ? await hashData(phone) : undefined;
    const hashedUserId = userId ? await hashData(userId) : undefined;
    
    const identifyData: Record<string, string> = {};
    
    if (hashedEmail) identifyData.email = hashedEmail;
    if (hashedPhone) identifyData.phone_number = hashedPhone;
    if (hashedUserId) identifyData.external_id = hashedUserId;
    
    if (Object.keys(identifyData).length > 0) {
      window.ttq.identify(identifyData);
      console.log('TikTok identify event sent (client-side)');
    }
  }
  
  // Server-side identify - send hashed data to server
  try {
    const userInfo: TikTokUserInfo = {};
    if (email) userInfo.email = email;
    if (phone) userInfo.phone = phone;
    if (userId) userInfo.external_id = userId;
    
    await sendServerSideEvent('USER_IDENTIFY', { contents: [] }, userInfo);
  } catch (error) {
    console.error('Error sending server-side identify event:', error);
  }
};

// Track page view with content details
export const trackViewContent = (contentId: string, contentName: string, value?: number) => {
  const eventParams: TikTokEventParams = {
    contents: [
      {
        content_id: contentId,
        content_type: 'product',
        content_name: contentName
      }
    ],
    value: value || 0,
    currency: 'USD'
  };

  // Client-side tracking
  if (window.ttq) {
    window.ttq.track('ViewContent', eventParams);
    console.log('TikTok ViewContent event sent (client-side):', contentName);
  }
  
  // Server-side tracking
  sendServerSideEvent('ViewContent', eventParams);
};

// Track search
export const trackSearch = (searchString: string, contentId: string, contentName: string, value?: number) => {
  const eventParams: TikTokEventParams = {
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
  };

  // Client-side tracking
  if (window.ttq) {
    window.ttq.track('Search', eventParams);
    console.log('TikTok Search event sent (client-side):', searchString);
  }
  
  // Server-side tracking
  sendServerSideEvent('Search', eventParams);
};

// Track contact event
export const trackContact = (contactType: string, contentId: string, contentName: string, value?: number) => {
  const eventParams: TikTokEventParams = {
    contents: [
      {
        content_id: contentId,
        content_type: 'contact',
        content_name: contentName
      }
    ],
    value: value || 0,
    currency: 'USD'
  };

  // Client-side tracking
  if (window.ttq) {
    window.ttq.track('Contact', eventParams);
    console.log('TikTok Contact event sent (client-side):', contactType);
  }
  
  // Server-side tracking
  sendServerSideEvent('Contact', eventParams);
};

// Track button click
export const trackClickButton = (buttonId: string, buttonName: string, value?: number) => {
  const eventParams: TikTokEventParams = {
    contents: [
      {
        content_id: buttonId,
        content_type: 'button',
        content_name: buttonName
      }
    ],
    value: value || 0,
    currency: 'USD'
  };

  // Client-side tracking
  if (window.ttq) {
    window.ttq.track('ClickButton', eventParams);
    console.log('TikTok ClickButton event sent (client-side):', buttonName);
  }
  
  // Server-side tracking
  sendServerSideEvent('ClickButton', eventParams);
};

// Track add to wishlist
export const trackAddToWishlist = (contentId: string, contentName: string, value?: number) => {
  const eventParams: TikTokEventParams = {
    contents: [
      {
        content_id: contentId,
        content_type: 'product',
        content_name: contentName
      }
    ],
    value: value || 0,
    currency: 'USD'
  };

  // Client-side tracking
  if (window.ttq) {
    window.ttq.track('AddToWishlist', eventParams);
    console.log('TikTok AddToWishlist event sent (client-side):', contentName);
  }
  
  // Server-side tracking
  sendServerSideEvent('AddToWishlist', eventParams);
};

// Track waitlist join (CompleteRegistration)
export const trackJoinWaitlist = (source: string, value?: number) => {
  const eventParams: TikTokEventParams = {
    contents: [
      {
        content_id: 'waitlist-join',
        content_type: 'registration',
        content_name: `Waitlist Join - ${source}`
      }
    ],
    value: value || 10,
    currency: 'USD'
  };

  // Client-side tracking
  if (window.ttq) {
    window.ttq.track('CompleteRegistration', eventParams);
    console.log('TikTok CompleteRegistration event sent for waitlist (client-side)');
  }
  
  // Server-side tracking
  sendServerSideEvent('CompleteRegistration', eventParams);
};

// Track form submission
export const trackSubmitForm = (formId: string, formName: string, value?: number) => {
  const eventParams: TikTokEventParams = {
    contents: [
      {
        content_id: formId,
        content_type: 'form',
        content_name: formName
      }
    ],
    value: value || 0,
    currency: 'USD'
  };

  // Client-side tracking
  if (window.ttq) {
    window.ttq.track('SubmitForm', eventParams);
    console.log('TikTok SubmitForm event sent (client-side):', formName);
  }
  
  // Server-side tracking
  sendServerSideEvent('SubmitForm', eventParams);
};

// Ensure TypeScript recognizes the global ttq object
declare global {
  interface Window {
    ttq: any;
  }
}
