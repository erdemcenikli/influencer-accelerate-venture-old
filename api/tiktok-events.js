// Vercel serverless function for TikTok server-side events
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Extract the event data from the request body
    const { eventName, eventParams, userInfo } = req.body;
    
    // TikTok API endpoint and access token
    const TIKTOK_API_URL = 'https://business-api.tiktok.com/open_api/v1.3/pixel/track/';
    const ACCESS_TOKEN = process.env.TIKTOK_ACCESS_TOKEN;
    const PIXEL_CODE = 'CVT2893C77U1I0OC2IOG'; // Your TikTok pixel code
    
    if (!ACCESS_TOKEN) {
      console.error('TikTok access token not found in environment variables');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Prepare the data for TikTok
    const eventData = {
      pixel_code: PIXEL_CODE,
      event: eventName,
      event_id: `event_${Date.now()}`,
      timestamp: new Date().toISOString(),
      ...eventParams
    };

    // Add user data if available
    if (userInfo) {
      eventData.user_info = userInfo;
    }

    // Log the event being sent (for debugging)
    console.log('Sending TikTok server-side event:', eventName, JSON.stringify(eventData, null, 2));

    // Send the event to TikTok's server-side API
    const response = await fetch(TIKTOK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': ACCESS_TOKEN
      },
      body: JSON.stringify(eventData)
    });

    // Get the response from TikTok
    const responseData = await response.json();

    // Log the response (for debugging)
    console.log('TikTok response:', JSON.stringify(responseData, null, 2));

    // Return the response
    return res.status(200).json(responseData);
  } catch (error) {
    console.error('Error sending TikTok event:', error);
    return res.status(500).json({ error: 'Error sending TikTok event' });
  }
};
