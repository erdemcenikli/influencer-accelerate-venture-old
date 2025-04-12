import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, ExternalLink, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WaitlistPopupProps {
  waitlistCount: number;
  onClose: () => void;
}

const WaitlistPopup = ({ waitlistCount, onClose }: WaitlistPopupProps) => {
  const [localCount, setLocalCount] = useState(waitlistCount);
  
  // Increase the counter by a random number between 1-6 every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIncrement = Math.floor(Math.random() * 6) + 1; // Random number between 1-6
      setLocalCount(prev => prev + randomIncrement);
    }, 3000); // Increase every 3 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const handleJoinWaitlist = () => {
    window.open("https://forms.gle/woi7ipjUf64fkqoU6", "_blank");
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Don't Miss Your Spot!</h3>
            <p className="text-gray-600">
              Join the waitlist now before all spots are filled.
            </p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-5 w-5 text-purple-600 mr-2" />
              <p className="font-medium text-purple-800">Current Waitlist</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-800 animate-pulse">
                {localCount.toLocaleString()} people
              </div>
              <p className="text-xs text-purple-600 mt-1">
                <span className="animate-pulse">●</span> Increasing every minute
              </p>
            </div>
          </div>
          
          <Button 
            className={cn(
              "w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white",
              "hover:shadow-lg transition-all duration-300"
            )}
            size="lg"
            onClick={handleJoinWaitlist}
          >
            Join Waitlist Now
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          
          <p className="text-xs text-center text-gray-500 mt-4">
            Limited number of applicants will be accepted
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaitlistPopup;
