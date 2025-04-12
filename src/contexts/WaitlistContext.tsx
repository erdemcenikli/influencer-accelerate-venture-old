import { createContext, useState, useContext, useEffect } from 'react';

interface WaitlistContextType {
  waitlistCount: number;
  incrementWaitlist: (amount?: number) => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export const useWaitlist = (): WaitlistContextType => {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error('useWaitlist must be used within a WaitlistProvider');
  }
  return context;
};

type WaitlistProviderProps = {
  children: React.ReactNode;
};

export const WaitlistProvider = ({ children }: WaitlistProviderProps): JSX.Element => {
  const [waitlistCount, setWaitlistCount] = useState(350);

  // Calculate initial waitlist count based on date
  useEffect(() => {
    const calculateWaitlistCount = () => {
      // Base count starting from April 1, 2025
      const baseCount = 350;
      
      // Get current date
      const currentDate = new Date();
      const startDate = new Date('2025-04-01');
      
      // Calculate days since April 1, 2025
      const timeDiff = currentDate.getTime() - startDate.getTime();
      const daysSinceStart = Math.floor(timeDiff / (1000 * 3600 * 24));
      
      // Calculate additional count based on formula: 30 + day number
      let additionalCount = 0;
      for (let i = 1; i <= daysSinceStart; i++) {
        additionalCount += (30 + i);
      }
      
      // Set the waitlist count
      setWaitlistCount(baseCount + additionalCount);
    };
    
    calculateWaitlistCount();
  }, []);

  // Function to increment the waitlist count
  const incrementWaitlist = (amount?: number) => {
    const increment = amount || Math.floor(Math.random() * 6) + 1; // Random 1-6 if no amount specified
    setWaitlistCount(prev => prev + increment);
  };

  // Set up interval to randomly increment the count
  useEffect(() => {
    const interval = setInterval(() => {
      incrementWaitlist();
    }, 5000); // Every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <WaitlistContext.Provider value={{ waitlistCount, incrementWaitlist }}>
      {children}
    </WaitlistContext.Provider>
  );
};
