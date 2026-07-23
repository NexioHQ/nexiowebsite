import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Home from '@/pages/Home';
import DigitalSolutions from '@/pages/services/DigitalSolutions';
import AIAutomation from '@/pages/services/AIAutomation';
import CloudSolutions from '@/pages/services/CloudSolutions';
import Cybersecurity from '@/pages/services/Cybersecurity';
import TechnologyConsulting from '@/pages/services/TechnologyConsulting';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { ThemeProvider } from '@/components/theme-provider';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/digital-solutions" component={DigitalSolutions} />
      <Route path="/services/ai-automation" component={AIAutomation} />
      <Route path="/services/cloud-solutions" component={CloudSolutions} />
      <Route path="/services/cybersecurity" component={Cybersecurity} />
      <Route path="/services/technology-consulting" component={TechnologyConsulting} />
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
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
