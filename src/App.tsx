import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Hackathon from "./pages/Hackathon";
import Partnership from "./pages/Partnership";
import { WaitlistProvider } from "./contexts/WaitlistContext";
import { TikTokTracker } from "./components/TikTokTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <WaitlistProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <TikTokTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/partnership" element={<Partnership />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </WaitlistProvider>
  </QueryClientProvider>
);

export default App;
