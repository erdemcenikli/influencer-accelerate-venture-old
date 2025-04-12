import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { ExternalLink, Clock, Users, Trophy, Lightbulb, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import WaitlistPopup from '@/components/WaitlistPopup';
import { useWaitlist } from '@/contexts/WaitlistContext';
import { trackViewContent, trackClickButton, trackJoinWaitlist } from "@/utils/tikTokEvents";
import { trackServerFormSubmission, trackServerRegistration } from "@/utils/tikTokServerEvents";

const Hackathon = () => {
  const { waitlistCount } = useWaitlist();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Track page view when component mounts
    trackViewContent('hackathon-page', 'Weekend Hackathon for University Students', 20);
    
    // Show popup after 5 seconds
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    // Cleanup
    return () => clearTimeout(popupTimer);
  }, []);

  const handleJoinWaitlist = () => {
    // Track button click with client-side pixel
    trackClickButton('join-waitlist-btn', 'Join Waitlist Button - Hackathon');
    
    // Track form submission with server-side API
    trackServerFormSubmission('Hackathon Waitlist Form', window.location.href);
    
    // Open Google Form
    window.open("https://docs.google.com/forms/d/1LxVIqcpcn2BKgRNvC6wAc5hsOeCNLdqGWaEyftPra1U/edit", "_blank");
  };

  const handlePopupSubmit = () => {
    // Track registration with client-side pixel
    trackJoinWaitlist('Hackathon Page');
    
    // Track registration with server-side API
    trackServerRegistration('Hackathon Registration', window.location.href);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Become an Influencer: Weekend Hackathon for University Students
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-purple-100">
              Unlock Your Influence. Create Content. Win Brand Partnerships.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 mb-8 md:mb-10 text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <h2 className="text-xl md:text-2xl font-bold">Limited Spots Available</h2>
                <div className="bg-purple-600 text-white px-3 py-1.5 rounded-full text-sm md:text-base">
                  <span className="font-bold">{waitlistCount}</span> on waitlist
                </div>
              </div>
              <p className="mb-6 text-sm md:text-base">
                Join our exclusive weekend hackathon designed specifically for university students 
                who want to launch their influencer careers. Learn from top creators, build your 
                personal brand, and walk away with the skills to monetize your content.
              </p>
              <Button 
                onClick={handleJoinWaitlist} 
                size="lg" 
                className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-sm md:text-base py-2 md:py-6"
              >
                Join Waitlist Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-pink-400" />
                Why Attend?
              </h2>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>Learn content creation strategies from top influencers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>Network with brands looking for campus ambassadors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>Win prizes and potential brand deals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>Build your portfolio with professional guidance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>Access exclusive creator tools and resources</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-pink-400" />
                What You'll Get
              </h2>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>Hands-on workshops with industry experts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>Personal brand development sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>Content creation challenges with real-time feedback</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>Networking opportunities with brands and agencies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>Certificate of completion and digital badge</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Schedule Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 max-w-4xl mx-auto mb-10">
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-pink-400" />
              Event Schedule
            </h2>
            <div className="space-y-4 text-sm md:text-base">
              <div className="border-l-2 border-pink-400 pl-4 pb-4">
                <h3 className="font-bold text-lg flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-pink-400" />
                  Day 1: Content Creation Bootcamp
                </h3>
                <p className="text-purple-100">Master the fundamentals of creating engaging content across platforms</p>
              </div>
              <div className="border-l-2 border-pink-400 pl-4 pb-4">
                <h3 className="font-bold text-lg flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-pink-400" />
                  Day 2: Brand Partnership Workshop
                </h3>
                <p className="text-purple-100">Learn how to pitch to brands and negotiate partnerships</p>
              </div>
              <div className="border-l-2 border-pink-400 pl-4">
                <h3 className="font-bold text-lg flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-pink-400" />
                  Day 3: Launch Your Creator Career
                </h3>
                <p className="text-purple-100">Develop your content strategy and monetization plan</p>
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <Button 
              onClick={handleJoinWaitlist} 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 w-full sm:w-auto px-8 py-2 md:py-6 text-sm md:text-base"
            >
              Secure Your Spot Now
            </Button>
            <p className="mt-4 text-xs md:text-sm opacity-80">
              Limited to 50 participants. Priority given to early waitlist members.
            </p>
          </div>
        </div>
      </section>
      
      <FooterSection />
      
      {/* Waitlist Popup */}
      {showPopup && <WaitlistPopup waitlistCount={waitlistCount} onClose={handleClosePopup} onSubmit={handlePopupSubmit} />}
    </div>
  );
};

export default Hackathon;
