import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import MarketResearch from "./pages/MarketResearch";
import Sales from "./pages/Sales";
import Financials from "./pages/Financials";
import ProviderAuth from "./pages/ProviderAuth";
import ProviderDashboard from "./pages/ProviderDashboard";
import FindCare from "./pages/FindCare";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/market-research" element={<MarketResearch />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/financials" element={<Financials />} />
          <Route path="/provider-auth" element={<ProviderAuth />} />
          <Route path="/provider-dashboard" element={<ProviderDashboard />} />
          <Route path="/find-care" element={<FindCare />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
