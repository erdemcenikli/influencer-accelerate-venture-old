import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useWaitlist } from "@/contexts/WaitlistContext";
import { trackSubmitForm } from "@/utils/tikTokEvents";

interface WaitlistPopupProps {
  waitlistCount: number;
  onClose: () => void;
  onSubmit?: () => void; // Optional callback for when form is submitted
}

const WaitlistPopup = ({ waitlistCount, onClose, onSubmit }: WaitlistPopupProps) => {
  const { incrementWaitlist } = useWaitlist();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Prevent scrolling when popup is shown
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    
    if (!name) {
      setError("Please enter your name");
      return;
    }
    
    // Track the form submission with TikTok
    trackSubmitForm('waitlist-form', 'Waitlist Registration Form', 10);
    
    // Increment waitlist count
    incrementWaitlist();
    
    // Call the optional onSubmit callback if provided
    if (onSubmit) {
      onSubmit();
    }
    
    setSubmitted(true);
    setError("");
    
    // Close popup after 3 seconds
    setTimeout(() => {
      onClose();
    }, 3000);
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
        
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-white mb-2">
              Don't Miss Your Spot!
            </h2>
            <p className="text-white/80 mb-4">
              <span className="font-bold text-white">{waitlistCount}</span> people have already joined the waitlist. Secure your place now!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              
              {error && <p className="text-red-300 text-sm">{error}</p>}
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600"
              >
                Join Waitlist
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-white mb-2">
              You're In!
            </h2>
            <p className="text-white/80">
              Thanks for joining our waitlist. We'll be in touch soon with more details!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistPopup;
