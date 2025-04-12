import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { trackClickButton } from "@/utils/tikTokEvents";

interface WaitlistPopupProps {
  waitlistCount: number;
  onClose: () => void;
  onSubmit?: () => void;
}

const WaitlistPopup = ({ waitlistCount, onClose, onSubmit }: WaitlistPopupProps) => {
  const googleFormLink = "https://docs.google.com/forms/d/1LxVIqcpcn2BKgRNvC6wAc5hsOeCNLdqGWaEyftPra1U/edit";

  useEffect(() => {
    // Prevent scrolling when popup is shown
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleJoinWaitlist = () => {
    // Track button click
    trackClickButton('popup-waitlist-btn', 'Popup Waitlist Button');
    
    // Call the optional onSubmit callback if provided
    if (onSubmit) {
      onSubmit();
    }
    
    // Open Google Form in new tab
    window.open(googleFormLink, "_blank");
    
    // Close popup
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/70 hover:text-white"
        >
          ✕
        </button>
        
        <h2 className="text-2xl font-bold text-white mb-2">
          Don't Miss Your Spot!
        </h2>
        <p className="text-white/80 mb-6">
          <span className="font-bold text-white">{waitlistCount}</span> people have already joined the waitlist. Secure your place now!
        </p>
        
        <Button
          onClick={handleJoinWaitlist}
          className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 py-6"
        >
          Join Waitlist
        </Button>
      </div>
    </div>
  );
};

export default WaitlistPopup;
