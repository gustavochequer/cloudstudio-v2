import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import DNA from "./pages/onboarding/DNA";
import Pricing from "./pages/Pricing";
import Studio from "./pages/dashboard/Studio";
import Consultor from "./pages/dashboard/Consultor";
import Calendar from "./pages/dashboard/Calendar";
import Settings from "./pages/dashboard/Settings";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/auth/login"} component={Login} />
      <Route path={"/auth/register"} component={Register} />
      <Route path={"/onboarding/dna"} component={DNA} />
      <Route path={"/pricing"} component={Pricing} />
      <Route path={"/dashboard/studio"} component={Studio} />
      <Route path={"/dashboard/consultor"} component={Consultor} />
      <Route path={"/dashboard/calendar"} component={Calendar} />
      <Route path={"/dashboard/settings"} component={Settings} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

