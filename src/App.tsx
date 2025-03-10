
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./style.css";

// Create a placeholder page component for demo purposes
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="container mx-auto p-8">
    <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
    <p className="text-center text-gray-600">This is a placeholder for the {title} page.</p>
  </div>
);

// Create placeholder components for the missing views
const Home = () => <PlaceholderPage title="Home" />;
const Contact = () => <PlaceholderPage title="Contact" />;
const About = () => <PlaceholderPage title="About" />;
const Donation = () => <PlaceholderPage title="Donation" />;
const NotFound = () => <PlaceholderPage title="Not Found" />;
const Success = () => <PlaceholderPage title="Success" />;
const Canceled = () => <PlaceholderPage title="Canceled" />;
const Info = () => <PlaceholderPage title="Info" />;
const Redir = () => <Navigate to="/Home" replace />;

// Create placeholder components for Header and Footer
const Header = () => (
  <header className="bg-white shadow-sm">
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Geriatric Care and Health Foundation</h1>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li><a href="/Home" className="text-blue-600 hover:underline">Home</a></li>
          <li><a href="/about" className="text-blue-600 hover:underline">About</a></li>
          <li><a href="/contact" className="text-blue-600 hover:underline">Contact</a></li>
          <li><a href="/donation" className="text-blue-600 hover:underline">Donation</a></li>
          <li><a href="/info" className="text-blue-600 hover:underline">Info</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-100 py-6">
    <div className="container mx-auto px-4 text-center">
      <p>© 2023 Geriatric Care and Health Foundation. All rights reserved.</p>
    </div>
  </footer>
);

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
              <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/donation" element={<Donation />} />
                <Route path="/Success" element={<Success />} />
                <Route path="/Canceled" element={<Canceled />} />
                <Route path="/" element={<Redir />} />
                <Route path="/info" element={<Info />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
