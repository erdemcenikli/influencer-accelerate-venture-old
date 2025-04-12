import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { ExternalLink, Clock, Users, Trophy, Lightbulb, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import WaitlistPopup from '@/components/WaitlistPopup';
import { useWaitlist } from '@/contexts/WaitlistContext';
import { trackViewContent, trackClickButton, trackJoinWaitlist } from "@/utils/tikTokEvents";

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
    
    return () => clearTimeout(popupTimer);
  }, []);

  // Same scroll animation effect as in Index page
  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJoinWaitlist = () => {
    trackClickButton('join-waitlist-btn', 'Join Waitlist Button - Hackathon');
    window.open("https://forms.gle/woi7ipjUf64fkqoU6", "_blank");
  };

  const handlePopupSubmit = () => {
    trackJoinWaitlist('Hackathon Page');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
          <div className="absolute inset-0 bg-[url('/hackathon-pattern.svg')] opacity-5"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
              <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-purple-800 bg-purple-100 rounded-full">
                <span className="animate-pulse inline-block h-2 w-2 rounded-full bg-purple-600 mr-2"></span>
                Limited Spots Available
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                Become an Influencer: Weekend Hackathon for University Students
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Unlock Your Influence. Create Content. Win Brand Partnerships.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="button-hover-effect bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  onClick={handleJoinWaitlist}
                >
                  <Clock className="mr-2 h-4 w-4" />
                  Register Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <div className="text-sm text-red-600 font-medium animate-pulse mt-2 sm:mt-0">
                  Over {waitlistCount.toLocaleString()} people on waitlist!
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 space-x-6">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                  <span>Friday to Sunday</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 text-purple-600 mr-2" />
                  <span>To be shared upon registration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Attend Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12 reveal-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Why Attend?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 reveal-on-scroll">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">Kickstart Your Influencer Career</h3>
                <p className="text-gray-700">
                  Spend the weekend creating viral content, driving views, and generating sales to boost your influencer potential.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 reveal-on-scroll">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">Real-World Brand Collaboration</h3>
                <p className="text-gray-700">
                  Work directly with leading brands eager to discover new influencers and reward successful content creators.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 reveal-on-scroll">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">Gain Visibility & Recognition</h3>
                <p className="text-gray-700">
                  Compete to earn awards from brand partners and showcase your talent to a wider audience.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 reveal-on-scroll">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">Build Your Personal Brand</h3>
                <p className="text-gray-700">
                  Receive expert mentorship, maximize your audience growth, and gain invaluable influencer experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Event Highlights */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12 reveal-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Event Highlights</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 max-w-4xl mx-auto">
              <div className="flex items-start reveal-on-scroll">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">All-Day Content Creation Challenges</h3>
                  <p className="text-gray-600">Create engaging content to attract the most views and sales</p>
                </div>
              </div>
              
              <div className="flex items-start reveal-on-scroll">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Brand Collaboration Opportunities</h3>
                  <p className="text-gray-600">Partner with top brands actively seeking ambassadors</p>
                </div>
              </div>
              
              <div className="flex items-start reveal-on-scroll">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Influencer Mentorship</h3>
                  <p className="text-gray-600">Personalized guidance from experienced influencers and marketing professionals</p>
                </div>
              </div>
              
              <div className="flex items-start reveal-on-scroll">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Networking Opportunities</h3>
                  <p className="text-gray-600">Connect with brands, influencers, and industry leaders</p>
                </div>
              </div>
              
              <div className="flex items-start reveal-on-scroll">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Exclusive Awards</h3>
                  <p className="text-gray-600">Compete for exciting prizes and exclusive recognition from brand partners</p>
                </div>
              </div>
              
              <div className="flex items-start reveal-on-scroll">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Career-Launching Exposure</h3>
                  <p className="text-gray-600">Potential to become a recognized influencer through direct brand collaborations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Attend */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8 reveal-on-scroll">
                <h2 className="text-3xl font-bold mb-4">Who Should Attend?</h2>
                <div className="flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600 mr-3" />
                  <p className="text-lg text-gray-700">
                    🎓 University students who aspire to become influential content creators and brand ambassadors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12 reveal-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Schedule Overview</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 reveal-on-scroll">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-purple-800">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Friday</h3>
                <p className="text-gray-600 text-center">
                  Kick-off, influencer keynotes, initial brand challenges, and networking
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 reveal-on-scroll">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-purple-800">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Saturday</h3>
                <p className="text-gray-600 text-center">
                  Intensive content creation, brand mentorship, live tracking of views and sales
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 reveal-on-scroll">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-purple-800">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Sunday</h3>
                <p className="text-gray-600 text-center">
                  Final content showcases, awards ceremony, brand networking and closing event
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Limited Number of People Will Be Accepted!</h2>
              <p className="text-lg mb-8 opacity-90">
                Join us for an impactful weekend. Your journey to becoming an influencer begins here!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="button-hover-effect bg-white text-purple-700 hover:bg-gray-100 w-full sm:w-auto"
                  onClick={handleJoinWaitlist}
                >
                  Register Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <div className="text-sm font-medium animate-pulse mt-2 sm:mt-0 bg-purple-700/50 px-3 py-1 rounded-full">
                  Over {waitlistCount.toLocaleString()} people on waitlist!
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
      
      {/* Waitlist Popup */}
      {showPopup && <WaitlistPopup waitlistCount={waitlistCount} onClose={handleClosePopup} onSubmit={handlePopupSubmit} />}
    </div>
  );
};

export default Hackathon;
