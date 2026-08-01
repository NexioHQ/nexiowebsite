import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Resources from '@/pages/Resources';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import DigitalSolutions from '@/pages/solutions/WebSoftwareDevelopment';
import AIAutomation from '@/pages/solutions/AIAutomation';
import Cybersecurity from '@/pages/solutions/Cybersecurity';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { ThemeProvider } from '@/components/theme-provider';
import { useEffect } from 'react';

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);
  return null;
}

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/solutions/digital-solutions" component={DigitalSolutions} />
      <Route path="/solutions/ai-automation" component={AIAutomation} />
      <Route path="/solutions/cybersecurity" component={Cybersecurity} />
      <Route path="/resources" component={Resources} />
      <Route path="/careers" component={Careers} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="nexio-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <ScrollToTop />
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
