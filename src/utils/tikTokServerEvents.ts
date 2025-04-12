/**
 * TikTok Server-Side Events API Integration
 * 
 * This utility handles server-side event tracking to TikTok's Business API.
 * It complements client-side pixel tracking for more reliable conversion data.
 */

// TikTok API configuration
const TIKTOK_API_URL = 'https://business-api.tiktok.com/open_api/v1.3/event/track/';
const TIKTOK_EVENT_SOURCE_ID = 'CVT2893C77U1I0OC2IOG'; // Your pixel ID
const TIKTOK_ACCESS_TOKEN = process.env.VITE_TIKTOK_ACCESS_TOKEN || ''; // Will be set from environment variable

// Event types supported by TikTok
export type TikTokEventType = 
  | 'ViewContent' 
  | 'ClickButton' 
  | 'Search' 
  | 'AddToWishlist' 
  | 'AddToCart' 
  | 'InitiateCheckout' 
  | 'AddPaymentInfo' 
  | 'CompletePayment' 
  | 'PlaceAnOrder' 
  | 'Contact' 
  | 'Download' 
  | 'SubmitForm' 
  | 'CompleteRegistration' 
  | 'Subscribe';

// User data interface
interface TikTokUserData {
  email?: string | null;
  phone?: string | null;
  external_id?: string | null;
}

// Page data interface
interface TikTokPageData {
  url: string;
  referrer?: string | null;
}

// Event data interface
interface TikTokEventData {
  event: TikTokEventType;
  event_time: number;
  user: TikTokUserData;
  page: TikTokPageData;
  properties?: Record<string, any>;
}

/**
 * Send event to TikTok's server-side API
 * 
 * @param eventType The type of event to track
 * @param userData Optional user data (should be hashed)
 * @param pageData Page information
 * @param properties Additional event properties
 * @returns Promise resolving to the API response or null if in development
 */
export const sendServerEvent = async (
  eventType: TikTokEventType,
  userData: TikTokUserData = { email: null, phone: null, external_id: null },
  pageData: Partial<TikTokPageData> = {},
  properties?: Record<string, any>
): Promise<Response | null> => {
  // Don't send events in development
  if (import.meta.env.DEV) {
    console.log('[TikTok Server Event - DEV]', { eventType, userData, pageData, properties });
    return null;
  }
  
  // Check if access token is available
  if (!TIKTOK_ACCESS_TOKEN) {
    console.error('TikTok Access Token not configured');
    return null;
  }
  
  // Get current timestamp in seconds
  const eventTime = Math.floor(Date.now() / 1000);
  
  // Get current page URL if not provided
  const url = pageData.url || window.location.href;
  const referrer = pageData.referrer || document.referrer || null;
  
  // Prepare event data
  const eventData: TikTokEventData = {
    event: eventType,
    event_time: eventTime,
    user: userData,
    page: { url, referrer },
  };
  
  // Add properties if provided
  if (properties) {
    eventData.properties = properties;
  }
  
  // Prepare request payload
  const payload = {
    event_source: 'web',
    event_source_id: TIKTOK_EVENT_SOURCE_ID,
    data: [eventData]
  };
  
  try {
    // Send request to TikTok API
    const response = await fetch(TIKTOK_API_URL, {
      method: 'POST',
      headers: {
        'Access-Token': TIKTOK_ACCESS_TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    // Log response for debugging
    const responseData = await response.json();
    console.log('TikTok Server Event Response:', responseData);
    
    return response;
  } catch (error) {
    console.error('Error sending TikTok server event:', error);
    return null;
  }
};

/**
 * Track form submission event
 * 
 * @param formName Name of the form
 * @param url Current page URL
 * @param userData Optional user data
 */
export const trackServerFormSubmission = (
  formName: string,
  url: string = window.location.href,
  userData: TikTokUserData = { email: null, phone: null, external_id: null }
) => {
  return sendServerEvent(
    'SubmitForm',
    userData,
    { url },
    { form_name: formName }
  );
};

/**
 * Track registration completion event
 * 
 * @param registrationType Type of registration
 * @param url Current page URL
 * @param userData Optional user data
 */
export const trackServerRegistration = (
  registrationType: string,
  url: string = window.location.href,
  userData: TikTokUserData = { email: null, phone: null, external_id: null }
) => {
  return sendServerEvent(
    'CompleteRegistration',
    userData,
    { url },
    { registration_type: registrationType }
  );
};
