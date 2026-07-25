import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Resources from '@/pages/Resources';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import DigitalSolutions from '@/pages/services/DigitalSolutions';
import AIAutomation from '@/pages/services/AIAutomation';
import CloudSolutions from '@/pages/services/CloudSolutions';
import Cybersecurity from '@/pages/services/Cybersecurity';
import TechnologyConsulting from '@/pages/services/TechnologyConsulting';
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
      <Route path="/solutions/cloud-solutions" component={CloudSolutions} />
      <Route path="/solutions/cybersecurity" component={Cybersecurity} />
      <Route path="/solutions/technology-consulting" component={TechnologyConsulting} />
      <Route path="/resources" component={Resources} />
      <Route path="/careers" component={Careers} />
      <Route path="/contact" component={Contact} />
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
