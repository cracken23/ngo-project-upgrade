
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./style.css";
import Home from "./views/home";
import Contact from "./views/contact";
import About from "./views/about";
import Donation from "./views/donation";
import NotFound from "./views/not-found";
import Header from "./components/headernew";
import Footer from "./components/footer";
import Success from "./views/sucess";
import Canceled from "./views/Canceled";
import Info from "./views/Info";
import { Redir } from "./views/Redir";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Switch>
                <Route component={Home} exact path="/Home" />
                <Route component={Contact} exact path="/contact" />
                <Route component={About} exact path="/about" />
                <Route component={Donation} exact path="/donation" />
                <Route component={Success} exact path="/Success" />
                <Route component={Canceled} exact path="/Canceled" />
                <Route component={Redir} exact path="/" />
                <Route component={Info} exact path="/info" />
                <Route component={NotFound} path="**" />
                <Redirect to="**" />
              </Switch>
            </main>
            <Footer />
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
